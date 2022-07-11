import React, { FunctionComponent } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'

import styles from './text_video.module.scss'
import TextVideoInterface from './text_video.interface'

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

export const typename = 'Set_Replicator_BlockTextVideo'

const TextVideoBlock: FunctionComponent<{ block: TextVideoInterface }> = ({ block }) => (
  <div
    className={`${styles.root} container text-black`}
  >
    <div className={`${styles.container} mx-auto`}>
      <div className="lg:flex">
        <div className="md:w-3/4 lg:w-5/12 md:pr-8 mb-32">
          <h2 className="typo-h2 mb-16">
            It’s time to break free from legacy limitations
          </h2>
          <div className="typo-p">
            We create dynamic, agile, and composable solutions that enable insurers and banks to challenge the status quo —incrementally innovating all aspects of their business to better serve their customers. With Earnix, insurers and banks have unparalleled clarity into revenue opportunities, and the technology, analytics, and expertise to seize them.
          </div>
        </div>
        <div className="lg:grow lg:pl-8">
          <div className="relative aspect-video">
            <ReactPlayer
              className="absolute top-0 left-0"
              url="https://vimeo.com/3155182"
              width="100%"
              height="100%"
              playIcon={(
                <div className={`${styles.play} relative w-32 md:w-60 lg:w-50 xl:w-64 aspect-square`}>
                  <Image
                    src="/images/play.svg"
                    height="50"
                    width="50"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              )}
              light="https://via.placeholder.com/649x365.png"
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
