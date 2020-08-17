import React from 'react'

import { useTranslation } from 'react-i18next'
import type { DeepReadonly } from 'ts-essentials'

import type { NucleotideMissing } from '@neherlab/nextclade-algorithms'
import { formatRange } from 'src/helpers/formatRange'
import { truncateList } from 'src/components/Results/truncateList'

const LIST_OF_TOOLTIP_MAX_ITEMS = 10 as const

export interface ListOfMissingProps {
  missing: DeepReadonly<NucleotideMissing[]>
  totalMissing: number
}

export function ListOfMissing({ missing, totalMissing }: ListOfMissingProps) {
  const { t } = useTranslation()

  let missingItems = missing.map(({ begin, end }) => {
    const range = formatRange(begin, end)
    return <li key={range}>{range}</li>
  })

  missingItems = truncateList(missingItems, LIST_OF_TOOLTIP_MAX_ITEMS, t('...more'))

  return (
    <div>
      <div>{t('Missing ({{totalMissing}})', { totalMissing })}</div>
      <ul>{missingItems}</ul>
    </div>
  )
}
