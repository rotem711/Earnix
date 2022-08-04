import React from 'react'
import HeroWithAnimatedLinesBlock from 'components/blocks/hero_with_animated_lines/hero_with_animated_lines'
import CtaBoxBlock from 'components/blocks/cta_box/cta_box'
import NotFoundInterface from './404.interface'
import styles from './404.module.scss'

const NotFoundBlock = ({ data }: { data: NotFoundInterface }) => (
  <div className={`${styles.root}`}>
    <HeroWithAnimatedLinesBlock
      block={{
        hwal_headline: data.hero_headline,
        hwal_copy: data.hero_copy,
      }}
      showSearch
    />

    <CtaBoxBlock
      block={{
        cb_headline: data.cta_headline,
        cb_copy: data.cta_copy,
        cb_cta_title: data.cta_link_text,
        cb_cta_url: data.cta_link_url,
        cb_background_image: data.cta_background,
        cb_bg_image_filter: { value: 'white' },
      }}
      mobileFullWidth
    />
  </div>
)

export default NotFoundBlock
