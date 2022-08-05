import BadgesContainer from 'components/generic/badges_container/badges_container'
import Image from 'next/image'
import React from 'react'
import ArticlePreviewInterface from './article_preview.interface'
import styles from './article_preview.module.scss'

const ArticlePreview: React.FunctionComponent<ArticlePreviewInterface> = ({
  articleDetails: {
    author, badges, date, description, image, title,
  },
  setIndustryFilter,
  setTopicFilter,
  size,
}) => (
  <div
    className={`${styles.articlePreview} ${
      styles[`articlePreview--${size}`]
    } col-span-12 grid grid-cols-12`}
  >
    <div
      className={`${styles.articlePreview__imageContainer} md:col-span-6 xl:col-span-7 grid justify-end relative h-full w-full`}
    >
      <Image
        alt={image.alt}
        className={styles.articlePreview__image}
        src={image.permalink}
        placeholder="blur"
        width={image.width}
        height={image.height}
        layout="responsive"
        blurDataURL={image.placeholder}
      />
    </div>
    <div
      className={`${styles.articlePreview__textContainer} md:col-span-6 xl:col-span-5 gap-16 grid`}
    >
      <div>
        <h3>{title}</h3>
      </div>
      <div>
        <p className="typo-p">{date}</p>
        {author && <p className="typo-p">{`By ${author}`}</p>}
      </div>
      <div>
        <p className={`${styles.articlePreview__description} typo-p`}>
          {description}
        </p>
      </div>
      <div className="flex gap-8">
        <BadgesContainer
          setIndustryFilter={setIndustryFilter}
          setTopicFilter={setTopicFilter}
          values={badges}
        />
      </div>
    </div>
  </div>
)

export default ArticlePreview
