import * as React from "react"

export default function Door(props) {
  return (
    <svg width={20} height={22} viewBox="0 0 20 22" {...props}>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="#FFF"
        strokeLinecap="round"
        transform="translate(1 1)"
      >
        <path d="M18 0L0 0 0 20 18 20z" />
        <path d="M17 19L5 17 5 3 17 1z" />
        <path d="M8 9.5L8 10.5" />
      </g>
    </svg>
  )
}
