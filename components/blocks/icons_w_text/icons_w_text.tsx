/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import Button from 'components/generic/button/button'
import styles from './icons_w_text.module.scss'
import IconsWTextInterface from './icons_w_text.interface'

export const typename = 'Set_Replicator_BlockIconsWText'

const IconsWTextBlock: FunctionComponent<{ block: IconsWTextInterface }> = ({
  block,
}) => (
  <div className={`${styles.root} container`}>
    <div className={styles.contentWrapper}>
      <div className={styles.headline}>{block.ict_headline}</div>
      <div
        className={styles.copy}
        dangerouslySetInnerHTML={{ __html: block.ict_copy }}
      />
      <div className={styles.iconGrid}>
        {block.ict_icons.map((icon: any, key: number) => (
          <div className={styles.iconWrapper} key={key}>
            <div className={styles.iconImage}>
              <Image
                src={`https://${process.env.NEXT_PUBLIC_ASSET_DOMAIN}${icon.icon.url}`}
                width={130}
                height={130}
              />
            </div>
            <div className={styles.iconText}> {icon.text}</div>
          </div>
        ))}
      </div>
      <div className={styles.ctaWrapper}>
        <Button href={block.ict_cta_url} title={block.ict_cta_title} />
      </div>
      <div className={styles.background}>
        <Image
          src={`https://${process.env.NEXT_PUBLIC_ASSET_DOMAIN}${block.ict_background.url}`}
          width={635}
          height={274}
        />
      </div>
    </div>
  </div>
)

export default IconsWTextBlock
