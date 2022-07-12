import React, { FunctionComponent } from 'react'
import styles from './text_video.module.scss'
import TextVideoInterface from './text_video.interface'

export const typename = 'Set_Replicator_BlockTextVideo'

const TextVideoBlock:FunctionComponent<{ block: TextVideoInterface }> = ({ block }) => (
  <div
    className={`${styles.root} container`}
  >
    Textvideo Block:
    {block.type}
  </div>
)

export default TextVideoBlock
