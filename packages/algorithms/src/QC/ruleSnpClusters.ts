import { clamp } from 'lodash'

import type { AnalysisResult, ClusteredSNPs, NucleotideSubstitution } from 'src/types'

export function findSNPClusters(
  { substitutions }: AnalysisResult,
  mutationsDiff: NucleotideSubstitution[],
  { knownClusters, windowSize, clusterCutOff }: QCRulesConfigSNPClusters,
) {
  // turn mutation keys into positions, exclude known clusters, and sort
  const positions = substitutions.filter(({ pos }) => !knownClusters.has(pos)).sort((a, b) => a.pos - b.pos)

  // loop over all mutations and count how many fall into the clusters
  let previousPos = -1
  const currentCluster: number[] = []
  const allClusters: number[][] = []
  positions.forEach(({ pos }) => {
    currentCluster.push(pos)
    while (currentCluster[0] < pos - windowSize) {
      currentCluster.shift()
    }
    if (currentCluster.length > clusterCutOff) {
      // if the cluster grows uninterrupted, add to the previous cluster
      if (
        allClusters.length > 0 &&
        currentCluster.length > 1 &&
        allClusters[allClusters.length - 1][allClusters[allClusters.length - 1].length - 1] === previousPos
      ) {
        allClusters[allClusters.length - 1].push(pos)
      } else {
        // add a new cluster
        allClusters.push(currentCluster.map((d) => d))
      }
    }
    previousPos = pos
  })

  return allClusters
}

export function processSNPClusters(snpClusters: number[][]) {
  const clusteredSNPs: ClusteredSNPs[] = []

  // FIXME: unnecessary conditional? Iteration on an empty array is valid and yields an empty array.
  if (snpClusters.length > 0) {
    // FIXME: this looks like a map()
    snpClusters.forEach((cluster) => {
      clusteredSNPs.push({
        start: cluster[0],
        end: cluster[cluster.length - 1],
        numberOfSNPs: cluster.length,
      })
    })
  }

  return clusteredSNPs
}

export interface QCRulesConfigSNPClusters {
  knownClusters: Set<number>
  windowSize: number
  clusterCutOff: number
  totalSNPsThreshold: number
  scoreWeight: number
  scoreBias: number
  scoreMax: number
}

export function ruleSnpClusters(
  data: AnalysisResult,
  mutationsDiff: NucleotideSubstitution[],
  config: QCRulesConfigSNPClusters,
) {
  const { totalSNPsThreshold, scoreWeight, scoreBias, scoreMax } = config

  const snpClusters = findSNPClusters(data, mutationsDiff, config)
  const clusteredSNPs = processSNPClusters(snpClusters)
  const totalSNPs = clusteredSNPs.reduce((acc, { numberOfSNPs }) => acc + numberOfSNPs, 0)

  let scoreRaw = 0
  if (totalSNPs > totalSNPsThreshold) {
    scoreRaw = (totalSNPs - totalSNPsThreshold) * scoreWeight - scoreBias
  }
  const score = clamp(scoreRaw, 0, scoreMax)

  return { score, totalSNPs, totalSNPsThreshold, clusteredSNPs }
}

export type QCResultSNPClusters = ReturnType<typeof ruleSnpClusters>
