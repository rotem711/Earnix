import React, { FunctionComponent } from 'react'
import Button from 'components/generic/button/button'
import Image from 'next/image'
import styles from './cta_banner.module.scss'
import CtaBannerInterface from './cta_banner.interface'

export const typename = 'Set_Replicator_BlockCtaBanner'

const CtaBannerBlock: FunctionComponent<{ block: CtaBannerInterface }> = ({
  block,
}) => (
  <div className={`${styles.root}`}>
    <div className={styles.contentWrapper}>
      <div
        className={`${styles.headline} typo-h3 text-white sm:w-[95%] md:w-[40%] sm:pl-20 sm:pr-20 md:pl-0 md:pr-0`}
      >
        {block.ctab_headline}
      </div>
      <div
        className={`${styles.copy} typo-h6 text-white sm:w-[95%] md:w-[40%] sm:pl-20 sm:pr-20 md:pl-0 md:pr-0`}
      >
        {block.ctab_copy}
      </div>
      <div className={styles.ctaWrapper}>
        <Button href={block.ctab_cta_url} title={block.ctab_cta_title} />
      </div>
      <Image
        src={`http://${process.env.NEXT_PUBLIC_ASSET_DOMAIN}${block.ctab_ctaBackground.url}`}
        layout="fill"
        className={styles.bgImage}
      />
      <div className={styles.imgFilter} />
    </div>
  </div>
)

export default CtaBannerBlock
