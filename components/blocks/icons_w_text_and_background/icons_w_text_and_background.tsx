/* eslint-disable operator-linebreak */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Button from 'components/generic/button/button'
import parse from 'html-react-parser'
import styles from './icons_w_text_and_background.module.scss'
import IconsWTextAndBackgroundInterface from './icons_w_text_and_background.interface'

export const typename = 'Set_Replicator_BlockIconsWTextAndBackground'

function IconsWTextAndBackgroundBlock(props: IconsWTextAndBackgroundInterface) {
  const {
    itb_headline,
    itb_copy,
    itb_icons,
    itb_cta_url,
    itb_cta_title,
    itb_bgimage,
  } = props.block

  const [scrolled, setScrolled] = useState<number>()

  useEffect(() => {
    function listenToScroll() {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop
      const initialHeight = 10
      const height = winScroll - initialHeight
      setScrolled(height)
    }

    window.addEventListener('scroll', listenToScroll)
    window.removeEventListener('scroll', () => null)
  }, [])

  return (
    <div className={`${styles.root}`}>
      <div className={`${styles.contentWrapper} container`}>
        <div className={`${styles.headline} typo-h3`}>{itb_headline}</div>
        <div
          className={`${styles.copy} typo-p sm:ml-8 sm:mr-8 md:ml-80 md:mr-80`}
        >
          {parse(itb_copy)}
        </div>
        <div className={styles.gridWrapper}>
          <div
            className={`${styles.iconGrid1} sm:flex-col md:grid md:grid-cols-3`}
          >
            {itb_icons.map((icon: any, key: number) => {
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
            {itb_icons.map((icon: any, key: number) => {
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
          <Button href={itb_cta_url} title={itb_cta_title} />
        </div>
        <div
          className={`${styles.background} sm:hidden md:block`}
          style={{
            top: scrolled ? (-1 * scrolled) / 2 : 0,
          }}
        >
          <Image
            src={`${itb_bgimage.permalink}`}
            width={6000}
            height={6000}
            objectFit="fill"
            className={styles.bdImage}
          />
        </div>
        <div className={`${styles.backgroundMobile} sm:block md:hidden`}>
          <Image
            src={`${itb_bgimage.permalink}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  )
}

export default IconsWTextAndBackgroundBlock
