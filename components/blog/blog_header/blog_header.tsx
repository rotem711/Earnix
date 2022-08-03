import React, { useContext } from 'react'
import cn from 'classnames'
import Asset from 'interfaces/asset'
import { GlobalContext } from 'pages/_app'
import Image from 'next/image'
import styles from './blog_header.module.scss'

const BlogHeader = ({
  authorName,
  publishDate,
  title,
  tags = [],
  coverImage,
}: {
  authorName: string
  publishDate: string
  title: string
  tags: { title: string; id: string }[]
  coverImage: Asset
}) => {
  const Globals = useContext(GlobalContext)

  const dateFormatted = new Date(publishDate).toLocaleDateString('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  })

  return (
    <div className={cn(styles.root, 'mb-36')}>
      <div className="mb-36">
        <span className="typo-tag-lower text-black-70">
          {[Globals.translations.EARNIX_BLOG, tags[0]?.title]
            .filter((i) => !!i)
            .join('  >  ')}
        </span>
        <h1 className="my-16">{title}</h1>
        <p>{authorName}</p>
        <p>{dateFormatted}</p>
        {!!tags.length && (
          <ul className="mt-24">
            {tags.map((tag) => (
              <li
                className={cn('typo-tag text-black-50', styles.tag)}
                key={tag.id}
              >
                {tag.title}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className={styles.image}>
        <Image
          src={coverImage.permalink}
          placeholder="blur"
          blurDataURL={coverImage.placeholder}
          height={coverImage.height}
          width={coverImage.width}
          alt={coverImage.alt}
          layout="responsive"
          objectFit="cover"
        />
      </div>
    </div>
  )
}

export default BlogHeader
