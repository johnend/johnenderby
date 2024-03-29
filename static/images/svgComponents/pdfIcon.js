import * as React from "react"

export default function PdfIcon(props) {
  return (
    <svg width={82} height={105} viewBox="0 0 82 105" {...props}>
      <defs>
        <rect id="a" width={82} height={105} rx={4} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <use fill="#FFF" xlinkHref="#a" />
        <rect
          width={66}
          height={6}
          x={8}
          y={8}
          fill="#F0F3F7"
          mask="url(#b)"
          rx={3}
        />
        <rect
          width={62}
          height={6}
          x={8}
          y={22}
          fill="#F0F3F7"
          mask="url(#b)"
          rx={3}
        />
        <rect
          width={57}
          height={6}
          x={8}
          y={36}
          fill="#F0F3F7"
          mask="url(#b)"
          rx={3}
        />
        <rect
          width={62}
          height={6}
          x={8}
          y={50}
          fill="#F0F3F7"
          mask="url(#b)"
          rx={3}
        />
        <rect
          width={62}
          height={6}
          x={8}
          y={64}
          fill="#F0F3F7"
          mask="url(#b)"
          rx={3}
        />
        <path fill="#1f1f1f" mask="url(#b)" d="M0 78H82V105H0z" />
        <text
          fill="#FFF"
          fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;"
          fontSize={16}
          fontWeight={600}
          letterSpacing={-0.08}
          mask="url(#b)"
        >
          <tspan x={10} y={97}>
            {"Résumé"}
          </tspan>
        </text>
      </g>
    </svg>
  )
}
