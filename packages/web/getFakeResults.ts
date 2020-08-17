/* eslint-disable sonarjs/no-duplicate-string */
import type { SequenceAnalysisState } from 'src/state/algorithm/algorithm.state'

export function getFakeResults() {
  if (process.env.NODE_ENV === 'production') {
    throw new Error(': Developer error: Fake data should not be used in production!')
  }

  return fakeResults
}

const fakeResults = ([
  {
    status: 'done',
    id: 0,
    seqName: 'Wuhan-Hu-1/2019',
    errors: [],
    result: {
      seqName: 'Wuhan-Hu-1/2019',
      clades: {
        '19A': [
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'C',
          },
        ],
      },
      substitutions: [],
      totalMutations: 0,
      aminoacidChanges: [],
      totalAminoacidChanges: 0,
      insertions: [],
      totalInsertions: 0,
      deletions: [],
      totalGaps: 0,
      missing: [],
      totalMissing: 0,
      nonACGTNs: [],
      totalNonACGTNs: 0,
      alignmentStart: 0,
      alignmentEnd: 29902,
      alignmentScore: 89709,
      diagnostics: {
        flags: [],
        diagnostics: {
          clusteredSNPs: [],
          totalMixedSites: 0,
          totalNumberOfMutations: 0,
        },
        nucleotideComposition: {
          A: 8954,
          T: 9594,
          G: 5863,
          C: 5492,
        },
      },
    },
  },
  {
    status: 'done',
    id: 1,
    seqName: 'Wuhan/WH01/2019',
    errors: [],
    result: {
      seqName: 'Wuhan/WH01/2019',
      clades: {
        '19A': [
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'C',
          },
        ],
      },
      substitutions: [
        {
          pos: 6967,
          refNuc: 'C',
          queryNuc: 'A',
          aaSubstitutions: [
            {
              refAA: 'L',
              queryAA: 'I',
              codon: 2234,
              gene: 'ORF1a',
            },
          ],
        },
        {
          pos: 11763,
          refNuc: 'T',
          queryNuc: 'A',
          aaSubstitutions: [
            {
              refAA: 'N',
              queryAA: 'K',
              codon: 3832,
              gene: 'ORF1a',
            },
          ],
        },
      ],
      totalMutations: 2,
      aminoacidChanges: [
        {
          refAA: 'L',
          queryAA: 'I',
          codon: 2234,
          gene: 'ORF1a',
        },
        {
          refAA: 'N',
          queryAA: 'K',
          codon: 3832,
          gene: 'ORF1a',
        },
      ],
      totalAminoacidChanges: 2,
      insertions: [],
      totalInsertions: 0,
      deletions: [],
      totalGaps: 0,
      missing: [],
      totalMissing: 0,
      nonACGTNs: [],
      totalNonACGTNs: 0,
      alignmentStart: 25,
      alignmentEnd: 29890,
      alignmentScore: 89588,
      diagnostics: {
        flags: [],
        diagnostics: {
          clusteredSNPs: [],
          totalMixedSites: 0,
          totalNumberOfMutations: 2,
        },
        nucleotideComposition: {
          '-': 37,
          'A': 8937,
          'C': 5486,
          'T': 9584,
          'G': 5859,
        },
      },
    },
  },
  {
    status: 'done',
    id: 2,
    seqName: 'hCoV-19/USA/FL-Miami-06_UMTL-A388/2020',
    errors: [],
    result: {
      seqName: 'hCoV-19/USA/FL-Miami-06_UMTL-A388/2020',
      clades: {
        '19B': [
          {
            pos: 8782,
            nuc: 'T',
          },
          {
            pos: 28144,
            nuc: 'C',
          },
        ],
      },
      substitutions: [
        {
          pos: 8781,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 17746,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'P',
              queryAA: 'L',
              codon: 1426,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 17857,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [
            {
              refAA: 'Y',
              queryAA: 'C',
              codon: 1463,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 18059,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 24693,
          refNuc: 'A',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 28143,
          refNuc: 'T',
          queryNuc: 'C',
          aaSubstitutions: [
            {
              refAA: 'L',
              queryAA: 'S',
              codon: 83,
              gene: 'ORF8',
            },
          ],
        },
      ],
      totalMutations: 6,
      aminoacidChanges: [
        {
          refAA: 'P',
          queryAA: 'L',
          codon: 1426,
          gene: 'ORF1b',
        },
        {
          refAA: 'Y',
          queryAA: 'C',
          codon: 1463,
          gene: 'ORF1b',
        },
        {
          refAA: 'L',
          queryAA: 'S',
          codon: 83,
          gene: 'ORF8',
        },
      ],
      totalAminoacidChanges: 3,
      insertions: [],
      totalInsertions: 0,
      deletions: [],
      totalGaps: 0,
      missing: [
        {
          begin: 5315,
          nuc: 'N',
          end: 5321,
        },
        {
          begin: 22895,
          nuc: 'N',
          end: 23131,
        },
      ],
      totalMissing: 242,
      nonACGTNs: [
        {
          begin: 5452,
          nuc: 'R',
          end: 5453,
        },
        {
          begin: 28560,
          nuc: 'K',
          end: 28561,
        },
      ],
      totalNonACGTNs: 2,
      alignmentStart: 39,
      alignmentEnd: 29850,
      alignmentScore: 89410,
      diagnostics: {
        flags: [],
        diagnostics: {
          clusteredSNPs: [],
          totalMixedSites: 2,
          totalNumberOfMutations: 6,
        },
        nucleotideComposition: {
          '-': 91,
          'C': 5433,
          'T': 9498,
          'G': 5812,
          'A': 8825,
          'N': 242,
          'R': 1,
          'K': 1,
        },
      },
    },
  },
  {
    status: 'done',
    id: 3,
    seqName: 'Australia/VIC1000/2020',
    errors: [],
    result: {
      seqName: 'Australia/VIC1000/2020',
      clades: {
        '20A': [
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'T',
          },
          {
            pos: 23403,
            nuc: 'G',
          },
        ],
      },
      substitutions: [
        {
          pos: 240,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 3036,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 7437,
          refNuc: 'T',
          queryNuc: 'C',
          aaSubstitutions: [],
        },
        {
          pos: 14407,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'P',
              queryAA: 'L',
              codon: 313,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 15165,
          refNuc: 'T',
          queryNuc: 'C',
          aaSubstitutions: [],
        },
        {
          pos: 21136,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [
            {
              refAA: 'K',
              queryAA: 'R',
              codon: 2556,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 23402,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [
            {
              refAA: 'D',
              queryAA: 'G',
              codon: 613,
              gene: 'S',
            },
          ],
        },
        {
          pos: 26863,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [],
        },
        {
          pos: 28258,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [],
        },
        {
          pos: 29352,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
      ],
      totalMutations: 10,
      aminoacidChanges: [
        {
          refAA: 'P',
          queryAA: 'L',
          codon: 313,
          gene: 'ORF1b',
        },
        {
          refAA: 'K',
          queryAA: 'R',
          codon: 2556,
          gene: 'ORF1b',
        },
        {
          refAA: 'D',
          queryAA: 'G',
          codon: 613,
          gene: 'S',
        },
      ],
      totalAminoacidChanges: 3,
      insertions: [],
      totalInsertions: 0,
      deletions: [],
      totalGaps: 0,
      missing: [
        {
          begin: 22337,
          nuc: 'N',
          end: 22346,
        },
        {
          begin: 22385,
          nuc: 'N',
          end: 22399,
        },
        {
          begin: 22444,
          nuc: 'N',
          end: 22456,
        },
        {
          begin: 22493,
          nuc: 'N',
          end: 22495,
        },
        {
          begin: 22497,
          nuc: 'N',
          end: 22522,
        },
      ],
      totalMissing: 62,
      nonACGTNs: [],
      totalNonACGTNs: 0,
      alignmentStart: 45,
      alignmentEnd: 29850,
      alignmentScore: 89376,
      diagnostics: {
        flags: [],
        diagnostics: {
          clusteredSNPs: [],
          totalMixedSites: 0,
          totalNumberOfMutations: 10,
        },
        nucleotideComposition: {
          '-': 97,
          'A': 8876,
          'T': 9558,
          'C': 5461,
          'G': 5849,
          'N': 62,
        },
      },
    },
  },
  {
    status: 'done',
    id: 4,
    seqName: 'hCoV-19/Madagascar/MA-Antananarivo-01_XXXX-A999/2020',
    errors: [],
    result: {
      seqName: 'hCoV-19/Madagascar/MA-Antananarivo-01_XXXX-A999/2020',
      clades: {
        '20A': [
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'T',
          },
          {
            pos: 23403,
            nuc: 'G',
          },
        ],
      },
      substitutions: [
        {
          pos: 240,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 3036,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 14407,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'P',
              queryAA: 'L',
              codon: 313,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 15323,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 23402,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [
            {
              refAA: 'D',
              queryAA: 'G',
              codon: 613,
              gene: 'S',
            },
          ],
        },
        {
          pos: 25830,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'L',
              queryAA: 'F',
              codon: 146,
              gene: 'ORF3a',
            },
          ],
        },
      ],
      totalMutations: 6,
      aminoacidChanges: [
        {
          refAA: 'P',
          queryAA: 'L',
          codon: 313,
          gene: 'ORF1b',
        },
        {
          refAA: 'D',
          queryAA: 'G',
          codon: 613,
          gene: 'S',
        },
        {
          refAA: 'L',
          queryAA: 'F',
          codon: 146,
          gene: 'ORF3a',
        },
      ],
      totalAminoacidChanges: 3,
      insertions: [],
      totalInsertions: 0,
      deletions: [],
      totalGaps: 0,
      missing: [
        {
          begin: 22338,
          nuc: 'N',
          end: 22523,
        },
      ],
      totalMissing: 185,
      nonACGTNs: [],
      totalNonACGTNs: 0,
      alignmentStart: 39,
      alignmentEnd: 29844,
      alignmentScore: 89392,
      diagnostics: {
        flags: [],
        diagnostics: {
          clusteredSNPs: [],
          totalMixedSites: 0,
          totalNumberOfMutations: 6,
        },
        nucleotideComposition: {
          '-': 97,
          'C': 5438,
          'T': 9524,
          'G': 5822,
          'A': 8837,
          'N': 185,
        },
      },
    },
  },
  {
    status: 'done',
    id: 5,
    seqName: 'Australia/VIC1018/2020',
    errors: [],
    result: {
      seqName: 'Australia/VIC1018/2020',
      clades: {
        '20A': [
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'T',
          },
          {
            pos: 23403,
            nuc: 'G',
          },
        ],
      },
      substitutions: [
        {
          pos: 240,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 3036,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 14407,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'P',
              queryAA: 'L',
              codon: 313,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 15323,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 22917,
          refNuc: 'G',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 23402,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [
            {
              refAA: 'D',
              queryAA: 'G',
              codon: 613,
              gene: 'S',
            },
          ],
        },
        {
          pos: 28689,
          refNuc: 'G',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'L',
              queryAA: 'F',
              codon: 138,
              gene: 'N',
            },
          ],
        },
      ],
      totalMutations: 7,
      aminoacidChanges: [
        {
          refAA: 'P',
          queryAA: 'L',
          codon: 313,
          gene: 'ORF1b',
        },
        {
          refAA: 'D',
          queryAA: 'G',
          codon: 613,
          gene: 'S',
        },
        {
          refAA: 'L',
          queryAA: 'F',
          codon: 138,
          gene: 'N',
        },
      ],
      totalAminoacidChanges: 3,
      insertions: [],
      totalInsertions: 0,
      deletions: [],
      totalGaps: 0,
      missing: [
        {
          begin: 22338,
          nuc: 'N',
          end: 22523,
        },
      ],
      totalMissing: 185,
      nonACGTNs: [
        {
          begin: 19020,
          nuc: 'K',
          end: 19021,
        },
      ],
      totalNonACGTNs: 1,
      alignmentStart: 38,
      alignmentEnd: 29850,
      alignmentScore: 89409,
      diagnostics: {
        flags: [],
        diagnostics: {
          clusteredSNPs: [],
          totalMixedSites: 1,
          totalNumberOfMutations: 7,
        },
        nucleotideComposition: {
          '-': 90,
          'A': 8840,
          'C': 5439,
          'T': 9529,
          'G': 5819,
          'K': 1,
          'N': 185,
        },
      },
    },
  },
  {
    status: 'done',
    id: 6,
    seqName: 'Australia/VIC102/2020',
    errors: [],
    result: {
      seqName: 'Australia/VIC102/2020',
      clades: {
        '19A': [
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'C',
          },
        ],
      },
      substitutions: [
        {
          pos: 23421,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
      ],
      totalMutations: 1,
      aminoacidChanges: [],
      totalAminoacidChanges: 0,
      insertions: [],
      totalInsertions: 0,
      deletions: [],
      totalGaps: 0,
      missing: [
        {
          begin: 5314,
          nuc: 'N',
          end: 5426,
        },
        {
          begin: 5464,
          nuc: 'N',
          end: 5472,
        },
        {
          begin: 22894,
          nuc: 'N',
          end: 23131,
        },
      ],
      totalMissing: 357,
      nonACGTNs: [
        {
          begin: 11073,
          nuc: 'Y',
          end: 11074,
        },
      ],
      totalNonACGTNs: 1,
      alignmentStart: 39,
      alignmentEnd: 29850,
      alignmentScore: 89430,
      diagnostics: {
        flags: [],
        diagnostics: {
          clusteredSNPs: [],
          totalMixedSites: 1,
          totalNumberOfMutations: 1,
        },
        nucleotideComposition: {
          '-': 91,
          'C': 5411,
          'T': 9459,
          'G': 5788,
          'A': 8796,
          'N': 357,
          'Y': 1,
        },
      },
    },
  },
  {
    status: 'done',
    id: 7,
    seqName: 'Australia/VIC1038/2020',
    errors: [],
    result: {
      seqName: 'Australia/VIC1038/2020',
      clades: {
        '20A': [
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'T',
          },
          {
            pos: 23403,
            nuc: 'G',
          },
        ],
        '20B': [
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'T',
          },
          {
            pos: 23403,
            nuc: 'G',
          },
          {
            pos: 28881,
            nuc: 'A',
          },
          {
            pos: 28882,
            nuc: 'A',
          },
        ],
      },
      substitutions: [
        {
          pos: 240,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 3036,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 14407,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'P',
              queryAA: 'L',
              codon: 313,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 23402,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [
            {
              refAA: 'D',
              queryAA: 'G',
              codon: 613,
              gene: 'S',
            },
          ],
        },
        {
          pos: 26995,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 28880,
          refNuc: 'G',
          queryNuc: 'A',
          aaSubstitutions: [
            {
              refAA: 'R',
              queryAA: 'K',
              codon: 202,
              gene: 'N',
            },
            {
              refAA: 'G',
              queryAA: 'R',
              codon: 49,
              gene: 'ORF14',
            },
          ],
        },
        {
          pos: 28881,
          refNuc: 'G',
          queryNuc: 'A',
          aaSubstitutions: [
            {
              refAA: 'G',
              queryAA: 'E',
              codon: 49,
              gene: 'ORF14',
            },
          ],
        },
        {
          pos: 28882,
          refNuc: 'G',
          queryNuc: 'C',
          aaSubstitutions: [
            {
              refAA: 'G',
              queryAA: 'R',
              codon: 203,
              gene: 'N',
            },
          ],
        },
      ],
      totalMutations: 8,
      aminoacidChanges: [
        {
          refAA: 'P',
          queryAA: 'L',
          codon: 313,
          gene: 'ORF1b',
        },
        {
          refAA: 'D',
          queryAA: 'G',
          codon: 613,
          gene: 'S',
        },
        {
          refAA: 'R',
          queryAA: 'K',
          codon: 202,
          gene: 'N',
        },
        {
          refAA: 'G',
          queryAA: 'R',
          codon: 49,
          gene: 'ORF14',
        },
        {
          refAA: 'G',
          queryAA: 'E',
          codon: 49,
          gene: 'ORF14',
        },
        {
          refAA: 'G',
          queryAA: 'R',
          codon: 203,
          gene: 'N',
        },
      ],
      totalAminoacidChanges: 6,
      insertions: [],
      totalInsertions: 0,
      deletions: [],
      totalGaps: 0,
      missing: [
        {
          begin: 22324,
          nuc: 'N',
          end: 22352,
        },
        {
          begin: 22361,
          nuc: 'N',
          end: 22374,
        },
        {
          begin: 22896,
          nuc: 'N',
          end: 23128,
        },
        {
          begin: 29083,
          nuc: 'N',
          end: 29299,
        },
      ],
      totalMissing: 489,
      nonACGTNs: [
        {
          begin: 3816,
          nuc: 'Y',
          end: 3817,
        },
        {
          begin: 22355,
          nuc: 'R',
          end: 22356,
        },
      ],
      totalNonACGTNs: 2,
      alignmentStart: 45,
      alignmentEnd: 29853,
      alignmentScore: 89393,
      diagnostics: {
        flags: [],
        diagnostics: {
          clusteredSNPs: [],
          totalMixedSites: 2,
          totalNumberOfMutations: 8,
        },
        nucleotideComposition: {
          '-': 94,
          'A': 8762,
          'T': 9441,
          'C': 5370,
          'G': 5745,
          'Y': 1,
          'N': 489,
          'R': 1,
        },
      },
    },
  },
  {
    status: 'done',
    id: 8,
    seqName: 'Australia/VIC1045/2020',
    errors: [],
    result: {
      seqName: 'Australia/VIC1045/2020',
      clades: {
        '20A': [
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'T',
          },
          {
            pos: 23403,
            nuc: 'G',
          },
        ],
        '20C': [
          {
            pos: 1059,
            nuc: 'T',
          },
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'T',
          },
          {
            pos: 23403,
            nuc: 'G',
          },
          {
            pos: 25563,
            nuc: 'T',
          },
        ],
      },
      substitutions: [
        {
          pos: 240,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 1058,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'T',
              queryAA: 'I',
              codon: 264,
              gene: 'ORF1a',
            },
          ],
        },
        {
          pos: 3036,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 14407,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'P',
              queryAA: 'L',
              codon: 313,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 23402,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [
            {
              refAA: 'D',
              queryAA: 'G',
              codon: 613,
              gene: 'S',
            },
          ],
        },
        {
          pos: 25562,
          refNuc: 'G',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'Q',
              queryAA: 'H',
              codon: 56,
              gene: 'ORF3a',
            },
          ],
        },
      ],
      totalMutations: 6,
      aminoacidChanges: [
        {
          refAA: 'T',
          queryAA: 'I',
          codon: 264,
          gene: 'ORF1a',
        },
        {
          refAA: 'P',
          queryAA: 'L',
          codon: 313,
          gene: 'ORF1b',
        },
        {
          refAA: 'D',
          queryAA: 'G',
          codon: 613,
          gene: 'S',
        },
        {
          refAA: 'Q',
          queryAA: 'H',
          codon: 56,
          gene: 'ORF3a',
        },
      ],
      totalAminoacidChanges: 4,
      insertions: [],
      totalInsertions: 0,
      deletions: [],
      totalGaps: 0,
      missing: [
        {
          begin: 22895,
          nuc: 'N',
          end: 23127,
        },
      ],
      totalMissing: 232,
      nonACGTNs: [
        {
          begin: 13637,
          nuc: 'W',
          end: 13638,
        },
        {
          begin: 15809,
          nuc: 'Y',
          end: 15810,
        },
        {
          begin: 23127,
          nuc: 'M',
          end: 23128,
        },
        {
          begin: 28252,
          nuc: 'Y',
          end: 28253,
        },
        {
          begin: 28335,
          nuc: 'W',
          end: 28336,
        },
        {
          begin: 28431,
          nuc: 'Y',
          end: 28432,
        },
      ],
      totalNonACGTNs: 6,
      alignmentStart: 47,
      alignmentEnd: 29850,
      alignmentScore: 89386,
      diagnostics: {
        flags: [],
        diagnostics: {
          clusteredSNPs: [],
          totalMixedSites: 6,
          totalNumberOfMutations: 6,
        },
        nucleotideComposition: {
          '-': 99,
          'C': 5428,
          'T': 9497,
          'G': 5811,
          'A': 8830,
          'W': 2,
          'Y': 3,
          'N': 232,
          'M': 1,
        },
      },
    },
  },
  {
    status: 'done',
    id: 9,
    seqName: 'Australia/VIC1048/2020',
    errors: [],
    result: {
      seqName: 'Australia/VIC1048/2020',
      clades: {
        '20A': [
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'T',
          },
          {
            pos: 23403,
            nuc: 'G',
          },
        ],
      },
      substitutions: [
        {
          pos: 240,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 3036,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 7437,
          refNuc: 'T',
          queryNuc: 'C',
          aaSubstitutions: [],
        },
        {
          pos: 14407,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'P',
              queryAA: 'L',
              codon: 313,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 15165,
          refNuc: 'T',
          queryNuc: 'C',
          aaSubstitutions: [],
        },
        {
          pos: 23402,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [
            {
              refAA: 'D',
              queryAA: 'G',
              codon: 613,
              gene: 'S',
            },
          ],
        },
        {
          pos: 26863,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [],
        },
        {
          pos: 29352,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
      ],
      totalMutations: 8,
      aminoacidChanges: [
        {
          refAA: 'P',
          queryAA: 'L',
          codon: 313,
          gene: 'ORF1b',
        },
        {
          refAA: 'D',
          queryAA: 'G',
          codon: 613,
          gene: 'S',
        },
      ],
      totalAminoacidChanges: 2,
      insertions: [],
      totalInsertions: 0,
      deletions: [],
      totalGaps: 0,
      missing: [
        {
          begin: 8651,
          nuc: 'N',
          end: 8661,
        },
        {
          begin: 22324,
          nuc: 'N',
          end: 22421,
        },
        {
          begin: 22434,
          nuc: 'N',
          end: 22523,
        },
        {
          begin: 22896,
          nuc: 'N',
          end: 22937,
        },
        {
          begin: 23096,
          nuc: 'N',
          end: 23131,
        },
        {
          begin: 29194,
          nuc: 'N',
          end: 29195,
        },
        {
          begin: 29197,
          nuc: 'N',
          end: 29202,
        },
      ],
      totalMissing: 278,
      nonACGTNs: [
        {
          begin: 25110,
          nuc: 'Y',
          end: 25111,
        },
        {
          begin: 29122,
          nuc: 'S',
          end: 29123,
        },
        {
          begin: 29204,
          nuc: 'S',
          end: 29205,
        },
        {
          begin: 29205,
          nuc: 'W',
          end: 29206,
        },
      ],
      totalNonACGTNs: 4,
      alignmentStart: 39,
      alignmentEnd: 29850,
      alignmentScore: 89402,
      diagnostics: {
        flags: [],
        diagnostics: {
          clusteredSNPs: [],
          totalMixedSites: 4,
          totalNumberOfMutations: 8,
        },
        nucleotideComposition: {
          '-': 91,
          'C': 5422,
          'T': 9489,
          'G': 5806,
          'A': 8813,
          'N': 278,
          'Y': 1,
          'S': 2,
          'W': 1,
        },
      },
    },
  },
  {
    status: 'done',
    id: 10,
    seqName: 'Australia/VIC1062/2020',
    errors: [],
    result: {
      seqName: 'Australia/VIC1062/2020',
      clades: {
        '20A': [
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'T',
          },
          {
            pos: 23403,
            nuc: 'G',
          },
        ],
      },
      substitutions: [
        {
          pos: 240,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 3036,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 13209,
          refNuc: 'T',
          queryNuc: 'C',
          aaSubstitutions: [],
        },
        {
          pos: 13347,
          refNuc: 'G',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 14407,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'P',
              queryAA: 'L',
              codon: 313,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 20267,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [],
        },
        {
          pos: 23402,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [
            {
              refAA: 'D',
              queryAA: 'G',
              codon: 613,
              gene: 'S',
            },
          ],
        },
        {
          pos: 29259,
          refNuc: 'G',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
      ],
      totalMutations: 8,
      aminoacidChanges: [
        {
          refAA: 'P',
          queryAA: 'L',
          codon: 313,
          gene: 'ORF1b',
        },
        {
          refAA: 'D',
          queryAA: 'G',
          codon: 613,
          gene: 'S',
        },
      ],
      totalAminoacidChanges: 2,
      insertions: [],
      totalInsertions: 0,
      deletions: [],
      totalGaps: 0,
      missing: [],
      totalMissing: 0,
      nonACGTNs: [],
      totalNonACGTNs: 0,
      alignmentStart: 38,
      alignmentEnd: 29853,
      alignmentScore: 89414,
      diagnostics: {
        flags: [],
        diagnostics: {
          clusteredSNPs: [],
          totalMixedSites: 0,
          totalNumberOfMutations: 8,
        },
        nucleotideComposition: {
          '-': 87,
          'A': 8899,
          'C': 5478,
          'T': 9584,
          'G': 5855,
        },
      },
    },
  },
  {
    status: 'done',
    id: 11,
    seqName: 'Australia/VIC1120/2020',
    errors: [],
    result: {
      seqName: 'Australia/VIC1120/2020',
      clades: {
        '20A': [
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'T',
          },
          {
            pos: 23403,
            nuc: 'G',
          },
        ],
        '20C': [
          {
            pos: 1059,
            nuc: 'T',
          },
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'T',
          },
          {
            pos: 23403,
            nuc: 'G',
          },
          {
            pos: 25563,
            nuc: 'T',
          },
        ],
      },
      substitutions: [
        {
          pos: 240,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 1058,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'T',
              queryAA: 'I',
              codon: 264,
              gene: 'ORF1a',
            },
          ],
        },
        {
          pos: 3036,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 14407,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'P',
              queryAA: 'L',
              codon: 313,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 23402,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [
            {
              refAA: 'D',
              queryAA: 'G',
              codon: 613,
              gene: 'S',
            },
          ],
        },
        {
          pos: 25562,
          refNuc: 'G',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'Q',
              queryAA: 'H',
              codon: 56,
              gene: 'ORF3a',
            },
          ],
        },
      ],
      totalMutations: 6,
      aminoacidChanges: [
        {
          refAA: 'T',
          queryAA: 'I',
          codon: 264,
          gene: 'ORF1a',
        },
        {
          refAA: 'P',
          queryAA: 'L',
          codon: 313,
          gene: 'ORF1b',
        },
        {
          refAA: 'D',
          queryAA: 'G',
          codon: 613,
          gene: 'S',
        },
        {
          refAA: 'Q',
          queryAA: 'H',
          codon: 56,
          gene: 'ORF3a',
        },
      ],
      totalAminoacidChanges: 4,
      insertions: [],
      totalInsertions: 0,
      deletions: [],
      totalGaps: 0,
      missing: [
        {
          begin: 6466,
          nuc: 'N',
          end: 6473,
        },
        {
          begin: 8635,
          nuc: 'N',
          end: 8897,
        },
        {
          begin: 9284,
          nuc: 'N',
          end: 9286,
        },
        {
          begin: 13379,
          nuc: 'N',
          end: 13608,
        },
        {
          begin: 17844,
          nuc: 'N',
          end: 17853,
        },
        {
          begin: 17857,
          nuc: 'N',
          end: 17908,
        },
        {
          begin: 17934,
          nuc: 'N',
          end: 17952,
        },
        {
          begin: 21161,
          nuc: 'N',
          end: 21386,
        },
        {
          begin: 22030,
          nuc: 'N',
          end: 22080,
        },
        {
          begin: 22100,
          nuc: 'N',
          end: 22101,
        },
        {
          begin: 22257,
          nuc: 'N',
          end: 22523,
        },
        {
          begin: 22895,
          nuc: 'N',
          end: 22984,
        },
        {
          begin: 23015,
          nuc: 'N',
          end: 23122,
        },
        {
          begin: 23552,
          nuc: 'N',
          end: 23569,
        },
        {
          begin: 23575,
          nuc: 'N',
          end: 23576,
        },
        {
          begin: 23580,
          nuc: 'N',
          end: 23581,
        },
        {
          begin: 25277,
          nuc: 'N',
          end: 25278,
        },
        {
          begin: 25819,
          nuc: 'N',
          end: 25836,
        },
        {
          begin: 25875,
          nuc: 'N',
          end: 25895,
        },
        {
          begin: 29041,
          nuc: 'N',
          end: 29309,
        },
      ],
      totalMissing: 1641,
      nonACGTNs: [
        {
          begin: 6704,
          nuc: 'R',
          end: 6705,
        },
        {
          begin: 8942,
          nuc: 'K',
          end: 8943,
        },
        {
          begin: 11021,
          nuc: 'Y',
          end: 11022,
        },
        {
          begin: 13378,
          nuc: 'B',
          end: 13379,
        },
        {
          begin: 13653,
          nuc: 'K',
          end: 13654,
        },
        {
          begin: 21992,
          nuc: 'W',
          end: 21993,
        },
        {
          begin: 23158,
          nuc: 'Y',
          end: 23159,
        },
        {
          begin: 24360,
          nuc: 'R',
          end: 24361,
        },
        {
          begin: 24407,
          nuc: 'R',
          end: 24408,
        },
        {
          begin: 25116,
          nuc: 'Y',
          end: 25117,
        },
        {
          begin: 25997,
          nuc: 'W',
          end: 25998,
        },
        {
          begin: 26763,
          nuc: 'M',
          end: 26764,
        },
        {
          begin: 27130,
          nuc: 'Y',
          end: 27131,
        },
      ],
      totalNonACGTNs: 13,
      alignmentStart: 11,
      alignmentEnd: 29847,
      alignmentScore: 89485,
      diagnostics: {
        flags: ['Too many non-ACGT characters', 'missing data'],
        diagnostics: {
          clusteredSNPs: [],
          totalMixedSites: 13,
          totalNumberOfMutations: 6,
        },
        nucleotideComposition: {
          '-': 66,
          'A': 8427,
          'T': 9080,
          'C': 5150,
          'G': 5526,
          'N': 1641,
          'R': 3,
          'K': 2,
          'Y': 4,
          'B': 1,
          'W': 2,
          'M': 1,
        },
      },
    },
  },
  {
    status: 'done',
    id: 12,
    seqName: 'Australia/VIC1135/2020',
    errors: [],
    result: {
      seqName: 'Australia/VIC1135/2020',
      clades: {
        '20A': [
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'T',
          },
          {
            pos: 23403,
            nuc: 'G',
          },
        ],
        '20C': [
          {
            pos: 1059,
            nuc: 'T',
          },
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'T',
          },
          {
            pos: 23403,
            nuc: 'G',
          },
          {
            pos: 25563,
            nuc: 'T',
          },
        ],
      },
      substitutions: [
        {
          pos: 240,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 832,
          refNuc: 'T',
          queryNuc: 'C',
          aaSubstitutions: [
            {
              refAA: 'F',
              queryAA: 'L',
              codon: 189,
              gene: 'ORF1a',
            },
          ],
        },
        {
          pos: 1058,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'T',
              queryAA: 'I',
              codon: 264,
              gene: 'ORF1a',
            },
          ],
        },
        {
          pos: 3036,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 14407,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'P',
              queryAA: 'L',
              codon: 313,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 16699,
          refNuc: 'G',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'R',
              queryAA: 'L',
              codon: 1077,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 23402,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [
            {
              refAA: 'D',
              queryAA: 'G',
              codon: 613,
              gene: 'S',
            },
          ],
        },
        {
          pos: 25562,
          refNuc: 'G',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'Q',
              queryAA: 'H',
              codon: 56,
              gene: 'ORF3a',
            },
          ],
        },
        {
          pos: 27963,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'S',
              queryAA: 'L',
              codon: 23,
              gene: 'ORF8',
            },
          ],
        },
      ],
      totalMutations: 9,
      aminoacidChanges: [
        {
          refAA: 'F',
          queryAA: 'L',
          codon: 189,
          gene: 'ORF1a',
        },
        {
          refAA: 'T',
          queryAA: 'I',
          codon: 264,
          gene: 'ORF1a',
        },
        {
          refAA: 'P',
          queryAA: 'L',
          codon: 313,
          gene: 'ORF1b',
        },
        {
          refAA: 'R',
          queryAA: 'L',
          codon: 1077,
          gene: 'ORF1b',
        },
        {
          refAA: 'D',
          queryAA: 'G',
          codon: 613,
          gene: 'S',
        },
        {
          refAA: 'Q',
          queryAA: 'H',
          codon: 56,
          gene: 'ORF3a',
        },
        {
          refAA: 'S',
          queryAA: 'L',
          codon: 23,
          gene: 'ORF8',
        },
      ],
      totalAminoacidChanges: 7,
      insertions: [],
      totalInsertions: 0,
      deletions: [],
      totalGaps: 0,
      missing: [],
      totalMissing: 0,
      nonACGTNs: [
        {
          begin: 13114,
          nuc: 'Y',
          end: 13115,
        },
      ],
      totalNonACGTNs: 1,
      alignmentStart: 38,
      alignmentEnd: 29852,
      alignmentScore: 89407,
      diagnostics: {
        flags: [],
        diagnostics: {
          clusteredSNPs: [],
          totalMixedSites: 1,
          totalNumberOfMutations: 9,
        },
        nucleotideComposition: {
          '-': 88,
          'A': 8900,
          'C': 5474,
          'T': 9586,
          'G': 5854,
          'Y': 1,
        },
      },
    },
  },
  {
    status: 'done',
    id: 13,
    seqName: 'Australia/VIC1139/2020',
    errors: [],
    result: {
      seqName: 'Australia/VIC1139/2020',
      clades: {
        '20A': [
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'T',
          },
          {
            pos: 23403,
            nuc: 'G',
          },
        ],
        '20C': [
          {
            pos: 1059,
            nuc: 'T',
          },
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'T',
          },
          {
            pos: 23403,
            nuc: 'G',
          },
          {
            pos: 25563,
            nuc: 'T',
          },
        ],
      },
      substitutions: [
        {
          pos: 240,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 1058,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'T',
              queryAA: 'I',
              codon: 264,
              gene: 'ORF1a',
            },
          ],
        },
        {
          pos: 3036,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 8184,
          refNuc: 'G',
          queryNuc: 'A',
          aaSubstitutions: [],
        },
        {
          pos: 14407,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'P',
              queryAA: 'L',
              codon: 313,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 17379,
          refNuc: 'T',
          queryNuc: 'C',
          aaSubstitutions: [
            {
              refAA: 'Y',
              queryAA: 'H',
              codon: 1304,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 21930,
          refNuc: 'T',
          queryNuc: 'C',
          aaSubstitutions: [],
        },
        {
          pos: 23402,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [
            {
              refAA: 'D',
              queryAA: 'G',
              codon: 613,
              gene: 'S',
            },
          ],
        },
        {
          pos: 23784,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 25562,
          refNuc: 'G',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'Q',
              queryAA: 'H',
              codon: 56,
              gene: 'ORF3a',
            },
          ],
        },
      ],
      totalMutations: 10,
      aminoacidChanges: [
        {
          refAA: 'T',
          queryAA: 'I',
          codon: 264,
          gene: 'ORF1a',
        },
        {
          refAA: 'P',
          queryAA: 'L',
          codon: 313,
          gene: 'ORF1b',
        },
        {
          refAA: 'Y',
          queryAA: 'H',
          codon: 1304,
          gene: 'ORF1b',
        },
        {
          refAA: 'D',
          queryAA: 'G',
          codon: 613,
          gene: 'S',
        },
        {
          refAA: 'Q',
          queryAA: 'H',
          codon: 56,
          gene: 'ORF3a',
        },
      ],
      totalAminoacidChanges: 5,
      insertions: [],
      totalInsertions: 0,
      deletions: [],
      totalGaps: 0,
      missing: [
        {
          begin: 22338,
          nuc: 'N',
          end: 22523,
        },
      ],
      totalMissing: 185,
      nonACGTNs: [],
      totalNonACGTNs: 0,
      alignmentStart: 38,
      alignmentEnd: 29852,
      alignmentScore: 89403,
      diagnostics: {
        flags: [],
        diagnostics: {
          clusteredSNPs: [],
          totalMixedSites: 0,
          totalNumberOfMutations: 10,
        },
        nucleotideComposition: {
          '-': 88,
          'A': 8842,
          'C': 5440,
          'T': 9527,
          'G': 5821,
          'N': 185,
        },
      },
    },
  },
  {
    status: 'done',
    id: 14,
    seqName: 'Australia/VIC1175/2020',
    errors: [],
    result: {
      seqName: 'Australia/VIC1175/2020',
      clades: {
        '20A': [
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'T',
          },
          {
            pos: 23403,
            nuc: 'G',
          },
        ],
      },
      substitutions: [
        {
          pos: 240,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 1593,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 3036,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 8289,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 11108,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'A',
              queryAA: 'V',
              codon: 3614,
              gene: 'ORF1a',
            },
          ],
        },
        {
          pos: 14407,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'P',
              queryAA: 'L',
              codon: 313,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 18787,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'T',
              queryAA: 'I',
              codon: 1773,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 23402,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [
            {
              refAA: 'D',
              queryAA: 'G',
              codon: 613,
              gene: 'S',
            },
          ],
        },
        {
          pos: 25562,
          refNuc: 'G',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'Q',
              queryAA: 'H',
              codon: 56,
              gene: 'ORF3a',
            },
          ],
        },
      ],
      totalMutations: 9,
      aminoacidChanges: [
        {
          refAA: 'A',
          queryAA: 'V',
          codon: 3614,
          gene: 'ORF1a',
        },
        {
          refAA: 'P',
          queryAA: 'L',
          codon: 313,
          gene: 'ORF1b',
        },
        {
          refAA: 'T',
          queryAA: 'I',
          codon: 1773,
          gene: 'ORF1b',
        },
        {
          refAA: 'D',
          queryAA: 'G',
          codon: 613,
          gene: 'S',
        },
        {
          refAA: 'Q',
          queryAA: 'H',
          codon: 56,
          gene: 'ORF3a',
        },
      ],
      totalAminoacidChanges: 5,
      insertions: [],
      totalInsertions: 0,
      deletions: [],
      totalGaps: 0,
      missing: [
        {
          begin: 1713,
          nuc: 'N',
          end: 1746,
        },
        {
          begin: 1765,
          nuc: 'N',
          end: 1775,
        },
        {
          begin: 8650,
          nuc: 'N',
          end: 8683,
        },
        {
          begin: 8792,
          nuc: 'N',
          end: 8794,
        },
        {
          begin: 22319,
          nuc: 'N',
          end: 22523,
        },
        {
          begin: 22895,
          nuc: 'N',
          end: 23060,
        },
        {
          begin: 23064,
          nuc: 'N',
          end: 23138,
        },
      ],
      totalMissing: 521,
      nonACGTNs: [
        {
          begin: 8790,
          nuc: 'Y',
          end: 8791,
        },
      ],
      totalNonACGTNs: 1,
      alignmentStart: 49,
      alignmentEnd: 29845,
      alignmentScore: 89353,
      diagnostics: {
        flags: [],
        diagnostics: {
          clusteredSNPs: [],
          totalMixedSites: 1,
          totalNumberOfMutations: 9,
        },
        nucleotideComposition: {
          '-': 106,
          'C': 5376,
          'T': 9400,
          'G': 5755,
          'A': 8744,
          'N': 521,
          'Y': 1,
        },
      },
    },
  },
  {
    status: 'done',
    id: 15,
    seqName: 'Australia/VIC1186/2020',
    errors: [],
    result: {
      seqName: 'Australia/VIC1186/2020',
      clades: {
        '20A': [
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'T',
          },
          {
            pos: 23403,
            nuc: 'G',
          },
        ],
      },
      substitutions: [
        {
          pos: 240,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 3036,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 6722,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'T',
              queryAA: 'I',
              codon: 2152,
              gene: 'ORF1a',
            },
          ],
        },
        {
          pos: 14407,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'P',
              queryAA: 'L',
              codon: 313,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 23402,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [
            {
              refAA: 'D',
              queryAA: 'G',
              codon: 613,
              gene: 'S',
            },
          ],
        },
        {
          pos: 26093,
          refNuc: 'T',
          queryNuc: 'C',
          aaSubstitutions: [],
        },
      ],
      totalMutations: 6,
      aminoacidChanges: [
        {
          refAA: 'T',
          queryAA: 'I',
          codon: 2152,
          gene: 'ORF1a',
        },
        {
          refAA: 'P',
          queryAA: 'L',
          codon: 313,
          gene: 'ORF1b',
        },
        {
          refAA: 'D',
          queryAA: 'G',
          codon: 613,
          gene: 'S',
        },
      ],
      totalAminoacidChanges: 3,
      insertions: [],
      totalInsertions: 0,
      deletions: [],
      totalGaps: 0,
      missing: [
        {
          begin: 6274,
          nuc: 'N',
          end: 6275,
        },
        {
          begin: 13379,
          nuc: 'N',
          end: 13462,
        },
        {
          begin: 13466,
          nuc: 'N',
          end: 13479,
        },
        {
          begin: 13486,
          nuc: 'N',
          end: 13489,
        },
        {
          begin: 13490,
          nuc: 'N',
          end: 13492,
        },
        {
          begin: 13536,
          nuc: 'N',
          end: 13539,
        },
        {
          begin: 13541,
          nuc: 'N',
          end: 13542,
        },
        {
          begin: 13592,
          nuc: 'N',
          end: 13597,
        },
        {
          begin: 13598,
          nuc: 'N',
          end: 13600,
        },
        {
          begin: 22324,
          nuc: 'N',
          end: 22414,
        },
        {
          begin: 22438,
          nuc: 'N',
          end: 22522,
        },
        {
          begin: 23122,
          nuc: 'N',
          end: 23125,
        },
        {
          begin: 29154,
          nuc: 'N',
          end: 29303,
        },
      ],
      totalMissing: 439,
      nonACGTNs: [
        {
          begin: 13525,
          nuc: 'W',
          end: 13526,
        },
        {
          begin: 22422,
          nuc: 'Y',
          end: 22423,
        },
      ],
      totalNonACGTNs: 2,
      alignmentStart: 54,
      alignmentEnd: 29850,
      alignmentScore: 89365,
      diagnostics: {
        flags: [],
        diagnostics: {
          clusteredSNPs: [],
          totalMixedSites: 2,
          totalNumberOfMutations: 6,
        },
        nucleotideComposition: {
          '-': 106,
          'A': 8776,
          'G': 5755,
          'T': 9450,
          'C': 5375,
          'N': 439,
          'W': 1,
          'Y': 1,
        },
      },
    },
  },
  {
    status: 'done',
    id: 16,
    seqName: 'Australia/VIC1199/2020',
    errors: [],
    result: {
      seqName: 'Australia/VIC1199/2020',
      clades: {
        '20A': [
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'T',
          },
          {
            pos: 23403,
            nuc: 'G',
          },
        ],
        '20C': [
          {
            pos: 1059,
            nuc: 'T',
          },
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'T',
          },
          {
            pos: 23403,
            nuc: 'G',
          },
          {
            pos: 25563,
            nuc: 'T',
          },
        ],
      },
      substitutions: [
        {
          pos: 240,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 1058,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'T',
              queryAA: 'I',
              codon: 264,
              gene: 'ORF1a',
            },
          ],
        },
        {
          pos: 3036,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 14407,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'P',
              queryAA: 'L',
              codon: 313,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 23402,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [
            {
              refAA: 'D',
              queryAA: 'G',
              codon: 613,
              gene: 'S',
            },
          ],
        },
        {
          pos: 25562,
          refNuc: 'G',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'Q',
              queryAA: 'H',
              codon: 56,
              gene: 'ORF3a',
            },
          ],
        },
      ],
      totalMutations: 6,
      aminoacidChanges: [
        {
          refAA: 'T',
          queryAA: 'I',
          codon: 264,
          gene: 'ORF1a',
        },
        {
          refAA: 'P',
          queryAA: 'L',
          codon: 313,
          gene: 'ORF1b',
        },
        {
          refAA: 'D',
          queryAA: 'G',
          codon: 613,
          gene: 'S',
        },
        {
          refAA: 'Q',
          queryAA: 'H',
          codon: 56,
          gene: 'ORF3a',
        },
      ],
      totalAminoacidChanges: 4,
      insertions: [],
      totalInsertions: 0,
      deletions: [],
      totalGaps: 0,
      missing: [
        {
          begin: 22324,
          nuc: 'N',
          end: 22523,
        },
        {
          begin: 22896,
          nuc: 'N',
          end: 22903,
        },
        {
          begin: 23104,
          nuc: 'N',
          end: 23121,
        },
        {
          begin: 23122,
          nuc: 'N',
          end: 23126,
        },
      ],
      totalMissing: 227,
      nonACGTNs: [
        {
          begin: 6482,
          nuc: 'R',
          end: 6483,
        },
        {
          begin: 26109,
          nuc: 'Y',
          end: 26110,
        },
        {
          begin: 28774,
          nuc: 'Y',
          end: 28775,
        },
      ],
      totalNonACGTNs: 3,
      alignmentStart: 39,
      alignmentEnd: 29850,
      alignmentScore: 89410,
      diagnostics: {
        flags: [],
        diagnostics: {
          clusteredSNPs: [],
          totalMixedSites: 3,
          totalNumberOfMutations: 6,
        },
        nucleotideComposition: {
          '-': 91,
          'C': 5428,
          'T': 9513,
          'G': 5809,
          'A': 8832,
          'R': 1,
          'N': 227,
          'Y': 2,
        },
      },
    },
  },
  {
    status: 'done',
    id: 17,
    seqName: 'Australia/VIC1200/2020',
    errors: [],
    result: {
      seqName: 'Australia/VIC1200/2020',
      clades: {
        '19B': [
          {
            pos: 8782,
            nuc: 'T',
          },
          {
            pos: 28144,
            nuc: 'C',
          },
        ],
      },
      substitutions: [
        {
          pos: 8781,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 17857,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [
            {
              refAA: 'Y',
              queryAA: 'C',
              codon: 1463,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 18059,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 24693,
          refNuc: 'A',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 28143,
          refNuc: 'T',
          queryNuc: 'C',
          aaSubstitutions: [
            {
              refAA: 'L',
              queryAA: 'S',
              codon: 83,
              gene: 'ORF8',
            },
          ],
        },
      ],
      totalMutations: 5,
      aminoacidChanges: [
        {
          refAA: 'Y',
          queryAA: 'C',
          codon: 1463,
          gene: 'ORF1b',
        },
        {
          refAA: 'L',
          queryAA: 'S',
          codon: 83,
          gene: 'ORF8',
        },
      ],
      totalAminoacidChanges: 2,
      insertions: [],
      totalInsertions: 0,
      deletions: [],
      totalGaps: 0,
      missing: [
        {
          begin: 22324,
          nuc: 'N',
          end: 22523,
        },
        {
          begin: 23021,
          nuc: 'N',
          end: 23024,
        },
        {
          begin: 23122,
          nuc: 'N',
          end: 23129,
        },
      ],
      totalMissing: 209,
      nonACGTNs: [
        {
          begin: 9273,
          nuc: 'R',
          end: 9274,
        },
        {
          begin: 12671,
          nuc: 'Y',
          end: 12672,
        },
        {
          begin: 13254,
          nuc: 'Y',
          end: 13255,
        },
        {
          begin: 17746,
          nuc: 'Y',
          end: 17747,
        },
        {
          begin: 28593,
          nuc: 'R',
          end: 28594,
        },
      ],
      totalNonACGTNs: 5,
      alignmentStart: 39,
      alignmentEnd: 29850,
      alignmentScore: 89414,
      diagnostics: {
        flags: [],
        diagnostics: {
          clusteredSNPs: [],
          totalMixedSites: 5,
          totalNumberOfMutations: 5,
        },
        nucleotideComposition: {
          '-': 91,
          'C': 5433,
          'T': 9518,
          'G': 5817,
          'A': 8830,
          'R': 2,
          'Y': 3,
          'N': 209,
        },
      },
    },
  },
  {
    status: 'done',
    id: 18,
    seqName: 'Australia/VIC1208/2020',
    errors: [],
    result: {
      seqName: 'Australia/VIC1208/2020',
      clades: {
        '20A': [
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'T',
          },
          {
            pos: 23403,
            nuc: 'G',
          },
        ],
        '20C': [
          {
            pos: 1059,
            nuc: 'T',
          },
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'T',
          },
          {
            pos: 23403,
            nuc: 'G',
          },
          {
            pos: 25563,
            nuc: 'T',
          },
        ],
      },
      substitutions: [
        {
          pos: 240,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 1058,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'T',
              queryAA: 'I',
              codon: 264,
              gene: 'ORF1a',
            },
          ],
        },
        {
          pos: 3036,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 14407,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'P',
              queryAA: 'L',
              codon: 313,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 16328,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 18638,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [],
        },
        {
          pos: 23402,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [
            {
              refAA: 'D',
              queryAA: 'G',
              codon: 613,
              gene: 'S',
            },
          ],
        },
        {
          pos: 23535,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 25562,
          refNuc: 'G',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'Q',
              queryAA: 'H',
              codon: 56,
              gene: 'ORF3a',
            },
          ],
        },
        {
          pos: 25730,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 29624,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'S',
              queryAA: 'F',
              codon: 22,
              gene: 'ORF10',
            },
          ],
        },
      ],
      totalMutations: 11,
      aminoacidChanges: [
        {
          refAA: 'T',
          queryAA: 'I',
          codon: 264,
          gene: 'ORF1a',
        },
        {
          refAA: 'P',
          queryAA: 'L',
          codon: 313,
          gene: 'ORF1b',
        },
        {
          refAA: 'D',
          queryAA: 'G',
          codon: 613,
          gene: 'S',
        },
        {
          refAA: 'Q',
          queryAA: 'H',
          codon: 56,
          gene: 'ORF3a',
        },
        {
          refAA: 'S',
          queryAA: 'F',
          codon: 22,
          gene: 'ORF10',
        },
      ],
      totalAminoacidChanges: 5,
      insertions: [],
      totalInsertions: 0,
      deletions: [],
      totalGaps: 0,
      missing: [
        {
          begin: 22324,
          nuc: 'N',
          end: 22523,
        },
      ],
      totalMissing: 199,
      nonACGTNs: [
        {
          begin: 12181,
          nuc: 'Y',
          end: 12182,
        },
      ],
      totalNonACGTNs: 1,
      alignmentStart: 41,
      alignmentEnd: 29850,
      alignmentScore: 89384,
      diagnostics: {
        flags: [],
        diagnostics: {
          clusteredSNPs: [],
          totalMixedSites: 1,
          totalNumberOfMutations: 11,
        },
        nucleotideComposition: {
          '-': 93,
          'T': 9525,
          'C': 5431,
          'G': 5818,
          'A': 8836,
          'Y': 1,
          'N': 199,
        },
      },
    },
  },
  {
    status: 'failed',
    id: 19,
    seqName: 'Australia/VIC1251/2020',
    errors: ['Some error'],
  },
  {
    status: 'done',
    id: 20,
    seqName: 'Australia/VIC127/2020',
    errors: [],
    result: {
      seqName: 'Australia/VIC127/2020',
      clades: {
        '19A': [
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'C',
          },
        ],
      },
      substitutions: [
        {
          pos: 2479,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [
            {
              refAA: 'I',
              queryAA: 'V',
              codon: 738,
              gene: 'ORF1a',
            },
          ],
        },
        {
          pos: 2557,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'P',
              queryAA: 'S',
              codon: 764,
              gene: 'ORF1a',
            },
          ],
        },
        {
          pos: 6970,
          refNuc: 'T',
          queryNuc: 'C',
          aaSubstitutions: [],
        },
        {
          pos: 6974,
          refNuc: 'G',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'S',
              queryAA: 'I',
              codon: 2236,
              gene: 'ORF1a',
            },
          ],
        },
        {
          pos: 6976,
          refNuc: 'G',
          queryNuc: 'A',
          aaSubstitutions: [
            {
              refAA: 'V',
              queryAA: 'I',
              codon: 2237,
              gene: 'ORF1a',
            },
          ],
        },
        {
          pos: 9169,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'L',
              queryAA: 'F',
              codon: 2968,
              gene: 'ORF1a',
            },
          ],
        },
        {
          pos: 11082,
          refNuc: 'G',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'L',
              queryAA: 'F',
              codon: 3605,
              gene: 'ORF1a',
            },
          ],
        },
        {
          pos: 14804,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 26143,
          refNuc: 'G',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'G',
              queryAA: 'V',
              codon: 250,
              gene: 'ORF3a',
            },
          ],
        },
      ],
      totalMutations: 9,
      aminoacidChanges: [
        {
          refAA: 'I',
          queryAA: 'V',
          codon: 738,
          gene: 'ORF1a',
        },
        {
          refAA: 'P',
          queryAA: 'S',
          codon: 764,
          gene: 'ORF1a',
        },
        {
          refAA: 'S',
          queryAA: 'I',
          codon: 2236,
          gene: 'ORF1a',
        },
        {
          refAA: 'V',
          queryAA: 'I',
          codon: 2237,
          gene: 'ORF1a',
        },
        {
          refAA: 'L',
          queryAA: 'F',
          codon: 2968,
          gene: 'ORF1a',
        },
        {
          refAA: 'L',
          queryAA: 'F',
          codon: 3605,
          gene: 'ORF1a',
        },
        {
          refAA: 'G',
          queryAA: 'V',
          codon: 250,
          gene: 'ORF3a',
        },
      ],
      totalAminoacidChanges: 7,
      insertions: [],
      totalInsertions: 0,
      deletions: [],
      totalGaps: 0,
      missing: [
        {
          begin: 5314,
          nuc: 'N',
          end: 5356,
        },
        {
          begin: 22895,
          nuc: 'N',
          end: 23131,
        },
      ],
      totalMissing: 278,
      nonACGTNs: [],
      totalNonACGTNs: 0,
      alignmentStart: 38,
      alignmentEnd: 29846,
      alignmentScore: 89389,
      diagnostics: {
        flags: [],
        diagnostics: {
          clusteredSNPs: [],
          totalMixedSites: 0,
          totalNumberOfMutations: 9,
        },
        nucleotideComposition: {
          '-': 94,
          'A': 8815,
          'C': 5425,
          'T': 9488,
          'G': 5803,
          'N': 278,
        },
      },
    },
  },
  {
    status: 'done',
    id: 21,
    seqName: 'Australia/VIC14/2020',
    errors: [],
    result: {
      seqName: 'Australia/VIC14/2020',
      clades: {
        '19A': [
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'C',
          },
        ],
      },
      substitutions: [
        {
          pos: 17372,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
      ],
      totalMutations: 1,
      aminoacidChanges: [],
      totalAminoacidChanges: 0,
      insertions: [],
      totalInsertions: 0,
      deletions: [],
      totalGaps: 0,
      missing: [
        {
          begin: 70,
          nuc: 'N',
          end: 72,
        },
        {
          begin: 5310,
          nuc: 'N',
          end: 5571,
        },
        {
          begin: 22894,
          nuc: 'N',
          end: 23131,
        },
        {
          begin: 26907,
          nuc: 'N',
          end: 26913,
        },
        {
          begin: 27141,
          nuc: 'N',
          end: 27148,
        },
      ],
      totalMissing: 513,
      nonACGTNs: [
        {
          begin: 13510,
          nuc: 'M',
          end: 13511,
        },
        {
          begin: 13517,
          nuc: 'K',
          end: 13518,
        },
        {
          begin: 22893,
          nuc: 'R',
          end: 22894,
        },
        {
          begin: 29016,
          nuc: 'R',
          end: 29017,
        },
      ],
      totalNonACGTNs: 4,
      alignmentStart: 39,
      alignmentEnd: 29835,
      alignmentScore: 89385,
      diagnostics: {
        flags: [],
        diagnostics: {
          clusteredSNPs: [],
          totalMixedSites: 4,
          totalNumberOfMutations: 1,
        },
        nucleotideComposition: {
          '-': 106,
          'C': 5383,
          'T': 9412,
          'G': 5745,
          'A': 8740,
          'N': 513,
          'M': 1,
          'K': 1,
          'R': 2,
        },
      },
    },
  },
  {
    status: 'done',
    id: 22,
    seqName: 'Australia/VIC157/2020',
    errors: [],
    result: {
      seqName: 'Australia/VIC157/2020',
      clades: {
        '20A': [
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'T',
          },
          {
            pos: 23403,
            nuc: 'G',
          },
        ],
      },
      substitutions: [
        {
          pos: 240,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 3036,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 14407,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'P',
              queryAA: 'L',
              codon: 313,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 17103,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'H',
              queryAA: 'Y',
              codon: 1212,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 20267,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [],
        },
        {
          pos: 23402,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [
            {
              refAA: 'D',
              queryAA: 'G',
              codon: 613,
              gene: 'S',
            },
          ],
        },
        {
          pos: 29733,
          refNuc: 'G',
          queryNuc: 'C',
          aaSubstitutions: [],
        },
      ],
      totalMutations: 7,
      aminoacidChanges: [
        {
          refAA: 'P',
          queryAA: 'L',
          codon: 313,
          gene: 'ORF1b',
        },
        {
          refAA: 'H',
          queryAA: 'Y',
          codon: 1212,
          gene: 'ORF1b',
        },
        {
          refAA: 'D',
          queryAA: 'G',
          codon: 613,
          gene: 'S',
        },
      ],
      totalAminoacidChanges: 3,
      insertions: [],
      totalInsertions: 0,
      deletions: [],
      totalGaps: 0,
      missing: [],
      totalMissing: 0,
      nonACGTNs: [
        {
          begin: 21629,
          nuc: 'R',
          end: 21630,
        },
        {
          begin: 28602,
          nuc: 'Y',
          end: 28603,
        },
      ],
      totalNonACGTNs: 2,
      alignmentStart: 41,
      alignmentEnd: 29836,
      alignmentScore: 89358,
      diagnostics: {
        flags: [],
        diagnostics: {
          clusteredSNPs: [],
          totalMixedSites: 2,
          totalNumberOfMutations: 7,
        },
        nucleotideComposition: {
          '-': 107,
          'T': 9576,
          'C': 5473,
          'G': 5853,
          'A': 8892,
          'R': 1,
          'Y': 1,
        },
      },
    },
  },
  {
    status: 'failed',
    id: 23,
    seqName: 'Australia/VIC17/2020',
    errors: ['Here is an error', 'Another error'],
  },
  {
    status: 'done',
    id: 24,
    seqName: 'Australia/VIC174/2020',
    errors: [],
    result: {
      seqName: 'Australia/VIC174/2020',
      clades: {
        '20A': [
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'T',
          },
          {
            pos: 23403,
            nuc: 'G',
          },
        ],
      },
      substitutions: [
        {
          pos: 240,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 3036,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 14407,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'P',
              queryAA: 'L',
              codon: 313,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 23402,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [
            {
              refAA: 'D',
              queryAA: 'G',
              codon: 613,
              gene: 'S',
            },
          ],
        },
      ],
      totalMutations: 4,
      aminoacidChanges: [
        {
          refAA: 'P',
          queryAA: 'L',
          codon: 313,
          gene: 'ORF1b',
        },
        {
          refAA: 'D',
          queryAA: 'G',
          codon: 613,
          gene: 'S',
        },
      ],
      totalAminoacidChanges: 2,
      insertions: [],
      totalInsertions: 0,
      deletions: [],
      totalGaps: 0,
      missing: [],
      totalMissing: 0,
      nonACGTNs: [],
      totalNonACGTNs: 0,
      alignmentStart: 39,
      alignmentEnd: 29837,
      alignmentScore: 89379,
      diagnostics: {
        flags: [],
        diagnostics: {
          clusteredSNPs: [],
          totalMixedSites: 0,
          totalNumberOfMutations: 4,
        },
        nucleotideComposition: {
          '-': 104,
          'C': 5476,
          'T': 9576,
          'G': 5853,
          'A': 8894,
        },
      },
    },
  },
  {
    status: 'done',
    id: 25,
    seqName: 'Australia/VIC187/2020',
    errors: [],
    result: {
      seqName: 'Australia/VIC187/2020',
      clades: {
        '19A': [
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'C',
          },
        ],
      },
      substitutions: [
        {
          pos: 209,
          refNuc: 'G',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 2479,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [
            {
              refAA: 'I',
              queryAA: 'V',
              codon: 738,
              gene: 'ORF1a',
            },
          ],
        },
        {
          pos: 2557,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'P',
              queryAA: 'S',
              codon: 764,
              gene: 'ORF1a',
            },
          ],
        },
        {
          pos: 11082,
          refNuc: 'G',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'L',
              queryAA: 'F',
              codon: 3605,
              gene: 'ORF1a',
            },
          ],
        },
        {
          pos: 14804,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 26143,
          refNuc: 'G',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'G',
              queryAA: 'V',
              codon: 250,
              gene: 'ORF3a',
            },
          ],
        },
      ],
      totalMutations: 6,
      aminoacidChanges: [
        {
          refAA: 'I',
          queryAA: 'V',
          codon: 738,
          gene: 'ORF1a',
        },
        {
          refAA: 'P',
          queryAA: 'S',
          codon: 764,
          gene: 'ORF1a',
        },
        {
          refAA: 'L',
          queryAA: 'F',
          codon: 3605,
          gene: 'ORF1a',
        },
        {
          refAA: 'G',
          queryAA: 'V',
          codon: 250,
          gene: 'ORF3a',
        },
      ],
      totalAminoacidChanges: 4,
      insertions: [],
      totalInsertions: 0,
      deletions: [],
      totalGaps: 0,
      missing: [
        {
          begin: 22895,
          nuc: 'N',
          end: 22959,
        },
        {
          begin: 22977,
          nuc: 'N',
          end: 23131,
        },
      ],
      totalMissing: 218,
      nonACGTNs: [],
      totalNonACGTNs: 0,
      alignmentStart: 4,
      alignmentEnd: 29835,
      alignmentScore: 89470,
      diagnostics: {
        flags: [],
        diagnostics: {
          clusteredSNPs: [],
          totalMixedSites: 0,
          totalNumberOfMutations: 6,
        },
        nucleotideComposition: {
          '-': 71,
          'A': 8849,
          'G': 5814,
          'T': 9507,
          'C': 5444,
          'N': 218,
        },
      },
    },
  },
  {
    status: 'done',
    id: 26,
    seqName: 'Australia/VIC205/2020',
    errors: [],
    result: {
      seqName: 'Australia/VIC205/2020',
      clades: {
        '19B': [
          {
            pos: 8782,
            nuc: 'T',
          },
          {
            pos: 28144,
            nuc: 'C',
          },
        ],
      },
      substitutions: [
        {
          pos: 8781,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 17746,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'P',
              queryAA: 'L',
              codon: 1426,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 17857,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [
            {
              refAA: 'Y',
              queryAA: 'C',
              codon: 1463,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 18059,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 24693,
          refNuc: 'A',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 28143,
          refNuc: 'T',
          queryNuc: 'C',
          aaSubstitutions: [
            {
              refAA: 'L',
              queryAA: 'S',
              codon: 83,
              gene: 'ORF8',
            },
          ],
        },
      ],
      totalMutations: 6,
      aminoacidChanges: [
        {
          refAA: 'P',
          queryAA: 'L',
          codon: 1426,
          gene: 'ORF1b',
        },
        {
          refAA: 'Y',
          queryAA: 'C',
          codon: 1463,
          gene: 'ORF1b',
        },
        {
          refAA: 'L',
          queryAA: 'S',
          codon: 83,
          gene: 'ORF8',
        },
      ],
      totalAminoacidChanges: 3,
      insertions: [],
      totalInsertions: 0,
      deletions: [],
      totalGaps: 0,
      missing: [
        {
          begin: 5428,
          nuc: 'N',
          end: 5429,
        },
        {
          begin: 20239,
          nuc: 'N',
          end: 20480,
        },
        {
          begin: 21441,
          nuc: 'N',
          end: 21551,
        },
        {
          begin: 22897,
          nuc: 'N',
          end: 22903,
        },
      ],
      totalMissing: 358,
      nonACGTNs: [
        {
          begin: 17121,
          nuc: 'K',
          end: 17122,
        },
        {
          begin: 17549,
          nuc: 'Y',
          end: 17550,
        },
      ],
      totalNonACGTNs: 2,
      alignmentStart: 39,
      alignmentEnd: 29836,
      alignmentScore: 89368,
      diagnostics: {
        flags: [],
        diagnostics: {
          clusteredSNPs: [],
          totalMixedSites: 2,
          totalNumberOfMutations: 6,
        },
        nucleotideComposition: {
          '-': 105,
          'C': 5431,
          'T': 9452,
          'G': 5782,
          'A': 8773,
          'N': 358,
          'K': 1,
          'Y': 1,
        },
      },
    },
  },
  {
    status: 'done',
    id: 27,
    seqName: 'Australia/VIC207/2020',
    errors: [],
    result: {
      seqName: 'Australia/VIC207/2020',
      clades: {
        '20A': [
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'T',
          },
          {
            pos: 23403,
            nuc: 'G',
          },
        ],
        '20C': [
          {
            pos: 1059,
            nuc: 'T',
          },
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'T',
          },
          {
            pos: 23403,
            nuc: 'G',
          },
          {
            pos: 25563,
            nuc: 'T',
          },
        ],
      },
      substitutions: [
        {
          pos: 240,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 1058,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'T',
              queryAA: 'I',
              codon: 264,
              gene: 'ORF1a',
            },
          ],
        },
        {
          pos: 3036,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 14407,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'P',
              queryAA: 'L',
              codon: 313,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 23402,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [
            {
              refAA: 'D',
              queryAA: 'G',
              codon: 613,
              gene: 'S',
            },
          ],
        },
        {
          pos: 25562,
          refNuc: 'G',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'Q',
              queryAA: 'H',
              codon: 56,
              gene: 'ORF3a',
            },
          ],
        },
      ],
      totalMutations: 6,
      aminoacidChanges: [
        {
          refAA: 'T',
          queryAA: 'I',
          codon: 264,
          gene: 'ORF1a',
        },
        {
          refAA: 'P',
          queryAA: 'L',
          codon: 313,
          gene: 'ORF1b',
        },
        {
          refAA: 'D',
          queryAA: 'G',
          codon: 613,
          gene: 'S',
        },
        {
          refAA: 'Q',
          queryAA: 'H',
          codon: 56,
          gene: 'ORF3a',
        },
      ],
      totalAminoacidChanges: 4,
      insertions: [],
      totalInsertions: 0,
      deletions: [],
      totalGaps: 0,
      missing: [],
      totalMissing: 0,
      nonACGTNs: [],
      totalNonACGTNs: 0,
      alignmentStart: 38,
      alignmentEnd: 29850,
      alignmentScore: 89413,
      diagnostics: {
        flags: [],
        diagnostics: {
          clusteredSNPs: [],
          totalMixedSites: 0,
          totalNumberOfMutations: 6,
        },
        nucleotideComposition: {
          '-': 90,
          'A': 8899,
          'C': 5475,
          'T': 9585,
          'G': 5854,
        },
      },
    },
  },
  {
    status: 'done',
    id: 28,
    seqName: 'Australia/VIC241/2020',
    errors: [],
    result: {
      seqName: 'Australia/VIC241/2020',
      clades: {
        '19B': [
          {
            pos: 8782,
            nuc: 'T',
          },
          {
            pos: 28144,
            nuc: 'C',
          },
        ],
      },
      substitutions: [
        {
          pos: 8781,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 17746,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'P',
              queryAA: 'L',
              codon: 1426,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 17857,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [
            {
              refAA: 'Y',
              queryAA: 'C',
              codon: 1463,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 18059,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 24693,
          refNuc: 'A',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 28143,
          refNuc: 'T',
          queryNuc: 'C',
          aaSubstitutions: [
            {
              refAA: 'L',
              queryAA: 'S',
              codon: 83,
              gene: 'ORF8',
            },
          ],
        },
      ],
      totalMutations: 6,
      aminoacidChanges: [
        {
          refAA: 'P',
          queryAA: 'L',
          codon: 1426,
          gene: 'ORF1b',
        },
        {
          refAA: 'Y',
          queryAA: 'C',
          codon: 1463,
          gene: 'ORF1b',
        },
        {
          refAA: 'L',
          queryAA: 'S',
          codon: 83,
          gene: 'ORF8',
        },
      ],
      totalAminoacidChanges: 3,
      insertions: [],
      totalInsertions: 0,
      deletions: [],
      totalGaps: 0,
      missing: [],
      totalMissing: 0,
      nonACGTNs: [
        {
          begin: 20772,
          nuc: 'R',
          end: 20773,
        },
      ],
      totalNonACGTNs: 1,
      alignmentStart: 38,
      alignmentEnd: 29835,
      alignmentScore: 89368,
      diagnostics: {
        flags: [],
        diagnostics: {
          clusteredSNPs: [],
          totalMixedSites: 1,
          totalNumberOfMutations: 6,
        },
        nucleotideComposition: {
          '-': 105,
          'A': 8894,
          'C': 5475,
          'T': 9576,
          'G': 5852,
          'R': 1,
        },
      },
    },
  },
  {
    status: 'done',
    id: 29,
    seqName: 'Australia/VIC248/2020',
    errors: [],
    result: {
      seqName: 'Australia/VIC248/2020',
      clades: {
        '20A': [
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'T',
          },
          {
            pos: 23403,
            nuc: 'G',
          },
        ],
        '20C': [
          {
            pos: 1059,
            nuc: 'T',
          },
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'T',
          },
          {
            pos: 23403,
            nuc: 'G',
          },
          {
            pos: 25563,
            nuc: 'T',
          },
        ],
      },
      substitutions: [
        {
          pos: 240,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 1058,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'T',
              queryAA: 'I',
              codon: 264,
              gene: 'ORF1a',
            },
          ],
        },
        {
          pos: 3036,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 10850,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'A',
              queryAA: 'V',
              codon: 3528,
              gene: 'ORF1a',
            },
          ],
        },
        {
          pos: 14407,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'P',
              queryAA: 'L',
              codon: 313,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 20930,
          refNuc: 'G',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 23402,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [
            {
              refAA: 'D',
              queryAA: 'G',
              codon: 613,
              gene: 'S',
            },
          ],
        },
        {
          pos: 23438,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'A',
              queryAA: 'V',
              codon: 625,
              gene: 'S',
            },
          ],
        },
        {
          pos: 25562,
          refNuc: 'G',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'Q',
              queryAA: 'H',
              codon: 56,
              gene: 'ORF3a',
            },
          ],
        },
      ],
      totalMutations: 9,
      aminoacidChanges: [
        {
          refAA: 'T',
          queryAA: 'I',
          codon: 264,
          gene: 'ORF1a',
        },
        {
          refAA: 'A',
          queryAA: 'V',
          codon: 3528,
          gene: 'ORF1a',
        },
        {
          refAA: 'P',
          queryAA: 'L',
          codon: 313,
          gene: 'ORF1b',
        },
        {
          refAA: 'D',
          queryAA: 'G',
          codon: 613,
          gene: 'S',
        },
        {
          refAA: 'A',
          queryAA: 'V',
          codon: 625,
          gene: 'S',
        },
        {
          refAA: 'Q',
          queryAA: 'H',
          codon: 56,
          gene: 'ORF3a',
        },
      ],
      totalAminoacidChanges: 6,
      insertions: [],
      totalInsertions: 0,
      deletions: [],
      totalGaps: 0,
      missing: [],
      totalMissing: 0,
      nonACGTNs: [],
      totalNonACGTNs: 0,
      alignmentStart: 39,
      alignmentEnd: 29843,
      alignmentScore: 89377,
      diagnostics: {
        flags: [],
        diagnostics: {
          clusteredSNPs: [],
          totalMixedSites: 0,
          totalNumberOfMutations: 9,
        },
        nucleotideComposition: {
          '-': 98,
          'C': 5473,
          'T': 9583,
          'G': 5853,
          'A': 8896,
        },
      },
    },
  },
  {
    status: 'done',
    id: 30,
    seqName: 'Australia/VIC254/2020',
    errors: [],
    result: {
      seqName: 'Australia/VIC254/2020',
      clades: {
        '20A': [
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'T',
          },
          {
            pos: 23403,
            nuc: 'G',
          },
        ],
      },
      substitutions: [
        {
          pos: 240,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 3036,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 14407,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'P',
              queryAA: 'L',
              codon: 313,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 20267,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [],
        },
        {
          pos: 23402,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [
            {
              refAA: 'D',
              queryAA: 'G',
              codon: 613,
              gene: 'S',
            },
          ],
        },
        {
          pos: 24120,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [],
        },
        {
          pos: 28853,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'S',
              queryAA: 'L',
              codon: 193,
              gene: 'N',
            },
            {
              refAA: 'Q',
              queryAA: '*',
              codon: 40,
              gene: 'ORF14',
            },
          ],
        },
      ],
      totalMutations: 7,
      aminoacidChanges: [
        {
          refAA: 'P',
          queryAA: 'L',
          codon: 313,
          gene: 'ORF1b',
        },
        {
          refAA: 'D',
          queryAA: 'G',
          codon: 613,
          gene: 'S',
        },
        {
          refAA: 'S',
          queryAA: 'L',
          codon: 193,
          gene: 'N',
        },
        {
          refAA: 'Q',
          queryAA: '*',
          codon: 40,
          gene: 'ORF14',
        },
      ],
      totalAminoacidChanges: 4,
      insertions: [],
      totalInsertions: 0,
      deletions: [],
      totalGaps: 0,
      missing: [],
      totalMissing: 0,
      nonACGTNs: [
        {
          begin: 27946,
          nuc: 'R',
          end: 27947,
        },
      ],
      totalNonACGTNs: 1,
      alignmentStart: 38,
      alignmentEnd: 29850,
      alignmentScore: 89409,
      diagnostics: {
        flags: [],
        diagnostics: {
          clusteredSNPs: [],
          totalMixedSites: 1,
          totalNumberOfMutations: 7,
        },
        nucleotideComposition: {
          '-': 90,
          'A': 8896,
          'C': 5475,
          'T': 9584,
          'G': 5857,
          'R': 1,
        },
      },
    },
  },
  {
    status: 'done',
    id: 31,
    seqName: 'Australia/VIC259/2020',
    errors: [],
    result: {
      seqName: 'Australia/VIC259/2020',
      clades: {
        '20A': [
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'T',
          },
          {
            pos: 23403,
            nuc: 'G',
          },
        ],
        '20C': [
          {
            pos: 1059,
            nuc: 'T',
          },
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'T',
          },
          {
            pos: 23403,
            nuc: 'G',
          },
          {
            pos: 25563,
            nuc: 'T',
          },
        ],
      },
      substitutions: [
        {
          pos: 240,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 1058,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'T',
              queryAA: 'I',
              codon: 264,
              gene: 'ORF1a',
            },
          ],
        },
        {
          pos: 3036,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 14407,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'P',
              queryAA: 'L',
              codon: 313,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 21710,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'S',
              queryAA: 'L',
              codon: 49,
              gene: 'S',
            },
          ],
        },
        {
          pos: 23402,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [
            {
              refAA: 'D',
              queryAA: 'G',
              codon: 613,
              gene: 'S',
            },
          ],
        },
        {
          pos: 25562,
          refNuc: 'G',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'Q',
              queryAA: 'H',
              codon: 56,
              gene: 'ORF3a',
            },
          ],
        },
      ],
      totalMutations: 7,
      aminoacidChanges: [
        {
          refAA: 'T',
          queryAA: 'I',
          codon: 264,
          gene: 'ORF1a',
        },
        {
          refAA: 'P',
          queryAA: 'L',
          codon: 313,
          gene: 'ORF1b',
        },
        {
          refAA: 'S',
          queryAA: 'L',
          codon: 49,
          gene: 'S',
        },
        {
          refAA: 'D',
          queryAA: 'G',
          codon: 613,
          gene: 'S',
        },
        {
          refAA: 'Q',
          queryAA: 'H',
          codon: 56,
          gene: 'ORF3a',
        },
      ],
      totalAminoacidChanges: 5,
      insertions: [],
      totalInsertions: 0,
      deletions: [],
      totalGaps: 0,
      missing: [],
      totalMissing: 0,
      nonACGTNs: [
        {
          begin: 18347,
          nuc: 'Y',
          end: 18348,
        },
      ],
      totalNonACGTNs: 1,
      alignmentStart: 38,
      alignmentEnd: 29839,
      alignmentScore: 89376,
      diagnostics: {
        flags: [],
        diagnostics: {
          clusteredSNPs: [],
          totalMixedSites: 1,
          totalNumberOfMutations: 7,
        },
        nucleotideComposition: {
          '-': 101,
          'A': 8896,
          'C': 5473,
          'T': 9580,
          'G': 5852,
          'Y': 1,
        },
      },
    },
  },
  {
    status: 'done',
    id: 32,
    seqName: 'Australia/VIC27/2020',
    errors: [],
    result: {
      seqName: 'Australia/VIC27/2020',
      clades: {
        '19B': [
          {
            pos: 8782,
            nuc: 'T',
          },
          {
            pos: 28144,
            nuc: 'C',
          },
        ],
      },
      substitutions: [
        {
          pos: 489,
          refNuc: 'T',
          queryNuc: 'A',
          aaSubstitutions: [
            {
              refAA: 'D',
              queryAA: 'E',
              codon: 74,
              gene: 'ORF1a',
            },
          ],
        },
        {
          pos: 3176,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'P',
              queryAA: 'L',
              codon: 970,
              gene: 'ORF1a',
            },
          ],
        },
        {
          pos: 8781,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 18735,
          refNuc: 'T',
          queryNuc: 'C',
          aaSubstitutions: [
            {
              refAA: 'F',
              queryAA: 'L',
              codon: 1756,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 19683,
          refNuc: 'G',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'V',
              queryAA: 'L',
              codon: 2072,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 24033,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 26728,
          refNuc: 'T',
          queryNuc: 'C',
          aaSubstitutions: [],
        },
        {
          pos: 27634,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'S',
              queryAA: 'L',
              codon: 80,
              gene: 'ORF7a',
            },
          ],
        },
        {
          pos: 28076,
          refNuc: 'G',
          queryNuc: 'C',
          aaSubstitutions: [
            {
              refAA: 'V',
              queryAA: 'L',
              codon: 61,
              gene: 'ORF8',
            },
          ],
        },
        {
          pos: 28143,
          refNuc: 'T',
          queryNuc: 'C',
          aaSubstitutions: [
            {
              refAA: 'L',
              queryAA: 'S',
              codon: 83,
              gene: 'ORF8',
            },
          ],
        },
        {
          pos: 29699,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [],
        },
      ],
      totalMutations: 11,
      aminoacidChanges: [
        {
          refAA: 'D',
          queryAA: 'E',
          codon: 74,
          gene: 'ORF1a',
        },
        {
          refAA: 'P',
          queryAA: 'L',
          codon: 970,
          gene: 'ORF1a',
        },
        {
          refAA: 'F',
          queryAA: 'L',
          codon: 1756,
          gene: 'ORF1b',
        },
        {
          refAA: 'V',
          queryAA: 'L',
          codon: 2072,
          gene: 'ORF1b',
        },
        {
          refAA: 'S',
          queryAA: 'L',
          codon: 80,
          gene: 'ORF7a',
        },
        {
          refAA: 'V',
          queryAA: 'L',
          codon: 61,
          gene: 'ORF8',
        },
        {
          refAA: 'L',
          queryAA: 'S',
          codon: 83,
          gene: 'ORF8',
        },
      ],
      totalAminoacidChanges: 7,
      insertions: [],
      totalInsertions: 0,
      deletions: [],
      totalGaps: 0,
      missing: [],
      totalMissing: 0,
      nonACGTNs: [
        {
          begin: 997,
          nuc: 'K',
          end: 998,
        },
      ],
      totalNonACGTNs: 1,
      alignmentStart: 39,
      alignmentEnd: 29850,
      alignmentScore: 89390,
      diagnostics: {
        flags: [],
        diagnostics: {
          clusteredSNPs: [],
          totalMixedSites: 1,
          totalNumberOfMutations: 11,
        },
        nucleotideComposition: {
          '-': 91,
          'C': 5479,
          'T': 9580,
          'G': 5853,
          'A': 8899,
          'K': 1,
        },
      },
    },
  },
  {
    status: 'done',
    id: 33,
    seqName: 'Australia/VIC289/2020',
    errors: [],
    result: {
      seqName: 'Australia/VIC289/2020',
      clades: {
        '20A': [
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'T',
          },
          {
            pos: 23403,
            nuc: 'G',
          },
        ],
      },
      substitutions: [
        {
          pos: 240,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 3036,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 7437,
          refNuc: 'T',
          queryNuc: 'C',
          aaSubstitutions: [],
        },
        {
          pos: 14407,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'P',
              queryAA: 'L',
              codon: 313,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 23402,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [
            {
              refAA: 'D',
              queryAA: 'G',
              codon: 613,
              gene: 'S',
            },
          ],
        },
        {
          pos: 29352,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
      ],
      totalMutations: 6,
      aminoacidChanges: [
        {
          refAA: 'P',
          queryAA: 'L',
          codon: 313,
          gene: 'ORF1b',
        },
        {
          refAA: 'D',
          queryAA: 'G',
          codon: 613,
          gene: 'S',
        },
      ],
      totalAminoacidChanges: 2,
      insertions: [],
      totalInsertions: 0,
      deletions: [],
      totalGaps: 0,
      missing: [],
      totalMissing: 0,
      nonACGTNs: [],
      totalNonACGTNs: 0,
      alignmentStart: 37,
      alignmentEnd: 29852,
      alignmentScore: 89422,
      diagnostics: {
        flags: [],
        diagnostics: {
          clusteredSNPs: [],
          totalMixedSites: 0,
          totalNumberOfMutations: 6,
        },
        nucleotideComposition: {
          '-': 87,
          'A': 8901,
          'C': 5476,
          'T': 9583,
          'G': 5856,
        },
      },
    },
  },
  {
    status: 'done',
    id: 34,
    seqName: 'Australia/VIC29/2020',
    errors: [],
    result: {
      seqName: 'Australia/VIC29/2020',
      clades: {
        '20A': [
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'T',
          },
          {
            pos: 23403,
            nuc: 'G',
          },
        ],
        '20B': [
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'T',
          },
          {
            pos: 23403,
            nuc: 'G',
          },
          {
            pos: 28881,
            nuc: 'A',
          },
          {
            pos: 28882,
            nuc: 'A',
          },
        ],
      },
      substitutions: [
        {
          pos: 240,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 3036,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 11637,
          refNuc: 'T',
          queryNuc: 'C',
          aaSubstitutions: [],
        },
        {
          pos: 14407,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'P',
              queryAA: 'L',
              codon: 313,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 23402,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [
            {
              refAA: 'D',
              queryAA: 'G',
              codon: 613,
              gene: 'S',
            },
          ],
        },
        {
          pos: 28880,
          refNuc: 'G',
          queryNuc: 'A',
          aaSubstitutions: [
            {
              refAA: 'R',
              queryAA: 'K',
              codon: 202,
              gene: 'N',
            },
            {
              refAA: 'G',
              queryAA: 'R',
              codon: 49,
              gene: 'ORF14',
            },
          ],
        },
        {
          pos: 28881,
          refNuc: 'G',
          queryNuc: 'A',
          aaSubstitutions: [
            {
              refAA: 'G',
              queryAA: 'E',
              codon: 49,
              gene: 'ORF14',
            },
          ],
        },
        {
          pos: 28882,
          refNuc: 'G',
          queryNuc: 'C',
          aaSubstitutions: [
            {
              refAA: 'G',
              queryAA: 'R',
              codon: 203,
              gene: 'N',
            },
          ],
        },
        {
          pos: 29707,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
      ],
      totalMutations: 9,
      aminoacidChanges: [
        {
          refAA: 'P',
          queryAA: 'L',
          codon: 313,
          gene: 'ORF1b',
        },
        {
          refAA: 'D',
          queryAA: 'G',
          codon: 613,
          gene: 'S',
        },
        {
          refAA: 'R',
          queryAA: 'K',
          codon: 202,
          gene: 'N',
        },
        {
          refAA: 'G',
          queryAA: 'R',
          codon: 49,
          gene: 'ORF14',
        },
        {
          refAA: 'G',
          queryAA: 'E',
          codon: 49,
          gene: 'ORF14',
        },
        {
          refAA: 'G',
          queryAA: 'R',
          codon: 203,
          gene: 'N',
        },
      ],
      totalAminoacidChanges: 6,
      insertions: [],
      totalInsertions: 0,
      deletions: [],
      totalGaps: 0,
      missing: [],
      totalMissing: 0,
      nonACGTNs: [
        {
          begin: 23796,
          nuc: 'Y',
          end: 23797,
        },
        {
          begin: 28231,
          nuc: 'Y',
          end: 28232,
        },
      ],
      totalNonACGTNs: 2,
      alignmentStart: 38,
      alignmentEnd: 29850,
      alignmentScore: 89401,
      diagnostics: {
        flags: [],
        diagnostics: {
          clusteredSNPs: [],
          totalMixedSites: 2,
          totalNumberOfMutations: 9,
        },
        nucleotideComposition: {
          '-': 90,
          'A': 8901,
          'C': 5476,
          'T': 9582,
          'G': 5852,
          'Y': 2,
        },
      },
    },
  },
  {
    status: 'done',
    id: 35,
    seqName: 'Australia/VIC295/2020',
    errors: [],
    result: {
      seqName: 'Australia/VIC295/2020',
      clades: {
        '19B': [
          {
            pos: 8782,
            nuc: 'T',
          },
          {
            pos: 28144,
            nuc: 'C',
          },
        ],
      },
      substitutions: [
        {
          pos: 4539,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 8781,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 9476,
          refNuc: 'T',
          queryNuc: 'A',
          aaSubstitutions: [
            {
              refAA: 'F',
              queryAA: 'Y',
              codon: 3070,
              gene: 'ORF1a',
            },
          ],
        },
        {
          pos: 12273,
          refNuc: 'G',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'K',
              queryAA: 'N',
              codon: 4002,
              gene: 'ORF1a',
            },
          ],
        },
        {
          pos: 14804,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 25978,
          refNuc: 'G',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'G',
              queryAA: 'V',
              codon: 195,
              gene: 'ORF3a',
            },
          ],
        },
        {
          pos: 28143,
          refNuc: 'T',
          queryNuc: 'C',
          aaSubstitutions: [
            {
              refAA: 'L',
              queryAA: 'S',
              codon: 83,
              gene: 'ORF8',
            },
          ],
        },
        {
          pos: 28310,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'P',
              queryAA: 'L',
              codon: 12,
              gene: 'N',
            },
            {
              refAA: 'P',
              queryAA: 'S',
              codon: 9,
              gene: 'ORF9b',
            },
          ],
        },
        {
          pos: 28656,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 28862,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'S',
              queryAA: 'L',
              codon: 196,
              gene: 'N',
            },
            {
              refAA: 'Q',
              queryAA: '*',
              codon: 43,
              gene: 'ORF14',
            },
          ],
        },
      ],
      totalMutations: 10,
      aminoacidChanges: [
        {
          refAA: 'F',
          queryAA: 'Y',
          codon: 3070,
          gene: 'ORF1a',
        },
        {
          refAA: 'K',
          queryAA: 'N',
          codon: 4002,
          gene: 'ORF1a',
        },
        {
          refAA: 'G',
          queryAA: 'V',
          codon: 195,
          gene: 'ORF3a',
        },
        {
          refAA: 'L',
          queryAA: 'S',
          codon: 83,
          gene: 'ORF8',
        },
        {
          refAA: 'P',
          queryAA: 'L',
          codon: 12,
          gene: 'N',
        },
        {
          refAA: 'P',
          queryAA: 'S',
          codon: 9,
          gene: 'ORF9b',
        },
        {
          refAA: 'S',
          queryAA: 'L',
          codon: 196,
          gene: 'N',
        },
        {
          refAA: 'Q',
          queryAA: '*',
          codon: 43,
          gene: 'ORF14',
        },
      ],
      totalAminoacidChanges: 8,
      insertions: [],
      totalInsertions: 0,
      deletions: [],
      totalGaps: 0,
      missing: [],
      totalMissing: 0,
      nonACGTNs: [],
      totalNonACGTNs: 0,
      alignmentStart: 38,
      alignmentEnd: 29850,
      alignmentScore: 89397,
      diagnostics: {
        flags: [],
        diagnostics: {
          clusteredSNPs: [],
          totalMixedSites: 0,
          totalNumberOfMutations: 10,
        },
        nucleotideComposition: {
          '-': 90,
          'A': 8901,
          'C': 5474,
          'T': 9586,
          'G': 5852,
        },
      },
    },
  },
  {
    status: 'done',
    id: 36,
    seqName: 'Australia/VIC300/2020',
    errors: [],
    result: {
      seqName: 'Australia/VIC300/2020',
      clades: {
        '20A': [
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'T',
          },
          {
            pos: 23403,
            nuc: 'G',
          },
        ],
      },
      substitutions: [
        {
          pos: 240,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 3036,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 3783,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 14407,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'P',
              queryAA: 'L',
              codon: 313,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 20267,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [],
        },
        {
          pos: 23402,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [
            {
              refAA: 'D',
              queryAA: 'G',
              codon: 613,
              gene: 'S',
            },
          ],
        },
        {
          pos: 28650,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
      ],
      totalMutations: 7,
      aminoacidChanges: [
        {
          refAA: 'P',
          queryAA: 'L',
          codon: 313,
          gene: 'ORF1b',
        },
        {
          refAA: 'D',
          queryAA: 'G',
          codon: 613,
          gene: 'S',
        },
      ],
      totalAminoacidChanges: 2,
      insertions: [],
      totalInsertions: 0,
      deletions: [],
      totalGaps: 0,
      missing: [],
      totalMissing: 0,
      nonACGTNs: [
        {
          begin: 919,
          nuc: 'Y',
          end: 920,
        },
        {
          begin: 11082,
          nuc: 'K',
          end: 11083,
        },
      ],
      totalNonACGTNs: 2,
      alignmentStart: 39,
      alignmentEnd: 29841,
      alignmentScore: 89379,
      diagnostics: {
        flags: [],
        diagnostics: {
          clusteredSNPs: [],
          totalMixedSites: 2,
          totalNumberOfMutations: 7,
        },
        nucleotideComposition: {
          '-': 100,
          'C': 5473,
          'T': 9580,
          'G': 5854,
          'A': 8894,
          'Y': 1,
          'K': 1,
        },
      },
    },
  },
  {
    status: 'done',
    id: 37,
    seqName: 'Australia/VIC302/2020',
    errors: [],
    result: {
      seqName: 'Australia/VIC302/2020',
      clades: {
        '20A': [
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'T',
          },
          {
            pos: 23403,
            nuc: 'G',
          },
        ],
      },
      substitutions: [
        {
          pos: 240,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 3036,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 14407,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'P',
              queryAA: 'L',
              codon: 313,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 15323,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 22917,
          refNuc: 'G',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 23402,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [
            {
              refAA: 'D',
              queryAA: 'G',
              codon: 613,
              gene: 'S',
            },
          ],
        },
        {
          pos: 28689,
          refNuc: 'G',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'L',
              queryAA: 'F',
              codon: 138,
              gene: 'N',
            },
          ],
        },
      ],
      totalMutations: 7,
      aminoacidChanges: [
        {
          refAA: 'P',
          queryAA: 'L',
          codon: 313,
          gene: 'ORF1b',
        },
        {
          refAA: 'D',
          queryAA: 'G',
          codon: 613,
          gene: 'S',
        },
        {
          refAA: 'L',
          queryAA: 'F',
          codon: 138,
          gene: 'N',
        },
      ],
      totalAminoacidChanges: 3,
      insertions: [],
      totalInsertions: 0,
      deletions: [],
      totalGaps: 0,
      missing: [],
      totalMissing: 0,
      nonACGTNs: [
        {
          begin: 17099,
          nuc: 'R',
          end: 17100,
        },
        {
          begin: 29824,
          nuc: 'R',
          end: 29825,
        },
      ],
      totalNonACGTNs: 2,
      alignmentStart: 38,
      alignmentEnd: 29850,
      alignmentScore: 89409,
      diagnostics: {
        flags: [],
        diagnostics: {
          clusteredSNPs: [],
          totalMixedSites: 2,
          totalNumberOfMutations: 7,
        },
        nucleotideComposition: {
          '-': 90,
          'A': 8899,
          'C': 5475,
          'T': 9586,
          'G': 5851,
          'R': 2,
        },
      },
    },
  },
  {
    status: 'done',
    id: 38,
    seqName: 'Australia/VIC306/2020',
    errors: [],
    result: {
      seqName: 'Australia/VIC306/2020',
      clades: {
        '20A': [
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'T',
          },
          {
            pos: 23403,
            nuc: 'G',
          },
        ],
        '20C': [
          {
            pos: 1059,
            nuc: 'T',
          },
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'T',
          },
          {
            pos: 23403,
            nuc: 'G',
          },
          {
            pos: 25563,
            nuc: 'T',
          },
        ],
      },
      substitutions: [
        {
          pos: 240,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 1058,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'T',
              queryAA: 'I',
              codon: 264,
              gene: 'ORF1a',
            },
          ],
        },
        {
          pos: 2522,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'T',
              queryAA: 'I',
              codon: 752,
              gene: 'ORF1a',
            },
          ],
        },
        {
          pos: 3036,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 14407,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'P',
              queryAA: 'L',
              codon: 313,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 23402,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [
            {
              refAA: 'D',
              queryAA: 'G',
              codon: 613,
              gene: 'S',
            },
          ],
        },
        {
          pos: 25562,
          refNuc: 'G',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'Q',
              queryAA: 'H',
              codon: 56,
              gene: 'ORF3a',
            },
          ],
        },
      ],
      totalMutations: 7,
      aminoacidChanges: [
        {
          refAA: 'T',
          queryAA: 'I',
          codon: 264,
          gene: 'ORF1a',
        },
        {
          refAA: 'T',
          queryAA: 'I',
          codon: 752,
          gene: 'ORF1a',
        },
        {
          refAA: 'P',
          queryAA: 'L',
          codon: 313,
          gene: 'ORF1b',
        },
        {
          refAA: 'D',
          queryAA: 'G',
          codon: 613,
          gene: 'S',
        },
        {
          refAA: 'Q',
          queryAA: 'H',
          codon: 56,
          gene: 'ORF3a',
        },
      ],
      totalAminoacidChanges: 5,
      insertions: [],
      totalInsertions: 0,
      deletions: [],
      totalGaps: 0,
      missing: [
        {
          begin: 4662,
          nuc: 'N',
          end: 4663,
        },
        {
          begin: 12139,
          nuc: 'N',
          end: 12141,
        },
        {
          begin: 22005,
          nuc: 'N',
          end: 22006,
        },
        {
          begin: 22878,
          nuc: 'N',
          end: 22879,
        },
        {
          begin: 25134,
          nuc: 'N',
          end: 25135,
        },
      ],
      totalMissing: 6,
      nonACGTNs: [
        {
          begin: 481,
          nuc: 'Y',
          end: 482,
        },
        {
          begin: 557,
          nuc: 'K',
          end: 558,
        },
        {
          begin: 659,
          nuc: 'K',
          end: 660,
        },
        {
          begin: 662,
          nuc: 'K',
          end: 663,
        },
        {
          begin: 1017,
          nuc: 'K',
          end: 1018,
        },
        {
          begin: 2035,
          nuc: 'K',
          end: 2036,
        },
        {
          begin: 2603,
          nuc: 'K',
          end: 2604,
        },
        {
          begin: 2768,
          nuc: 'K',
          end: 2769,
        },
        {
          begin: 3550,
          nuc: 'Y',
          end: 3551,
        },
        {
          begin: 3563,
          nuc: 'K',
          end: 3564,
        },
        {
          begin: 4504,
          nuc: 'K',
          end: 4505,
        },
        {
          begin: 5846,
          nuc: 'K',
          end: 5847,
        },
        {
          begin: 5879,
          nuc: 'K',
          end: 5880,
        },
        {
          begin: 6482,
          nuc: 'K',
          end: 6483,
        },
        {
          begin: 7016,
          nuc: 'K',
          end: 7017,
        },
        {
          begin: 7037,
          nuc: 'K',
          end: 7038,
        },
        {
          begin: 7193,
          nuc: 'Y',
          end: 7194,
        },
        {
          begin: 7213,
          nuc: 'K',
          end: 7214,
        },
        {
          begin: 8789,
          nuc: 'K',
          end: 8790,
        },
        {
          begin: 9140,
          nuc: 'K',
          end: 9141,
        },
        {
          begin: 9248,
          nuc: 'K',
          end: 9249,
        },
        {
          begin: 10166,
          nuc: 'K',
          end: 10167,
        },
        {
          begin: 10985,
          nuc: 'K',
          end: 10986,
        },
        {
          begin: 11534,
          nuc: 'K',
          end: 11535,
        },
        {
          begin: 12163,
          nuc: 'K',
          end: 12164,
        },
        {
          begin: 13570,
          nuc: 'K',
          end: 13571,
        },
        {
          begin: 14276,
          nuc: 'K',
          end: 14277,
        },
        {
          begin: 14547,
          nuc: 'R',
          end: 14548,
        },
        {
          begin: 15768,
          nuc: 'K',
          end: 15769,
        },
        {
          begin: 16067,
          nuc: 'K',
          end: 16068,
        },
        {
          begin: 16786,
          nuc: 'K',
          end: 16787,
        },
        {
          begin: 17095,
          nuc: 'K',
          end: 17096,
        },
        {
          begin: 17847,
          nuc: 'K',
          end: 17848,
        },
        {
          begin: 18296,
          nuc: 'K',
          end: 18297,
        },
        {
          begin: 18317,
          nuc: 'K',
          end: 18318,
        },
        {
          begin: 21122,
          nuc: 'K',
          end: 21123,
        },
        {
          begin: 22017,
          nuc: 'K',
          end: 22018,
        },
        {
          begin: 22898,
          nuc: 'K',
          end: 22899,
        },
        {
          begin: 24556,
          nuc: 'K',
          end: 24557,
        },
        {
          begin: 24932,
          nuc: 'K',
          end: 24933,
        },
        {
          begin: 28078,
          nuc: 'K',
          end: 28079,
        },
        {
          begin: 28516,
          nuc: 'K',
          end: 28517,
        },
        {
          begin: 28558,
          nuc: 'K',
          end: 28559,
        },
      ],
      totalNonACGTNs: 43,
      alignmentStart: 38,
      alignmentEnd: 29850,
      alignmentScore: 89409,
      diagnostics: {
        flags: ['Too many non-ACGT characters'],
        diagnostics: {
          clusteredSNPs: [],
          totalMixedSites: 43,
          totalNumberOfMutations: 7,
        },
        nucleotideComposition: {
          '-': 90,
          'A': 8898,
          'C': 5468,
          'T': 9586,
          'G': 5812,
          'Y': 3,
          'K': 39,
          'N': 6,
          'R': 1,
        },
      },
    },
  },
  {
    status: 'done',
    id: 39,
    seqName: 'Australia/VIC312/2020',
    errors: [],
    result: {
      seqName: 'Australia/VIC312/2020',
      clades: {
        '20A': [
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'T',
          },
          {
            pos: 23403,
            nuc: 'G',
          },
        ],
      },
      substitutions: [
        {
          pos: 240,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 3036,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 14407,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'P',
              queryAA: 'L',
              codon: 313,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 15323,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 23402,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [
            {
              refAA: 'D',
              queryAA: 'G',
              codon: 613,
              gene: 'S',
            },
          ],
        },
        {
          pos: 23556,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 28689,
          refNuc: 'G',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'L',
              queryAA: 'F',
              codon: 138,
              gene: 'N',
            },
          ],
        },
      ],
      totalMutations: 7,
      aminoacidChanges: [
        {
          refAA: 'P',
          queryAA: 'L',
          codon: 313,
          gene: 'ORF1b',
        },
        {
          refAA: 'D',
          queryAA: 'G',
          codon: 613,
          gene: 'S',
        },
        {
          refAA: 'L',
          queryAA: 'F',
          codon: 138,
          gene: 'N',
        },
      ],
      totalAminoacidChanges: 3,
      insertions: [],
      totalInsertions: 0,
      deletions: [],
      totalGaps: 0,
      missing: [],
      totalMissing: 0,
      nonACGTNs: [
        {
          begin: 22917,
          nuc: 'K',
          end: 22918,
        },
        {
          begin: 24856,
          nuc: 'R',
          end: 24857,
        },
      ],
      totalNonACGTNs: 2,
      alignmentStart: 38,
      alignmentEnd: 29840,
      alignmentScore: 89379,
      diagnostics: {
        flags: [],
        diagnostics: {
          clusteredSNPs: [],
          totalMixedSites: 2,
          totalNumberOfMutations: 7,
        },
        nucleotideComposition: {
          '-': 100,
          'A': 8896,
          'C': 5474,
          'T': 9580,
          'G': 5851,
          'K': 1,
          'R': 1,
        },
      },
    },
  },
  {
    status: 'done',
    id: 40,
    seqName: 'Australia/VIC319/2020',
    errors: [],
    result: {
      seqName: 'Australia/VIC319/2020',
      clades: {
        '20A': [
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'T',
          },
          {
            pos: 23403,
            nuc: 'G',
          },
        ],
      },
      substitutions: [
        {
          pos: 240,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 3036,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 7437,
          refNuc: 'T',
          queryNuc: 'C',
          aaSubstitutions: [],
        },
        {
          pos: 14407,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'P',
              queryAA: 'L',
              codon: 313,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 23402,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [
            {
              refAA: 'D',
              queryAA: 'G',
              codon: 613,
              gene: 'S',
            },
          ],
        },
        {
          pos: 26863,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [],
        },
        {
          pos: 29352,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
      ],
      totalMutations: 7,
      aminoacidChanges: [
        {
          refAA: 'P',
          queryAA: 'L',
          codon: 313,
          gene: 'ORF1b',
        },
        {
          refAA: 'D',
          queryAA: 'G',
          codon: 613,
          gene: 'S',
        },
      ],
      totalAminoacidChanges: 2,
      insertions: [],
      totalInsertions: 0,
      deletions: [],
      totalGaps: 0,
      missing: [],
      totalMissing: 0,
      nonACGTNs: [],
      totalNonACGTNs: 0,
      alignmentStart: 38,
      alignmentEnd: 29850,
      alignmentScore: 89409,
      diagnostics: {
        flags: [],
        diagnostics: {
          clusteredSNPs: [],
          totalMixedSites: 0,
          totalNumberOfMutations: 7,
        },
        nucleotideComposition: {
          '-': 90,
          'A': 8898,
          'C': 5476,
          'T': 9583,
          'G': 5856,
        },
      },
    },
  },
  {
    status: 'done',
    id: 41,
    seqName: 'Australia/VIC322/2020',
    errors: [],
    result: {
      seqName: 'Australia/VIC322/2020',
      clades: {
        '19A': [
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'C',
          },
        ],
      },
      substitutions: [
        {
          pos: 1514,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [
            {
              refAA: 'H',
              queryAA: 'R',
              codon: 416,
              gene: 'ORF1a',
            },
          ],
        },
        {
          pos: 6078,
          refNuc: 'T',
          queryNuc: 'C',
          aaSubstitutions: [],
        },
        {
          pos: 9222,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 11082,
          refNuc: 'G',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'L',
              queryAA: 'F',
              codon: 3605,
              gene: 'ORF1a',
            },
          ],
        },
        {
          pos: 14223,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [
            {
              refAA: 'T',
              queryAA: 'A',
              codon: 252,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 14804,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 17246,
          refNuc: 'T',
          queryNuc: 'C',
          aaSubstitutions: [],
        },
        {
          pos: 26143,
          refNuc: 'G',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'G',
              queryAA: 'V',
              codon: 250,
              gene: 'ORF3a',
            },
          ],
        },
      ],
      totalMutations: 8,
      aminoacidChanges: [
        {
          refAA: 'H',
          queryAA: 'R',
          codon: 416,
          gene: 'ORF1a',
        },
        {
          refAA: 'L',
          queryAA: 'F',
          codon: 3605,
          gene: 'ORF1a',
        },
        {
          refAA: 'T',
          queryAA: 'A',
          codon: 252,
          gene: 'ORF1b',
        },
        {
          refAA: 'G',
          queryAA: 'V',
          codon: 250,
          gene: 'ORF3a',
        },
      ],
      totalAminoacidChanges: 4,
      insertions: [],
      totalInsertions: 0,
      deletions: [],
      totalGaps: 0,
      missing: [],
      totalMissing: 0,
      nonACGTNs: [
        {
          begin: 379,
          nuc: 'K',
          end: 380,
        },
        {
          begin: 19892,
          nuc: 'Y',
          end: 19893,
        },
      ],
      totalNonACGTNs: 2,
      alignmentStart: 38,
      alignmentEnd: 29844,
      alignmentScore: 89387,
      diagnostics: {
        flags: [],
        diagnostics: {
          clusteredSNPs: [],
          totalMixedSites: 2,
          totalNumberOfMutations: 8,
        },
        nucleotideComposition: {
          '-': 96,
          'A': 8896,
          'C': 5479,
          'T': 9576,
          'G': 5854,
          'K': 1,
          'Y': 1,
        },
      },
    },
  },
  {
    status: 'done',
    id: 42,
    seqName: 'Australia/VIC329/2020',
    errors: [],
    result: {
      seqName: 'Australia/VIC329/2020',
      clades: {
        '20A': [
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'T',
          },
          {
            pos: 23403,
            nuc: 'G',
          },
        ],
      },
      substitutions: [
        {
          pos: 240,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 3036,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 14407,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'P',
              queryAA: 'L',
              codon: 313,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 23402,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [
            {
              refAA: 'D',
              queryAA: 'G',
              codon: 613,
              gene: 'S',
            },
          ],
        },
      ],
      totalMutations: 4,
      aminoacidChanges: [
        {
          refAA: 'P',
          queryAA: 'L',
          codon: 313,
          gene: 'ORF1b',
        },
        {
          refAA: 'D',
          queryAA: 'G',
          codon: 613,
          gene: 'S',
        },
      ],
      totalAminoacidChanges: 2,
      insertions: [],
      totalInsertions: 0,
      deletions: [],
      totalGaps: 0,
      missing: [
        {
          begin: 5341,
          nuc: 'N',
          end: 5342,
        },
        {
          begin: 9194,
          nuc: 'N',
          end: 9195,
        },
        {
          begin: 12139,
          nuc: 'N',
          end: 12141,
        },
        {
          begin: 22895,
          nuc: 'N',
          end: 22992,
        },
        {
          begin: 22994,
          nuc: 'N',
          end: 22998,
        },
        {
          begin: 23001,
          nuc: 'N',
          end: 23140,
        },
        {
          begin: 24911,
          nuc: 'N',
          end: 24912,
        },
      ],
      totalMissing: 245,
      nonACGTNs: [
        {
          begin: 481,
          nuc: 'Y',
          end: 482,
        },
        {
          begin: 557,
          nuc: 'K',
          end: 558,
        },
        {
          begin: 659,
          nuc: 'K',
          end: 660,
        },
        {
          begin: 662,
          nuc: 'K',
          end: 663,
        },
        {
          begin: 2035,
          nuc: 'K',
          end: 2036,
        },
        {
          begin: 3003,
          nuc: 'K',
          end: 3004,
        },
        {
          begin: 3550,
          nuc: 'Y',
          end: 3551,
        },
        {
          begin: 3563,
          nuc: 'K',
          end: 3564,
        },
        {
          begin: 4504,
          nuc: 'K',
          end: 4505,
        },
        {
          begin: 5383,
          nuc: 'K',
          end: 5384,
        },
        {
          begin: 5846,
          nuc: 'K',
          end: 5847,
        },
        {
          begin: 5879,
          nuc: 'K',
          end: 5880,
        },
        {
          begin: 6467,
          nuc: 'Y',
          end: 6468,
        },
        {
          begin: 6482,
          nuc: 'K',
          end: 6483,
        },
        {
          begin: 7037,
          nuc: 'K',
          end: 7038,
        },
        {
          begin: 8789,
          nuc: 'K',
          end: 8790,
        },
        {
          begin: 9140,
          nuc: 'K',
          end: 9141,
        },
        {
          begin: 9248,
          nuc: 'K',
          end: 9249,
        },
        {
          begin: 10166,
          nuc: 'K',
          end: 10167,
        },
        {
          begin: 10985,
          nuc: 'K',
          end: 10986,
        },
        {
          begin: 11534,
          nuc: 'K',
          end: 11535,
        },
        {
          begin: 12163,
          nuc: 'K',
          end: 12164,
        },
        {
          begin: 14276,
          nuc: 'K',
          end: 14277,
        },
        {
          begin: 14547,
          nuc: 'R',
          end: 14548,
        },
        {
          begin: 15768,
          nuc: 'K',
          end: 15769,
        },
        {
          begin: 16067,
          nuc: 'K',
          end: 16068,
        },
        {
          begin: 17095,
          nuc: 'K',
          end: 17096,
        },
        {
          begin: 17847,
          nuc: 'K',
          end: 17848,
        },
        {
          begin: 18317,
          nuc: 'K',
          end: 18318,
        },
        {
          begin: 20127,
          nuc: 'K',
          end: 20128,
        },
        {
          begin: 24556,
          nuc: 'K',
          end: 24557,
        },
        {
          begin: 24932,
          nuc: 'K',
          end: 24933,
        },
        {
          begin: 28078,
          nuc: 'K',
          end: 28079,
        },
        {
          begin: 29778,
          nuc: 'K',
          end: 29779,
        },
      ],
      totalNonACGTNs: 34,
      alignmentStart: 4,
      alignmentEnd: 29844,
      alignmentScore: 89505,
      diagnostics: {
        flags: ['Too many non-ACGT characters'],
        diagnostics: {
          clusteredSNPs: [],
          totalMixedSites: 34,
          totalNumberOfMutations: 4,
        },
        nucleotideComposition: {
          '-': 62,
          'A': 8842,
          'G': 5783,
          'T': 9500,
          'C': 5437,
          'Y': 3,
          'K': 30,
          'N': 245,
          'R': 1,
        },
      },
    },
  },
  {
    status: 'done',
    id: 43,
    seqName: 'Australia/VIC330/2020',
    errors: [],
    result: {
      seqName: 'Australia/VIC330/2020',
      clades: {
        '19B': [
          {
            pos: 8782,
            nuc: 'T',
          },
          {
            pos: 28144,
            nuc: 'C',
          },
        ],
      },
      substitutions: [
        {
          pos: 489,
          refNuc: 'T',
          queryNuc: 'A',
          aaSubstitutions: [
            {
              refAA: 'D',
              queryAA: 'E',
              codon: 74,
              gene: 'ORF1a',
            },
          ],
        },
        {
          pos: 3176,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'P',
              queryAA: 'L',
              codon: 970,
              gene: 'ORF1a',
            },
          ],
        },
        {
          pos: 8781,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 18735,
          refNuc: 'T',
          queryNuc: 'C',
          aaSubstitutions: [
            {
              refAA: 'F',
              queryAA: 'L',
              codon: 1756,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 19683,
          refNuc: 'G',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'V',
              queryAA: 'L',
              codon: 2072,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 24033,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 26728,
          refNuc: 'T',
          queryNuc: 'C',
          aaSubstitutions: [],
        },
        {
          pos: 27634,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'S',
              queryAA: 'L',
              codon: 80,
              gene: 'ORF7a',
            },
          ],
        },
        {
          pos: 28076,
          refNuc: 'G',
          queryNuc: 'C',
          aaSubstitutions: [
            {
              refAA: 'V',
              queryAA: 'L',
              codon: 61,
              gene: 'ORF8',
            },
          ],
        },
        {
          pos: 28143,
          refNuc: 'T',
          queryNuc: 'C',
          aaSubstitutions: [
            {
              refAA: 'L',
              queryAA: 'S',
              codon: 83,
              gene: 'ORF8',
            },
          ],
        },
        {
          pos: 29699,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [],
        },
      ],
      totalMutations: 11,
      aminoacidChanges: [
        {
          refAA: 'D',
          queryAA: 'E',
          codon: 74,
          gene: 'ORF1a',
        },
        {
          refAA: 'P',
          queryAA: 'L',
          codon: 970,
          gene: 'ORF1a',
        },
        {
          refAA: 'F',
          queryAA: 'L',
          codon: 1756,
          gene: 'ORF1b',
        },
        {
          refAA: 'V',
          queryAA: 'L',
          codon: 2072,
          gene: 'ORF1b',
        },
        {
          refAA: 'S',
          queryAA: 'L',
          codon: 80,
          gene: 'ORF7a',
        },
        {
          refAA: 'V',
          queryAA: 'L',
          codon: 61,
          gene: 'ORF8',
        },
        {
          refAA: 'L',
          queryAA: 'S',
          codon: 83,
          gene: 'ORF8',
        },
      ],
      totalAminoacidChanges: 7,
      insertions: [],
      totalInsertions: 0,
      deletions: [],
      totalGaps: 0,
      missing: [
        {
          begin: 4625,
          nuc: 'N',
          end: 4649,
        },
        {
          begin: 5370,
          nuc: 'N',
          end: 5387,
        },
        {
          begin: 5394,
          nuc: 'N',
          end: 5405,
        },
        {
          begin: 5411,
          nuc: 'N',
          end: 5470,
        },
        {
          begin: 5481,
          nuc: 'N',
          end: 5500,
        },
        {
          begin: 5537,
          nuc: 'N',
          end: 5571,
        },
        {
          begin: 22895,
          nuc: 'N',
          end: 23134,
        },
        {
          begin: 27022,
          nuc: 'N',
          end: 27045,
        },
        {
          begin: 29687,
          nuc: 'N',
          end: 29688,
        },
      ],
      totalMissing: 427,
      nonACGTNs: [
        {
          begin: 657,
          nuc: 'Y',
          end: 658,
        },
      ],
      totalNonACGTNs: 1,
      alignmentStart: 49,
      alignmentEnd: 29835,
      alignmentScore: 89315,
      diagnostics: {
        flags: [],
        diagnostics: {
          clusteredSNPs: [],
          totalMixedSites: 1,
          totalNumberOfMutations: 11,
        },
        nucleotideComposition: {
          '-': 116,
          'C': 5403,
          'T': 9430,
          'G': 5760,
          'A': 8766,
          'Y': 1,
          'N': 427,
        },
      },
    },
  },
  {
    status: 'done',
    id: 44,
    seqName: 'Australia/VIC367/2020',
    errors: [],
    result: {
      seqName: 'Australia/VIC367/2020',
      clades: {
        '19B': [
          {
            pos: 8782,
            nuc: 'T',
          },
          {
            pos: 28144,
            nuc: 'C',
          },
        ],
      },
      substitutions: [
        {
          pos: 8781,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 9476,
          refNuc: 'T',
          queryNuc: 'A',
          aaSubstitutions: [
            {
              refAA: 'F',
              queryAA: 'Y',
              codon: 3070,
              gene: 'ORF1a',
            },
          ],
        },
        {
          pos: 14804,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 25978,
          refNuc: 'G',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'G',
              queryAA: 'V',
              codon: 195,
              gene: 'ORF3a',
            },
          ],
        },
        {
          pos: 28143,
          refNuc: 'T',
          queryNuc: 'C',
          aaSubstitutions: [
            {
              refAA: 'L',
              queryAA: 'S',
              codon: 83,
              gene: 'ORF8',
            },
          ],
        },
        {
          pos: 28656,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 28759,
          refNuc: 'C',
          queryNuc: 'A',
          aaSubstitutions: [
            {
              refAA: 'Q',
              queryAA: 'K',
              codon: 162,
              gene: 'N',
            },
          ],
        },
        {
          pos: 28862,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'S',
              queryAA: 'L',
              codon: 196,
              gene: 'N',
            },
            {
              refAA: 'Q',
              queryAA: '*',
              codon: 43,
              gene: 'ORF14',
            },
          ],
        },
      ],
      totalMutations: 8,
      aminoacidChanges: [
        {
          refAA: 'F',
          queryAA: 'Y',
          codon: 3070,
          gene: 'ORF1a',
        },
        {
          refAA: 'G',
          queryAA: 'V',
          codon: 195,
          gene: 'ORF3a',
        },
        {
          refAA: 'L',
          queryAA: 'S',
          codon: 83,
          gene: 'ORF8',
        },
        {
          refAA: 'Q',
          queryAA: 'K',
          codon: 162,
          gene: 'N',
        },
        {
          refAA: 'S',
          queryAA: 'L',
          codon: 196,
          gene: 'N',
        },
        {
          refAA: 'Q',
          queryAA: '*',
          codon: 43,
          gene: 'ORF14',
        },
      ],
      totalAminoacidChanges: 6,
      insertions: [],
      totalInsertions: 0,
      deletions: [],
      totalGaps: 0,
      missing: [],
      totalMissing: 0,
      nonACGTNs: [],
      totalNonACGTNs: 0,
      alignmentStart: 8,
      alignmentEnd: 29850,
      alignmentScore: 89495,
      diagnostics: {
        flags: [],
        diagnostics: {
          clusteredSNPs: [],
          totalMixedSites: 0,
          totalNumberOfMutations: 8,
        },
        nucleotideComposition: {
          '-': 60,
          'T': 9590,
          'A': 8913,
          'C': 5485,
          'G': 5855,
        },
      },
    },
  },
  {
    status: 'done',
    id: 45,
    seqName: 'Australia/VIC380/2020',
    errors: [],
    result: {
      seqName: 'Australia/VIC380/2020',
      clades: {
        '20A': [
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'T',
          },
          {
            pos: 23403,
            nuc: 'G',
          },
        ],
        '20C': [
          {
            pos: 1059,
            nuc: 'T',
          },
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'T',
          },
          {
            pos: 23403,
            nuc: 'G',
          },
          {
            pos: 25563,
            nuc: 'T',
          },
        ],
      },
      substitutions: [
        {
          pos: 240,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 1058,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'T',
              queryAA: 'I',
              codon: 264,
              gene: 'ORF1a',
            },
          ],
        },
        {
          pos: 3036,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 14407,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'P',
              queryAA: 'L',
              codon: 313,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 19262,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 23402,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [
            {
              refAA: 'D',
              queryAA: 'G',
              codon: 613,
              gene: 'S',
            },
          ],
        },
        {
          pos: 25562,
          refNuc: 'G',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'Q',
              queryAA: 'H',
              codon: 56,
              gene: 'ORF3a',
            },
          ],
        },
      ],
      totalMutations: 7,
      aminoacidChanges: [
        {
          refAA: 'T',
          queryAA: 'I',
          codon: 264,
          gene: 'ORF1a',
        },
        {
          refAA: 'P',
          queryAA: 'L',
          codon: 313,
          gene: 'ORF1b',
        },
        {
          refAA: 'D',
          queryAA: 'G',
          codon: 613,
          gene: 'S',
        },
        {
          refAA: 'Q',
          queryAA: 'H',
          codon: 56,
          gene: 'ORF3a',
        },
      ],
      totalAminoacidChanges: 4,
      insertions: [],
      totalInsertions: 0,
      deletions: [],
      totalGaps: 0,
      missing: [
        {
          begin: 520,
          nuc: 'N',
          end: 523,
        },
        {
          begin: 685,
          nuc: 'N',
          end: 694,
        },
        {
          begin: 5308,
          nuc: 'N',
          end: 5429,
        },
        {
          begin: 5436,
          nuc: 'N',
          end: 5483,
        },
        {
          begin: 5556,
          nuc: 'N',
          end: 5574,
        },
        {
          begin: 17966,
          nuc: 'N',
          end: 17973,
        },
        {
          begin: 22333,
          nuc: 'N',
          end: 22346,
        },
        {
          begin: 22877,
          nuc: 'N',
          end: 23144,
        },
        {
          begin: 26890,
          nuc: 'N',
          end: 26913,
        },
      ],
      totalMissing: 508,
      nonACGTNs: [
        {
          begin: 202,
          nuc: 'Y',
          end: 203,
        },
        {
          begin: 3713,
          nuc: 'Y',
          end: 3714,
        },
        {
          begin: 6700,
          nuc: 'Y',
          end: 6701,
        },
        {
          begin: 13457,
          nuc: 'Y',
          end: 13458,
        },
        {
          begin: 18650,
          nuc: 'R',
          end: 18651,
        },
        {
          begin: 23602,
          nuc: 'Y',
          end: 23603,
        },
        {
          begin: 28252,
          nuc: 'Y',
          end: 28253,
        },
      ],
      totalNonACGTNs: 7,
      alignmentStart: 52,
      alignmentEnd: 29835,
      alignmentScore: 89322,
      diagnostics: {
        flags: [],
        diagnostics: {
          clusteredSNPs: [],
          totalMixedSites: 7,
          totalNumberOfMutations: 7,
        },
        nucleotideComposition: {
          '-': 119,
          'G': 5749,
          'T': 9404,
          'A': 8746,
          'C': 5370,
          'Y': 6,
          'N': 508,
          'R': 1,
        },
      },
    },
  },
  {
    status: 'done',
    id: 46,
    seqName: 'Australia/VIC385/2020',
    errors: [],
    result: {
      seqName: 'Australia/VIC385/2020',
      clades: {
        '19A': [
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'C',
          },
        ],
      },
      substitutions: [
        {
          pos: 3364,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'L',
              queryAA: 'F',
              codon: 1033,
              gene: 'ORF1a',
            },
          ],
        },
        {
          pos: 11082,
          refNuc: 'G',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'L',
              queryAA: 'F',
              codon: 3605,
              gene: 'ORF1a',
            },
          ],
        },
        {
          pos: 14804,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 23706,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 26143,
          refNuc: 'G',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'G',
              queryAA: 'V',
              codon: 250,
              gene: 'ORF3a',
            },
          ],
        },
      ],
      totalMutations: 5,
      aminoacidChanges: [
        {
          refAA: 'L',
          queryAA: 'F',
          codon: 1033,
          gene: 'ORF1a',
        },
        {
          refAA: 'L',
          queryAA: 'F',
          codon: 3605,
          gene: 'ORF1a',
        },
        {
          refAA: 'G',
          queryAA: 'V',
          codon: 250,
          gene: 'ORF3a',
        },
      ],
      totalAminoacidChanges: 3,
      insertions: [],
      totalInsertions: 0,
      deletions: [],
      totalGaps: 0,
      missing: [
        {
          begin: 7634,
          nuc: 'N',
          end: 7635,
        },
        {
          begin: 9193,
          nuc: 'N',
          end: 9195,
        },
        {
          begin: 12139,
          nuc: 'N',
          end: 12141,
        },
        {
          begin: 22005,
          nuc: 'N',
          end: 22006,
        },
        {
          begin: 22878,
          nuc: 'N',
          end: 22879,
        },
        {
          begin: 24911,
          nuc: 'N',
          end: 24912,
        },
        {
          begin: 25134,
          nuc: 'N',
          end: 25135,
        },
      ],
      totalMissing: 9,
      nonACGTNs: [
        {
          begin: 481,
          nuc: 'Y',
          end: 482,
        },
        {
          begin: 557,
          nuc: 'K',
          end: 558,
        },
        {
          begin: 659,
          nuc: 'K',
          end: 660,
        },
        {
          begin: 662,
          nuc: 'K',
          end: 663,
        },
        {
          begin: 2035,
          nuc: 'K',
          end: 2036,
        },
        {
          begin: 2603,
          nuc: 'K',
          end: 2604,
        },
        {
          begin: 3003,
          nuc: 'K',
          end: 3004,
        },
        {
          begin: 3258,
          nuc: 'K',
          end: 3259,
        },
        {
          begin: 3550,
          nuc: 'Y',
          end: 3551,
        },
        {
          begin: 3563,
          nuc: 'K',
          end: 3564,
        },
        {
          begin: 4504,
          nuc: 'K',
          end: 4505,
        },
        {
          begin: 5374,
          nuc: 'K',
          end: 5375,
        },
        {
          begin: 5377,
          nuc: 'K',
          end: 5378,
        },
        {
          begin: 5616,
          nuc: 'K',
          end: 5617,
        },
        {
          begin: 5879,
          nuc: 'K',
          end: 5880,
        },
        {
          begin: 6467,
          nuc: 'Y',
          end: 6468,
        },
        {
          begin: 6482,
          nuc: 'K',
          end: 6483,
        },
        {
          begin: 7016,
          nuc: 'K',
          end: 7017,
        },
        {
          begin: 7037,
          nuc: 'K',
          end: 7038,
        },
        {
          begin: 7193,
          nuc: 'Y',
          end: 7194,
        },
        {
          begin: 7213,
          nuc: 'K',
          end: 7214,
        },
        {
          begin: 7245,
          nuc: 'K',
          end: 7246,
        },
        {
          begin: 7362,
          nuc: 'K',
          end: 7363,
        },
        {
          begin: 8695,
          nuc: 'K',
          end: 8696,
        },
        {
          begin: 8789,
          nuc: 'K',
          end: 8790,
        },
        {
          begin: 9140,
          nuc: 'K',
          end: 9141,
        },
        {
          begin: 9248,
          nuc: 'K',
          end: 9249,
        },
        {
          begin: 10100,
          nuc: 'K',
          end: 10101,
        },
        {
          begin: 10166,
          nuc: 'K',
          end: 10167,
        },
        {
          begin: 10985,
          nuc: 'K',
          end: 10986,
        },
        {
          begin: 11534,
          nuc: 'K',
          end: 11535,
        },
        {
          begin: 12163,
          nuc: 'K',
          end: 12164,
        },
        {
          begin: 13239,
          nuc: 'K',
          end: 13240,
        },
        {
          begin: 13570,
          nuc: 'K',
          end: 13571,
        },
        {
          begin: 14276,
          nuc: 'K',
          end: 14277,
        },
        {
          begin: 14547,
          nuc: 'R',
          end: 14548,
        },
        {
          begin: 15198,
          nuc: 'K',
          end: 15199,
        },
        {
          begin: 15201,
          nuc: 'K',
          end: 15202,
        },
        {
          begin: 15768,
          nuc: 'K',
          end: 15769,
        },
        {
          begin: 16067,
          nuc: 'K',
          end: 16068,
        },
        {
          begin: 16187,
          nuc: 'K',
          end: 16188,
        },
        {
          begin: 16786,
          nuc: 'K',
          end: 16787,
        },
        {
          begin: 17095,
          nuc: 'K',
          end: 17096,
        },
        {
          begin: 17847,
          nuc: 'K',
          end: 17848,
        },
        {
          begin: 18296,
          nuc: 'K',
          end: 18297,
        },
        {
          begin: 18317,
          nuc: 'K',
          end: 18318,
        },
        {
          begin: 19251,
          nuc: 'K',
          end: 19252,
        },
        {
          begin: 21122,
          nuc: 'K',
          end: 21123,
        },
        {
          begin: 22017,
          nuc: 'K',
          end: 22018,
        },
        {
          begin: 22898,
          nuc: 'K',
          end: 22899,
        },
        {
          begin: 23161,
          nuc: 'K',
          end: 23162,
        },
        {
          begin: 23504,
          nuc: 'K',
          end: 23505,
        },
        {
          begin: 24556,
          nuc: 'K',
          end: 24557,
        },
        {
          begin: 24932,
          nuc: 'K',
          end: 24933,
        },
        {
          begin: 28076,
          nuc: 'K',
          end: 28077,
        },
        {
          begin: 28078,
          nuc: 'K',
          end: 28079,
        },
        {
          begin: 28085,
          nuc: 'K',
          end: 28086,
        },
        {
          begin: 28558,
          nuc: 'K',
          end: 28559,
        },
        {
          begin: 29778,
          nuc: 'K',
          end: 29779,
        },
        {
          begin: 29780,
          nuc: 'K',
          end: 29781,
        },
      ],
      totalNonACGTNs: 60,
      alignmentStart: 39,
      alignmentEnd: 29840,
      alignmentScore: 89384,
      diagnostics: {
        flags: ['Too many non-ACGT characters'],
        diagnostics: {
          clusteredSNPs: [],
          totalMixedSites: 60,
          totalNumberOfMutations: 5,
        },
        nucleotideComposition: {
          '-': 101,
          'C': 5466,
          'T': 9579,
          'G': 5794,
          'A': 8894,
          'Y': 4,
          'K': 55,
          'N': 9,
          'R': 1,
        },
      },
    },
  },
  {
    status: 'done',
    id: 47,
    seqName: 'Australia/VIC413/2020',
    errors: [],
    result: {
      seqName: 'Australia/VIC413/2020',
      clades: {
        '20A': [
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'T',
          },
          {
            pos: 23403,
            nuc: 'G',
          },
        ],
      },
      substitutions: [
        {
          pos: 240,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 3036,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 14407,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'P',
              queryAA: 'L',
              codon: 313,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 23402,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [
            {
              refAA: 'D',
              queryAA: 'G',
              codon: 613,
              gene: 'S',
            },
          ],
        },
        {
          pos: 25611,
          refNuc: 'T',
          queryNuc: 'C',
          aaSubstitutions: [
            {
              refAA: 'S',
              queryAA: 'P',
              codon: 73,
              gene: 'ORF3a',
            },
          ],
        },
      ],
      totalMutations: 5,
      aminoacidChanges: [
        {
          refAA: 'P',
          queryAA: 'L',
          codon: 313,
          gene: 'ORF1b',
        },
        {
          refAA: 'D',
          queryAA: 'G',
          codon: 613,
          gene: 'S',
        },
        {
          refAA: 'S',
          queryAA: 'P',
          codon: 73,
          gene: 'ORF3a',
        },
      ],
      totalAminoacidChanges: 3,
      insertions: [],
      totalInsertions: 0,
      deletions: [],
      totalGaps: 0,
      missing: [
        {
          begin: 156,
          nuc: 'N',
          end: 157,
        },
        {
          begin: 481,
          nuc: 'N',
          end: 482,
        },
        {
          begin: 658,
          nuc: 'N',
          end: 660,
        },
        {
          begin: 1304,
          nuc: 'N',
          end: 1305,
        },
        {
          begin: 1402,
          nuc: 'N',
          end: 1403,
        },
        {
          begin: 1967,
          nuc: 'N',
          end: 1968,
        },
        {
          begin: 2312,
          nuc: 'N',
          end: 2314,
        },
        {
          begin: 2440,
          nuc: 'N',
          end: 2441,
        },
        {
          begin: 2554,
          nuc: 'N',
          end: 2555,
        },
        {
          begin: 3504,
          nuc: 'N',
          end: 3505,
        },
        {
          begin: 3550,
          nuc: 'N',
          end: 3551,
        },
        {
          begin: 3561,
          nuc: 'N',
          end: 3562,
        },
        {
          begin: 4258,
          nuc: 'N',
          end: 4259,
        },
        {
          begin: 5001,
          nuc: 'N',
          end: 5002,
        },
        {
          begin: 5166,
          nuc: 'N',
          end: 5167,
        },
        {
          begin: 5169,
          nuc: 'N',
          end: 5170,
        },
        {
          begin: 5338,
          nuc: 'N',
          end: 5339,
        },
        {
          begin: 5372,
          nuc: 'N',
          end: 5373,
        },
        {
          begin: 5859,
          nuc: 'N',
          end: 5860,
        },
        {
          begin: 6732,
          nuc: 'N',
          end: 6733,
        },
        {
          begin: 6967,
          nuc: 'N',
          end: 6968,
        },
        {
          begin: 7036,
          nuc: 'N',
          end: 7037,
        },
        {
          begin: 7084,
          nuc: 'N',
          end: 7086,
        },
        {
          begin: 7193,
          nuc: 'N',
          end: 7194,
        },
        {
          begin: 7211,
          nuc: 'N',
          end: 7212,
        },
        {
          begin: 7633,
          nuc: 'N',
          end: 7635,
        },
        {
          begin: 8737,
          nuc: 'N',
          end: 8739,
        },
        {
          begin: 9139,
          nuc: 'N',
          end: 9140,
        },
        {
          begin: 9194,
          nuc: 'N',
          end: 9195,
        },
        {
          begin: 10378,
          nuc: 'N',
          end: 10379,
        },
        {
          begin: 10985,
          nuc: 'N',
          end: 10986,
        },
        {
          begin: 12139,
          nuc: 'N',
          end: 12141,
        },
        {
          begin: 13393,
          nuc: 'N',
          end: 13394,
        },
        {
          begin: 13569,
          nuc: 'N',
          end: 13571,
        },
        {
          begin: 13670,
          nuc: 'N',
          end: 13671,
        },
        {
          begin: 14427,
          nuc: 'N',
          end: 14428,
        },
        {
          begin: 14546,
          nuc: 'N',
          end: 14548,
        },
        {
          begin: 16095,
          nuc: 'N',
          end: 16096,
        },
        {
          begin: 16661,
          nuc: 'N',
          end: 16662,
        },
        {
          begin: 17094,
          nuc: 'N',
          end: 17095,
        },
        {
          begin: 17846,
          nuc: 'N',
          end: 17847,
        },
        {
          begin: 18135,
          nuc: 'N',
          end: 18138,
        },
        {
          begin: 21076,
          nuc: 'N',
          end: 21077,
        },
        {
          begin: 22005,
          nuc: 'N',
          end: 22006,
        },
        {
          begin: 22333,
          nuc: 'N',
          end: 22523,
        },
        {
          begin: 23287,
          nuc: 'N',
          end: 23288,
        },
        {
          begin: 24910,
          nuc: 'N',
          end: 24912,
        },
        {
          begin: 25133,
          nuc: 'N',
          end: 25135,
        },
        {
          begin: 25350,
          nuc: 'N',
          end: 25351,
        },
        {
          begin: 25893,
          nuc: 'N',
          end: 25894,
        },
        {
          begin: 25975,
          nuc: 'N',
          end: 25976,
        },
        {
          begin: 26214,
          nuc: 'N',
          end: 26217,
        },
        {
          begin: 26261,
          nuc: 'N',
          end: 26262,
        },
        {
          begin: 26408,
          nuc: 'N',
          end: 26409,
        },
        {
          begin: 28076,
          nuc: 'N',
          end: 28077,
        },
        {
          begin: 28345,
          nuc: 'N',
          end: 28346,
        },
        {
          begin: 28470,
          nuc: 'N',
          end: 28471,
        },
        {
          begin: 28475,
          nuc: 'N',
          end: 28476,
        },
        {
          begin: 28791,
          nuc: 'N',
          end: 28792,
        },
        {
          begin: 28855,
          nuc: 'N',
          end: 28857,
        },
        {
          begin: 29041,
          nuc: 'N',
          end: 29307,
        },
        {
          begin: 29319,
          nuc: 'N',
          end: 29321,
        },
        {
          begin: 29524,
          nuc: 'N',
          end: 29525,
        },
        {
          begin: 29559,
          nuc: 'N',
          end: 29560,
        },
      ],
      totalMissing: 534,
      nonACGTNs: [
        {
          begin: 284,
          nuc: 'K',
          end: 285,
        },
        {
          begin: 552,
          nuc: 'K',
          end: 553,
        },
        {
          begin: 557,
          nuc: 'K',
          end: 558,
        },
        {
          begin: 662,
          nuc: 'K',
          end: 663,
        },
        {
          begin: 944,
          nuc: 'K',
          end: 945,
        },
        {
          begin: 1017,
          nuc: 'K',
          end: 1018,
        },
        {
          begin: 1073,
          nuc: 'K',
          end: 1074,
        },
        {
          begin: 1405,
          nuc: 'K',
          end: 1406,
        },
        {
          begin: 1487,
          nuc: 'K',
          end: 1488,
        },
        {
          begin: 1606,
          nuc: 'K',
          end: 1607,
        },
        {
          begin: 2035,
          nuc: 'K',
          end: 2036,
        },
        {
          begin: 2100,
          nuc: 'K',
          end: 2101,
        },
        {
          begin: 2380,
          nuc: 'K',
          end: 2381,
        },
        {
          begin: 2603,
          nuc: 'K',
          end: 2604,
        },
        {
          begin: 2768,
          nuc: 'K',
          end: 2769,
        },
        {
          begin: 3003,
          nuc: 'K',
          end: 3004,
        },
        {
          begin: 3049,
          nuc: 'K',
          end: 3050,
        },
        {
          begin: 3178,
          nuc: 'K',
          end: 3179,
        },
        {
          begin: 3210,
          nuc: 'K',
          end: 3211,
        },
        {
          begin: 3211,
          nuc: 'R',
          end: 3212,
        },
        {
          begin: 3215,
          nuc: 'K',
          end: 3216,
        },
        {
          begin: 3250,
          nuc: 'K',
          end: 3251,
        },
        {
          begin: 3258,
          nuc: 'K',
          end: 3259,
        },
        {
          begin: 3479,
          nuc: 'Y',
          end: 3480,
        },
        {
          begin: 3500,
          nuc: 'Y',
          end: 3501,
        },
        {
          begin: 3503,
          nuc: 'W',
          end: 3504,
        },
        {
          begin: 3563,
          nuc: 'K',
          end: 3564,
        },
        {
          begin: 3895,
          nuc: 'K',
          end: 3896,
        },
        {
          begin: 4487,
          nuc: 'K',
          end: 4488,
        },
        {
          begin: 4504,
          nuc: 'K',
          end: 4505,
        },
        {
          begin: 4853,
          nuc: 'K',
          end: 4854,
        },
        {
          begin: 4907,
          nuc: 'K',
          end: 4908,
        },
        {
          begin: 5154,
          nuc: 'K',
          end: 5155,
        },
        {
          begin: 5199,
          nuc: 'K',
          end: 5200,
        },
        {
          begin: 5220,
          nuc: 'Y',
          end: 5221,
        },
        {
          begin: 5232,
          nuc: 'R',
          end: 5233,
        },
        {
          begin: 5353,
          nuc: 'K',
          end: 5354,
        },
        {
          begin: 5374,
          nuc: 'K',
          end: 5375,
        },
        {
          begin: 5616,
          nuc: 'K',
          end: 5617,
        },
        {
          begin: 5795,
          nuc: 'Y',
          end: 5796,
        },
        {
          begin: 5825,
          nuc: 'Y',
          end: 5826,
        },
        {
          begin: 5846,
          nuc: 'K',
          end: 5847,
        },
        {
          begin: 5879,
          nuc: 'K',
          end: 5880,
        },
        {
          begin: 6445,
          nuc: 'K',
          end: 6446,
        },
        {
          begin: 6467,
          nuc: 'Y',
          end: 6468,
        },
        {
          begin: 6482,
          nuc: 'K',
          end: 6483,
        },
        {
          begin: 6803,
          nuc: 'K',
          end: 6804,
        },
        {
          begin: 7009,
          nuc: 'K',
          end: 7010,
        },
        {
          begin: 7016,
          nuc: 'K',
          end: 7017,
        },
        {
          begin: 7037,
          nuc: 'K',
          end: 7038,
        },
        {
          begin: 7213,
          nuc: 'K',
          end: 7214,
        },
        {
          begin: 7245,
          nuc: 'K',
          end: 7246,
        },
        {
          begin: 7362,
          nuc: 'K',
          end: 7363,
        },
        {
          begin: 7804,
          nuc: 'R',
          end: 7805,
        },
        {
          begin: 8458,
          nuc: 'K',
          end: 8459,
        },
        {
          begin: 8677,
          nuc: 'R',
          end: 8678,
        },
        {
          begin: 8687,
          nuc: 'K',
          end: 8688,
        },
        {
          begin: 8695,
          nuc: 'K',
          end: 8696,
        },
        {
          begin: 8786,
          nuc: 'K',
          end: 8787,
        },
        {
          begin: 8789,
          nuc: 'K',
          end: 8790,
        },
        {
          begin: 8942,
          nuc: 'K',
          end: 8943,
        },
        {
          begin: 9109,
          nuc: 'Y',
          end: 9110,
        },
        {
          begin: 9140,
          nuc: 'K',
          end: 9141,
        },
        {
          begin: 9248,
          nuc: 'K',
          end: 9249,
        },
        {
          begin: 10097,
          nuc: 'K',
          end: 10098,
        },
        {
          begin: 10166,
          nuc: 'K',
          end: 10167,
        },
        {
          begin: 10265,
          nuc: 'K',
          end: 10266,
        },
        {
          begin: 10367,
          nuc: 'K',
          end: 10368,
        },
        {
          begin: 10674,
          nuc: 'K',
          end: 10675,
        },
        {
          begin: 10753,
          nuc: 'K',
          end: 10754,
        },
        {
          begin: 11391,
          nuc: 'K',
          end: 11392,
        },
        {
          begin: 11416,
          nuc: 'K',
          end: 11417,
        },
        {
          begin: 11534,
          nuc: 'K',
          end: 11535,
        },
        {
          begin: 12040,
          nuc: 'K',
          end: 12041,
        },
        {
          begin: 12159,
          nuc: 'K',
          end: 12160,
        },
        {
          begin: 12163,
          nuc: 'K',
          end: 12164,
        },
        {
          begin: 12490,
          nuc: 'K',
          end: 12491,
        },
        {
          begin: 12832,
          nuc: 'K',
          end: 12833,
        },
        {
          begin: 13160,
          nuc: 'K',
          end: 13161,
        },
        {
          begin: 13192,
          nuc: 'K',
          end: 13193,
        },
        {
          begin: 13238,
          nuc: 'Y',
          end: 13239,
        },
        {
          begin: 13239,
          nuc: 'K',
          end: 13240,
        },
        {
          begin: 13849,
          nuc: 'K',
          end: 13850,
        },
        {
          begin: 14187,
          nuc: 'K',
          end: 14188,
        },
        {
          begin: 14196,
          nuc: 'K',
          end: 14197,
        },
        {
          begin: 14260,
          nuc: 'W',
          end: 14261,
        },
        {
          begin: 14276,
          nuc: 'K',
          end: 14277,
        },
        {
          begin: 14535,
          nuc: 'Y',
          end: 14536,
        },
        {
          begin: 15074,
          nuc: 'K',
          end: 15075,
        },
        {
          begin: 15198,
          nuc: 'K',
          end: 15199,
        },
        {
          begin: 15201,
          nuc: 'K',
          end: 15202,
        },
        {
          begin: 15768,
          nuc: 'K',
          end: 15769,
        },
        {
          begin: 16067,
          nuc: 'K',
          end: 16068,
        },
        {
          begin: 16187,
          nuc: 'K',
          end: 16188,
        },
        {
          begin: 16435,
          nuc: 'K',
          end: 16436,
        },
        {
          begin: 16465,
          nuc: 'Y',
          end: 16466,
        },
        {
          begin: 16507,
          nuc: 'K',
          end: 16508,
        },
        {
          begin: 16625,
          nuc: 'Y',
          end: 16626,
        },
        {
          begin: 16737,
          nuc: 'K',
          end: 16738,
        },
        {
          begin: 16740,
          nuc: 'K',
          end: 16741,
        },
        {
          begin: 16786,
          nuc: 'K',
          end: 16787,
        },
        {
          begin: 16987,
          nuc: 'K',
          end: 16988,
        },
        {
          begin: 17095,
          nuc: 'K',
          end: 17096,
        },
        {
          begin: 17517,
          nuc: 'Y',
          end: 17518,
        },
        {
          begin: 17667,
          nuc: 'K',
          end: 17668,
        },
        {
          begin: 17715,
          nuc: 'K',
          end: 17716,
        },
        {
          begin: 17830,
          nuc: 'Y',
          end: 17831,
        },
        {
          begin: 17847,
          nuc: 'B',
          end: 17848,
        },
        {
          begin: 17848,
          nuc: 'K',
          end: 17849,
        },
        {
          begin: 18262,
          nuc: 'Y',
          end: 18263,
        },
        {
          begin: 18296,
          nuc: 'K',
          end: 18297,
        },
        {
          begin: 18317,
          nuc: 'K',
          end: 18318,
        },
        {
          begin: 18444,
          nuc: 'K',
          end: 18445,
        },
        {
          begin: 19085,
          nuc: 'K',
          end: 19086,
        },
        {
          begin: 19249,
          nuc: 'K',
          end: 19250,
        },
        {
          begin: 19251,
          nuc: 'K',
          end: 19252,
        },
        {
          begin: 19387,
          nuc: 'K',
          end: 19388,
        },
        {
          begin: 19445,
          nuc: 'K',
          end: 19446,
        },
        {
          begin: 19477,
          nuc: 'K',
          end: 19478,
        },
        {
          begin: 19479,
          nuc: 'K',
          end: 19480,
        },
        {
          begin: 19581,
          nuc: 'K',
          end: 19582,
        },
        {
          begin: 19678,
          nuc: 'K',
          end: 19679,
        },
        {
          begin: 20127,
          nuc: 'K',
          end: 20128,
        },
        {
          begin: 20626,
          nuc: 'K',
          end: 20627,
        },
        {
          begin: 20914,
          nuc: 'K',
          end: 20915,
        },
        {
          begin: 20921,
          nuc: 'K',
          end: 20922,
        },
        {
          begin: 21122,
          nuc: 'K',
          end: 21123,
        },
        {
          begin: 21280,
          nuc: 'K',
          end: 21281,
        },
        {
          begin: 21306,
          nuc: 'B',
          end: 21307,
        },
        {
          begin: 21715,
          nuc: 'Y',
          end: 21716,
        },
        {
          begin: 22017,
          nuc: 'K',
          end: 22018,
        },
        {
          begin: 22256,
          nuc: 'K',
          end: 22257,
        },
        {
          begin: 22858,
          nuc: 'K',
          end: 22859,
        },
        {
          begin: 22898,
          nuc: 'K',
          end: 22899,
        },
        {
          begin: 22932,
          nuc: 'K',
          end: 22933,
        },
        {
          begin: 23015,
          nuc: 'K',
          end: 23016,
        },
        {
          begin: 23161,
          nuc: 'K',
          end: 23162,
        },
        {
          begin: 23290,
          nuc: 'Y',
          end: 23291,
        },
        {
          begin: 23297,
          nuc: 'Y',
          end: 23298,
        },
        {
          begin: 23301,
          nuc: 'K',
          end: 23302,
        },
        {
          begin: 23342,
          nuc: 'K',
          end: 23343,
        },
        {
          begin: 23662,
          nuc: 'K',
          end: 23663,
        },
        {
          begin: 23737,
          nuc: 'W',
          end: 23738,
        },
        {
          begin: 23744,
          nuc: 'Y',
          end: 23745,
        },
        {
          begin: 23765,
          nuc: 'Y',
          end: 23766,
        },
        {
          begin: 23767,
          nuc: 'K',
          end: 23768,
        },
        {
          begin: 23774,
          nuc: 'K',
          end: 23775,
        },
        {
          begin: 23854,
          nuc: 'Y',
          end: 23855,
        },
        {
          begin: 23855,
          nuc: 'K',
          end: 23856,
        },
        {
          begin: 23872,
          nuc: 'K',
          end: 23873,
        },
        {
          begin: 24496,
          nuc: 'K',
          end: 24497,
        },
        {
          begin: 24556,
          nuc: 'K',
          end: 24557,
        },
        {
          begin: 24932,
          nuc: 'K',
          end: 24933,
        },
        {
          begin: 25351,
          nuc: 'K',
          end: 25352,
        },
        {
          begin: 25620,
          nuc: 'K',
          end: 25621,
        },
        {
          begin: 25935,
          nuc: 'Y',
          end: 25936,
        },
        {
          begin: 26427,
          nuc: 'K',
          end: 26428,
        },
        {
          begin: 27032,
          nuc: 'K',
          end: 27033,
        },
        {
          begin: 27365,
          nuc: 'K',
          end: 27366,
        },
        {
          begin: 27505,
          nuc: 'K',
          end: 27506,
        },
        {
          begin: 27601,
          nuc: 'K',
          end: 27602,
        },
        {
          begin: 28078,
          nuc: 'K',
          end: 28079,
        },
        {
          begin: 28085,
          nuc: 'K',
          end: 28086,
        },
        {
          begin: 28088,
          nuc: 'K',
          end: 28089,
        },
        {
          begin: 28108,
          nuc: 'K',
          end: 28109,
        },
        {
          begin: 28516,
          nuc: 'K',
          end: 28517,
        },
        {
          begin: 28558,
          nuc: 'K',
          end: 28559,
        },
        {
          begin: 28780,
          nuc: 'K',
          end: 28781,
        },
        {
          begin: 29347,
          nuc: 'K',
          end: 29348,
        },
      ],
      totalNonACGTNs: 169,
      alignmentStart: 39,
      alignmentEnd: 29841,
      alignmentScore: 89387,
      diagnostics: {
        flags: ['Too many non-ACGT characters'],
        diagnostics: {
          clusteredSNPs: [],
          totalMixedSites: 169,
          totalNumberOfMutations: 5,
        },
        nucleotideComposition: {
          '-': 100,
          'C': 5324,
          'T': 9459,
          'G': 5586,
          'A': 8731,
          'N': 534,
          'K': 139,
          'R': 4,
          'Y': 21,
          'W': 3,
          'B': 2,
        },
      },
    },
  },
  {
    status: 'done',
    id: 48,
    seqName: 'Australia/VIC423/2020',
    errors: [],
    result: {
      seqName: 'Australia/VIC423/2020',
      clades: {
        '19A': [
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'C',
          },
        ],
      },
      substitutions: [
        {
          pos: 17857,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [
            {
              refAA: 'Y',
              queryAA: 'C',
              codon: 1463,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 18059,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 28143,
          refNuc: 'T',
          queryNuc: 'C',
          aaSubstitutions: [
            {
              refAA: 'L',
              queryAA: 'S',
              codon: 83,
              gene: 'ORF8',
            },
          ],
        },
      ],
      totalMutations: 3,
      aminoacidChanges: [
        {
          refAA: 'Y',
          queryAA: 'C',
          codon: 1463,
          gene: 'ORF1b',
        },
        {
          refAA: 'L',
          queryAA: 'S',
          codon: 83,
          gene: 'ORF8',
        },
      ],
      totalAminoacidChanges: 2,
      insertions: [],
      totalInsertions: 0,
      deletions: [],
      totalGaps: 0,
      missing: [
        {
          begin: 5620,
          nuc: 'N',
          end: 5656,
        },
        {
          begin: 5741,
          nuc: 'N',
          end: 5765,
        },
        {
          begin: 5769,
          nuc: 'N',
          end: 5771,
        },
        {
          begin: 6267,
          nuc: 'N',
          end: 6271,
        },
        {
          begin: 6312,
          nuc: 'N',
          end: 6313,
        },
        {
          begin: 6335,
          nuc: 'N',
          end: 6344,
        },
        {
          begin: 6402,
          nuc: 'N',
          end: 6475,
        },
        {
          begin: 8635,
          nuc: 'N',
          end: 8896,
        },
        {
          begin: 13456,
          nuc: 'N',
          end: 13623,
        },
        {
          begin: 17966,
          nuc: 'N',
          end: 17975,
        },
        {
          begin: 21160,
          nuc: 'N',
          end: 21213,
        },
        {
          begin: 21241,
          nuc: 'N',
          end: 21288,
        },
        {
          begin: 21301,
          nuc: 'N',
          end: 21386,
        },
        {
          begin: 22026,
          nuc: 'N',
          end: 22066,
        },
        {
          begin: 22262,
          nuc: 'N',
          end: 22293,
        },
        {
          begin: 22297,
          nuc: 'N',
          end: 22523,
        },
        {
          begin: 22896,
          nuc: 'N',
          end: 22899,
        },
        {
          begin: 23007,
          nuc: 'N',
          end: 23131,
        },
        {
          begin: 29041,
          nuc: 'N',
          end: 29316,
        },
      ],
      totalMissing: 1470,
      nonACGTNs: [
        {
          begin: 99,
          nuc: 'Y',
          end: 100,
        },
        {
          begin: 2658,
          nuc: 'S',
          end: 2659,
        },
        {
          begin: 3637,
          nuc: 'K',
          end: 3638,
        },
        {
          begin: 5704,
          nuc: 'W',
          end: 5705,
        },
        {
          begin: 14665,
          nuc: 'S',
          end: 14666,
        },
        {
          begin: 17585,
          nuc: 'Y',
          end: 17586,
        },
        {
          begin: 17746,
          nuc: 'Y',
          end: 17747,
        },
        {
          begin: 24049,
          nuc: 'K',
          end: 24050,
        },
        {
          begin: 25073,
          nuc: 'K',
          end: 25074,
        },
      ],
      totalNonACGTNs: 9,
      alignmentStart: 49,
      alignmentEnd: 29840,
      alignmentScore: 89362,
      diagnostics: {
        flags: ['missing data'],
        diagnostics: {
          clusteredSNPs: [],
          totalMixedSites: 9,
          totalNumberOfMutations: 3,
        },
        nucleotideComposition: {
          '-': 111,
          'C': 5182,
          'T': 9131,
          'G': 5548,
          'A': 8452,
          'Y': 3,
          'S': 2,
          'K': 3,
          'N': 1470,
          'W': 1,
        },
      },
    },
  },
  {
    status: 'done',
    id: 49,
    seqName: 'Australia/VIC431/2020',
    errors: [],
    result: {
      seqName: 'Australia/VIC431/2020',
      clades: {
        '20A': [
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'T',
          },
          {
            pos: 23403,
            nuc: 'G',
          },
        ],
        '20C': [
          {
            pos: 1059,
            nuc: 'T',
          },
          {
            pos: 8782,
            nuc: 'C',
          },
          {
            pos: 14408,
            nuc: 'T',
          },
          {
            pos: 23403,
            nuc: 'G',
          },
          {
            pos: 25563,
            nuc: 'T',
          },
        ],
      },
      substitutions: [
        {
          pos: 240,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 1058,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'T',
              queryAA: 'I',
              codon: 264,
              gene: 'ORF1a',
            },
          ],
        },
        {
          pos: 3036,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [],
        },
        {
          pos: 14407,
          refNuc: 'C',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'P',
              queryAA: 'L',
              codon: 313,
              gene: 'ORF1b',
            },
          ],
        },
        {
          pos: 23402,
          refNuc: 'A',
          queryNuc: 'G',
          aaSubstitutions: [
            {
              refAA: 'D',
              queryAA: 'G',
              codon: 613,
              gene: 'S',
            },
          ],
        },
        {
          pos: 25562,
          refNuc: 'G',
          queryNuc: 'T',
          aaSubstitutions: [
            {
              refAA: 'Q',
              queryAA: 'H',
              codon: 56,
              gene: 'ORF3a',
            },
          ],
        },
      ],
      totalMutations: 6,
      aminoacidChanges: [
        {
          refAA: 'T',
          queryAA: 'I',
          codon: 264,
          gene: 'ORF1a',
        },
        {
          refAA: 'P',
          queryAA: 'L',
          codon: 313,
          gene: 'ORF1b',
        },
        {
          refAA: 'D',
          queryAA: 'G',
          codon: 613,
          gene: 'S',
        },
        {
          refAA: 'Q',
          queryAA: 'H',
          codon: 56,
          gene: 'ORF3a',
        },
      ],
      totalAminoacidChanges: 4,
      insertions: [],
      totalInsertions: 0,
      deletions: [],
      totalGaps: 0,
      missing: [
        {
          begin: 1636,
          nuc: 'N',
          end: 1637,
        },
        {
          begin: 2325,
          nuc: 'N',
          end: 2326,
        },
        {
          begin: 3575,
          nuc: 'N',
          end: 3576,
        },
        {
          begin: 4217,
          nuc: 'N',
          end: 4218,
        },
        {
          begin: 5620,
          nuc: 'N',
          end: 5703,
        },
        {
          begin: 5733,
          nuc: 'N',
          end: 5750,
        },
        {
          begin: 5761,
          nuc: 'N',
          end: 5877,
        },
        {
          begin: 6262,
          nuc: 'N',
          end: 6307,
        },
        {
          begin: 6326,
          nuc: 'N',
          end: 6344,
        },
        {
          begin: 6346,
          nuc: 'N',
          end: 6360,
        },
        {
          begin: 6362,
          nuc: 'N',
          end: 6372,
        },
        {
          begin: 6432,
          nuc: 'N',
          end: 6474,
        },
        {
          begin: 7288,
          nuc: 'N',
          end: 7289,
        },
        {
          begin: 8635,
          nuc: 'N',
          end: 8912,
        },
        {
          begin: 12020,
          nuc: 'N',
          end: 12021,
        },
        {
          begin: 13378,
          nuc: 'N',
          end: 13625,
        },
        {
          begin: 20294,
          nuc: 'N',
          end: 20295,
        },
        {
          begin: 21157,
          nuc: 'N',
          end: 21386,
        },
        {
          begin: 22026,
          nuc: 'N',
          end: 22038,
        },
        {
          begin: 22199,
          nuc: 'N',
          end: 22523,
        },
        {
          begin: 22895,
          nuc: 'N',
          end: 23131,
        },
        {
          begin: 28698,
          nuc: 'N',
          end: 28699,
        },
        {
          begin: 28756,
          nuc: 'N',
          end: 28757,
        },
        {
          begin: 29071,
          nuc: 'N',
          end: 29316,
        },
      ],
      totalMissing: 1924,
      nonACGTNs: [
        {
          begin: 505,
          nuc: 'Y',
          end: 506,
        },
        {
          begin: 4100,
          nuc: 'Y',
          end: 4101,
        },
        {
          begin: 5703,
          nuc: 'K',
          end: 5704,
        },
        {
          begin: 14177,
          nuc: 'Y',
          end: 14178,
        },
        {
          begin: 15527,
          nuc: 'Y',
          end: 15528,
        },
        {
          begin: 23147,
          nuc: 'R',
          end: 23148,
        },
        {
          begin: 25203,
          nuc: 'K',
          end: 25204,
        },
        {
          begin: 28755,
          nuc: 'Y',
          end: 28756,
        },
      ],
      totalNonACGTNs: 8,
      alignmentStart: 49,
      alignmentEnd: 29837,
      alignmentScore: 89341,
      diagnostics: {
        flags: ['missing data'],
        diagnostics: {
          clusteredSNPs: [],
          totalMixedSites: 8,
          totalNumberOfMutations: 6,
        },
        nucleotideComposition: {
          '-': 114,
          'C': 5094,
          'T': 8987,
          'G': 5448,
          'A': 8328,
          'Y': 5,
          'N': 1924,
          'K': 2,
          'R': 1,
        },
      },
    },
  },
] as unknown) as SequenceAnalysisState[]
