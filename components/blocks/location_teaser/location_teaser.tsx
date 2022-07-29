import React, { FunctionComponent } from 'react'
import styles from './location_teaser.module.scss'
import LocationTeaserInterface from './location_teaser.interface'

export const typename = 'Set_Replicator_BlockLocationTeaser'

const LocationTeaserBlock:FunctionComponent<{ block: LocationTeaserInterface }> = ({ block }) => (
  <div
    className={`${styles.root} container`}
  >
    Locationteaser Block:
    {block.type}
  </div>
)

export default LocationTeaserBlock
