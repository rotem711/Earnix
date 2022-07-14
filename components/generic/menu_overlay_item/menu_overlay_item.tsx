import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import styles from './menu_overlay_item.module.scss'
import MenuOverlayItemInterface from './menu_overlay_item.interface'
import ChevronIcon from '../icons/chevron'

const MenuOverlayItem = (data: MenuOverlayItemInterface, isMobileLayout) => {
  const { links } = data
  const [headerHeight, setHeaderHeight] = useState(0)

  useEffect(() => {
    setHeaderHeight(document.getElementById('navHeader').clientHeight)
  }, [])

  const [isActive, setIsActive] = useState(false)

  return (
    <div className={`${styles.root}`}>
      <div
        className={`${
          isMobileLayout ? styles.mobileLayout : styles.desktopLayout
        }`}
        onMouseEnter={isMobileLayout ? undefined : () => setIsActive(true)}
        onMouseLeave={isMobileLayout ? undefined : () => setIsActive(false)}
      >
        {isMobileLayout ? (
          <button
            type="button"
            className={`${styles.accordionTitle}`}
            onClick={() => setIsActive(!isActive)}
          >
            <p>{links.nav_title}</p>
            <ChevronIcon
              className={`${isActive ? styles.chevron__open : styles.chevron}`}
            />
          </button>
        ) : (
          <div>
            <h6>{links.nav_title}</h6>
            {isActive && <span className={`${styles.orangeTriangle}`} />}
          </div>
        )}

        {isActive && (
          <div
            className={`
            ${
              isMobileLayout
                ? styles.accordionContent
                : cn(styles.megaMenuWrapper, 'container')
            }
          `}
            style={isMobileLayout ? undefined : { top: headerHeight }}
          >
            <div className={`${isMobileLayout ? '' : cn(styles.megaMenuInner, 'grid grid-cols-3 gap-24')}`}>
              {links.columns.map((col) => (
                <div
                  key={col.title}
                  className={`${styles.column} ${isMobileLayout ? '' : 'col-span-1'}`}
                >
                  {isMobileLayout ? (
                    <p className="subtitle">
                      <b>{col.title}</b>
                    </p>
                  ) : (
                    <h5 className="subtitle">{col.title}</h5>
                  )}

                  <ul className="submenu">
                    {col.type === 'link_list' && col.links.map((link) => (
                      <li
                        key={link.link_text}
                        className={`${
                          link.child_links.length > 0 ? styles.parentLink : ''
                        }`}
                      >
                        <Link href={link.link_url}>
                          <a href={link.link_url}>
                            {isMobileLayout ? (
                              <p>{link.link_text}</p>
                            ) : (
                              <h6>{link.link_text}</h6>
                            )}
                          </a>
                        </Link>

                        {link.child_links.length > 0 && (
                          <ul className="childWrapper">
                            {link.child_links.map((childLinks) => (
                              <li key={childLinks.link_text}>
                                <Link href={childLinks.link_url}>
                                  <a href={childLinks.link_url}>
                                    {isMobileLayout ? (
                                      <p>{childLinks.link_text}</p>
                                    ) : (
                                      <h6>{childLinks.link_text}</h6>
                                    )}
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
          </div>
        )}
      </div>
    </div>
  )
}

export default MenuOverlayItem
