import * as React from "react"
import { SVGProps } from "react"

const Fairy = (props: SVGProps<SVGSVGElement>) => (
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
        fill: props.fill || "#fb89eb",
      }}
    />
    <path
      d="m73.964 180.088 28.739-8.333 24.822 45.386a.085.085 0 0 0 .149 0l24.822-45.386 28.739 8.333a.085.085 0 0 0 .105-.106l-8.334-28.17 44.134-24.138a.085.085 0 0 0 0-.149l-44.498-24.337 8.698-29.4a.085.085 0 0 0-.105-.106l-29.413 8.529-24.148-44.153a.085.085 0 0 0-.149 0l-24.148 44.153-29.413-8.529a.085.085 0 0 0-.105.106l8.698 29.4-44.498 24.337a.085.085 0 0 0 0 .149l44.134 24.138-8.334 28.17a.085.085 0 0 0 .105.106zm22.301-52.178 20.36 11.135 11.135 20.36a.085.085 0 0 0 .149 0l11.135-20.36 20.36-11.135a.085.085 0 0 0 0-.149l-20.36-11.135-11.135-20.36a.085.085 0 0 0-.149 0l-11.135 20.36-20.36 11.135a.086.086 0 0 0 0 .149z"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "#fff",
      }}
    />
  </svg>
)

export default Fairy
