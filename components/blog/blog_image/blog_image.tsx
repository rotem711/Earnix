import React from 'react'
import Image from 'next/image'
// import Glightbox from 'glightbox'

import styles from './blog_image.module.scss'
import BlogImageInterface from './blog_image.interface'

const BlogImage = (data: BlogImageInterface) => {
  const { image, caption } = data

  // useEffect(() => {
  //   Glightbox({
  //     selector: 'glightboxTest',
  //   })
  // }, [])

  return (
    <a
      href={image.permalink}
      className={`${styles.root} glightbox`}
      data-type="image"
      onClick={async (e) => {
        e.preventDefault()
        // Dynamically load GlightBox
        const GLightbox = (await import('glightbox')).default
      }}
    >
      <Image
        layout="responsive"
        width={image.width}
        height={image.height}
        src={image.permalink}
        alt={image.alt}
        blurDataURL={image.placeholder}
        placeholder="blur"
      />
      <p>{caption}</p>
    </a>
  )
}

export default BlogImage
