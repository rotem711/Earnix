import React, { FunctionComponent } from 'react'
import styles from './quote.module.scss'
import QuoteInterface from './quote.interface'

export const typename = 'Set_Replicator_BlockQuote'

const QuoteBlock:FunctionComponent<{ block: QuoteInterface }> = ({ block }) => (
  <div
    className={`${styles.root} container`}
  >
    Quote Block:
    {block.type}
  </div>
)

export default QuoteBlock
