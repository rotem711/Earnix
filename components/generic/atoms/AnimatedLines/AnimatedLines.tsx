/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-shadow */
/* eslint-disable arrow-body-style */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import AnimatedLinesInterface from './AnimatedLines.interface'
import styles from './AnimatedLines.module.scss'

const AnimatedLines = (props: AnimatedLinesInterface) => {
  const ref = useRef()
  const [scrolled, setScrolled] = useState<number>()

  useEffect(() => {
    function listenToScroll() {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      const initialHeight = 10
      const height = winScroll - initialHeight
      setScrolled(height)
    }

    window.addEventListener('scroll', listenToScroll)
    window.removeEventListener('scroll', () => null)
  }, [])

  return (
    <>
      {props.variant === 'bottom' && (
        <div
          ref={ref}
          className={styles.background}
          style={{
            left: scrolled
              ? props.xInitialPosition - scrolled / 5
              : props.xInitialPosition,
            bottom: scrolled ? -1 * (scrolled / 5) : 0,
          }}
        >
          <Image src={`${props.imageUrl}`} width={700} height={300} />
        </div>
      )}
      {props.variant === 'top' && (
        <div
          ref={ref}
          className={styles.background}
          style={{
            left: scrolled
              ? props.xInitialPosition + scrolled / 3
              : props.xInitialPosition,
            top: scrolled ? (-1 * scrolled) / 3 : 0,
          }}
        >
          <Image src={`${props.imageUrl}`} width={700} height={300} />
        </div>
      )}
    </>
  )
}

export default AnimatedLines
