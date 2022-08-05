import Badge from 'components/generic/badge/badge'
import BadgesContainer from 'components/generic/badges_container/badges_container'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BrochurePreviewInterface from './brochure_preview.interface'
import styles from './brochure_preview.module.scss'

const BrochurePreview: React.FunctionComponent<BrochurePreviewInterface> = ({
  badgeText,
  details: {
    author, badges, date, description, image, title, uri,
  },
  featured,
  handleIndustryValueSelection,
  handleTopicValueSelection,
}) => (
  <div
    className={`${styles.brochurePreview__card} ${
      featured && styles['brochurePreview__card--featured']
    } grid mb-64 md:mt-40 md:grid-cols-8 md:col-span-2 md:flex md:flex-col md:gap-x-24 lg:grid-cols-12 lg:col-span-4 xxl:grid-cols-8`}
  >
    <div
      className={`${styles.brochurePreview__textContainer} gap-8 grid md:col-span-4 lg:col-span-6 xl:col-span-5 xxl:col-span-3`}
    >
      <div className={styles.brochurePreview__titleContainer}>
        <h5>{title}</h5>
      </div>
      <div className={styles.brochurePreview__detailsContainer}>
        <p className="typo-p-small">{date}</p>
        <p className="typo-p-small">{`By ${author}`}</p>
      </div>
      <div className={styles.brochurePreview__descriptionContainer}>
        <p className={`${styles.brochurePreview__description} typo-p-small`}>
          {description}
        </p>
      </div>
      <div className="flex gap-8 md:pt-8 lg:block">
        <BadgesContainer
          setIndustryFilter={handleIndustryValueSelection}
          setTopicFilter={handleTopicValueSelection}
          values={badges}
        />
      </div>
      {!featured && !!uri && (
        <Link href={uri}>
          <p className="text-orange-100 typo-p-bold pt-24">Read more</p>
        </Link>
      )}
    </div>
    <div
      className={`${styles.brochurePreview__imageContainer} grid h-full w-full md:col-span-4 lg:col-span-6 xl:col-span-7 xxl:col-span-5`}
    >
      <Image
        alt={image.alt}
        className={styles.brochurePreview__image}
        src={image.permalink}
        placeholder="blur"
        width={image.width}
        height={image.height}
        layout="responsive"
        blurDataURL={image.placeholder}
      />
      {badgeText && (
        <Badge className={styles.brochurePreview__badge} text={badgeText} />
      )}
    </div>
  </div>
)

export default BrochurePreview
