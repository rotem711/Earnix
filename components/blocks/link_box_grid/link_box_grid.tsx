import React, { FunctionComponent } from 'react'
import styles from './link_box_grid.module.scss'
import LinkBoxGridInterface from './link_box_grid.interface'

export const typename = 'Set_Replicator_BlockLinkBoxGrid'

const LinkBoxGridBlock:FunctionComponent<{ block: LinkBoxGridInterface }> = ({ block }) => (
  <div
    className={`${styles.root} container`}
  >
    Linkboxgrid Block:
    {block.type}
  </div>
)

export default LinkBoxGridBlock
