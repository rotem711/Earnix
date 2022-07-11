import React, { FunctionComponent } from 'react'
import styles from './text_image_divider.module.scss'
import TextImageDividerInterface from './text_image_divider.interface'

export const typename = 'Set_Replicator_BlockTextImageDivider'

const TextImageDividerBlock: FunctionComponent<{
  block: TextImageDividerInterface
}> = ({ block }) => (
  <div className={`${styles.root} container`}>
    Textimagedivider Block:
    {block.type}
  </div>
)

export default TextImageDividerBlock
