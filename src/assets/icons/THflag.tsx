import * as React from "react"
import { JSX } from "react/jsx-runtime"
const ThFlag = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    stroke="#000"
    strokeWidth={0.216}
    width={800}
    height={800}
    aria-hidden="true"
    className="iconify iconify--twemoji"
    viewBox="0 0 36 36"
    {...props}
  >
    <path
      fill="#A7122D"
      d="M0 26.518V27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-.482H0z"
    />
    <path fill="#EEE" d="M0 22.181h36v4.485H0z" />
    <path fill="#292648" d="M0 13.513h36v8.821H0z" />
    <path fill="#EEE" d="M0 9.181h36v4.485H0z" />
    <path
      fill="#A7122D"
      d="M0 9.333V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v.333H0z"
    />
  </svg>
)
export default ThFlag
