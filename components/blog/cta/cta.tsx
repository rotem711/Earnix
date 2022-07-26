import React from 'react'
import parse from 'html-react-parser'
import Button from 'components/generic/button/button'
import AnimatedLines from 'components/generic/atoms/AnimatedLines/AnimatedLines'

import styles from './cta.module.scss'
import CtaInterface from './cta.interface'

const Cta = (data : CtaInterface) => {
  const {
    copy,
    link_title,
    link_url,
  } = data

  return (
    <div className={`${styles.root}`}>
      <div className={`${styles.copy}`}>{parse(copy)}</div>
      <Button href={link_url} title={link_title} />
      <div className={`${styles.lines}`}>
        <AnimatedLines
          variant="top"
          xInitialPosition={-100}
          yInitialPosition={110}
          width={974}
          height={422}
          imageUrl="/images/topDownLinesCtaBlog.svg"
        />
      </div>
    </div>
  )
}

export default Cta
