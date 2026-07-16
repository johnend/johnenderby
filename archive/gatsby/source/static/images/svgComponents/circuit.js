import * as React from "react"

export default function Circuit(props) {
  return (
    <svg width={22} height={22} viewBox="0 0 22 22" {...props}>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="#FFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(1 1)"
      >
        <path d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10z" />
        <path d="M7.5 5a1 1 0 100-2 1 1 0 000 2zm8 5a1 1 0 100-2 1 1 0 000 2zM12 5v3H.21" />
        <path d="M15.5 10L15.5 12 19.796 12" />
        <path d="M6.5 4L2.029 3.989" />
        <path d="M4 13a1 1 0 100-2 1 1 0 000 2zm5.023 4.01a1 1 0 100-2 1 1 0 000 2z" />
        <path d="M2.028 16.046L8.028 16.046" />
        <path d="M5 12L12.5 12 13.5 15 18.651 15" />
        <path d="M12 5a1 1 0 100-2 1 1 0 000 2z" />
      </g>
    </svg>
  )
}
