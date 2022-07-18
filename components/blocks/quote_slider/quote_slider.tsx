/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import LeftArrow from 'components/generic/icons/leftArrow'
import RightArrow from 'components/generic/icons/rightArrow'
import styles from './quote_slider.module.scss'
import QuoteSliderInterface from './quote_slider.interface'

export const typename = 'Set_Replicator_BlockQuoteSlider'

const QuoteSliderBlock = (props: QuoteSliderInterface) => {
  return (
    <div className={`${styles.root} container`}>
      <div className={`${styles.headline} typo-h3`}>
        {props.block.qs_headline}
      </div>
      <div className={`${styles.desktopContentWrapper} sm:hidden md:block`}>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation]}
          navigation
        >
          {props.block.qs_quotes.map((item: any, key: number) => {
            return (
              <SwiperSlide key={key}>
                <div className={styles.quoteWrapper}>
                  <div className={`${styles.quoteText} typo-h4`}>
                    {item.quote}
                  </div>
                  <div className={`${styles.quoteAuthor} typo-h6`}>
                    {item.author}
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      <div className={`${styles.mobileContentWrapper} sm:block md:hidden`}>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation]}
          navigation={{
            nextEl: '.review-swiper-button-next',
            prevEl: '.review-swiper-button-prev',
          }}
        >
          {props.block.qs_quotes.map((item: any, key: number) => {
            return (
              <SwiperSlide key={key}>
                <div className={styles.quoteWrapper}>
                  <div className={`${styles.quoteText} typo-h4 `}>
                    {item.quote}
                  </div>
                  <div className={`${styles.quoteAuthor} typo-h6`}>
                    {item.author}
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      <div className={`${styles.ctaWrapper} typo-p`}>
        <a href={props.block.qs_cta_url}>{props.block.qs_cta_title}</a>
      </div>
      <div className={`${styles.mobileControls} sm:flex sm:flex-row md:hidden`}>
        <button type="button" className="review-swiper-button-prev">
          <LeftArrow />
        </button>
        <button type="button" className="review-swiper-button-next">
          <RightArrow />
        </button>
      </div>
    </div>
  )
}

export default QuoteSliderBlock
