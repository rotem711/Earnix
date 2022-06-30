import React from 'react'
import Link from 'next/link'
import NavInterface from './nav.interface'
import styles from './nav.module.scss'

const NavBlock = ({ nav }: { nav: NavInterface }) => (
  <div
    className={styles.root}
  >
    <ul className="flex">
      {nav.tree.map((t) => (
        <li key={t.page.id} className="ml-2">
          <Link href={t.page.url}>
            <a>{t.page.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export default NavBlock
