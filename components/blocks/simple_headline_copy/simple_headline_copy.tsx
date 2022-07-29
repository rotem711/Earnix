import React, { FunctionComponent } from 'react'
import styles from './simple_headline_copy.module.scss'
import SimpleHeadlineCopyInterface from './simple_headline_copy.interface'

export const typename = 'Set_Replicator_BlockSimpleHeadlineCopy'

const SimpleHeadlineCopyBlock: FunctionComponent<{
  block: SimpleHeadlineCopyInterface
}> = ({ block }) => (
  <div className={`${styles.root} container`}>
    Simpleheadlinecopy Block:
    {block.type}
  </div>
)

export default SimpleHeadlineCopyBlock
