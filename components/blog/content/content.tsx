import React from 'react'
import Link from 'next/link'
import styles from './content.module.scss'
import ContentInterface from './content.interface'

const Content = (data : ContentInterface) => {
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

export default Content
