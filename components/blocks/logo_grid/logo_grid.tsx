import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import Button from 'components/generic/button/button'
import styles from './logo_grid.module.scss'
import LogoGridInterface from './logo_grid.interface'

export const typename = 'Set_Replicator_BlockLogoGrid'

const LogoGridBlock:FunctionComponent<{ block: LogoGridInterface }> = ({ block }) => (
  <div
    className={`${styles.root} container grid grid-cols-6`}
  >
    <div className="col-start-1 col-span-6 md:col-start-2 md:col-span-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-20 justify-items-center items-center mb-40">
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
