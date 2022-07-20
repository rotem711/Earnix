/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Close from 'components/generic/icons/close'

import styles from './blog_image.module.scss'
import BlogImageInterface from './blog_image.interface'

const BlogImage = (data: BlogImageInterface) => {
  const { image, caption } = data

  const [lightboxOpen, setLightboxOpen] = useState(false)

  const toggleLightbox = () => {
    if (!lightboxOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    setLightboxOpen(!lightboxOpen)
  }

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        setLightboxOpen(false)
      }
    })
  }, [])

  return (
    <div className={`${styles.root}`}>
      <div className={`${styles.imageWrapper}`} onClick={toggleLightbox}>
        <div>
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition="center top"
            width={image.width}
            height={image.height}
            src={image.permalink}
            alt={image.alt}
            blurDataURL={image.placeholder}
            placeholder="blur"
          />
        </div>
        <p>{caption}</p>
      </div>
      {lightboxOpen && (
        <div className={`${styles.lightbox}`}>
          <div
            className={`${styles.lightboxBackground}`}
            onClick={toggleLightbox}
          />
          <div className={`${styles.lightboxContent}`}>
            <button type="button" onClick={toggleLightbox}>
              <Close className="" />
            </button>
            <Image
              layout="intrinsic"
              width={image.width}
              height={image.height}
              src={image.permalink}
              alt={image.alt}
              blurDataURL={image.placeholder}
              placeholder="blur"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default BlogImage
