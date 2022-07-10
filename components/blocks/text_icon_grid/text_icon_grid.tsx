import React, { FunctionComponent } from 'react'
import styles from './text_icon_grid.module.scss'
import TextIconGridInterface from './text_icon_grid.interface'

export const typename = 'Set_Replicator_BlockTextIconGrid'

const TextIconGridBlock:FunctionComponent<{ block: TextIconGridInterface }> = ({ block }) => (
  <div
    className={`${styles.root} container`}
  >
    Texticongrid Block:
    {block.type}
  </div>
)

export default TextIconGridBlock
