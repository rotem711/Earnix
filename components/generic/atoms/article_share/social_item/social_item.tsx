import React, { FunctionComponent } from 'react'
import Link from 'next/link'
import SocialItemInterface from './social_item.interface'
import styles from './social_item.module.scss'

const SocialItem:FunctionComponent<SocialItemInterface> = ({ href = '', child }) => (
  <Link href={href}>
    <a
      href={href}
      className={`${styles.root}`}
      rel="noreferrer"
      target="_blank"
    >
      {child}
    </a>
  </Link>
)

export default SocialItem
