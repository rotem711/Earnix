import React, { FunctionComponent } from 'react'
import styles from './teams.module.scss'
import TeamsInterface from './teams.interface'

export const typename = 'Set_Replicator_BlockTeams'

const TeamsBlock: FunctionComponent<{ block: TeamsInterface }> = ({
  block,
}) => (
  <div
    className={`${styles.root} container grid grid-cols-8 xxl:grid-cols-12 gap-x-20`}
  >
    <video
      playsInline
      preload="auto"
      loop
      autoPlay
      muted
      poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      className={`${styles.video}`}
    >
      <source
        type="video/mp4"
        src="https://player.vimeo.com/external/655127693.hd.mp4?s=9e510a033e7a0d0ea0b159a80a5addd71adbac79&profile_id=175"
      />
    </video>
    <div className={`${styles.numbers} col-span-8`}>
      <h1>{block.gt_headline}</h1>
      <div>
        {block.gt_highlight_numbers.map((gtNumber) => (
          <div key={gtNumber.label}>
            <h2>{gtNumber.text_value}</h2>
            <p>{gtNumber.label}</p>
          </div>
        ))}
      </div>
    </div>

    <div className={`${styles.countries} col-span-8`}>
      {block.gt_locations.map((gtLocation) => (
        <div key={gtLocation.street_name}>
          <h5>{gtLocation.country_label}</h5>
          <p className="typo-small">{gtLocation.street_name}</p>
          <p className="typo-small">{gtLocation.city_and_region}</p>
        </div>
      ))}
    </div>
  </div>
)

export default TeamsBlock
