/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
import React, { FunctionComponent } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// import SliderButton from 'components/generic/sliderButton/sliderButton'
import styles from './quote_slider.module.scss'
import QuoteSliderInterface from './quote_slider.interface'

export const typename = 'Set_Replicator_BlockQuoteSlider'

const QuoteSliderBlock: FunctionComponent<{ block: QuoteSliderInterface }> = ({
  block,
}) => (
  <div className={`${styles.root} container`}>
    <div className={`${styles.headline} typo-h3`}>{block.qs_headline}</div>
    <div className={styles.contentWrapper}>
      {/* <SliderButton variant="left" /> */}
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        navigation
      >
        {block.qs_quotes.map((item: any, key: number) => {
          return (
            <SwiperSlide key={key}>
              <div className={styles.quoteWrapper}>
                <div className={styles.quoteText}>{item.quote}</div>
                <div className={styles.quoteAuthor}>{item.author}</div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      {/* <SliderButton variant="right" /> */}
    </div>
    <div className={`${styles.headline} typo-h3`}>{block.qs_cta_title}</div>
  </div>
)

export default QuoteSliderBlock
