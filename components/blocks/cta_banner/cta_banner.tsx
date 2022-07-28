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
    <div className={`${styles.bgImage}`}>
      <Image
        src={block.ctab_ctaBackground.permalink}
        width={block.ctab_ctaBackground.width}
        height={block.ctab_ctaBackground.height}
        alt={block.ctab_ctaBackground.alt}
        layout="fill"
        objectFit="cover"
      />
      <div className={`${styles.imgFilter} blue`} />
      <div className={`${styles.imgFilter} green`} />
    </div>
    <div className={`${styles.contentWrapper} container default-grid`}>
      <div
        className={`${styles.headline} col-span-full md:col-span-6 md:col-start-2 lg:col-span-8 lg:col-start-3 xl:col-span-6 xl:col-start-4 xxl:col-span-4 xxl:col-start-5 typo-h3`}
      >
        {block.ctab_headline}
      </div>
      <div
        className={`${styles.copy} col-span-full md:col-span-6 md:col-start-2 lg:col-span-6 lg:col-start-4 xl:col-span-4 xl:col-start-5 typo-h6`}
      >
        {block.ctab_copy}
      </div>
      <div className="col-span-full">
        <Button href={block.ctab_cta_url} title={block.ctab_cta_title} />
      </div>
    </div>
  </div>
)

export default CtaBannerBlock
