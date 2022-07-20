import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import Button from 'components/generic/button/button'
import styles from './logo_grid.module.scss'
import LogoGridInterface from './logo_grid.interface'

export const typename = 'Set_Replicator_BlockLogoGrid'

const LogoGridBlock: FunctionComponent<{ block: LogoGridInterface }> = ({
  block,
}) => (
  <div className={`${styles.root} container grid grid-cols-12 xxl:gap-30`}>
    <div className="col-span-12 xxl:col-start-3 xxl:col-span-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-16 lg:gap-24 xl:gap-30 justify-items-center items-center mb-40">
        {block.lg_logos.map((item, index) => (
          <Image
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            src={item.logo.permalink}
            blurDataURL={item.logo.placeholder}
            placeholder="blur"
            width={item.logo.width}
            height={item.logo.height}
            className="mb-80 md:mb-64"
          />
        ))}
      </div>
      <div className="text-center">
        <Button href={block.lg_cta_url} title={block.lg_cta_title} />
      </div>
    </div>
  </div>
)

export default LogoGridBlock
