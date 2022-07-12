import React, { createRef, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Headroom from 'headroom.js'

import styles from './header.module.scss'
import HeaderInterface from './header.interface'
import NavInterface from '../nav/nav.interface'
import Nav from '../nav/nav'
import HamburgerIcon from '../icons/hamburger'

const HeaderBlock = ({
  data,
  nav,
  darkMode,
}: {
  data: HeaderInterface,
  nav: NavInterface,
  darkMode: Boolean
}) => {
  const {
    links,
    logo_dark,
    logo_light,
  } = data

  const headerRef = createRef<HTMLDivElement>()
  const [isMobile, setMobile] = useState(false)
  const [navIsOpen, setNavIsOpen] = useState(false)
  const [invertColors, setInvertColors] = useState(false)
  let hrMain

  function toggleNav(event: any, force?: boolean) {
    const newState = force ?? !navIsOpen
    if (newState) {
      // hrMain.pin()
      // hrMain.freeze()
      // disableBodyScroll(headerRef.current)
    } else {
      // clearAllBodyScrollLocks()
      // hrMain.unfreeze()
    }
    if (!darkMode && isMobile) {
      setInvertColors(!invertColors)
    }
    setNavIsOpen(newState)
  }

  useEffect(() => {
    setMobile(window.innerWidth < 768)
    window.addEventListener('orientationchange', () => {
      setMobile(window.innerWidth < 768)
    })
    return () => {
      window.removeEventListener('orientationchange', () => {})
    }
  }, [])

  useEffect(() => {
    toggleNav(false, false)
  }, [isMobile])

  useEffect(() => {
    hrMain = new Headroom(headerRef.current, {
      offset: headerRef.current.clientHeight,
      tolerance: { up: 5, down: 0 },
      onTop() {
        hrMain.elem.classList.remove('hrMain--animated')
      },
      onNotTop() {
        setTimeout(() => {
          hrMain.elem.classList.add('hrMain--animated')
        }, 200)
      },
    })
    hrMain.init()
  })

  return (
    <div className={`${styles.root}`}>
      <div className={`${styles.topbar} container typo-tag-lower`}>
        <Image
          src="/assets/search.svg"
          width="24"
          height="24"
          alt="Search Icon"
        />
        <Nav nav={nav} />
      </div>

      <div
        className={`${styles.mainHeader} container`}
        ref={headerRef}
      >
        <Link href="/">
          <a href="/">
            <Image
              src={navIsOpen ? logo_dark.permalink : logo_light.permalink}
              width={navIsOpen ? logo_dark.width : logo_light.width}
              height={navIsOpen ? logo_dark.height : logo_light.height}
            />
          </a>
        </Link>

        {(isMobile) && (
          <button
            type="button"
            className={`${styles.mobileToggle} lg:hidden cursor-pointer order-3`}
            onClick={toggleNav}
            aria-expanded={navIsOpen}
            aria-controls="main_navigation"
          >
            <HamburgerIcon className="text-white" />
          </button>
        )}
        <ul>
          {links.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index}>
              {(item.type === 'simple_link') ? (
                <Link href={item.link}>
                  <a href={item.link}>{item.text}</a>
                </Link>
              ) : (
                <div>
                  {item.nav_title}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default HeaderBlock
