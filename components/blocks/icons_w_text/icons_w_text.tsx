/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import Button from 'components/generic/button/button'
import AnimatedLines from 'components/generic/atoms/AnimatedLines/AnimatedLines'
import styles from './icons_w_text.module.scss'
import IconsWTextInterface from './icons_w_text.interface'

export const typename = 'Set_Replicator_BlockIconsWText'

const IconsWTextBlock: FunctionComponent<{ block: IconsWTextInterface }> = ({
  block,
}) => (
  <div className={`${styles.root} container`}>
    <div className={styles.contentWrapper}>
      <div className={`${styles.headline} typo-h3`}>{block.ict_headline}</div>
      <div
        className={`${styles.copy} typo-p sm:ml-8 sm:mr-8 md:ml-80 md:mr-80`}
        dangerouslySetInnerHTML={{ __html: block.ict_copy }}
      />
      <div className={`${styles.iconGrid} sm:flex-col md:grid md:grid-cols-3`}>
        {block.ict_icons.map((icon: any, key: number) => (
          <div className={styles.iconWrapper} key={key}>
            <div className={styles.iconImage}>
              <Image src={`${icon.icon.permalink}`} width={130} height={130} />
            </div>
            <div className={`${styles.iconText} typo-p`}> {icon.text}</div>
          </div>
        ))}
      </div>
      <div className={styles.ctaWrapper}>
        <Button href={block.ict_cta_url} title={block.ict_cta_title} />
      </div>
      <AnimatedLines
        variant="bottom"
        xInitialPosition={200}
        imageUrl={`${block.ict_background.permalink}`}
      />
    </div>
  </div>
)

export default IconsWTextBlock
