import React, { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GlobalContext } from 'pages/_app'

import styles from './author.module.scss'
import AuthorInterface from './author.interface'

const Author = (data: AuthorInterface) => {
  const { name, title, about, image, linkedin } = data

  const Globals = useContext(GlobalContext)

  return (
    <div className={`${styles.root} grid grid-cols-6 gap-x-40`}>
      <div
        className={`${styles.imageWrapper} col-span-6 md:col-span-3 xl:col-span-2`}
      >
        <div className={`${styles.image}`}>
          <Image
            layout="responsive"
            width={image.width}
            height={image.height}
            src={image.permalink}
            alt={image.alt}
            blurDataURL={image.placeholder}
            placeholder="blur"
          />
        </div>
        <p>
          <b>{name}</b>
        </p>
        <p>{title}</p>
      </div>
      <div className={`${styles.about} col-span-6 md:col-span-3 xl:col-span-4`}>
        <p>
          <b>{Globals.translations.ABOUT_AUTHOR}:</b>
        </p>
        <p>{about}</p>
        <Link href={linkedin}>
          <a href={linkedin} className="typo-p-bold">LinkedIn</a>
        </Link>
      </div>
    </div>
  )
}

export default Author
