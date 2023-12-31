import React, { FunctionComponent } from 'react'
import parse from 'html-react-parser'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import Button from 'components/generic/button/button'
import CardTeaser from 'components/generic/card_teaser/card_teaser'

import styles from './insight_events_teaser_double_or_triple.module.scss'
import InsightEventsTeaserDoubleOrTripleInterface from './insight_events_teaser_double_or_triple.interface'

export const typename = 'Set_Replicator_BlockInsightEventsTeaserDoubleOrTriple'

const InsightEventsTeaserDoubleOrTripleBlock: FunctionComponent<{
  block: InsightEventsTeaserDoubleOrTripleInterface
}> = ({ block }) => (
  <div className={`${styles.root} container default-grid`}>
    <div className="col-span-full xxl:col-span-8 xxl:col-start-3">
      {!block.ietd_first_item_is_content && (
        <h3 className="text-center">{block.ietd_headline}</h3>
      )}

      <div className={`${styles.swiperWrapper}`}>
        <Swiper
          spaceBetween={16}
          slidesPerView={1.2}
          breakpoints={{
            768: {
              slidesPerView: 2.25,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {block.ietd_first_item_is_content && (
            <SwiperSlide className={`${styles.firstItemText}`}>
              <h3>{block.ietd_headline}</h3>
              <div>{parse(block.ietd_copy)}</div>
              <Button href={block.ietd_cta_link} title={block.ietd_cta_text} />
            </SwiperSlide>
          )}

          {block.ietd_entries.map((entry) => (
            <SwiperSlide className={`${styles.singleCard}`}>
              <CardTeaser
                key={entry.id}
                cardType={entry.collection.handle}
                headline={entry.title}
                image={entry.cover_image}
                blurb={entry.blurb}
                maxBlurbLines={3}
                ctaLink={{ title: 'Read more', href: entry.uri }}
                date={new Date(entry.date)}
                label="" // TO-DO: If taxonomies are added we have to pass them here
                location=""
                categories={[]}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {block.ietd_further_infos_link && block.ietd_further_infos_text && (
        <div
          className={`${
            block.ietd_first_item_is_content
              ? styles.ctaLink__inBox
              : styles.ctaLink
          } typo-h5`}
        >
          <Link href={block.ietd_further_infos_link}>
            <a href={block.ietd_further_infos_link}>
              {block.ietd_further_infos_text}
            </a>
          </Link>
        </div>
      )}
    </div>
  </div>
)

export default InsightEventsTeaserDoubleOrTripleBlock
