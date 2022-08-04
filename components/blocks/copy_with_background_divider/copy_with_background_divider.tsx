import React, { FunctionComponent } from 'react'
import parse from 'html-react-parser'
import Image from 'next/image'
import styles from './copy_with_background_divider.module.scss'
import CopyWithBackgroundDividerInterface from './copy_with_background_divider.interface'

export const typename = 'Set_Replicator_BlockCopyWithBackgroundDivider'

const CopyWithBackgroundDividerBlock: FunctionComponent<{
  block: CopyWithBackgroundDividerInterface
}> = ({ block }) => (
  <div className={`${styles.root}`}>
    <div className={styles.imageWrapper}>
      <Image
        layout="fill"
        objectFit="cover"
        src={block.cwb_background_image.permalink}
        alt={block.cwb_background_image.alt}
        placeholder="blur"
        blurDataURL={block.cwb_background_image.placeholder}
      />
      <div className={styles.imageFilterBlack} />
      <div className={styles.imageFilterGreen} />
    </div>
    <div className="container grid grid-cols-12 default-grid">
      <div className={`${styles.contentWrapper} col-start-1 col-span-12`}>
        <div className={`${styles.headline} typo-h3`}>{block.cwb_headline}</div>
        <div className={`${styles.copy} typo-h6`}>{parse(block.cwb_copy)}</div>
      </div>
    </div>
  </div>
)

export default CopyWithBackgroundDividerBlock
