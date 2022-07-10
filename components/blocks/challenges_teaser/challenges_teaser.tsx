import React, { FunctionComponent } from 'react'
import styles from './challenges_teaser.module.scss'
import ChallengesTeaserInterface from './challenges_teaser.interface'

export const typename = 'Set_Replicator_BlockChallengesTeaser'

const ChallengesTeaserBlock: FunctionComponent<{
  block: ChallengesTeaserInterface
}> = ({ block }) => (
  <div className={`${styles.root} container`}>
    Challengesteaser Block:
    {block.type}
  </div>
)

export default ChallengesTeaserBlock
