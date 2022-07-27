import React, { FunctionComponent } from 'react'
import parse from 'html-react-parser'
import styles from './solution.module.scss'
import SolutionInterface from './solution.interface'
import TickIcon from './tick_icon/tick_icon'

export const typename = 'Set_Replicator_BlockSolution'

const SolutionBlock:FunctionComponent<{ block: SolutionInterface }> = ({ block }) => (
  <div
    className={`${styles.root} container grid grid-cols-12 default-grid`}
  >
    <div className={`${styles.contentWrapper} col-start-1 col-span-12 xxl:col-start-3 xxl:col-span-9`}>
      <div className={`${styles.firstBlock}`}>
        <div className={`${styles.eyebrow} typo-h6`}>{block.so_eyebrow}</div>
        <div className={`${styles.headline} typo-h3`}>{block.so_headline}</div>
        <div className={`${styles.description} typo-h6`}>{parse(block.so_description)}</div>
      </div>
      <div className={`${styles.secondBlock}`}>
        <div className={`${styles.listHeadline}  typo-h5`}>{block.so_list_headline}</div>
        <div className={`${styles.listItems}`}>
          {block.so_list_copy.map((item) => (
            <div key={item} className={`${styles.listItem}`}>
              <div className={`${styles.iconWrapper}`}>
                <TickIcon />
              </div>
              <div className={`${styles.listCopy} typo-h6`}>{item}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default SolutionBlock
