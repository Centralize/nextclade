import React from 'react'

import type { DeepReadonly } from 'ts-essentials'
import { Popover, PopoverBody } from 'reactstrap'
import { useTranslation } from 'react-i18next'

import type { AnalysisResult, SubstringMatch } from 'src/algorithms/types'
import { getSafeId } from 'src/helpers/getSafeId'
import { formatMutation } from 'src/helpers/formatMutation'

import { formatRange } from './formatRange'

const SEQUENCE_TOOLTIP_MAX_MUTATIONS = 10 as const
const SEQUENCE_TOOLTIP_MAX_GAPS = 10 as const

export function calculateNucleotidesTotals(missing: DeepReadonly<SubstringMatch[]>, character: string) {
  return missing
    .filter((inv) => inv.character === character)
    .reduce((total, inv) => total + inv.range.end - inv.range.begin, 0)
}

export interface LabelTooltipProps {
  showTooltip: boolean
  sequence: AnalysisResult
}

function truncateList(list: JSX.Element[], maxLength: number, text: string) {
  let result = list
  if (list.length > maxLength) {
    result = result.slice(0, maxLength)
    result.push(<li key={'more'}>{text}</li>)
  }
  return result
}

export function LabelTooltip({ sequence, showTooltip }: LabelTooltipProps) {
  const {
    seqName,
    clades,
    substitutions,
    deletions,
    insertions,
    missing,
    alignmentStart,
    alignmentEnd,
    alignmentScore,
    diagnostics,
  } = sequence
  const { t } = useTranslation()

  const id = getSafeId('sequence-label', {
    seqName,
  })
  const cladesList = Object.keys(clades).join(', ')
  const alnStartOneBased = alignmentStart + 1
  const alnEndOneBased = alignmentEnd + 1

  let mutationItems = substitutions.map(({ pos, queryNuc, refNuc }) => {
    const mut = formatMutation({ pos, queryNuc, refNuc })
    return <li key={mut}>{mut}</li>
  })

  mutationItems = truncateList(mutationItems, SEQUENCE_TOOLTIP_MAX_MUTATIONS, t('...more'))

  let gapItems = missing.slice(0, SEQUENCE_TOOLTIP_MAX_GAPS).map((inv) => {
    const { character, range: { begin, end } } = inv // prettier-ignore
    const range = formatRange(begin, end)
    const key = `${character}-${range}`
    return <li key={key}>{`${character} ${range}`}</li>
  })

  gapItems = truncateList(gapItems, SEQUENCE_TOOLTIP_MAX_GAPS, t('...more'))

  let flags
  if (diagnostics.flags.length > 0) {
    flags = diagnostics.flags.map((flag) => {
      return <li key={flag}>{flag}</li>
    })
  } else {
    flags = [<li key="allGood">None detected</li>]
  }

  const totalMutations = mutationItems.length
  const totalGaps = deletions.reduce((acc, curr) => acc + curr.length, 0)
  const totalInsertions = insertions.length
  const totalNs = calculateNucleotidesTotals(missing, 'N')

  return (
    <Popover
      className="popover-mutation"
      target={id}
      placement="auto"
      isOpen={showTooltip}
      hideArrow
      delay={0}
      fade={false}
    >
      <PopoverBody>
        <div>{`Sequence ${seqName}`}</div>
        <div>{`Alignment score ${alignmentScore}`}</div>
        <div>{`Alignment start ${alnStartOneBased}`}</div>
        <div>{`Alignment end ${alnEndOneBased}`}</div>
        <div>{`Clades ${cladesList || '--'}`}</div>
        <div>{`Total mutations: ${totalMutations}`}</div>
        <div>
          <div>{`Mutations:`}</div>
          <ul>{mutationItems}</ul>
        </div>
        <div>{`Total deletions: ${totalGaps}`}</div>
        <div>{`Total insertions: ${totalInsertions}`}</div>
        <div>{`Total Ns: ${totalNs}`}</div>
        <div>
          <div>{`Gaps and Ns`}</div>
          <ul>{gapItems}</ul>
        </div>
        <div>
          <div>{`QC issues`}</div>
          <ul>{flags}</ul>
        </div>
      </PopoverBody>
    </Popover>
  )
}