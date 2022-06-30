import React, { FunctionComponent } from 'react'
import styles from './hero.module.scss'
import HeroInterface from './hero.interface'

export const typename = 'Set_Replicator_BlockHero'

const HeroBlock:FunctionComponent<{ block: HeroInterface }> = ({ block }) => (
  <div
    className={`${styles.root} container`}
  >
    Hero Block:
    {block.type}
  </div>
)

export default HeroBlock
