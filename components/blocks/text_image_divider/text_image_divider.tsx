import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import Button from 'components/generic/button/button'
import DOMPurify from 'isomorphic-dompurify'

import styles from './text_image_divider.module.scss'
import TextImageDividerInterface from './text_image_divider.interface'

export const typename = 'Set_Replicator_BlockTextImageDivider'

const TextImageDividerBlock: FunctionComponent<{
  block: TextImageDividerInterface
}> = ({ block }) => (
  <div className={`${styles.root} bg-blue-100 text-white`}>
    <div className="container">
      <div className="md:flex md:relative">
        <div className={`${styles.imageWrapper} relative md:static hd:h-auto md:min-h-full -mx-20 md:m-0 md:grow`}>
          <div
            className={`${styles.image} md:absolute md:h-full`}
          >
            <Image
              src={block?.tid_image?.permalink}
              blurDataURL={block?.tid_image?.placeholder}
              placeholder="blur"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="md:w-3/8 lg:w-1/3 md:pl-8 pb-64 xl:pb-76 md:pt-72 lg:pt-64">
          <div className={`${styles.textWrapper}`}>
            <h2 className="typo-h3 mb-16">
              {block?.tid_headline}
            </h2>
            {/* eslint-disable-next-line react/no-danger */}
            <div className="typo-p mb-31" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(block?.tid_copy) }} />
            <Button href={block?.tid_cta_url} title={block?.tid_cta_title} />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default TextImageDividerBlock
