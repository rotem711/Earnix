import React, { FunctionComponent } from 'react'
import useIsMobile from 'utils/hooks'
import styles from './teams.module.scss'
import TeamsInterface from './teams.interface'

export const typename = 'Set_Replicator_BlockTeams'

const TeamsBlock: FunctionComponent<{ block: TeamsInterface }> = ({
  block,
}) => {
  const isMobile = useIsMobile()

  return (
    <div
      className={`${styles.root} container grid grid-cols-8 md:grid-cols-12 gap-x-15`}
    >
      <video
        playsInline
        preload="auto"
        loop
        autoPlay
        muted
        poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        className={`${styles.video}`}
        key={
          isMobile && block.gt_background_video_url_responsive
            ? 'videoResponsive'
            : 'videoDesktop'
        }
      >
        <source
          type="video/mp4"
          src={
            isMobile && block.gt_background_video_url_responsive
              ? block.gt_background_video_url_responsive
              : block.gt_background_video_url
          }
        />
      </video>
      <div
        className={`${styles.numbers} col-span-8 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3 xl:col-span-6 xl:col-start-4`}
      >
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

      <div className={`${styles.countries} col-span-8 md:col-span-12`}>
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
}

export default TeamsBlock
