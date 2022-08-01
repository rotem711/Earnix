import React, { FunctionComponent } from 'react'
import styles from './hero_with_animated_lines.module.scss'
import HeroWithAnimatedLinesInterface from './hero_with_animated_lines.interface'

export const typename = 'Set_Replicator_BlockHeroWithAnimatedLines'

const HeroWithAnimatedLinesBlock: FunctionComponent<{
  block: HeroWithAnimatedLinesInterface
}> = ({ block }) => (
  <div className={`${styles.root}`}>
    <div className="container grid grid-cols-12 default-grid">
      <div className={`${styles.contentWrapper} col-start-1 col-span-12`}>
        <div className={`${styles.headline} typo-h2`}>{block.hwal_headline}</div>
        <div className={`${styles.copy} typo-p`}>{block.hwal_copy}</div>
      </div>
    </div>
  </div>
)

export default HeroWithAnimatedLinesBlock
