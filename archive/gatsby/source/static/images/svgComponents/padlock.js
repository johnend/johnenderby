import * as React from "react"

export default function Padlock(props) {
  return (
    <svg width={16} height={22} viewBox="0 0 16 22" {...props}>
      <g
        fill="none"
        fillRule="evenodd"
        stroke={props.stroke}
        transform="translate(1 1)"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3a3 3 0 013-3h2a3 3 0 013 3v5H3V3z"
        />
        <rect
          width={14}
          height={12}
          y={8}
          strokeLinecap="round"
          strokeLinejoin="round"
          rx={2}
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 15L7 13" />
        <circle cx={7} cy={16} r={1} />
      </g>
    </svg>
  )
}
