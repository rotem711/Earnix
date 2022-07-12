import React, { FunctionComponent } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import DOMPurify from 'isomorphic-dompurify'

import styles from './text_video.module.scss'
import TextVideoInterface from './text_video.interface'

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

export const typename = 'Set_Replicator_BlockTextVideo'

function createMarkup() {
  return {
    __html: DOMPurify.sanitize(
      'Hello World')
  }
}

const TextVideoBlock: FunctionComponent<{ block: TextVideoInterface }> = ({ block }) => (
  <div
    className={`${styles.root} container text-black`}
  >
    <div className={`${styles.container} mx-auto`}>
      <div className="lg:flex">
        <div className="md:w-3/4 lg:w-5/12 md:pr-8 mb-32">
          <h2 className="typo-h2 mb-16">
            {block?.tv_headline}
          </h2>
          {/* eslint-disable-next-line react/no-danger */}
          <div className="typo-p" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(block?.tv_copy) }} />
        </div>
        <div className="lg:grow lg:pl-8">
          <div className="relative aspect-video">
            <ReactPlayer
              className="absolute top-0 left-0"
              url={`https://vimeo.com/${block.tv_vimeo_id}`}
              width="100%"
              height="100%"
              playIcon={(
                <div className={`${styles.play} relative w-32 md:w-60 lg:w-50 xl:w-64 aspect-square`}>
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
    </div>
  </div>
)

export default TextVideoBlock
