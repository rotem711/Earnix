import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Button from 'components/generic/button/button'
import parse from 'html-react-parser'
import styles from './icons_w_text_and_background.module.scss'
import BackgroundImage from '../../../public/assets/backgroundlines.png'
import IconsWTextAndBackgroundInterface from './icons_w_text_and_background.interface'

export const typename = 'Set_Replicator_BlockIconsWTextAndBackground'

const IconsWTextAndBackgroundBlock = ({ block }: { block: IconsWTextAndBackgroundInterface }) => {
  const {
    itb_headline,
    itb_copy,
    itb_icons,
    itb_cta_url,
    itb_cta_title,
  } = block

  const [scrolled, setScrolled] = useState<number>()

  useEffect(() => {
    function listenToScroll() {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
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
          {parse(itb_copy || '')}
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
          className={`${styles.background} block`}
          style={{
            top: scrolled ? (-1 * scrolled) / 3 : 0,
          }}
        >
          <Image
            src={BackgroundImage}
            width={5291}
            height={2862}
            objectFit="cover"
            layout="fill"
            className={styles.bdImage}
          />
        </div>
      </div>
    </div>
  )
}

export default IconsWTextAndBackgroundBlock
