import BadgesContainer from 'components/generic/badges_container/badges_container'
import React, { Dispatch } from 'react'
import FeaturedContentInterface from './featured_content.interface'
import styles from './featured_content.module.scss'
import useFeaturedContent from './featured_content.hook'

const FeaturedContent = ({
  featuredContent,
  setIndustryFilter,
  setTopicFilter,
}: {
  featuredContent: FeaturedContentInterface[]
  setIndustryFilter: Dispatch<(prevState: undefined) => undefined>
  setTopicFilter: Dispatch<(prevState: undefined) => undefined>
}) => {
  const { renderBadgesList } = useFeaturedContent()

  return (
    <div className={`${styles.featuredContent} bg-black-5 py-24`}>
      <h6 className="text-green-90 pb-16 px-24">Featured content</h6>
      <div className="sm: flex md:block sm:overflow-x-auto">
        {featuredContent.map((featuredArticle, index) => (
          <div className={styles.featuredContent__featuredArticlesContainer}>
            <div className="flex items-start flex-col gap-16">
              <h5>{featuredArticle.title}</h5>
              <BadgesContainer
                setIndustryFilter={setIndustryFilter}
                setTopicFilter={setTopicFilter}
                values={renderBadgesList({
                  array1: featuredArticle.blog_industry,
                  array2: featuredArticle.blog_topic,
                })}
              />
            </div>
            {featuredContent.length !== index + 1 && (
              <hr
                className={`${styles.featuredContent__hr} sm:hidden md:block`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedContent
