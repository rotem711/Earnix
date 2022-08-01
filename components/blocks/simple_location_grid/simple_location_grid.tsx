import React, { FunctionComponent } from 'react'
import styles from './simple_location_grid.module.scss'
import SimpleLocationGridInterface from './simple_location_grid.interface'

export const typename = 'Set_Replicator_BlockSimpleLocationGrid'

const SimpleLocationGridBlock: FunctionComponent<{
  block: SimpleLocationGridInterface
}> = ({ block }) => {
  const { slg_headline, slg_locations } = block
  return (
    <div className={`${styles.root}`}>
      <div className={`${styles.block_wrapper} container`}>
        <p className={`${styles.block_title}`}>{slg_headline}</p>
        <div className="default-grid">
          {slg_locations.map((location) => (
            <div
              className={`col-span-2 sm:col-span-1 md:col-span-2 lg:col-span-3 ${styles.location}`}
              key={location.location_title}
            >
              <p className={`${styles.location_name}`}>
                {location.location_title}
              </p>
              <p className={`${styles.location_phone}`}>
                {location.phone_number}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SimpleLocationGridBlock
