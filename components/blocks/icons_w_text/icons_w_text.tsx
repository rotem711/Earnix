import React, { FunctionComponent } from 'react'
import styles from './icons_w_text.module.scss'
import IconsWTextInterface from './icons_w_text.interface'

export const typename = 'Set_Replicator_BlockIconsWText'

const IconsWTextBlock:FunctionComponent<{ block: IconsWTextInterface }> = ({ block }) => (
  <div
    className={`${styles.root} container`}
  >
    Iconswtext Block:
    {block.type}
  </div>
)

export default IconsWTextBlock
