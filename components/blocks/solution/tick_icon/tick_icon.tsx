import React, { FunctionComponent } from 'react'
import TickIconInterface from './tick_icon.interface'

const TickIcon:FunctionComponent<TickIconInterface> = ({
  color, width, height, customClass,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || '27'}
    height={height || '21'}
    fill="none"
    viewBox="0 0 27 21"
    className={customClass}
  >
    <path
      stroke={color || '#F44D2E'}
      strokeWidth="2"
      d="M1 12.541L7.458 19 25.434 1.023"
    />
  </svg>
)
export default TickIcon
