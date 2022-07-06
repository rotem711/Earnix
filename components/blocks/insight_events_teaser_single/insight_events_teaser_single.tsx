import React, { FunctionComponent } from 'react'
import styles from './insight_events_teaser_single.module.scss'
import InsightEventsTeaserSingleInterface from './insight_events_teaser_single.interface'

export const typename = 'Set_Replicator_BlockInsightEventsTeaserSingle'

const InsightEventsTeaserSingleBlock: FunctionComponent<{
  block: InsightEventsTeaserSingleInterface
}> = ({ block }) => (
  <div className={`${styles.root} container`}>
    Insighteventsteasersingle Block:
    {block.type}
  </div>
)

export default InsightEventsTeaserSingleBlock
