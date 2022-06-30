import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import styles from './text_image.module.scss'
import TextImageInterface from './text_image.interface'

export const typename = 'Set_Replicator_BlockTextImage'

const TextImageBlock:FunctionComponent<{ block: TextImageInterface }> = ({ block }) => (
  <div
    className={`${styles.root} container`}
  >
    Textimage Block
    <Image
      src={block.left_image.permalink}
      blurDataURL={block.left_image.placeholder}
      placeholder="blur"
      width={block.left_image.width}
      height={block.left_image.height}
    />
  </div>
)

export default TextImageBlock
