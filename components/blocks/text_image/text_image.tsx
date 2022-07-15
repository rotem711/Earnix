/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-else-return */
/* eslint-disable react/function-component-definition */
import React from 'react'
import Image from 'next/image'
import Button from 'components/generic/button/button'
import parser from 'html-react-parser'
import styles from './text_image.module.scss'
import TextImageInterface from './text_image.interface'

export const typename = 'Set_Replicator_BlockTextImage'

function TextImageBlock(props: TextImageInterface) {
  const {
    ti_reverse,
    ti_copy,
    ti_cta_title,
    ti_cta_url,
    ti_headline,
    ti_image,
    // ti_overlay_icon,
  } = props.block

  if (ti_reverse) {
    return (
      <div className={`${styles.root} container`}>
        <div
          className={`${styles.contentWrapper} sm:flex-col md:grid md:grid-cols-2`}
        >
          <div className={styles.textWrapper}>
            <div className={`${styles.headline} typo-h2`}>{ti_headline}</div>
            <div className={styles.copy}>{parser(ti_copy)}</div>
            <div className={styles.ctaWrapper}>
              <Button href={ti_cta_url} title={ti_cta_title} />
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={ti_image.permalink}
              width={650}
              height={650}
              objectFit="cover"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className={`${styles.root} container`}>
        <div
          className={`${styles.contentWrapper} sm:flex-col md:grid md:grid-cols-2`}
        >
          <div className={styles.imageWrapper}>
            <Image
              src={ti_image.permalink}
              width={650}
              height={650}
              objectFit="cover"
              className={styles.image}
            />
          </div>
          <div className={styles.textWrapper}>
            <div className={`${styles.headline} typo-h2`}>{ti_headline}</div>
            <div className={styles.copy}>{parser(ti_copy)}</div>
            <div className={styles.ctaWrapper}>
              <Button href={ti_cta_url} title={ti_cta_title} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TextImageBlock
