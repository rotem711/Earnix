import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import cn from 'classnames'
import useIsMobile from 'utils/hooks'
import styles from './hero.module.scss'
import HeroInterface from './hero.interface'

export const typename = 'Set_Replicator_BlockHero'

const HeroBlock: FunctionComponent<{ block: HeroInterface }> = ({ block }) => {
  const isMobile = useIsMobile()

  const headlineClasses = cn(
    'col-span-8',
    styles.headline,
    block.hero_centered
      ? 'isCentered md:col-start-2 md:col-span-6 lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8 xxl:col-start-4 xxl:col-span-6'
      : 'md:col-span-6 lg:col-span-8 xl:col-span-6 xxl:col-start-3 xxl:col-span-3',
  )

  const copyClasses = cn(
    'col-span-8',
    block.hero_centered
      ? 'isCentered md:col-start-2 md:col-span-6 lg:col-start-3 lg:col-span-8 xl:col-start-4 xl:col-span-6 xxl:col-start-5 xxl:col-span-4'
      : 'col-start-1 md:col-span-5 lg:col-span-7 xl:col-span-5 xl:col-start-1 xxl:col-start-3 xxl:col-span-4',
    block.hero_copy_background
      ? styles.copy__background
      : styles.copy__default,
  )

  return (
    <div className={`${styles.root} ${block.hero_large_version ? styles.largeVersion : styles.smallVersion} overflow-hidden relative`}>
      {(block.hero_background_image || block.hero_vimeo_id) && (
        <div className={`${styles.imageVideoWrapper}`}>
          <video
            playsInline
            preload="auto"
            loop
            autoPlay
            muted
            poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            className={`${styles.video}`}
            key={
              isMobile && block.hero_vimeo_id_responsive
                ? 'videoResponsive'
                : 'videoDesktop'
              }
          >
            <source
              type="video/mp4"
              src={
                isMobile && block.hero_vimeo_id_responsive
                  ? block.hero_vimeo_id_responsive
                  : block.hero_vimeo_id
                }
            />
          </video>

          {(block.hero_background_type.value === 'image') && (
            <Image
              layout="fill"
              objectFit="cover"
              blurDataURL={block.hero_background_image.placeholder}
              placeholder="blur"
              width={
                isMobile && block.hero_background_image_responsive
                  ? block.hero_background_image_responsive.width
                  : block.hero_background_image.width
                }
              height={
                isMobile && block.hero_background_image_responsive
                  ? block.hero_background_image_responsive.height
                  : block.hero_background_image.height
                }
              src={
                isMobile && block.hero_background_image_responsive
                  ? block.hero_background_image_responsive.permalink
                  : block.hero_background_image.permalink
                }
              alt={
                isMobile && block.hero_background_image_responsive
                  ? block.hero_background_image_responsive.alt
                  : block.hero_background_image.alt
                }
            />
          )}
        </div>
      )}
      {(block.hero_orange_gradient) && (
        <div className={`${styles.orangeGradient}`} />
      )}
      {(block.hero_blue_gradient) && (
        <div className={`${styles.blueGradient}`} />
      )}
      <div className={`${styles.contentWrapper} container grid grid-cols-8 lg:grid-cols-12 gap-x-15 content-center`}>
        {block.hero_headline && (
          <div
            className={`${headlineClasses}`}
          >
            <h1>
              {block.hero_headline}
            </h1>
          </div>
        )}
        {block.hero_copy && (
          <div
            className={`${copyClasses}`}
          >
            <p className={`${block.hero_copy_background ? styles.copyBackground : ''}`}>
              {block.hero_copy}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default HeroBlock
