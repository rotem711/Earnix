import React, { FunctionComponent } from 'react'
import styles from './hero.module.scss'
import HeroInterface from './hero.interface'

export const typename = 'Set_Replicator_BlockHero'

const HeroBlock: FunctionComponent<{ block: HeroInterface }> = ({ block }) => (
  <div className={`${styles.root} container`}>
    <h2>
      Hero Block:
      {block.type}
    </h2>
  </div>
)

export default HeroBlock
