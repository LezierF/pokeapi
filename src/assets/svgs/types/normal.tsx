import * as React from "react"
import { SVGProps } from "react"

const Normal = (props: SVGProps<SVGSVGElement>) => (
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
        fill: props.fill || "#919aa2",
      }}
    />
    <path
      d="M203.89 127.89c0 42-34 76-76 76s-76-34-76-76 34-76 76-76 76 34 76 76zm-28.074-.34c0 26.503-21.497 48-48 48s-47.853-21.644-47.853-48 21.497-48 48-48 47.853 21.497 47.853 48z"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "#fff",
      }}
    />
  </svg>
)

export default Normal
