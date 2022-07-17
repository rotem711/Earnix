import React, { FunctionComponent } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import styles from './quote_slider.module.scss'
import QuoteSliderInterface from './quote_slider.interface'

export const typename = 'Set_Replicator_BlockQuoteSlider'

const QuoteSliderBlock: FunctionComponent<{ block: QuoteSliderInterface }> = ({
  block,
}) => (
  <div className={`${styles.root} container`}>
    <div className={`${styles.headline} typo-h3`}>{block.qs_headline}</div>
    <div className={styles.contentWrapper}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        navigation
        modules={[Navigation]}
      >
        {block.qs_quotes.map((item: any) => (
          <SwiperSlide>
            <div className={styles.quoteWrapper}>
              <div className={`${styles.quoteText} typo-h4`}>{item.quote}</div>
              <div className={`${styles.quoteAuthor} typo-h6`}>
                {item.author}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <div className={`${styles.ctaWrapper} typo-p`}>
      <a href={block.qs_cta_url}>{block.qs_cta_title}</a>
    </div>
  </div>
)

export default QuoteSliderBlock
