import React, { FunctionComponent } from 'react'
import LinkIconInterface from './link_icon.interface'

const LinkIcon:FunctionComponent<LinkIconInterface> = ({
  color, width, height, customClass,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || '27'}
    height={height || '23'}
    fill="none"
    viewBox="0 0 27 23"
    className={customClass}
  >
    <path
      stroke={color || '#F44D2E'}
      strokeWidth="2"
      d="M14.393 22l10.606-10.5L14.393 1M0 11.578h25"
    />
  </svg>
)

export default LinkIcon
