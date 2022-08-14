import * as React from "react"
import { SVGProps } from "react"

const Ice = (props: SVGProps<SVGSVGElement>) => (
  <svg
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    x={0}
    y={0}
    viewBox="0 0 255.1 255.1"
    xmlSpace="preserve"
    {...props}
  >
    <style>{".st1{fill:#fff}"}</style>
    <circle
      cx={127.6}
      cy={127.6}
      r={121.6}
      style={{
        fill: props.fill || "#4cd1c0",
      }}
    />
    <path
      className="st1"
      d="m80.008 106.491 43.435 21.133-43.435 21.085-43.436-21.08zM175.192 106.491l-43.435 21.133 43.435 21.085 43.436-21.08zM175.192 52.127l-43.435 22.862v44.766l.33-.164.617-.307 42.476-21.136-.001-.001.013-.006zM175.192 203.073l-43.435-22.862v-44.766l.33.164.617.307 42.476 21.136-.001.001.013.006zM80.008 52.127l43.435 22.862v44.766l-.33-.164-.617-.307L80.02 98.148l.001-.001-.013-.006zM80.008 203.073l43.435-22.862v-44.766l-.33.164-.617.307-42.476 21.136.001.001-.013.006z"
    />
  </svg>
)

export default Ice
