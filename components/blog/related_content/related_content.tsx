import React, { useContext } from 'react'
import { GlobalContext } from 'pages/_app'
import { Swiper, SwiperSlide } from 'swiper/react'
import CardTeaser from 'components/generic/card_teaser/card_teaser'

import styles from './related_content.module.scss'
import RelatedContentInterface from './related_content.interface'

const RelatedContent = ({ data }: RelatedContentInterface) => {
  const Globals = useContext(GlobalContext)

  return (
    <div className={`${styles.root}`}>
      <h6>{Globals.translations.RELATEDCONTENT}</h6>

      <div className={`${styles.swiperWrapper}`}>
        <Swiper
          spaceBetween={16}
          slidesPerView={1.2}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1440: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
        >
          {data.map((entry) => (
            <SwiperSlide className={`${styles.singleCard}`} key={entry.id}>
              <CardTeaser
                key={entry.id}
                cardType={entry.collection.handle}
                headline={entry.title}
                image={entry.cover_image}
                blurb={entry.blurb}
                maxBlurbLines={3}
                ctaLink={{ title: Globals.translations.READMORETEASERSINGLE, href: entry.uri }}
                date={new Date(entry.date)}
                label="" // TO-DO: If taxonomies are added we have to pass them here
                location=""
                categories={[]}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default RelatedContent
