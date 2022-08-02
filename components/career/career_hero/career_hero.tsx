import React, { FunctionComponent } from 'react'
import styles from './career_hero.module.scss'
import HeroWithAnimatedLinesInterface from './career_hero.interface'

export const typename = 'Set_Replicator_BlockHeroWithAnimatedLines'

const CareerHero: FunctionComponent<{
  block: HeroWithAnimatedLinesInterface
}> = ({ block }) => (
  <div className={`${styles.root}`}>
    <div className="container grid grid-cols-12 default-grid">
      <div className={`${styles.contentWrapper} col-start-1 col-span-12`}>
        <div className={`${styles.headline} typo-h2`}>{block.headline}</div>
        <div className={`${styles.copy} typo-p`}>
          <span>{block.location}</span>
          <span>{block.department}</span>
        </div>
      </div>
    </div>
  </div>
)

export default CareerHero
