import * as React from "react"
import { SVGProps } from "react"

const Steel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    viewBox="0 0 255.1 255.1"
    xmlSpace="preserve"
    {...props}
  >
    <circle
      cx={127.6}
      cy={127.6}
      r={121.6}
      style={{
        fill: props.fill || "#5a8ea2",
      }}
    />
    <path
      d="M44.336 127.584a.123.123 0 0 1 0-.123l41.883-71.558a.121.121 0 0 1 .104-.059h83.013a.12.12 0 0 1 .106.061l41.423 71.558a.126.126 0 0 1 0 .122l-41.423 71.479a.124.124 0 0 1-.106.061H86.323a.118.118 0 0 1-.104-.059l-41.883-71.482zm121.851-.102c0 21.304-17.27 38.574-38.574 38.574s-38.574-17.27-38.574-38.574 17.27-38.574 38.574-38.574 38.574 17.27 38.574 38.574z"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "#fff",
      }}
    />
  </svg>
)

export default Steel
