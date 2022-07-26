import React, { FunctionComponent } from 'react'
import parse from 'html-react-parser'
import styles from './quote.module.scss'
import QuoteInterface from './quote.interface'

export const typename = 'Set_Replicator_BlockQuote'

const QuoteBlock:FunctionComponent<{ block: QuoteInterface }> = ({ block }) => (
  <div className={block.sq_colored_background ? `${styles.rootColored}` : `${styles.root}`}>
    <div className="container grid grid-cols-12">
      <div className={`${styles.contentWrapper} col-start-1 col-span-12 lg:col-start-2 lg:col-span-10 xxl:col-start-3 xxl:col-span-8`}>
        <div className={`${styles.quote} typo-h4`}>{parse(block.sq_quote)}</div>
        <div className={`${styles.authorName} typo-h6`}>{block.sq_author_name}</div>
        <div className="typo-tag">{block.sq_author_job_title}</div>
      </div>
    </div>
  </div>
)

export default QuoteBlock
