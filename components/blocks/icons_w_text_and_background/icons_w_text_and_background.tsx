import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Button from 'components/generic/button/button'
import parse from 'html-react-parser'
import styles from './icons_w_text_and_background.module.scss'
import BackgroundImage from '../../../public/assets/backgroundlines.png'
import IconsWTextAndBackgroundInterface from './icons_w_text_and_background.interface'

export const typename = 'Set_Replicator_BlockIconsWTextAndBackground'

const IconsWTextAndBackgroundBlock = ({
  block,
}: {
  block: IconsWTextAndBackgroundInterface
}) => {
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
      let height = winScroll - 60

      height = (-1 * height) / 5
      setScrolled(height)
    }

    window.addEventListener('scroll', listenToScroll)
    window.removeEventListener('scroll', () => null)
  }, [])

  return (
    <div className={`${styles.root}`}>
      <div className="container default-grid">
        <div className="col-span-full xl:col-span-10 xl:col-start-2 xxl:col-span-8 xxl:col-start-3">
          <h3 className="typo-h3">{itb_headline}</h3>
          <div className={`${styles.copy} typo-p`}>{parse(itb_copy || '')}</div>
          <div className={`${styles.iconGrid}`}>
            {itb_icons.map((icon: any) => (
              <div className={styles.iconWrapper}>
                <Image
                  src={`${icon.icon.permalink}`}
                  width={130}
                  height={130}
                />
                <p className="typo-p">{icon.copy}</p>
              </div>
            ))}
          </div>

          <div>
            <Button href={itb_cta_url} title={itb_cta_title} />
          </div>
        </div>
      </div>
      <div
        className={`${styles.background}`}
        style={{
          top: scrolled || 0,
        }}
      >
        <Image
          src={BackgroundImage}
          width={5291}
          height={2862}
          objectFit="cover"
          layout="fill"
        />
      </div>
    </div>
  )
}

export default IconsWTextAndBackgroundBlock
