import React, { FunctionComponent } from 'react'
import parse from 'html-react-parser'
import Image from 'next/image'
import styles from './impact.module.scss'
import ImpactInterface from './impact.interface'
import Button from '../../generic/button/button'

export const typename = 'Set_Replicator_BlockImpact'

const ImpactBlock:FunctionComponent<{ block: ImpactInterface }> = ({ block }) => (
  <div
    className={`${styles.root} container grid grid-cols-12`}
  >
    <div className={`${styles.contentWrapper} col-start-1 col-span-12 xxl:col-start-3 xxl:col-span-8`}>
      <div className={`${styles.icons}`}>
        {block.im_icons.map(({ icon, stat_headline, statistic }) => {
          const image = icon[0]
          const imageDenominator = 3
          return (
            <div key={stat_headline} className={`${styles.iconItem}`}>
              <div className={`${styles.imageWrapper}`}>
                <Image
                  src={image.permalink}
                  alt={image.alt}
                  placeholder="blur"
                  blurDataURL={image.placeholder}
                  width={image.width / imageDenominator}
                  height={image.height / imageDenominator}
                />
              </div>
              <div className={`${styles.statistic} typo-h1`}>{statistic}</div>
              <div className={`${styles.statHeadline} typo-p`}>{stat_headline}</div>
            </div>
          )
        })}
      </div>
      <div className={`${styles.eyebrow} typo-h6`}>{block.im_eyebrow}</div>
      <div className={`${styles.headline} typo-h3`}>{block.im_headline}</div>
      <div className={`${styles.copy} typo-h6`}>{parse(block.im_copy)}</div>
      <div className={styles.buttonWrapper}>
        <Button href={block.im_cta_url} title={block.im_cta_title} />
      </div>
    </div>
  </div>
)

export default ImpactBlock
