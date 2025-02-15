#pragma once

#include <benchmark/benchmark.h>

#include <numeric>
#include <common/safe_vector.h>

#include "../include/nextalign/nextalign.h"
#include "../src/align/alignPairwise.h"
#include "utils/getData.h"
#include "utils/setCounters.h"


class NextalignAverageBench : public benchmark::Fixture {
protected:
  NucleotideSequence ref;
  safe_vector<NucleotideSequence> nucSequences;
  int totalNucs;
  GeneMap geneMap;
  std::set<std::string> genes;
  NextalignOptions options = getDefaultOptions();

  NextalignAverageBench() {
    const auto [sequences, reference, GENE_MAP, TOTAL_NUCS, GENES] = getData();
    ref = toNucleotideSequence(reference);
    totalNucs = TOTAL_NUCS;
    geneMap = GENE_MAP;
    genes = GENES;

    const auto n = NUM_SEQUENCES_AVG;
    nucSequences.resize(n);
    for (int i = 0; i < n; ++i) {
      const auto& input = sequences[i];
      nucSequences[input.index] = toNucleotideSequence(input.seq);
    }
  }
};


BENCHMARK_DEFINE_F(NextalignAverageBench, Average)(benchmark::State& st) {
  const auto n = NUM_SEQUENCES_AVG;
  st.SetComplexityN(totalNucs);

  for (const auto _ : st) {
    for (int i = 0; i < n; ++i) {
      const auto& seq = nucSequences[i];
      benchmark::DoNotOptimize(nextalign(seq, ref, geneMap, options));
    }
  }

  setCounters(st, n);
}

BENCHMARK_REGISTER_F(NextalignAverageBench, Average)
  ->Unit(benchmark::kMillisecond)//
  ->Complexity(benchmark::oNSquared)
  ->Iterations(20);


///**
// * Variation benchmark for nextalign().
// * Runs `nextalign()` for NUM_SEQUENCES_VAR sequences and shows results per sequence.
// * This shows variation or runtime between different sequences.
// */
//void NextalignVariation(benchmark::State& st) {
//  const auto& index = st.range(0);
//  const auto& input = sequences[index];
//  const NextalignOptions options = {};
//  Alignment aln;
//  st.SetLabel(input.seqName);
//  st.SetComplexityN(input.seq.size());
//
//  for (const auto _ : st) {
//    benchmark::DoNotOptimize(aln = nextalign(input.seq, reference, geneMap, options));
//  }
//
//  setCounters(st, 1);
//}
//
//BENCHMARK(NextalignVariation)              //
//  ->DenseRange(0, NUM_SEQUENCES_VAR - 1, 1)//
//  ->Unit(benchmark::kMillisecond)          //
//  ->Complexity(benchmark::oNSquared);
