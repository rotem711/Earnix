import React, { FunctionComponent } from 'react'
import SvgIconInterface from '../../../../../interfaces/svg'

const EmailIcon:FunctionComponent<SvgIconInterface> = ({
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
      d="M10 12v1.18l5.16 3.375.03.013a2.338 2.338 0 00.856.17c.317-.003.652-.072.985-.302.782-.544 3.353-2.31 4.968-3.42V12H10zm6.052 5.895h-.006c-.808-.005-1.378-.294-1.425-.313l-.03-.015-4.59-3.003v6.247H22v-6.39c-1.584 1.087-3.63 2.494-4.309 2.966a2.851 2.851 0 01-1.64.508z"
    />
  </svg>
)

export default EmailIcon
