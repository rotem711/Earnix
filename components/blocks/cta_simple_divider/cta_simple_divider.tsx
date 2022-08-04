import React, { FunctionComponent } from 'react'
import cn from 'classnames'
import styles from './cta_simple_divider.module.scss'
import CtaSimpleDividerInterface from './cta_simple_divider.interface'
import LogoIcon from './logo_icon/logo_icon'
import Button from '../../generic/button/button'

export const typename = 'Set_Replicator_BlockCtaSimpleDivider'

const CtaSimpleDividerBlock: FunctionComponent<{
  block: CtaSimpleDividerInterface
}> = ({ block }) => {
  const isWithButton = block.csd_cta_url !== null && block.csd_cta_title !== null

  return (
    <div className={`${styles.root} container grid grid-cols-12 default-grid`}>
      <div
        className={cn(
          styles.contentWrapper,
          {
            [`${styles.contentWrapperWithButton}`]: isWithButton,
          },
          'col-start-1',
          'col-span-12',
        )}
      >
        {!isWithButton && (
          <div className={`${styles.logoWrapper}`}>
            <LogoIcon />
          </div>
        )}
        <div
          className={cn(
            styles.headline,
            {
              [`${styles.headlineWithButton}`]: isWithButton,
            },
            'typo-h4',
          )}
        >
          {block.csd_headline}
        </div>
        {isWithButton && (
          <div className={`${styles.buttonWrapper}`}>
            <Button href={block.csd_cta_url} title={block.csd_cta_title} />
          </div>
        )}
      </div>
    </div>
  )
}

export default CtaSimpleDividerBlock
