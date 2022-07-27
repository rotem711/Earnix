import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import Button from 'components/generic/button/button'
import AnimatedLines from 'components/generic/atoms/AnimatedLines/AnimatedLines'
import parse from 'html-react-parser'
import styles from './icons_w_text.module.scss'
import IconsWTextInterface from './icons_w_text.interface'

export const typename = 'Set_Replicator_BlockIconsWText'

const IconsWTextBlock: FunctionComponent<{ block: IconsWTextInterface }> = ({
  block,
}) => (
  <div className={`${styles.root} container default-grid`}>
    <div className={`${styles.headline} typo-h3 col-span-full`}>
      {block.ict_headline}
    </div>
    {block.ict_copy && (
      <div
        className={`${styles.copy} typo-p col-span-full lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3 xxl:col-span-6 xxl:col-start-4`}
      >
        {parse(block.ict_copy)}
      </div>
    )}
    <div className="col-span-full xxl:col-span-8 xxl:col-start-3">
      <div
        className={`${styles.iconGrid} md:grid md:gap-x-24 md:grid-cols-${block.ict_icons.length}`}
      >
        {block.ict_icons.map((icon) => (
          <div className={styles.iconWrapper} key={icon.text}>
            <div className={styles.iconImage}>
              <Image
                src={icon.icon.permalink}
                alt={icon.icon.alt}
                width={icon.icon.width}
                height={icon.icon.height}
                objectFit="contain"
                layout="responsive"
              />
            </div>
            <div className={`${styles.iconText} typo-p`}>{icon.text}</div>
          </div>
        ))}
      </div>
      <div className={styles.ctaWrapper}>
        <Button href={block.ict_cta_url} title={block.ict_cta_title} />
      </div>
      <AnimatedLines
        variant="bottom"
        xInitialPosition={0}
        yInitialPosition={0}
        width={700}
        height={300}
        imageUrl={`${block.ict_background.permalink}`}
      />
    </div>
  </div>
)

export default IconsWTextBlock
