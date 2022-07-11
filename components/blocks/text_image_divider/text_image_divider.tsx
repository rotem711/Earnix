import React, { FunctionComponent } from 'react'
import styles from './text_image_divider.module.scss'
import TextImageDividerInterface from './text_image_divider.interface'
import Image from 'next/image'
import Button from 'components/generic/button/button'

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
              src="https://via.placeholder.com/1066x712.jpg"
              width={1066}
              height={712}
              blurDataURL="https://via.placeholder.com/1066x712.jpg"
              placeholder="blur"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="md:w-3/8 lg:w-1/3 md:pl-8 pb-64 xl:pb-76 md:pt-72 lg:pt-64">
          <div className={`${styles.textWrapper}`}>
            <h2 className="typo-h3 mb-16">
              What Are Intelligent Insurance Operations?
            </h2>
            <div className="typo-p mb-31">
              <b>The set of new strategies, processes, and an evolving ecosystem of technologies</b> to transform how insurance and banking businesses are run. By connecting all the components of increasingly complex systems, we enable financial institutions to enter the new era of intelligent operations—unlocking new market value and better serving end customers.
            </div>
            <Button href="#" title="See how we do it" />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default TextImageDividerBlock
