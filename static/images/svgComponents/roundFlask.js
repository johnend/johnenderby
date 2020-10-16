import * as React from "react"

export default function RoundFlask(props) {
  return (
    <svg width={16} height={22} viewBox="0 0 16 22" {...props}>
      <g fill="none" fillRule="evenodd">
        <path
          stroke="#FFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.7 11H.3c-.2.63-.3 1.3-.3 2 0 3.87 3.13 7 7 7s7-3.13 7-7c0-.7-.1-1.37-.3-2z"
          transform="translate(1 1)"
        />
        <path
          d="M5 6.29C2.75 6.97.96 8.74.3 11h13.4c-.66-2.26-2.45-4.03-4.7-4.71h-.01H9V3.16c0-.11.02-.21.05-.32L10 0H4l.95 2.85c.03.1.05.2.05.31v3.13h.01H5z"
          transform="translate(1 1)"
        />
        <path
          stroke="#FFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 6.29C2.75 6.97.96 8.74.3 11h13.4c-.66-2.26-2.45-4.03-4.7-4.71h-.01H9V3.16c0-.11.02-.21.05-.32L10 0H4l.95 2.85c.03.1.05.2.05.31v3.13z"
          transform="translate(1 1)"
        />
      </g>
    </svg>
  )
}
