import React, { FunctionComponent } from 'react'
import styles from './icons_w_text_and_background.module.scss'
import IconsWTextAndBackgroundInterface from './icons_w_text_and_background.interface'

export const typename = 'Set_Replicator_BlockIconsWTextAndBackground'

const IconsWTextAndBackgroundBlock: FunctionComponent<{
  block: IconsWTextAndBackgroundInterface
}> = ({ block }) => (
  <div className={`${styles.root} container`}>
    Iconswtextandbackground Block:
    {block.type}
  </div>
)

export default IconsWTextAndBackgroundBlock
