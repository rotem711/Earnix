/* eslint-disable react/destructuring-assignment */
import React from 'react'
import LeftArrow from '../icons/leftArrow'
import RightArrow from '../icons/rightArrow'
import SliderButtonInterface from './sliderButton.interface'
import styles from './sliderButton.module.scss'

const SliderButton = (props: SliderButtonInterface) => {
  const clickEventHandler = props.onClick ? props.onClick : () => null
  return (
    <button
      className={styles.iconWrapper}
      onClick={() => {
        clickEventHandler()
      }}
      type="button"
    >
      <div>
        {props.variant === 'left' && <LeftArrow />}
        {props.variant === 'right' && <RightArrow />}
      </div>
    </button>
  )
}

export default SliderButton
