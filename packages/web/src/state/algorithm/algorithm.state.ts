import type { AnalysisResult } from '@neherlab/nextclade-algorithms'
import type { Sorting } from 'src/helpers/sortResults'

import { DEFAULT_ROOT_SEQUENCE, QCResult } from '@neherlab/nextclade-algorithms'
// import { getFakeResults } from 'src/assets/data/getFakeResults'
import { AuspiceJsonV2 } from 'auspice'

export interface InputFile {
  name: string
  size: number
}

export interface AlgorithmParams {
  input: string
  rootSeq: string
}

export enum AlgorithmGlobalStatus {
  idling = 'idling',
  started = 'started',
  parsing = 'parsing',
  analysis = 'analysis',
  treeBuild = 'treeBuild',
  qc = 'qc',
  treeFinalization = 'treeFinalization',
  allDone = 'allDone',
}

export enum AlgorithmSequenceStatus {
  idling = 'idling',
  analysisStarted = 'analysisStarted',
  analysisDone = 'analysisDone',
  analysisFailed = 'analysisFailed',
  qcStarted = 'qcStarted',
  qcDone = 'qcDone',
  qcFailed = 'qcFailed',
}

export interface SequenceAnalysisState {
  id: number
  seqName: string
  status: AlgorithmSequenceStatus
  result?: AnalysisResult
  qc?: QCResult
  errors: string[]
}

export interface ResultsFilters {
  seqNamesFilter?: string
  mutationsFilter?: string
  aaFilter?: string
  cladesFilter?: string
  hasNoQcIssuesFilter: boolean
  hasQcIssuesFilter: boolean
  hasErrorsFilter: boolean
  sorting?: Sorting
}

export interface AlgorithmState {
  status: AlgorithmGlobalStatus
  inputFile?: InputFile
  params: AlgorithmParams
  isDirty: boolean
  results: SequenceAnalysisState[]
  resultsFiltered: SequenceAnalysisState[]
  tree: AuspiceJsonV2
  errors: string[]
  filters: ResultsFilters
}

const fakeState: Partial<AlgorithmState> = {}
if (process.env.DEBUG_SET_INITIAL_DATA === 'true') {
  // fakeState.results = getFakeResults()
  // fakeState.resultsFiltered = fakeState.results
  // fakeState.status = AlgorithmGlobalStatus.done
}

export const algorithmDefaultState: AlgorithmState = {
  status: AlgorithmGlobalStatus.idling,
  params: {
    input: '',
    rootSeq: DEFAULT_ROOT_SEQUENCE,
  },
  isDirty: true,
  results: [],
  resultsFiltered: [],
  tree: {},
  errors: [],
  filters: {
    hasNoQcIssuesFilter: true,
    hasQcIssuesFilter: true,
    hasErrorsFilter: true,
  },
  ...fakeState,
}
