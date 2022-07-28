import React, { FunctionComponent } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import LeftArrow from 'components/generic/icons/leftArrow'
import RightArrow from 'components/generic/icons/rightArrow'

import styles from './quote_slider.module.scss'
import QuoteSliderInterface from './quote_slider.interface'

export const typename = 'Set_Replicator_BlockQuoteSlider'

const QuoteSliderBlock: FunctionComponent<{
  block: QuoteSliderInterface
}> = ({ block }) => (
  <div className={`${styles.root}`}>
    <div className={`${styles.headline} typo-h3 col-span-full`}>
      {block.qs_headline}
    </div>
    <Swiper
      loop
      slidesPerView={1}
      modules={[Navigation]}
      navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }}
    >
      {block.qs_quotes.map((item) => (
        <SwiperSlide key={item.author}>
          <div className={`${styles.quoteWrapper} container default-grid`}>
            <div className="col-span-full md:col-span-6 md:col-start-2 lg:col-span-10 lg:col-start-2 xxl:col-span-6 xxl:col-start-4">
              <div className={`${styles.quoteText} typo-h4`}>{item.quote}</div>
              <div className={`${styles.quoteAuthor} typo-h6`}>
                {item.author}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    <div className={styles.swiperNavigation}>
      <div className="swiper-button-prev">
        <LeftArrow />
      </div>
      <div className="swiper-button-next">
        <RightArrow />
      </div>
    </div>
    <div className={`${styles.ctaWrapper} typo-h5`}>
      <a href={block.qs_cta_url}>{block.qs_cta_title}</a>
    </div>
  </div>
)

export default QuoteSliderBlock
