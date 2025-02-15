#pragma once

#include <benchmark/benchmark.h>

#include <numeric>
#include <common/safe_vector.h>

#include "../include/nextalign/nextalign.h"
#include "../src/align/alignPairwise.h"
#include "../src/align/getGapOpenCloseScores.h"
#include "../src/alphabet/nucleotides.h"
#include "../src/match/matchNuc.h"
#include "utils/getData.h"
#include "utils/setCounters.h"


class AlignPairwiseAverageBench : public benchmark::Fixture {
protected:
  const NextalignOptions options = getDefaultOptions();
  safe_vector<int> gapOpenClose;
  NucleotideSequence ref;
  safe_vector<NucleotideSequence> nucSequences;
  int totalNucs;
  GeneMap geneMap;

  AlignPairwiseAverageBench() {
    const auto [sequences, reference, GENE_MAP, TOTAL_NUCS, _] = getData();
    ref = toNucleotideSequence(reference);
    totalNucs = TOTAL_NUCS;
    geneMap = GENE_MAP;
    gapOpenClose = getGapOpenCloseScoresCodonAware(ref, geneMap, options);

    const auto n = NUM_SEQUENCES_AVG;
    nucSequences.resize(n);
    for (int i = 0; i < n; ++i) {
      const auto& input = sequences[i];
      nucSequences[input.index] = toNucleotideSequence(input.seq);
    }
  }
};


BENCHMARK_DEFINE_F(AlignPairwiseAverageBench, Average)(benchmark::State& st) {
  const auto n = NUM_SEQUENCES_AVG;
  NucleotideAlignmentStatus aln;
  st.SetComplexityN(totalNucs);

  for (const auto _ : st) {
    for (int i = 0; i < n; ++i) {
      const auto& input = nucSequences[i];
      benchmark::DoNotOptimize(aln = alignPairwise(input, ref, gapOpenClose, options.alignment, options.seedNuc));
    }
  }

  setCounters(st, n);
}


BENCHMARK_REGISTER_F(AlignPairwiseAverageBench, Average)//
  ->Unit(benchmark::kMillisecond)                       //
  ->Complexity(benchmark::oNSquared)
  ->Iterations(20);


///**
// * Variation benchmark for alignPairwise().
// * Runs `alignPairwise()` for NUM_SEQUENCES_VAR sequences and shows results per sequence.
// * This shows variation or runtime between different sequences.
// */
//void AlignPairwiseVariation(benchmark::State& st) {
//  const auto& index = st.range(0);
//  const auto& input = sequences[index];
//  Alignment aln;
//  st.SetLabel(input.seqName);
//  st.SetComplexityN(input.seq.size());
//
//  for (const auto _ : st) {
//    benchmark::DoNotOptimize(aln = alignPairwise(input.seq, reference, gapOpenClose, 100));
//  }
//
//  setCounters(st, 1);
//}
//
//BENCHMARK(AlignPairwiseVariation)          //
//  ->DenseRange(0, NUM_SEQUENCES_VAR - 1, 1)//
//  ->Unit(benchmark::kMillisecond)          //
//  ->Complexity(benchmark::oNSquared);
