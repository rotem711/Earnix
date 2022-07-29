import React, { FunctionComponent } from 'react'
import styles from './cta_simple_divider.module.scss'
import CtaSimpleDividerInterface from './cta_simple_divider.interface'

export const typename = 'Set_Replicator_BlockCtaSimpleDivider'

const CtaSimpleDividerBlock: FunctionComponent<{
  block: CtaSimpleDividerInterface
}> = ({ block }) => (
  <div className={`${styles.root} container`}>
    Ctasimpledivider Block:
    {block.type}
  </div>
)

export default CtaSimpleDividerBlock
