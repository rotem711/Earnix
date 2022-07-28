import React, { FunctionComponent } from 'react'
import parse from 'html-react-parser'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import styles from './objective.module.scss'
import ObjectiveInterface from './objective.interface'

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

const Objective:FunctionComponent<ObjectiveInterface> = ({
  eyebrow, headline, copy, video, videoLabel,
}) => (
  <div
    className={`${styles.root} container grid grid-cols-12 default-grid`}
  >
    <div className={`${styles.contentWrapper} col-start-1 col-span-12 xxl:col-start-3 xxl:col-span-9`}>
      <div className={`${styles.videoWrapper}`}>
        <div className={`${styles.playerWrapper}`}>
          <ReactPlayer
            className="absolute top-0 left-0"
            url={video}
            width="100%"
            height="100%"
            playIcon={(
              <div className={`${styles.play} relative w-38 md:w-72 lg:w-50 xl:w-64 aspect-square`}>
                <Image
                  src="/images/play.svg"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            )}
            light={`https://vumbnail.com/${video.split('/').at(-1)}.jpg`}
            playing
            controls
          />
        </div>
        <div className={`${styles.videoLabel} typo-h3`}>{videoLabel}</div>
      </div>
      <div className={`${styles.text}`}>
        <div className={`${styles.eyebrow} typo-h6`}>{eyebrow}</div>
        <div className={`${styles.headline} typo-h3`}>{headline}</div>
        <div className={`${styles.copy} typo-h6`}>{parse(copy)}</div>
      </div>
    </div>
  </div>
)

export default Objective
