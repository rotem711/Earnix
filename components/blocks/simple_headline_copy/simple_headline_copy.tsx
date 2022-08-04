import React, { FunctionComponent } from 'react'
import parse from 'html-react-parser'
import styles from './simple_headline_copy.module.scss'
import SimpleHeadlineCopyInterface from './simple_headline_copy.interface'

export const typename = 'Set_Replicator_BlockSimpleHeadlineCopy'

const SimpleHeadlineCopyBlock: FunctionComponent<{
  block: SimpleHeadlineCopyInterface
}> = ({ block }) => (
  <div className={`${styles.root} container grid grid-cols-12 default-grid`}>
    <div className={`${styles.contentWrapper} col-start-1 col-span-12`}>
      <div className={`${styles.headline} typo-h5`}>{block.shc_headline}</div>
      <div className={`${styles.copy} typo-p`}>{parse(block.shc_copy)}</div>
    </div>
  </div>
)

export default SimpleHeadlineCopyBlock
