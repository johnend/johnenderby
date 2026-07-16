import * as React from "react"

export default function Tag(props) {
  return (
    <svg width={22} height={18} viewBox="0 0 22 18" {...props}>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="#FFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(1 1)"
      >
        <path d="M15.5 12.5L20 8 15.5 3.5" />
        <path d="M4.5 12.5L0 8 4.5 3.5" />
        <path d="M6.93 16L13.07 0" />
      </g>
    </svg>
  )
}
