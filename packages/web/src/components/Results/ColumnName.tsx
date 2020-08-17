import React, { useState } from 'react'

import styled from 'styled-components'

import type { AnalysisResult } from '@neherlab/nextclade-algorithms'

import { getSafeId } from 'src/helpers/getSafeId'
import { ColumnNameTooltip } from 'src/components/Results/ColumnNameTooltip'
import { QCResult } from '@neherlab/nextclade-algorithms'

export const SequenceName = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export interface ColumnNameProps {
  seqName: string
  sequence?: AnalysisResult
  qc?: QCResult
}

export function ColumnName({ seqName, sequence, qc }: ColumnNameProps) {
  const [showTooltip, setShowTooltip] = useState(false)
  const id = getSafeId('sequence-label', { seqName })

  return (
    <SequenceName
      id={id}
      className="w-100"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {seqName}
      {sequence && <ColumnNameTooltip showTooltip={showTooltip} sequence={sequence} qc={qc} />}
    </SequenceName>
  )
}
