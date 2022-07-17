import React, { FunctionComponent } from 'react'
import parse from 'html-react-parser'
import styles from './cta_box.module.scss'
import CtaBoxInterface from './cta_box.interface'
import Button from '../../generic/button/button'

export const typename = 'Set_Replicator_BlockCtaBox'

const CtaBoxBlock:FunctionComponent<{ block: CtaBoxInterface }> = ({ block }) => {
  console.log(block)
  return (
    <div className={`${styles.root} grid grid-cols-12`}>
      <div className={`${styles.contentWrapper} col-start-1 col-span-12`}>
        <div className={`${styles.innerContentWrapper}`}>
          <div className={`typo-h3 ${styles.headline}`}>
            {block.cb_headline}
          </div>
          <div className={`typo-p ${styles.cb_copy}`}>{parse(block.cb_copy)}</div>
          <div className={styles.buttonWrapper}>
            <Button href={block.cb_cta_url} title={block.cb_cta_title} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default CtaBoxBlock
