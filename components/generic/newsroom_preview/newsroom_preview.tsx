import BadgesContainer from 'components/generic/badges_container/badges_container'
import { OverviewNewsroomArticle } from 'interfaces/entryNewsroomOverview'
import Image from 'next/image'
import Link from 'next/link'
import { GlobalContext } from 'pages/_app'
import React, { useContext } from 'react'
import styles from './newsroom_preview.module.scss'

const NewsroomPreview: React.FunctionComponent<{
  article: OverviewNewsroomArticle
}> = ({
  article: {
    cover_image,
    title,
    date,
    author_name,
    blurb,
    uri,
  },
}) => {
  const Globals = useContext(GlobalContext)
  const dateFormatted = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  })
  return (
    <Link href={uri}>
      <a
        className={`${styles.newsroomPreview__card}
        flex flex-col h-full`}
      >
        <div
          className={`${styles.newsroomPreview__textContainer}`}
        >
          <div className={styles.newsroomPreview__titleContainer}>
            <h5 className="mb-8">{title}</h5>
            <div className={styles.newsroomPreview__detailsContainer}>
              <p className="typo-p-small mb-8">{dateFormatted}</p>
              <p className="typo-p-small">{`By ${author_name}`}</p>
            </div>
            <div className={styles.newsroomPreview__descriptionContainer}>
              <p className={`${styles.newsroomPreview__description} typo-p-small`}>
                {blurb}
              </p>
            </div>
            <div className="flex gap-8 md:pt-8 lg:block">
              <BadgesContainer
                setIndustryFilter={() => {}}
                setTopicFilter={() => {}}
                values={[]}
              />
            </div>
          </div>
          <span className="typo-p-bold text-orange-100 hover:underline">{Globals.translations.READMORE}</span>
        </div>
        <div
          className={`${styles.newsroomPreview__imageContainer}`}
        >
          <Image
            alt={cover_image.alt}
            className={styles.newsroomPreview__image}
            src={cover_image.permalink}
            placeholder="blur"
            width={cover_image.width}
            height={cover_image.height}
            layout="responsive"
            objectFit="cover"
            blurDataURL={cover_image.placeholder}
          />
        </div>
      </a>
    </Link>
  )
}

export default NewsroomPreview
