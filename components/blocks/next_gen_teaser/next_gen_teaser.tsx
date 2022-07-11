import React, { FunctionComponent } from 'react'
import Button from 'components/generic/button/button'
import Image from 'next/image'

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
          The next generation of operations
        </h2>
        <div className="typo-p mb-48 md:mb-28 lg:mb-32">
          Intelligent Insurance Operations drive transformation for stakeholders across your organization:
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 lg:gap-30 mb-48 md:md-56 lg:md-44">
          <div className="bg-white rounded-[20px] px-32 py-44 md:px-42 md:py-52 lg:px-24 lg:py-48 border-black-20 border-solid border">
            Industry leadership and
            <br />
            innovation
          </div>
          <div className="bg-white rounded-[20px] px-32 py-44 md:px-42 md:py-52 lg:px-24 lg:py-48 border-black-20 border-solid border">
            Pricing
            <br />
            and rating
          </div>
          <div className="bg-white rounded-[20px] px-32 py-44 md:px-42 md:py-52 lg:px-24 lg:py-48 border-black-20 border-solid border">
            Dynamic
            <br />
            decisioning
          </div>
          <div className="bg-white rounded-[20px] px-32 py-44 md:px-42 md:py-52 lg:px-24 lg:py-48 border-black-20 border-solid border">
            Product
            <br />
            personalization
          </div>
          <div className="bg-white rounded-[20px] px-32 py-44 md:px-42 md:py-52 lg:px-24 lg:py-48 border-black-20 border-solid border">
            Consumer
            <br />
            engagement
          </div>
          <div className="bg-white rounded-[20px] px-32 py-44 md:px-42 md:py-52 lg:px-24 lg:py-48 border-black-20 border-solid border">
            IT &
            <br />
            technology
          </div>
        </div>
        <div className="text-center">
          <Button href="#" title="See how we help your team succeed" />
        </div>
      </div>
    </div>
  </div>
)

export default NextGenTeaserBlock
