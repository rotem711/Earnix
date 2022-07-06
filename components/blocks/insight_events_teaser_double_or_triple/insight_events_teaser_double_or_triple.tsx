import React, { FunctionComponent } from 'react'
import styles from './insight_events_teaser_double_or_triple.module.scss'
import InsightEventsTeaserDoubleOrTripleInterface from './insight_events_teaser_double_or_triple.interface'

export const typename = 'Set_Replicator_BlockInsightEventsTeaserDoubleOrTriple'

const InsightEventsTeaserDoubleOrTripleBlock: FunctionComponent<{
  block: InsightEventsTeaserDoubleOrTripleInterface
}> = ({ block }) => (
  <div className={`${styles.root} container`}>
    Insighteventsteaserdoubleortriple Block:
    {block.type}
  </div>
)

export default InsightEventsTeaserDoubleOrTripleBlock
