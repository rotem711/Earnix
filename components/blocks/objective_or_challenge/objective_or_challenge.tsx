import React, { FunctionComponent } from 'react'
import styles from './objective_or_challenge.module.scss'
import ObjectiveOrChallengeInterface from './objective_or_challenge.interface'

export const typename = 'Set_Replicator_BlockObjectiveOrChallenge'

const ObjectiveOrChallengeBlock: FunctionComponent<{
  block: ObjectiveOrChallengeInterface
}> = ({ block }) => (
  <div className={`${styles.root} container`}>
    Objectiveorchallenge Block:
    {block.type}
  </div>
)

export default ObjectiveOrChallengeBlock
