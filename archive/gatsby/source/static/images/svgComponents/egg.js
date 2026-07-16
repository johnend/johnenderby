import * as React from "react"

export default function Egg(props) {
  return (
    <svg width={18} height={22} viewBox="0 0 18 22" {...props}>
      <path
        fill="none"
        stroke="#FFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 12.82C17 17.84 13.42 21 9 21s-8-3.16-8-8.18S4.58 1 9 1s8 6.8 8 11.82z"
      />
    </svg>
  )
}
