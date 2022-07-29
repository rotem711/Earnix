import React, { FunctionComponent } from 'react'
import styles from './simple_location_grid.module.scss'
import SimpleLocationGridInterface from './simple_location_grid.interface'

export const typename = 'Set_Replicator_BlockSimpleLocationGrid'

const SimpleLocationGridBlock: FunctionComponent<{
  block: SimpleLocationGridInterface
}> = ({ block }) => (
  <div className={`${styles.root} container`}>
    Simplelocationgrid Block:
    {block.type}
  </div>
)

export default SimpleLocationGridBlock
