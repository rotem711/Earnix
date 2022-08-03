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
          const type = value.id.split('::')[1]
          if (type === 'consumer') {
            setTopicFilter(() => value.title)
            return
          }
          if (type === 'insurance') {
            setIndustryFilter(() => value.title)
          }
        }}
        text={value.title}
      />
    ))}
  </div>
)

export default BadgesContainer
