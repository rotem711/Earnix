import React, { FunctionComponent } from 'react'
import styles from './text_image.module.scss'
import TextImageInterface from './text_image.interface'

export const typename = 'Set_Replicator_BlockTextImage'

const TextImageBlock:FunctionComponent<{ block: TextImageInterface }> = ({ block }) => (
  <div
    className={`${styles.root} container`}
  >
    Textimage Block:
    {block.type}
  </div>
)

export default TextImageBlock
