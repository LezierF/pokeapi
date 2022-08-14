import * as React from "react"
import { SVGProps } from "react"

const Pokebola = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width}
        height={props.height}
        viewBox="0 0 1024 1024"
        {...props}
    >
        <path
            style={{
                fill: props.fill || "#ff0202",
            }}
            d="M512 359.18c84.4 0 152.81 68.42 152.82 152.82 0 84.4-68.42 152.81-152.82 152.82-84.4 0-152.81-68.42-152.82-152.82 0-84.4 68.42-152.82 152.82-152.82Zm0 50.94c-56.27 0-101.88 45.61-101.88 101.88 0 56.27 45.61 101.88 101.88 101.88 56.27 0 101.88-45.61 101.88-101.88 0-56.27-45.61-101.88-101.88-101.88Zm294.16-192.28A416.035 416.035 0 0 1 928 512c0 110.33-43.83 216.14-121.84 294.16A416.035 416.035 0 0 1 512 928a416.035 416.035 0 0 1-294.16-121.84A416.035 416.035 0 0 1 96 512c0-110.33 43.83-216.14 121.84-294.16A416.035 416.035 0 0 1 512 96c110.33 0 216.14 43.83 294.16 121.84ZM332.02 512H138.45c0 99.07 39.36 194.09 109.41 264.14A373.564 373.564 0 0 0 512 885.55c99.07 0 194.09-39.36 264.14-109.41A373.564 373.564 0 0 0 885.55 512H691.98c0-99.4-80.58-179.98-179.98-179.98-99.4 0-179.98 80.58-179.98 179.98Z" />
    </svg>
)

export default Pokebola
