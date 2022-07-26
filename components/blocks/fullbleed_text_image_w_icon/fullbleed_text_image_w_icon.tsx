import React, { FunctionComponent } from 'react'
import Image from 'next/image'

import styles from './fullbleed_text_image_w_icon.module.scss'
import FullbleedTextImageWIconInterface from './fullbleed_text_image_w_icon.interface'

export const typename = 'Set_Replicator_BlockFullbleedTextImageWIcon'

const FullbleedTextImageWIconBlock: FunctionComponent<{
  block: FullbleedTextImageWIconInterface
}> = ({ block }) => (
  <div className={`${styles.root}`}>
    <div
      className={`${styles.contentWrapper} container grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-16 lg:gap-24 xl:gap-30`}
    >
      <div className="col-span-4 md:col-span-4 lg:col-span-5 xl:col-span-4 xxl:col-span-3 xxl:col-start-3">
        <h3>{block.fti_headline}</h3>
        <p>{block.fti_copy}</p>
      </div>
    </div>
    <div className={`${styles.imageWrapper}`}>
      <Image
        layout="fill"
        objectFit="cover"
        width={block.fti_assets.width}
        height={block.fti_assets.height}
        src={block.fti_assets.permalink}
        alt={block.fti_assets.alt}
        blurDataURL={block.fti_assets.placeholder}
        placeholder="blur"
      />
      {block.fti_icon_overlay && (
        <div className={`${styles.icon}`}>
          <Image
            layout="responsive"
            objectFit="contain"
            width={block.fti_icon_overlay.width}
            height={block.fti_icon_overlay.height}
            src={block.fti_icon_overlay.permalink}
            alt={block.fti_icon_overlay.alt}
            blurDataURL={block.fti_icon_overlay.permalink}
            placeholder="blur"
          />
        </div>
      )}
    </div>
  </div>
)

export default FullbleedTextImageWIconBlock
