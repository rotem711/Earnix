import React, { FunctionComponent } from 'react'
import SvgIconInterface from '../../../../../interfaces/svg'

const LinkedinIcon:FunctionComponent<SvgIconInterface> = ({
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
      d="M20.225 20.224h-1.778v-2.785c0-.664-.012-1.518-.925-1.518-.926 0-1.068.723-1.068 1.47v2.833h-1.778v-5.726h1.707v.782h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.134 1.186 2.134 2.728v3.14zm-7.555-6.51a1.037 1.037 0 01-1.032-1.03c0-.567.466-1.033 1.032-1.033.566 0 1.031.466 1.031 1.032 0 .566-.465 1.032-1.031 1.032zm.889 6.51h-1.78v-5.726h1.78v5.726zM21.11 10H10.885a.88.88 0 00-.885.865v10.268a.88.88 0 00.886.866H21.11a.882.882 0 00.889-.866V10.864a.88.88 0 00-.889-.864z"
    />
  </svg>
)

export default LinkedinIcon
