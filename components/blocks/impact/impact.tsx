import React, { FunctionComponent } from 'react'
import styles from './impact.module.scss'
import ImpactInterface from './impact.interface'

export const typename = 'Set_Replicator_BlockImpact'

const ImpactBlock:FunctionComponent<{ block: ImpactInterface }> = ({ block }) => (
  <div
    className={`${styles.root} container`}
  >
    Impact Block:
    {block.type}
  </div>
)

export default ImpactBlock
