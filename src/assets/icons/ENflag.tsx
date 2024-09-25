import * as React from "react"
import { JSX } from "react/jsx-runtime"
const EnFlag = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    stroke="#000"
    strokeWidth={0.216}
    width={800}
    height={800}
    fill="none"
    viewBox="0 -4 28 28"
    {...props}
  >
    <g clipPath="url(#a)">
      <path fill="url(#b)" d="M28 0H0v20h28V0Z" />
      <path
        fill="url(#c)"
        fillRule="evenodd"
        d="M12 8H0v4h12v8h4v-8h12V8H16V0h-4v8Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={14}
        x2={14}
        y1={0}
        y2={20}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#F0F0F0" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={14}
        x2={14}
        y1={0}
        y2={20}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E82739" />
        <stop offset={1} stopColor="#CA1A2B" />
      </linearGradient>
      <clipPath id="a">
        <rect width={28} height={20} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
)
export default EnFlag
