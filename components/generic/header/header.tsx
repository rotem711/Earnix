import React, { createRef, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Headroom from 'headroom.js'
import cn from 'classnames'

import styles from './header.module.scss'
import HeaderInterface from './header.interface'
import NavInterface from '../nav/nav.interface'
import Nav from '../nav/nav'
import HamburgerIcon from '../icons/hamburger'
import MenuOverlayItem from '../menu_overlay_item/menu_overlay_item'

const HeaderBlock = ({
  data,
  nav,
  darkMode,
}: {
  data: HeaderInterface
  nav: NavInterface
  darkMode: Boolean
}) => {
  const { links, logo_dark, logo_light } = data

  const headerRef = createRef<HTMLDivElement>()
  const [isMobile, setMobile] = useState(false)
  const [headerHeight, setHeaderHeight] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)
  const [navOnTop, setnavOnTop] = useState(true)
  const [navIsOpen, setNavIsOpen] = useState(false)
  const [invertColors, setInvertColors] = useState(false)
  let headroom

  useEffect(() => {
    headroom = new Headroom(headerRef.current, {
      offset: headerRef.current.clientHeight,
      tolerance: { up: 5, down: 0 },
      onTop() {
        setnavOnTop(true)
        headroom.elem.classList.remove('headroom--animated')
      },
      onNotTop() {
        setnavOnTop(false)
        if (!darkMode && isMobile) {
          setInvertColors(!invertColors)
        }
      },
      onUnpin() {
        setNavIsOpen(false)
      },
    })
    headroom.init()
  })

  useEffect(() => {
    setHeaderHeight(headerRef.current.clientHeight)
    setWindowHeight(window.innerHeight)
  }, [])

  useEffect(() => {
    setMobile(window.innerWidth < 1024)
    window.addEventListener('orientationchange', () => {
      setMobile(window.innerWidth < 1024)
    })
    return () => {
      window.removeEventListener('orientationchange', () => {})
    }
  }, [])

  const toggleNav = () => {
    if (!navIsOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    if (!navOnTop && !darkMode && isMobile) {
      setInvertColors(!invertColors)
    }
    setNavIsOpen(!navIsOpen)
  }

  const isActiveLink = (href: string) => {
    const router = useRouter()
    let pathNameToCheck

    if (href.indexOf('http://') === 0 || href.indexOf('https://') === 0) {
      const urlHolder = new URL(href)
      pathNameToCheck = urlHolder.pathname
    } else {
      pathNameToCheck = href
    }

    return pathNameToCheck === router.pathname
  }

  const headerClass = cn(styles.root, {
    [`${styles.headerHasOpenNav}`]: isMobile && navIsOpen,
    [`${styles.darkMode}`]: !navOnTop,
  })
  const mobileMenuClasses = cn('container', styles.mobileMenu)

  const mobileMenuStyle = {
    maxHeight: windowHeight - headerHeight,
    top: headerHeight,
  }

  return (
    <header className={headerClass} ref={headerRef} id="navHeader">
      <div className={`${styles.topbar} container typo-tag-lower`}>
        <Image
          src="/assets/search.svg"
          width="24"
          height="24"
          alt="Search Icon"
        />
        <Nav nav={nav} />
      </div>

      <div className={`${styles.mainHeader} container`}>
        <Link href="/">
          <a href="/">
            <Image
              src={
                navIsOpen || !navOnTop
                  ? logo_dark.permalink
                  : logo_light.permalink
              }
              width={
                navIsOpen || !navOnTop ? logo_dark.width : logo_light.width
              }
              height={
                navIsOpen || !navOnTop ? logo_dark.height : logo_light.height
              }
            />
          </a>
        </Link>

        {isMobile && (
          <button
            type="button"
            className={`${styles.mobileToggle}`}
            onClick={toggleNav}
            aria-expanded={navIsOpen}
            aria-controls="main_navigation"
          >
            <HamburgerIcon className="" />
          </button>
        )}

        <ul className={`${isMobile ? mobileMenuClasses : styles.megaMenu}`} style={isMobile ? mobileMenuStyle : undefined}>
          {links.map((item) => (
            <li key={item.text ?? item.nav_title}>
              {item.type === 'simple_link' && (
                <Link href={item.link}>
                  <a
                    href={item.link}
                    className={`${cn('simpleLink', {
                      active: isActiveLink(item.link),
                    })}`}
                  >
                    {isMobile ? (
                      <p>{item.text}</p>
                    ) : (
                      <h6>{item.text}</h6>
                    )}
                  </a>
                </Link>
              )}

              {item.type === 'overlay' && (
                <MenuOverlayItem links={item} isMobileLayout={isMobile} key={isMobile} />
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default HeaderBlock
function e(e: any): React.MouseEventHandler<HTMLDivElement> {
  throw new Error('Function not implemented.')
}
