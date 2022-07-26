import React, { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GlobalContext } from 'pages/_app'

import styles from './card_teaser.module.scss'
import CardTeaserInterface from './card_teaser.interface'

const CardTeaser = (data: CardTeaserInterface) => {
  const {
    cardType = 'blog',
    label = '',
    headline = '',
    blurb = '',
    maxBlurbLines = 3,
    location = '',
    image,
    date = null,
    ctaLink = {
      title: 'Read more',
      href: '/',
    },
    categories,
  } = data

  const Globals = useContext(GlobalContext)

  return (
    <div className={`${styles.root}`}>
      <div className={`${styles.image}`}>
        <Image
          layout="fill"
          objectFit="cover"
          width={image.width}
          height={image.height}
          src={image.permalink}
          alt={image.alt}
          blurDataURL={image.placeholder}
          placeholder="blur"
        />

        {label.length > 0 && (
          <div className={`${styles.label} typo-tag`}>{label}</div>
        )}
      </div>
      <div className={`${styles.content}`}>
        <Link href={ctaLink.href}>
          <a href={ctaLink.href}>
            <div>
              <div
                className={`${styles.headline} ${
                  cardType === 'event' ? 'typo-h3' : 'typo-h5'
                }`}
              >
                {headline}
              </div>

              {(date || location) && (
                <div className={`${styles.dateLocationWrapper}`}>
                  {date && (
                    <div
                      className={`${
                        cardType === 'event' ? 'typo-h5' : 'typo-p-small'
                      }`}
                    >
                      {Globals.translations.MONTHS[date.getMonth()]}
                      &nbsp;
                      {date.getDate()}
                      ,&nbsp;
                      {date.getFullYear()}
                    </div>
                  )}

                  {location && (
                    <div className={`${styles.location} typo-h6`}>{location}</div>
                  )}
                </div>
              )}

              {cardType !== 'event' && blurb.length > 0 && (
                <div
                  className={`${styles.blurb} typo-p-small`}
                  style={{ WebkitLineClamp: `${maxBlurbLines}` }}
                >
                  {blurb}
                </div>
              )}

              {categories.length > 0 && (
                <div className={`${styles.categories}`}>
                  {categories.map((cat) => (
                    <div key={cat.title} className="typo-tag">
                      {cat.title}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <span className="cta typo-p-bold">{ctaLink.title}</span>
          </a>
        </Link>
      </div>
    </div>
  )
}
export default CardTeaser
