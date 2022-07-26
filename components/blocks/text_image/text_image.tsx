/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-else-return */
import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import Button from 'components/generic/button/button'
import parse from 'html-react-parser'
import styles from './text_image.module.scss'
import TextImageInterface from './text_image.interface'

export const typename = 'Set_Replicator_BlockTextImage'

const TextImageBlock: FunctionComponent<{ block: TextImageInterface }> = ({
  block,
}) => (
  <div className={`${styles.root} container`}>
    <div
      className={`${styles.contentWrapper} ${
        block.ti_reverse && styles.reverse
      } default-grid`}
    >
      <div
        className={`${styles.textWrapper} col-span-full md:col-span-4 lg:col-span-5 xl:col-span-3 xl:col-start-3`}
      >
        {block.ti_headline && (
          <div className={`${styles.headline} typo-h2`}>
            {block.ti_headline}
          </div>
        )}
        {block.ti_copy && (
          <div className={styles.copy}>{parse(block.ti_copy)}</div>
        )}
        {block.ti_cta_url && block.ti_cta_title && (
          <div className={styles.ctaWrapper}>
            <Button href={block.ti_cta_url} title={block.ti_cta_title} />
          </div>
        )}
      </div>
      {block.ti_image && (
        <div
          className={`${styles.imageWrapper} col-span-full md:col-span-4 lg:col-span-7 xl:col-span-5`}
        >
          <Image
            src={block.ti_image.permalink}
            width={block.ti_image.width}
            height={block.ti_image.height}
            blurDataURL={block.ti_image.placeholder}
            placeholder="blur"
            objectFit="cover"
            className={styles.image}
          />
          {block.ti_overlay_icon && (
            <div className={styles.overlay_image}>
              <Image
                src={block.ti_overlay_icon.permalink}
                width={block.ti_overlay_icon.width}
                height={block.ti_overlay_icon.height}
                blurDataURL={block.ti_overlay_icon.placeholder}
                placeholder="blur"
                objectFit="cover"
              />
            </div>
          )}
        </div>
      )}
    </div>
  </div>
)

export default TextImageBlock
