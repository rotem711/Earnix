import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import useIsMobile from 'utils/hooks'
import Image from 'next/image'
import { GlobalContext } from 'pages/_app'
import styles from './menu_overlay_item.module.scss'
import MenuOverlayItemInterface from './menu_overlay_item.interface'
import ChevronIcon from '../icons/chevron'

const MenuOverlayItem = (data: MenuOverlayItemInterface) => {
  const { links } = data
  const isMobile = useIsMobile('lg')
  const [headerHeight, setHeaderHeight] = useState(0)
  const Globals = useContext(GlobalContext)

  useEffect(() => {
    setHeaderHeight(document.getElementById('navHeader').clientHeight)
  }, [])

  const [isActive, setIsActive] = useState(false)

  return (
    <div className={`${styles.root}`}>
      <div
        className={`${isMobile ? styles.mobileLayout : styles.desktopLayout}`}
        onMouseEnter={isMobile ? undefined : () => setIsActive(true)}
        onMouseLeave={isMobile ? undefined : () => setIsActive(false)}
      >
        {isMobile ? (
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
              isMobile
                ? styles.accordionContent
                : cn(styles.megaMenuWrapper, 'container')
            }
          `}
            style={isMobile ? undefined : { top: headerHeight }}
          >
            <div
              className={`${
                isMobile
                  ? ''
                  : cn(styles.megaMenuInner, 'grid grid-cols-3 gap-24')
              }`}
            >
              {links.columns.map((col) => (
                <div
                  key={col.title}
                  className={`${styles.column} ${isMobile ? '' : 'col-span-1'}`}
                >
                  {col.type === 'link_list' && (
                    <div>
                      {isMobile ? (
                        <p className="subtitle">
                          <b>{col.title}</b>
                        </p>
                      ) : (
                        <h5 className="subtitle">{col.title}</h5>
                      )}

                      <ul className="submenu">
                        {col.links.map((link) => (
                          <li
                            key={link.link_text}
                            className={`${
                              link.child_links.length > 0
                                ? styles.parentLink
                                : ''
                            }`}
                          >
                            <Link href={link.link_url}>
                              <a href={link.link_url}>
                                {isMobile ? (
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
                                        {isMobile ? (
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
                  )}

                  {col.type === 'featured_insight' && (
                    <div className={`${styles.featuredInsight}`}>
                      {isMobile ? (
                        <p className="title">
                          <b>{Globals.translations.FEATUREDPOST}</b>
                        </p>
                      ) : (
                        <h5 className="title">
                          {Globals.translations.FEATUREDPOST}
                        </h5>
                      )}

                      <Link href={col.insight.uri}>
                        <a href={col.insight.uri}>
                          <Image
                            src={col.insight.cover_image.permalink}
                            blurDataURL={col.insight.cover_image.placeholder}
                            placeholder="blur"
                            width={col.insight.cover_image.width}
                            height={col.insight.cover_image.height}
                            layout="fill"
                            objectFit="cover"
                          />
                          <h5 className="linkTitle">{col.insight.title}</h5>
                        </a>
                      </Link>
                    </div>
                  )}
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
