import React, { useState } from 'react'
import Link from 'next/link'
import styles from './mobile_menu_overlay_item.module.scss'
import MobileMenuOverlayItemInterface from './mobile_menu_overlay_item.interface'
import ChevronIcon from '../icons/chevron'

const MobileMenuOverlayItem = (data : MobileMenuOverlayItemInterface) => {
  const {
    links,
  } = data

  const [isActive, setIsActive] = useState(true)

  return (
    <div className={`${styles.root}`}>
      <button
        type="button"
        className={`${styles.accordionTitle}`}
        onClick={() => setIsActive(!isActive)}
      >
        <p>{links.nav_title}</p>
        <ChevronIcon className={`${isActive ? styles.chevron__open : styles.chevron}`} />
      </button>
      {isActive && (
        <div className={`${styles.accordionContent}`}>
          {links.columns.map((col) => (
            <div key={col.title} className={`${styles.column}`}>
              <p className="subtitle">
                <b>{col.title}</b>
              </p>

              <ul className="submenu">
                {col.links.map((link) => (
                  <li key={link.link_text}>
                    <Link href={link.link_url}>
                      <a href={link.link_url}>
                        <p>{link.link_text}</p>
                      </a>
                    </Link>

                    {link.child_links && (
                      <ul className={`${styles.childWrapper}`}>
                        {link.child_links.map((childLinks) => (
                          <li key={childLinks.link_text}>
                            <Link href={childLinks.link_url}>
                              <a href={childLinks.link_url}>
                                <p>{childLinks.link_text}</p>
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default MobileMenuOverlayItem
