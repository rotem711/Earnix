import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import styles from './gallery_divider.module.scss'
import GalleryDividerInterface from './gallery_divider.interface'

export const typename = 'Set_Replicator_BlockGalleryDivider'

const GalleryDividerBlock: FunctionComponent<{
  block: GalleryDividerInterface
}> = ({ block }) => {
  const { gd_images } = block
  return (
    <div className={`${styles.root}`}>
      <div className="container">
        <div className="default-grid">
          <div className={`${styles.block_wrapper} xxl:col-span-8 xxl:col-start-3 xl:col-span-12 lg:col-span-12 md:col-span-8 col-span-4`}>
            {gd_images.map((image) => (
              <div className={`${styles.image_wrapper}`} key={image.id}>
                <Image
                  src={image.permalink}
                  blurDataURL={image.placeholder}
                  placeholder="blur"
                  width={image.width}
                  height={image.height}
                  className={`${styles.image}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GalleryDividerBlock
