import React from 'react'

const SearchIcon = (props) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  >
    <circle
      cx="19.2721"
      cy="13"
      r="8"
      transform="rotate(135 19.2721 13)"
      stroke="black"
      strokeWidth="2"
    />
    <path
      d="M6.7402 25.396L13.0125 19.1237"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)

export default SearchIcon
