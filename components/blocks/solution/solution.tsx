import React, { FunctionComponent } from 'react'
import styles from './solution.module.scss'
import SolutionInterface from './solution.interface'

export const typename = 'Set_Replicator_BlockSolution'

const SolutionBlock:FunctionComponent<{ block: SolutionInterface }> = ({ block }) => (
  <div
    className={`${styles.root} container`}
  >
    Solution Block:
    {block.type}
  </div>
)

export default SolutionBlock
