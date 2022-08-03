import React from 'react'

const SearchIconOrange = (props) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  >
    <circle cx="20" cy="20" r="20" fill="#F44D2E" />
    <circle
      cx="22.2721"
      cy="18"
      r="8"
      transform="rotate(135 22.2721 18)"
      stroke="white"
      strokeWidth="2"
    />
    <path
      d="M9.7402 30.396L16.0125 24.1238"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)

export default SearchIconOrange
