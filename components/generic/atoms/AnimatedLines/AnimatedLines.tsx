/* eslint-disable operator-linebreak */
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
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop
      const initialHeight = 10
      const height = winScroll - initialHeight
      setScrolled(height)
    }

    window.addEventListener('scroll', listenToScroll)
    return () => window.removeEventListener('scroll', () => listenToScroll)
  }, [])

  return (
    <>
      {props.variant === 'bottom' && (
        <div
          ref={ref}
          className={styles.background}
          style={{
            left: scrolled
              ? props.xInitialPosition + scrolled / 5
              : props.xInitialPosition,
            bottom: scrolled
              ? props.yInitialPosition + scrolled / 5
              : props.yInitialPosition,
          }}
        >
          <Image src={`${props.imageUrl}`} width={props.width} height={props.height} />
        </div>
      )}
      {props.variant === 'top' && (
        <div
          ref={ref}
          className={styles.background}
          style={{
            left: scrolled
              ? props.xInitialPosition + scrolled / 5
              : props.xInitialPosition,
            top: scrolled
              ? props.yInitialPosition - scrolled / 5
              : props.yInitialPosition,
          }}
        >
          <Image src={`${props.imageUrl}`} width={props.width} height={props.height} />
        </div>
      )}
    </>
  )
}

export default AnimatedLines
