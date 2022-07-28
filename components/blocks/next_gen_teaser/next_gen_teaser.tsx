import React, { FunctionComponent } from 'react'
import Button from 'components/generic/button/button'
import parse from 'html-react-parser'
import AnimatedLines from 'components/generic/atoms/AnimatedLines/AnimatedLines'

import styles from './next_gen_teaser.module.scss'
import NextGenTeaserInterface from './next_gen_teaser.interface'

export const typename = 'Set_Replicator_BlockNextGenTeaser'

const NextGenTeaserBlock: FunctionComponent<{
  block: NextGenTeaserInterface
}> = ({ block }) => (
  <div className={`${styles.root}`}>
    <div className={`${styles.bg}`}>
      <AnimatedLines
        variant="bottom"
        xInitialPosition={-700}
        yInitialPosition={-500}
        width={658}
        height={285}
        imageUrl="/images/next-gen-teaser-bg.svg"
      />
    </div>
    <div className="container default-grid">
      <h3 className="typo-h3 col-span-full">{block?.ngt_headline}</h3>
      <h6 className="typo-h6 col-span-full">{parse(block.ngt_copy)}</h6>
      <div className={`${styles.cardWrapper} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 col-span-full xl:col-span-10 xl:col-start-2 xxl:col-span-6 xxl:col-start-4`}>
        {block?.ngt_items.map((item) => (
          <div className={`${styles.card} col-span-1`} key={item?.copy}>
            <h5 className="typo-h5">{item?.copy}</h5>
          </div>
        ))}
        <div className="col-span-full">
          <Button href={block?.ngt_cta_url} title={block?.ngt_cta_title} />
        </div>
      </div>
    </div>
  </div>
)

export default NextGenTeaserBlock
