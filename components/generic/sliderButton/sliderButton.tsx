/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-unresolved */
import React from 'react'
import LeftArrow from '../icons/leftArrow'
import RightArrow from '../icons/rightArrow'
import SliderButtonInterface from './sliderButton.interface'
import styles from './sliderButton.module.scss'

function SliderButton(props: SliderButtonInterface) {
  const clickEventHandler = props.onClick ? props.onClick : () => null
  return (
    <button
      className={styles.iconWrapper}
      onClick={() => {
        clickEventHandler()
      }}
      type="button"
    >
      {props.variant === 'left' && <LeftArrow />}
      {props.variant === 'right' && <RightArrow />}
    </button>
  )
}

export default SliderButton
