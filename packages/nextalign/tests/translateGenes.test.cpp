#include "../src/translate/translateGenes.h"

#include <gtest/gtest.h>

#include "../src/align/getGapOpenCloseScores.h"

class TranslateGenes : public ::testing::Test {
protected:
  NucleotideSequence ref;
  GeneMap geneMap;
  NextalignOptions options = getDefaultOptions();
  safe_vector<int> gapOpenCloseAA;
  std::map<std::string, RefPeptideInternal> refPeptides;

  TranslateGenes() {
    options.alignment.minimalLength = 3;
    // clang-format off
    //                          0         10        20        30        40        50        60        70        80        90        100       110       120       130       140
    //                          |         |         |         |         |         |         |         |         |         |         |         |         |         |         |
    //                          012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456
    ref = toNucleotideSequence("AGAAACTGCTCAAAATTCTGTGTGATATGAACAGAAGGCCGCTATAACAATACTACATGGAATTTCACTAGATTCACTGAGACTCATTGATGCTATGATGTTCACATTAGATTTGGCTACTACTACTTAAGTGGATTCAGTCATTAC");
    //                                   |       Gene 1       |          |           Gene 2            |                           |      Gene 3        |     |     Gene 4      |
    //                                   xxxxxxxxxxxxxxxxxxxxx           xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                            xxxxxxxxxxxxxxxxxxxxx      xxxxxxxxxxxxxxxxxx
    // clang-format on

#pragma GCC diagnostic ignored "-Wmissing-field-initializers"
    geneMap = GeneMap{
      {"Gene1", Gene{.geneName = "Gene1", .start = 9, .end = 30, .strand = "+", .frame = 0, .length = 21}},
      {"Gene2", Gene{.geneName = "Gene2", .start = 41, .end = 71, .strand = "+",  .frame = 2, .length = 30}},
      {"Gene3", Gene{.geneName = "Gene3", .start = 99, .end = 120, .strand = "+",  .frame = 0, .length = 21}},
      {"Gene4", Gene{.geneName = "Gene4", .start = 126, .end = 144, .strand = "-",  .frame = 0, .length = 18}},
    };
#pragma GCC diagnostic pop

    gapOpenCloseAA = getGapOpenCloseScoresFlat(ref, options);

    refPeptides = translateGenesRef(ref, geneMap, options);
  }
};

TEST_F(TranslateGenes, ExtractsAndTranslatesSimpleCase) {
  // clang-format off
  //                                        0         10        20        30        40        50        60        70        80        90        100       110       120       130       140
  //                                        |         |         |         |         |         |         |         |         |         |         |         |         |         |         |
  //                                        012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456
  const auto refAln = toNucleotideSequence("AGAAACTGCTCAAAATTCTGTGTGATATGAACAGAAGGCCGCTATAACAATACTACATGGAATTTCACTAGATTCACTGAGACTCATTGATGCTATGATGTTCACATTAGATTTGGCTACTACTACTTAAGTGGATTCAGTCATTAC");
  const auto qryAln = toNucleotideSequence("AGAAACTGCTCAAAATTCTGTGTGATATGAACAGAAGGCCGCTATAACAATACTACATGGAATTTCACTAGATTCACTGAGACTCATTGATGCTATGATGTTCACATTAGATTTGGCTACTACTACTTAAGTGGATTCAGTCATTAC");
  //                                                 |       Gene 1       |          |           Gene 2            |                           |      Gene 3        |     |     Gene 4      |
  //                                                 xxxxxxxxxxxxxxxxxxxxx           xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                            xxxxxxxxxxxxxxxxxxxxx      xxxxxxxxxxxxxxxxxx
  // clang-format on

  const auto peptides = translateGenes(qryAln, refAln, refPeptides, geneMap, gapOpenCloseAA, options);

  // const auto peptideActual = peptides.queryPeptides[0].seq;
  // const auto peptideExpected = toAminoacidSequence("SKFCVI*");
  EXPECT_EQ(peptides.queryPeptides[0].seq, toAminoacidSequence("SKFCVI*"));
  EXPECT_EQ(peptides.queryPeptides[1].seq, toAminoacidSequence("L*"));
  EXPECT_EQ(peptides.queryPeptides[2].seq, toAminoacidSequence("VHIRFGY"));
  EXPECT_EQ(peptides.queryPeptides[3].seq, toAminoacidSequence("MTEST*"));
}

TEST_F(TranslateGenes, DetectsTrailingFrameShift) {
  // clang-format off
  //                                        0         10        20        30        40        50        60        70        80        90        100       110       120       130       140
  //                                        |         |    dddd |         |         |         |         |         |         |         |         |         |         |         |         |
  //                                        012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456
  const auto refAln = toNucleotideSequence("AGAAACTGCTCAAAATTCTGTGTGATATGAACAGAAGGCCGCTATAACAATACTACATGGAATTTCACTAGATTCACTGAGACTCATTGATGCTATGATGTTCACATTAGATTTGGCTACTACTACTTAAGTGGATTCAGTCATTAC");
  const auto qryAln = toNucleotideSequence("AGAAACTGCTCAAAA----GTGTGATATGAACAGAAGGCCGCTATAACAATACTACATGGAATTTCACTAGATTCACTGAGACTCATTGATGCTATGATGTTCACATTAGATTTGGCTACTACTACTTAAGTGGATTCAGTCATTAC");
  //                                                 |       Gene 1       |          |           Gene 2            |                           |      Gene 3        |     |     Gene 4      |
  //                                                 xxxxxxxxxxxxxxxxxxxxx           xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                            xxxxxxxxxxxxxxxxxxxxx      xxxxxxxxxxxxxxxxxx
  // clang-format on

  const auto peptides = translateGenes(qryAln, refAln, refPeptides, geneMap, gapOpenCloseAA, options);

  const auto peptideActual = peptides.queryPeptides[0].seq;
  const auto peptideExpected = toAminoacidSequence("SK-XXXX");
  EXPECT_EQ(peptideActual, peptideExpected);

  const auto frameShiftResult = peptides.queryPeptides[0].frameShiftResults[0];
  const auto frameShiftExpected = FrameShiftResult{
    .geneName = "Gene1",
    .nucRel = {.begin = 10, .end = 21},
    .nucAbs = {.begin = 19, .end = 30},
    .codon = {.begin = 3, .end = 7},
    .gapsLeading = {.codon = {.begin = 2, .end = 3}},
    .gapsTrailing = {.codon = {.begin = 7, .end = 7}},
  };
  EXPECT_EQ(frameShiftResult, frameShiftExpected);
}

TEST_F(TranslateGenes, DetectsTrailingFrameShiftWithPriorInsertion) {
  // clang-format off
  //                                        0         10        20        30        40        50        60        70        80        90        100       110       120       130       140
  //                                        |   i     |     dddd|         |         |         |         |         |         |         |         |         |         |         |         |
  // pos ref                                0123 45678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456
  // pos aln                                0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567
  const auto refAln = toNucleotideSequence("AGAA-ACTGCTCAAAATTCTGTGTGATATGAACAGAAGGCCGCTATAACAATACTACATGGAATTTCACTAGATTCACTGAGACTCATTGATGCTATGATGTTCACATTAGATTTGGCTACTACTACTTAAGTGGATTCAGTCATTAC");
  const auto qryAln = toNucleotideSequence("AGAACACTGCTCAAAA----GTGTGATATGAACAGAAGGCCGCTATAACAATACTACATGGAATTTCACTAGATTCACTGAGACTCATTGATGCTATGATGTTCACATTAGATTTGGCTACTACTACTTAAGTGGATTCAGTCATTAC");
  //                                                  |       Gene 1       |          |           Gene 2            |                           |      Gene 3        |     |     Gene 4      |
  //                                                  xxxxxxxxxxxxxxxxxxxxx           xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                            xxxxxxxxxxxxxxxxxxxxx      xxxxxxxxxxxxxxxxxx
  // clang-format on

  const auto peptides = translateGenes(qryAln, refAln, refPeptides, geneMap, gapOpenCloseAA, options);

  const auto peptideActual = peptides.queryPeptides[0].seq;
  const auto peptideExpected = toAminoacidSequence("SK-XXXX");
  EXPECT_EQ(peptideActual, peptideExpected);

  const auto frameShiftResult = peptides.queryPeptides[0].frameShiftResults[0];
  const auto frameShiftExpected = FrameShiftResult{
    .geneName = "Gene1",
    .nucRel = {.begin = 10, .end = 21},
    .nucAbs = {.begin = 19, .end = 30},
    .codon = {.begin = 3, .end = 7},
    .gapsLeading = {.codon = {.begin = 2, .end = 3}},
    .gapsTrailing = {.codon = {.begin = 7, .end = 7}},
  };
  EXPECT_EQ(frameShiftResult, frameShiftExpected);
}

TEST_F(TranslateGenes, DetectsCompensatedFrameShift) {
  // clang-format off
  //                                        0         10        20        30        40        50        60        70        80        90        100       110       120       130       140
  //                                        |         |  d      | dd      |         |         |         |         |         |         |         |         |         |         |         |
  //                                        012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456
  const auto refAln = toNucleotideSequence("AGAAACTGCTCAAAATTCTGTGTGATATGAACAGAAGGCCGCTATAACAATACTACATGGAATTTCACTAGATTCACTGAGACTCATTGATGCTATGATGTTCACATTAGATTTGGCTACTACTACTTAAGTGGATTCAGTCATTAC");
  const auto qryAln = toNucleotideSequence("AGAAACTGCTCAA-ATTCTGTG--ATATGAACAGAAGGCCGCTATAACAATACTACATGGAATTTCACTAGATTCACTGAGACTCATTGATGCTATGATGTTCACATTAGATTTGGCTACTACTACTTAAGTGGATTCAGTCATTAC");
  //                                                 |       Gene 1       |          |           Gene 2            |                           |      Gene 3        |     |     Gene 4      |
  //                                                 xxxxxxxxxxxxxxxxxxxxx           xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                            xxxxxxxxxxxxxxxxxxxxx      xxxxxxxxxxxxxxxxxx
  // clang-format on

  const auto peptides = translateGenes(qryAln, refAln, refPeptides, geneMap, gapOpenCloseAA, options);

  const auto peptideActual = peptides.queryPeptides[0].seq;
  const auto peptideExpected = toAminoacidSequence("-XXXXI*");
  EXPECT_EQ(peptideActual, peptideExpected);

  const auto frameShiftResult = peptides.queryPeptides[0].frameShiftResults[0];
  const auto frameShiftExpected = FrameShiftResult{
    .geneName = "Gene1",
    .nucRel = {.begin = 5, .end = 13},
    .nucAbs = {.begin = 14, .end = 22},
    .codon = {.begin = 1, .end = 5},
    .gapsLeading = {.codon = {.begin = 1, .end = 1}},
    .gapsTrailing = {.codon = {.begin = 5, .end = 5}},
  };
  EXPECT_EQ(frameShiftResult, frameShiftExpected);
}

TEST_F(TranslateGenes, DetectsCompensatedFrameShiftWithPriorInsertion) {
  // clang-format off
  //                                        0         10        20        30        40        50        60        70        80        90        100       110       120       130       140
  //                                        |   i     |   d     |  dd     |         |         |         |         |         |         |         |         |         |         |         |
  // pos ref                                0123 45678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456
  // pos aln                                0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567
  const auto refAln = toNucleotideSequence("AGAA-ACTGCTCAAAATTCTGTGTGATATGAACAGAAGGCCGCTATAACAATACTACATGGAATTTCACTAGATTCACTGAGACTCATTGATGCTATGATGTTCACATTAGATTTGGCTACTACTACTTAAGTGGATTCAGTCATTAC");
  const auto qryAln = toNucleotideSequence("AGAACACTGCTCAA-ATTCTGTG--ATATGAACAGAAGGCCGCTATAACAATACTACATGGAATTTCACTAGATTCACTGAGACTCATTGATGCTATGATGTTCACATTAGATTTGGCTACTACTACTTAAGTGGATTCAGTCATTAC");
  //                                                  |       Gene 1       |          |           Gene 2            |                           |      Gene 3        |     |     Gene 4      |
  //                                                  xxxxxxxxxxxxxxxxxxxxx           xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                            xxxxxxxxxxxxxxxxxxxxx      xxxxxxxxxxxxxxxxxx
  // clang-format on

  const auto peptides = translateGenes(qryAln, refAln, refPeptides, geneMap, gapOpenCloseAA, options);

  const auto peptideActual = peptides.queryPeptides[0].seq;
  const auto peptideExpected = toAminoacidSequence("-XXXXI*");
  EXPECT_EQ(peptideActual, peptideExpected);

  const auto frameShiftResult = peptides.queryPeptides[0].frameShiftResults[0];
  const auto frameShiftExpected = FrameShiftResult{
    .geneName = "Gene1",
    .nucRel = {.begin = 5, .end = 13},
    .nucAbs = {.begin = 14, .end = 22},
    .codon = {.begin = 1, .end = 5},
    .gapsLeading = {.codon = {.begin = 1, .end = 1}},
    .gapsTrailing = {.codon = {.begin = 5, .end = 5}},
  };
  EXPECT_EQ(frameShiftResult, frameShiftExpected);
}

TEST_F(TranslateGenes, DetectsCompensatedFrameShiftWithInsertion) {
  // clang-format off
  //                                        0         10        20        30        40        50        60        70        80        90        100       110       120       130       140
  //                                        |         |       i |  dd     |         |         |         |         |         |         |         |         |         |         |         |
  // pos ref                                012345678901234567 890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456
  // pos aln                                0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567
  const auto refAln = toNucleotideSequence("AGAAACTGCTCAAAATTC-TGTGTGATATGAACAGAAGGCCGCTATAACAATACTACATGGAATTTCACTAGATTCACTGAGACTCATTGATGCTATGATGTTCACATTAGATTTGGCTACTACTACTTAAGTGGATTCAGTCATTAC");
  const auto qryAln = toNucleotideSequence("AGAAACTGCTCAA--TTCCTGTG--ATATGAACAGAAGGCCGCTATAACAATACTACATGGAATTTCACTAGATTCACTGAGACTCATTGATGCTATGATGTTCACATTAGATTTGGCTACTACTACTTAAGTGGATTCAGTCATTAC");
  //                                                 |       Gene 1        |          |           Gene 2            |                           |      Gene 3        |     |     Gene 4      |
  //                                                 xxxxxxxxxxxxxxxxxxxxxx           xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                            xxxxxxxxxxxxxxxxxxxxx      xxxxxxxxxxxxxxxxxx

  const auto peptides = translateGenes(qryAln, refAln, refPeptides, geneMap, gapOpenCloseAA, options);

  const auto peptideActual = peptides.queryPeptides[0].seq;
  const auto peptideExpected = toAminoacidSequence("--XXXI*");
  EXPECT_EQ(peptideActual, peptideExpected);

  const auto frameShiftResult = peptides.queryPeptides[0].frameShiftResults[0];
  const auto frameShiftExpected = FrameShiftResult{
    .geneName = "Gene1",
    .nucRel = {.begin = 6, .end = 14},
    .nucAbs = {.begin = 15, .end = 22},
    .codon = {.begin = 2, .end = 5},
    .gapsLeading = {.codon = {.begin = 1, .end = 2}},
    .gapsTrailing = {.codon = {.begin = 5, .end = 5}},
  };
  EXPECT_EQ(frameShiftResult, frameShiftExpected);
}

TEST_F(TranslateGenes, SkipsGeneWith0Nucleotides) {
  //                                        0         10        20        30
  //                                        |         |         |         |
  //                                        012345678901234567890123456789012345
  const auto refAln = toNucleotideSequence("AGAAACTGCTCAAAATTCTGTGTGATATGAACAGAA");
  const auto qryAln = toNucleotideSequence("AGAAACTGC---------------------CAGAAG");
  //                                                 |       Gene 1       |
  //                                                 xxxxxxxxxxxxxxxxxxxxx
  //                                                 9                    30
  // clang-format on

#pragma GCC diagnostic ignored "-Wmissing-field-initializers"
#pragma GCC diagnostic ignored "-Wshadow"
  const auto geneMap = GeneMap{
    {"Gene1", Gene{.geneName = "Gene1", .start = 9, .end = 30, .frame = 0, .length = 21}},
  };
#pragma GCC diagnostic pop

  const auto peptides = translateGenes(qryAln, refAln, refPeptides, geneMap, gapOpenCloseAA, options);

  // Emits oo peptide and a warning
  EXPECT_EQ(peptides.queryPeptides.size(), 0);
  EXPECT_EQ(peptides.warnings.inGenes.size(), 1);
}


TEST_F(TranslateGenes, SkipsGeneWith1Nucleotide) {
  //                                        0         10        20        30
  //                                        |         |         |         |
  //                                        012345678901234567890123456789012345
  const auto refAln = toNucleotideSequence("AGAAACTGCTCAAAATTCTGTGTGATATGAACAGAA");
  const auto qryAln = toNucleotideSequence("AGAAACTGCT--------------------CAGAAG");
  //                                                 |       Gene 1       |
  //                                                 xxxxxxxxxxxxxxxxxxxxx
  //                                                 9                    30
  // clang-format on

#pragma GCC diagnostic ignored "-Wmissing-field-initializers"
#pragma GCC diagnostic ignored "-Wshadow"
  const auto geneMap = GeneMap{
    {"Gene1", Gene{.geneName = "Gene1", .start = 9, .end = 30, .frame = 0, .length = 21}},
  };
#pragma GCC diagnostic pop

  const auto peptides = translateGenes(qryAln, refAln, refPeptides, geneMap, gapOpenCloseAA, options);

  // Emits oo peptide and a warning
  EXPECT_EQ(peptides.queryPeptides.size(), 0);
  EXPECT_EQ(peptides.warnings.inGenes.size(), 1);
}

TEST_F(TranslateGenes, SkipsGeneWith2Nucleotides) {
  //                                        0         10        20        30
  //                                        |         |         |         |
  //                                        012345678901234567890123456789012345
  const auto refAln = toNucleotideSequence("AGAAACTGCTCAAAATTCTGTGTGATATGAACAGAA");
  const auto qryAln = toNucleotideSequence("AGAAACTGCTC-------------------CAGAAG");
  //                                                 |       Gene 1       |
  //                                                 xxxxxxxxxxxxxxxxxxxxx
  //                                                 9                    30
  // clang-format on

#pragma GCC diagnostic ignored "-Wmissing-field-initializers"
#pragma GCC diagnostic ignored "-Wshadow"
  const auto geneMap = GeneMap{
    {"Gene1", Gene{.geneName = "Gene1", .start = 9, .end = 30, .frame = 0, .length = 21}},
  };
#pragma GCC diagnostic pop

  const auto peptides = translateGenes(qryAln, refAln, refPeptides, geneMap, gapOpenCloseAA, options);

  // Emits oo peptide and a warning
  EXPECT_EQ(peptides.queryPeptides.size(), 0);
  EXPECT_EQ(peptides.warnings.inGenes.size(), 1);
}

TEST_F(TranslateGenes, TranslatesGeneWith3Nucleotides) {
  //                                        0         10        20        30
  //                                        |         |         |         |
  //                                        012345678901234567890123456789012345
  const auto refAln = toNucleotideSequence("AGAAACTGCTCAAAATTCTGTGTGATATGAACAGAA");
  const auto qryAln = toNucleotideSequence("AGAAACTGCTCA------------------CAGAAG");
  //                                                 |       Gene 1       |
  //                                                 xxxxxxxxxxxxxxxxxxxxx
  //                                                 9                    30
  // clang-format on

#pragma GCC diagnostic ignored "-Wmissing-field-initializers"
#pragma GCC diagnostic ignored "-Wshadow"
  const auto geneMap = GeneMap{
    {"Gene1", Gene{.geneName = "Gene1", .start = 9, .end = 30, .frame = 0, .length = 21}},
  };
#pragma GCC diagnostic pop

  const auto peptides = translateGenes(qryAln, refAln, refPeptides, geneMap, gapOpenCloseAA, options);

  // Emits oo peptide and a warning
  EXPECT_EQ(peptides.queryPeptides.size(), 1);
  EXPECT_EQ(peptides.warnings.inGenes.size(), 0);
}
