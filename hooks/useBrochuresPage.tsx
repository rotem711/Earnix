import { OverviewBrochure } from 'interfaces/entryBrochuresOverview'
import { useState } from 'react'
import { renderDate } from 'utils/blog'

export default ({
  brochures,
  featuredItem: {
    blurb,
    brochure_industry: brochureIndustry,
    brochure_topic: brochureTopic,
    cover_image,
    date,
    uri,
  },
}: {
  brochures: OverviewBrochure[]
  featuredItem: OverviewBrochure
}) => {
  const [industryFilter, setIndustryFilter] = useState('')
  const [topicFilter, setTopicFilter] = useState('')

  const handleIndustryBadgeClick = () => setIndustryFilter('')
  const handleIndustryValueSelection = setIndustryFilter
  const handleTopicBadgeClick = () => setTopicFilter('')
  const handleTopicValueSelection = setTopicFilter

  const industryBadgeValue = 7
  const topicBadgeValue = 8

  const industryOptions = brochureIndustry
    .map(({ title }) => title)
    .filter((value, index, self) => self.indexOf(value) === index)
  const topicOptions = brochureTopic
    .map(({ title }) => title)
    .filter((value, index, self) => self.indexOf(value) === index)

  const featuredBrochureDetails = {
    author: 'TODO: Author 2',
    badges: [...brochureTopic, ...brochureIndustry],
    date: renderDate(date),
    description: blurb,
    image: cover_image,
    title: 'TODO: Title 2',
    uri,
  }
  const allBrochuresDetails = brochures.map(
    ({
      blurb: oneBlurb,
      brochure_industry: oneBrochureIndustry,
      brochure_topic: oneBrochureTopic,
      cover_image: oneCoverImage,
      date: oneDate,
      uri: oneUri,
    }) => {
      return {
        author: 'TODO: Author 1',
        badges: [...oneBrochureTopic, ...oneBrochureIndustry],
        date: renderDate(oneDate),
        description: oneBlurb,
        image: oneCoverImage,
        title: 'TODO: Title 1',
        uri: oneUri,
      }
    },
  )

  const handleLoadMoreButtonClick = () => console.log('TODO: handleLoadMoreButtonClick')

  return {
    allBrochuresDetails,
    featuredBrochureDetails,
    handleIndustryBadgeClick,
    handleIndustryValueSelection,
    handleLoadMoreButtonClick,
    handleTopicBadgeClick,
    handleTopicValueSelection,
    industryBadgeValue,
    industryFilter,
    industryOptions,
    topicBadgeValue,
    topicFilter,
    topicOptions,
  }
}
