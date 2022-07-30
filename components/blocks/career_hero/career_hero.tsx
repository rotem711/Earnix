import React, { FunctionComponent } from 'react'
import styles from './career_hero.module.scss'
import CareerHeroInterface from './career_hero.interface'

export const typename = 'Set_Replicator_BlockCareerHero'

const CareerHeroBlock:FunctionComponent<{ block: CareerHeroInterface }> = ({ block }) => (
  <div
    className={`${styles.root} container`}
  >
    Careerhero Block:
    {block.type}
  </div>
)

export default CareerHeroBlock
