import React, { FunctionComponent } from 'react'
import SvgIconInterface from '../../../../../interfaces/svg'

const TwitterIcon:FunctionComponent<SvgIconInterface> = ({
  color, width, height, customClass,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || '32'}
    height={height || '32'}
    fill="none"
    viewBox="0 0 32 32"
    className={customClass}
  >
    <circle cx="16" cy="16" r="15.5" stroke={color || '#022B3C'} />
    <path
      fill={color || '#022B3C'}
      d="M14.043 21.5c4.852 0 7.506-3.848 7.506-7.184 0-.11 0-.218-.008-.327.516-.357.962-.8 1.316-1.307a5.44 5.44 0 01-1.515.398c.55-.316.963-.812 1.16-1.397a5.43 5.43 0 01-1.675.613 2.68 2.68 0 00-1.497-.763 2.743 2.743 0 00-1.672.266c-.512.262-.92.679-1.16 1.185a2.428 2.428 0 00-.167 1.615 7.754 7.754 0 01-3.01-.766 7.437 7.437 0 01-2.426-1.872 2.433 2.433 0 00-.29 1.84 2.53 2.53 0 001.106 1.53c-.42-.011-.83-.12-1.197-.316v.032c0 .583.211 1.148.597 1.6.386.45.923.76 1.52.875a2.747 2.747 0 01-1.191.044c.168.501.496.94.938 1.255.442.314.976.488 1.526.498a5.382 5.382 0 01-1.843.896 5.52 5.52 0 01-2.061.15 7.714 7.714 0 004.043 1.133"
    />
  </svg>
)

export default TwitterIcon
