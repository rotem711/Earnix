import React, { FunctionComponent } from 'react'
import SvgIconInterface from '../../../../../interfaces/svg'

const FacebookIcon:FunctionComponent<SvgIconInterface> = ({
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
      d="M22 16.037C22 12.703 19.314 10 16 10s-6 2.703-6 6.037c0 3.013 2.194 5.51 5.063 5.963v-4.218h-1.524v-1.745h1.524v-1.33c0-1.513.895-2.349 2.266-2.349.656 0 1.343.118 1.343.118v1.486h-.757c-.745 0-.977.465-.977.943v1.132h1.664l-.267 1.745h-1.398V22C19.806 21.547 22 19.05 22 16.037z"
    />
  </svg>
)

export default FacebookIcon
