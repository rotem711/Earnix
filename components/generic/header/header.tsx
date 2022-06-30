import React from 'react'
import Link from 'next/link'
import styles from './header.module.scss'
import HeaderInterface from './header.interface'
import Nav from '../nav/nav'

const HeaderBlock = ({ nav }: HeaderInterface) => (
  <div
    className={`${styles.root} container flex justify-between`}
  >
    <Link href="/">
      <a>LOGO</a>
    </Link>
    <Nav nav={nav} />
  </div>
)

export default HeaderBlock
