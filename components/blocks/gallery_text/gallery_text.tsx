import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import styles from './gallery_text.module.scss'
import GalleryTextInterface from './gallery_text.interface'

export const typename = 'Set_Replicator_BlockGalleryText'

const GalleryTextBlock: FunctionComponent<{ block: GalleryTextInterface }> = ({
  block,
}) => {
  const { gt_copy, gt_headline, gt_images } = block
  return (
    <div className={`${styles.root}`}>
      <div className={`${styles.block_wrapper} container`}>
        <div className="default-grid">
          <div className="xxl:col-span-5 xxl:col-start-3 xl:col-span-7 lg:col-span-6 md:col-span-4 sm:col-span-4 col-span-4 flex">
            <div className={`${styles.image_column}`}>
              {gt_images.length > 2 && (
                <div className={`${styles.image_wrapper}`}>
                  <Image
                    src={gt_images[2].permalink}
                    blurDataURL={gt_images[2].placeholder}
                    placeholder="blur"
                    width={gt_images[2].width}
                    height={gt_images[2].height}
                    className={`${styles.image}`}
                  />
                </div>
              )}
              {gt_images.length > 1 && (
                <div className={`${styles.image_wrapper}`}>
                  <Image
                    src={gt_images[1].permalink}
                    blurDataURL={gt_images[1].placeholder}
                    placeholder="blur"
                    width={gt_images[1].width}
                    height={gt_images[1].height}
                    className={`${styles.image}`}
                  />
                </div>
              )}
            </div>
            <div className={`${styles.image_column}`}>
              {gt_images.length > 0 && (
                <Image
                  src={gt_images[0].permalink}
                  blurDataURL={gt_images[0].placeholder}
                  placeholder="blur"
                  width={gt_images[0].width}
                  height={gt_images[0].height}
                  className={`${styles.image}`}
                />
              )}
            </div>
          </div>
          <div
            className={`xxl:col-span-3 xl:col-span-5 lg:col-span-6 md:col-span-4 sm:col-span-4 col-span-4 ${styles.image_column}`}
          >
            <p className={`${styles.block_title}`}>{gt_headline}</p>
            {/* eslint-disable-next-line react/no-danger */}
            <div
              className={`${styles.block_copy}`}
              dangerouslySetInnerHTML={{ __html: gt_copy }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GalleryTextBlock
