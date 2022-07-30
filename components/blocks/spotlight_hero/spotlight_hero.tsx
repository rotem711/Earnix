import React, { FunctionComponent } from 'react'
import parse from 'html-react-parser'
import Image from 'next/image'
import styles from './spotlight_hero.module.scss'
import SpotlightHeroInterface from './spotlight_hero.interface'

const SpotlightHero:FunctionComponent<SpotlightHeroInterface> = ({
  logo, title, description,
}) => (
  <div
    className={`${styles.root}`}
  >
    <div className="container grid grid-cols-12 default-grid">
      <div className={`${styles.contentWrapper} col-start-1 col-span-12 xxl:col-start-1 xxl:col-span-8`}>
        <div className={`${styles.title} typo-h2`}>{title}</div>
        <div className={`${styles.logoAndDescription}`}>
          <div className={`${styles.logo}`}>
            <Image
              src={logo.permalink}
              alt={logo.alt}
              placeholder="blur"
              blurDataURL={logo.placeholder}
              width={logo.width}
              height={logo.height}
            />
          </div>
          <div className={`${styles.description} typo-p`}>{parse(description)}</div>
        </div>
      </div>
    </div>
  </div>
)

export default SpotlightHero
