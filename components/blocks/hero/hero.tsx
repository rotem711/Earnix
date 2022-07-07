import React, { FunctionComponent, useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './hero.module.scss'
import HeroInterface from './hero.interface'

export const typename = 'Set_Replicator_BlockHero'

const HeroBlock: FunctionComponent<{ block: HeroInterface }> = ({ block }) => {
  const [isMobile, setMobile] = useState(false)

  useEffect(() => {
    setMobile(window.innerWidth < 1024)
    window.addEventListener('orientationchange', () => {
      setMobile(window.innerWidth < 1024)
    })
    return () => {
      window.removeEventListener('orientationchange', () => {})
    }
  }, [])

  return (
    <div className={`${styles.root} ${block.hero_large_version ? styles.largeVersion : styles.smallVersion} overflow-hidden relative`}>
      {(block.hero_background_image || block.hero_vimeo_id) && (
        <div className={`${styles.imageVideoWrapper} z-0`}>
          {(block.hero_background_type.value === 'video' && block.hero_vimeo_id) && (
            <video
              playsInline
              preload="auto"
              loop
              autoPlay
              muted
              poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              className={`${styles.video}`}
            >
              <source type="video/mp4" src={block.hero_vimeo_id} />
            </video>
          )}
          {(block.hero_background_type.value === 'image' && block.hero_background_image) && (
            <Image
              layout={isMobile ? 'fill' : 'fill'}
              objectFit="cover"
              width={block.hero_background_image.width}
              height={block.hero_background_image.height}
              src={block.hero_background_image.permalink}
              className=""
              alt={block.hero_background_image.alt}
            />
          )}
        </div>
      )}
      {(block.hero_orange_gradient) && (
        <div className={`${styles.orangeGradient} z-20`} />
      )}
      {(block.hero_blue_gradient) && (
        <div className={`${styles.blueGradient} z-10`} />
      )}
      <div className="container grid grid-cols-8 lg:grid-cols-12 content-center h-full z-30 relative">
        {block.hero_headline && (
          <div className={`${block.hero_centered ? 'md:col-start-2 md:col-span-6 lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8 xxl:col-start-4 xxl:col-span-6' : 'md:text-left md:col-span-6 lg:col-span-8 xl:col-span-6 xxl:col-start-3 xxl:col-span-3'} col-span-8 text-center`}>
            <h1 className="text-white">
              {block.hero_headline}
            </h1>
          </div>
        )}
        {block.hero_copy && (
          <div className={`${block.hero_centered ? 'md:col-start-2 md:col-span-6 lg:col-start-3 lg:col-span-8 xl:col-start-4 xl:col-span-6 xxl:col-start-5 xxl:col-span-4' : 'col-start-1 md:text-left md:col-span-6 lg:col-span-6 xl:col-span-5 xl:col-start-1 xxl:col-start-3 xxl:col-span-3'} col-span-8 text-center`}>
            <p className={`${block.hero_copy_background ? styles.copyBackground : ''} text-white`}>
              {block.hero_copy}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default HeroBlock
