import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import styles from './location_teaser.module.scss'
import LocationTeaserInterface from './location_teaser.interface'

export const typename = 'Set_Replicator_BlockLocationTeaser'

const LocationTeaserBlock:FunctionComponent<{ block: LocationTeaserInterface }> = ({ block }) => (
  <div
    className={`${styles.root} container grid grid-cols-12 default-grid`}
  >
    <div className={`${styles.contentWrapper} col-start-1 col-span-12`}>
      <div className={`${styles.headline} typo-h3`}>{block.lt_headline}</div>
      <div className={`${styles.copy} typo-h6`}>{block.lt_copy}</div>
      <div className={`${styles.locationsWrapper}`}>
        {block.lt_locations.map((location) => (
          <div key={location.location_name} className={`${styles.location}`}>
            <div className={`${styles.locationName} typo-h3`}>{location.location_name}</div>
            <div className={`${styles.locationCopy} typo-p`}>{location.copy}</div>
            <div className={styles.imageWrapper}>
              <Image
                layout="fill"
                objectFit="cover"
                src={location.image.permalink}
                alt={location.image.alt}
                placeholder="blur"
                blurDataURL={location.image.placeholder}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default LocationTeaserBlock
