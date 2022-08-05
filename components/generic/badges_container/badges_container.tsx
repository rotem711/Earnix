import Badge from 'components/generic/badge/badge'
import React from 'react'
import BadgesContainerInterface from './badges_container.interface'
import styles from './badges_container.module.scss'

const BadgesContainer: React.FunctionComponent<BadgesContainerInterface> = ({
  setIndustryFilter,
  setTopicFilter,
  values = [],
}) => (
  <div className={`${styles.badgesContainer} flex flex-wrap`}>
    {values.map((value) => (
      <Badge
        onClick={() => {
          const splitValue = value.id.split('::')
          const triggerTopicFilter = ['blog_topic', 'brochure_topic'].indexOf(splitValue[0]) > -1
          const triggerIndustryFilter = ['blog_industry', 'brochure_industry'].indexOf(splitValue[0]) > -1
          if (triggerTopicFilter) {
            setTopicFilter(() => splitValue[1])
            return
          }
          if (triggerIndustryFilter) {
            setIndustryFilter(() => splitValue[1])
          }
        }}
        text={value.title}
      />
    ))}
  </div>
)

export default BadgesContainer
