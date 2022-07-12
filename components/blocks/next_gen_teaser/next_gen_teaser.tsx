import React, { FunctionComponent } from 'react'
import Button from 'components/generic/button/button'
import Image from 'next/image'
import DOMPurify from 'isomorphic-dompurify'

import styles from './next_gen_teaser.module.scss'
import NextGenTeaserInterface from './next_gen_teaser.interface'

export const typename = 'Set_Replicator_BlockNextGenTeaser'

const NextGenTeaserBlock: FunctionComponent<{ block: NextGenTeaserInterface }> = ({ block }) => (
  <div
    className={`${styles.root} text-black overflow-hidden`}
  >
    <div className="container text-center">
      <div className={`${styles.container} mx-auto relative pb-80 md:pb-68 lg:pb-64`}>
        <div className={`${styles.bg} absolute bottom-0 -z-10`}>
          <div className="relative">
            <Image
              src="/images/next-gen-teaser-bg.svg"
              width="658"
              height="285"
            />
          </div>
        </div>
        <h2 className="typo-h3 mb-16 lg:mb-24">
          {block?.ngt_headline}
        </h2>
        {/* eslint-disable-next-line react/no-danger */}
        <div className="typo-h5 mb-48 md:mb-28 lg:mb-32" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(block?.ngt_copy) }} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 lg:gap-30 mb-48 md:md-56 lg:md-44">
          {
            block?.ngt_items.map((item) => (
              <div className="bg-white rounded-[20px] px-32 py-44 md:px-42 md:py-52 lg:px-24 lg:py-48 border-black-20 border-solid border" key={item?.copy}>
                {item?.copy}
              </div>
            ))
          }
        </div>
        <div className="text-center">
          <Button href={block?.ngt_cta_url} title={block?.ngt_cta_title} />
        </div>
      </div>
    </div>
  </div>
)

export default NextGenTeaserBlock
