import React, { FunctionComponent } from 'react'
import styles from './three_cards.module.scss'
import ThreeCardsInterface from './three_cards.interface'

export const typename = 'Set_Replicator_BlockThreeCards'

const ThreeCardsBlock:FunctionComponent<{ block: ThreeCardsInterface }> = ({ block }) => (
  <div
    className={`${styles.root} container`}
  >
    Threecards Block:
    {block.type}
  </div>
)

export default ThreeCardsBlock
