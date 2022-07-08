import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import Button from 'components/generic/button/button'
import styles from './about_teaser.module.scss'
import AboutTeaserInterface from './about_teaser.interface'

export const typename = 'Set_Replicator_BlockAboutTeaser'

const AboutTeaserBlock:FunctionComponent<{ block: AboutTeaserInterface }> = ({ block }) => (
  <div
    className={`${styles.root}`}
  >
    <div className="container grid grid-cols-12 gap-15">
      <div className={`${styles.textWrapper} col-span-12 md:col-span-6 lg:col-span-5 xxl:col-span-3 xxl:col-start-3`}>
        {(block.at_headline) && (
          <h3>{block.at_headline}</h3>
        )}
        {(block.at_copy) && (
          <div
            className={`${styles.copy}`}
            dangerouslySetInnerHTML={{ __html: block.at_copy }}
          />
        )}
        {(block.at_cta_url && block.at_cta_title) && (
          <div>
            <Button href={block.at_cta_url} title={block.at_cta_title} />
          </div>
        )}
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-start-7 xxl:col-span-4 xxl:col-start-7">
        {(block.at_image) && (
          <Image
            src={block.at_image.permalink}
            blurDataURL={block.at_image.placeholder}
            placeholder="blur"
            width={block.at_image.width}
            height={block.at_image.height}
          />
        )}
      </div>
    </div>
  </div>
)

export default AboutTeaserBlock
