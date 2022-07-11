/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/destructuring-assignment */
import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import Button from 'components/generic/button/button'
import styles from './icons_w_text_and_background.module.scss'
import IconsWTextAndBackgroundInterface from './icons_w_text_and_background.interface'

export const typename = 'Set_Replicator_BlockIconsWTextAndBackground'

const IconsWTextAndBackgroundBlock: FunctionComponent<{
  block: IconsWTextAndBackgroundInterface
}> = ({ block }) => (
  <div className={`${styles.root}`}>
    <div className={`${styles.contentWrapper} container`}>
      <div className={`${styles.headline} typo-h3`}>{block.itb_headline}</div>
      <div
        className={`${styles.copy} typo-p sm:ml-8 sm:mr-8 md:ml-80 md:mr-80`}
        dangerouslySetInnerHTML={{ __html: block.itb_copy }}
      />
      <div className={styles.gridWrapper}>
        <div
          className={`${styles.iconGrid1} sm:flex-col md:grid md:grid-cols-3`}
        >
          {block.itb_icons.map((icon: any, key: number) => {
            if (key <= 2) {
              return (
                <div className={styles.iconWrapper}>
                  <div className={styles.iconImage}>
                    <Image
                      src={`${icon.icon.permalink}`}
                      width={130}
                      height={130}
                    />
                  </div>
                  <div className={`${styles.iconText} typo-p`}>
                    {' '}
                    {icon.copy}
                  </div>
                </div>
              )
            }
          })}
        </div>
        <div
          className={`${styles.iconGrid2} sm:flex-col md:grid md:grid-cols-2`}
        >
          {block.itb_icons.map((icon: any, key: number) => {
            if (key > 2) {
              return (
                <div className={styles.iconWrapper}>
                  <div className={styles.iconImage}>
                    <Image
                      src={`${icon.icon.permalink}`}
                      width={130}
                      height={130}
                    />
                  </div>
                  <div className={`${styles.iconText} typo-p`}>
                    {' '}
                    {icon.copy}
                  </div>
                </div>
              )
            }
          })}
        </div>
      </div>
      <div className={styles.ctaWrapper}>
        <Button href={block.itb_cta_url} title={block.itb_cta_title} />
      </div>
      <div className={`${styles.background}`}>
        <Image
          className={styles.bgImage}
          src={`${block.itb_bgimage.permalink}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  </div>
)

export default IconsWTextAndBackgroundBlock
