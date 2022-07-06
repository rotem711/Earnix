import React from 'react'
import Link from 'next/link'
import styles from './button.module.scss'
import ButtonInterface from './button.interface'

const Button = (data : ButtonInterface) => {
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

export default Button
