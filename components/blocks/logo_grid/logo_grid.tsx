import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import Button from 'components/generic/button/button'
import styles from './logo_grid.module.scss'
import LogoGridInterface from './logo_grid.interface'

export const typename = 'Set_Replicator_BlockLogoGrid'

const LogoGridBlock: FunctionComponent<{ block: LogoGridInterface }> = ({
  block,
}) => (
  <div className={`${styles.root} container default-grid`}>
    <div className="col-span-full xxl:col-start-3 xxl:col-span-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-24 justify-items-center items-center mb-40">
        {block.lg_logos.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index} className="col-span-1 mb-80 md:mb-64">
            <Image
              src={item.logo.permalink}
              blurDataURL={item.logo.placeholder}
              placeholder="blur"
              width={item.logo.width}
              height={item.logo.height}
              objectFit="contain"
            />
          </div>
        ))}
      </div>
      <div className="text-center">
        <Button href={block.lg_cta_url} title={block.lg_cta_title} />
      </div>
    </div>
  </div>
)

export default LogoGridBlock
