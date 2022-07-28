import React, { FunctionComponent } from 'react'
import parse from 'html-react-parser'
import Image from 'next/image'
import styles from './challenge.module.scss'
import ChallengeInterface from './challenge.interface'

const Challenge:FunctionComponent<ChallengeInterface> = ({
  eyebrow, headline, copy, image,
}) => (
  <div
    className={`${styles.root} container grid grid-cols-12 default-grid`}
  >
    <div className={`${styles.contentWrapper} col-start-1 col-span-12 xxl:col-start-3 xxl:col-span-8`}>
      <div className={`${styles.imageWrapper}`}>
        <Image
          src={image.permalink}
          alt={image.alt}
          placeholder="blur"
          blurDataURL={image.placeholder}
          width={image.width}
          height={image.height}
        />
      </div>
      <div className={`${styles.text}`}>
        <div className={`${styles.eyebrow} typo-h6`}>{eyebrow}</div>
        <div className={`${styles.headline} typo-h3`}>{headline}</div>
        <div className={`${styles.copy} typo-h6`}>{parse(copy)}</div>
      </div>
    </div>
  </div>
)

export default Challenge
