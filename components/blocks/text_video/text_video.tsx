import React, { FunctionComponent } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import parse from 'html-react-parser'

import styles from './text_video.module.scss'
import TextVideoInterface from './text_video.interface'

export const typename = 'Set_Replicator_BlockTextVideo'

const TextVideoBlock: FunctionComponent<{ block: TextVideoInterface }> = ({
  block,
}) => {
  const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

  return (
    <div className={`${styles.root} container default-grid`}>
      <div className="col-span-full md:col-span-6 lg:col-span-5 xxl:col-span-3 xxl:col-start-3">
        <h2 className="typo-h2 col-span-full">{block.tv_headline}</h2>
        <p className="typo-p">{parse(block.tv_copy)}</p>
      </div>
      <div className="col-span-full mt-32 md:mt-60 lg:mt-0 lg:col-span-7 xxl:col-span-5">
        <div className="relative aspect-video">
          <ReactPlayer
            className="absolute top-0 left-0"
            url={`https://vimeo.com/${block.tv_vimeo_id}`}
            width="100%"
            height="100%"
            playIcon={(
              <div
                className={`${styles.play} w-32 md:w-60 lg:w-50 xl:w-64 aspect-square`}
              >
                <Image
                  src="/images/play.svg"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            )}
            light={`https://vumbnail.com/${block.tv_vimeo_id}.jpg`}
            playing
            controls
          />
        </div>
      </div>
    </div>
  )
}
export default TextVideoBlock
