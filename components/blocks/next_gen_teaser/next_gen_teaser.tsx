import React, { FunctionComponent } from 'react'
import styles from './next_gen_teaser.module.scss'
import NextGenTeaserInterface from './next_gen_teaser.interface'

export const typename = 'Set_Replicator_BlockNextGenTeaser'

const NextGenTeaserBlock: FunctionComponent<{ block: NextGenTeaserInterface }> = ({ block }) => (
  <div
    className={`${styles.root} text-black`}
  >
    <div className="container text-center">
      <div className={`${styles.container} mx-auto`}>
        <h2 className="typo-h3 mb-24">
          The next generation of operations
        </h2>
        <div className="typo-p mb-32">
          Intelligent Insurance Operations drive transformation for stakeholders across your organization:
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 lg:gap-30">
          <div className="rounded-[20px] px-32 py-44 md:px-42 md:py-52 lg:px-24 lg:py-48 border-black-20 border-solid border">
            Industry leadership and
            <br />
            innovation
          </div>
          <div className="rounded-[20px] px-32 py-44 border-black-20 border-solid border">
            Pricing
            <br />
            and rating
          </div>
          <div className="rounded-[20px] px-32 py-44 border-black-20 border-solid border">
            Dynamic
            <br />
            decisioning
          </div>
          <div className="rounded-[20px] px-32 py-44 border-black-20 border-solid border">
            Product
            <br />
            personalization
          </div>
          <div className="rounded-[20px] px-32 py-44 border-black-20 border-solid border">
            Consumer
            <br />
            engagement
          </div>
          <div className="rounded-[20px] px-32 py-44 border-black-20 border-solid border">
            IT &
            <br />
            technology
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default NextGenTeaserBlock
