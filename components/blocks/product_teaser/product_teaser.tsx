import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import Button from 'components/generic/button/button'
import styles from './product_teaser.module.scss'
import ProductTeaserInterface from './product_teaser.interface'

export const typename = 'Set_Replicator_BlockProductTeaser'

const ProductTeaserBlock: FunctionComponent<{
  block: ProductTeaserInterface
}> = ({ block }) => (
  <div className={`${styles.root} relative`}>
    {block.pt_background_image && (
      <div className={`${styles.backgroundImage}`}>
        <Image
          src={block.pt_background_image.permalink}
          blurDataURL={block.pt_background_image.placeholder}
          placeholder="blur"
          width={block.pt_background_image.width}
          height={block.pt_background_image.height}
          layout="fill"
          objectFit="cover"
        />
      </div>
    )}
    <div className={`${styles.contentWrapper} container`}>
      <div className="default-grid">
        <div
          className={`${styles.text} col-span-4 md:col-span-3 lg:col-span-5 xl:col-span-5 xxl:col-start-3 xxl:col-span-3`}
        >
          {block.pt_headline && <h2>{block.pt_headline}</h2>}
          {block.pt_copy && <p className="typo-p">{block.pt_copy}</p>}
        </div>
        <div
          className={`${styles.ferrisColumn} col-span-4 md:col-span-4 md:col-start-5 lg:col-start-7 lg:col-span-6 xl:col-start-7 xl:col-span-5 xxl:col-start-7 xxl:col-span-3`}
        >
          <div className={`${styles.ferrisWrapper}`}>
            <div className={`${styles.gear}`}>
              <Image
                src="/assets/gear.svg"
                blurDataURL={block.pt_ferris_wheel_center_icon.placeholder}
                placeholder="blur"
                width="60"
                height="60"
                layout="fill"
              />
            </div>
            <div className={`${styles.ferrisCenter}`}>
              <Image
                src={block.pt_ferris_wheel_center_icon.permalink}
                blurDataURL={block.pt_ferris_wheel_center_icon.placeholder}
                placeholder="blur"
                width={block.pt_ferris_wheel_center_icon.width}
                height={block.pt_ferris_wheel_center_icon.height}
              />
            </div>
            <div className={`${styles.wheel}`}>
              {block.pt_ferris_wheel_icons.map((item) => (
                <span className={`${styles.cabin}`}>
                  <Image
                    key={item.text}
                    src={item.icon.permalink}
                    blurDataURL={item.icon.placeholder}
                    placeholder="blur"
                    width={item.icon.width}
                    height={item.icon.height}
                  />
                  <span className="typo-caption">{item.text}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
        {block.pt_extra_text && (
          <h6 className="col-span-full xl:col-span-8 xl:col-start-3 xxl:col-span-6 xxl:col-start-4">{block.pt_extra_text}</h6>
        )}
      </div>
    </div>
    <div className={`${styles.button}`}>
      <Button href={block.pt_cta_url} title={block.pt_cta_title} />
    </div>
  </div>
)

export default ProductTeaserBlock
