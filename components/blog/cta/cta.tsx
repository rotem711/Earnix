import React from 'react'
import Link from 'next/link'
import styles from './cta.module.scss'
import CtaInterface from './cta.interface'

const Cta = (data : CtaInterface) => {
  const {
    href = '',
    title = '',
  } = data

  return (
    <Link href={href || ''}>
      <a
        href={href}
        className={`${styles.root}`}
        rel="noreferrer"
      >
        {title}
      </a>
    </Link>
  )
}

export default Cta
