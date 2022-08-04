import React, { FunctionComponent } from 'react'
import parse from 'html-react-parser'
import Image from 'next/image'
import styles from './cta_box.module.scss'
import CtaBoxInterface from './cta_box.interface'
import Button from '../../generic/button/button'

export const typename = 'Set_Replicator_BlockCtaBox'

const CtaBoxBlock: FunctionComponent<{
  block: CtaBoxInterface
  mobileFullWidth: boolean
}> = ({ block, mobileFullWidth = false }) => (
  <div
    className={`${styles.root} ${mobileFullWidth && styles.fullWidth} ${
      block.cb_bg_image_filter.value || ''
    } container default-grid`}
  >
    <div
      className={`${styles.contentWrapper} col-span-full xxl:col-start-3 xxl:col-span-8`}
    >
      <div className={styles.imageWrapper}>
        <Image
          layout="fill"
          objectFit="cover"
          src={block.cb_background_image.permalink}
          alt={block.cb_background_image.alt}
          placeholder="blur"
          blurDataURL={block.cb_background_image.placeholder}
        />
        {block.cb_bg_image_filter && (
          <div
            className={`${styles.filter} ${block.cb_bg_image_filter.value}`}
          />
        )}
      </div>
      <div className={`${styles.innerContentWrapper}`}>
        <div className={`${styles.headline} typo-h3`}>{block.cb_headline}</div>
        <div className={`${styles.cb_copy} typo-p`}>{parse(block.cb_copy)}</div>
        <div className={styles.buttonWrapper}>
          <Button href={block.cb_cta_url} title={block.cb_cta_title} />
        </div>
      </div>
    </div>
  </div>
)

export default CtaBoxBlock
