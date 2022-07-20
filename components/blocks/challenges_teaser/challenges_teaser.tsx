import React, { FunctionComponent } from 'react'
import styles from './challenges_teaser.module.scss'
import ChallengesTeaserInterface from './challenges_teaser.interface'
import Button from '../../generic/button/button'

export const typename = 'Set_Replicator_BlockChallengesTeaser'

const ChallengesTeaserBlock: FunctionComponent<{
  block: ChallengesTeaserInterface
}> = ({ block }) => (
  <div className={`${styles.root}`}>
    <div className="container grid grid-cols-12">
      <div className={`${styles.contentWrapper} col-start-1 col-span-12 xl:col-start-3 xl:col-span-8 xxl:col-start-4 xxl:col-span-6`}>
        <div className={`typo-h3 ${styles.headline}`}>
          {block.ct_headline}
        </div>
        <div className={styles.itemsWrapper}>
          {block.ct_items.map(({ copy }) => (
            <div key={copy} className={styles.ctItem}>
              <div className={`typo-p-bold ${styles.copy}`}>{copy}</div>
            </div>
          ))}
        </div>
        <div className={styles.buttonWrapper}>
          <Button href={block.ct_cta_url} title={block.ct_cta_title} />
        </div>
      </div>
    </div>
  </div>
)

export default ChallengesTeaserBlock
