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
  <>
    {block.ti_reverse && (
      <div className={`${styles.root} container`}>
        <div
          className={`${styles.contentWrapper} sm:flex-col md:grid md:grid-cols-2`}
        >
          <div className={styles.textWrapper}>
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
            <div className={styles.imageWrapper}>
              <Image
                src={block.ti_image.permalink}
                width={650}
                height={650}
                objectFit="cover"
                className={styles.image}
              />
            </div>
          )}
        </div>
      </div>
    )}
    {!block.ti_reverse && (
      <div className={`${styles.root} container`}>
        <div
          className={`${styles.contentWrapper} sm:flex-col md:grid md:grid-cols-2`}
        >
          {block.ti_image && (
            <div className={styles.imageWrapper}>
              <Image
                src={block.ti_image.permalink}
                width={650}
                height={650}
                objectFit="cover"
                className={styles.image}
              />
            </div>
          )}
          <div className={styles.textWrapper}>
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
        </div>
      </div>
    )}
  </>
)

export default TextImageBlock
