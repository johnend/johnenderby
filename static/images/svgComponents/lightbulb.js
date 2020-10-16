import * as React from "react"

export default function Lightbulb(props) {
  return (
    <svg width={16} height={22} viewBox="0 0 16 22" {...props}>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="#FFF"
        transform="translate(1 1)"
      >
        <path
          strokeLinejoin="round"
          d="M7.044 20c4.807 0 2.516-4.98 3.962-6.73C12.651 11.28 14 9.639 14 7.108 14 3.118 11.046 0 7.044 0 3.043 0 0 3.166 0 7.154c0 2.575 1.526 4.114 3.186 6.182C4.544 15.03 2.238 20 7.044 20z"
        />
        <path strokeLinejoin="round" d="M3 17L11 17 11 19 3 19z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 13L7 17" />
        <path d="M7 8a2 2 0 100-4 2 2 0 000 4z" />
        <path
          strokeLinecap="round"
          d="M7 4V2.5M5.555 4.586L4.372 3.379M5 6H3.5m2.055 1.445L4.5 8.5M7 8v1.5m1.445-2.055L9.61 8.61M9 6h1.5M8.445 4.586L9.49 3.52"
        />
      </g>
    </svg>
  )
}
