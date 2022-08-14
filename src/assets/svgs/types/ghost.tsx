import * as React from "react"
import { SVGProps } from "react"

const Ghost = (props: SVGProps<SVGSVGElement>) => (
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
        fill: props.fill || "#4c6ab2",
      }}
    />
    <path
      d="M192.672 195.691c-.884-.486-1.76-.986-2.637-1.486-.355-.202-.714-.397-1.067-.601-2.418-1.402-4.436-3.276-6.186-5.429-2.424-2.981-2.838-6.226-1.106-9.702.502-1.006 1.311-1.764 2.028-2.6 18.7-21.802 24.477-46.608 16.032-74.078-10.625-34.564-45.062-57.747-83.317-53.41-16.442 1.864-31.111 8.214-43.22 19.526-21.67 20.244-29.571 45.085-23.605 74.227 7.359 27.95 24.376 44.864 51.098 55.839 7.386 2.534 16.151 4.589 23.847 5.834 5.876.95 11.09 1.2 17.014 1.242 2.957.021 6.087-.008 9.57-.03 6.349.065 8.834-.195 13.22-.594 9.575-.872 18.676-3.627 27.469-7.452.289-.126.575-.258.863-.384.699-.305.577-.583-.003-.902zm-77.538-78.43c-1.355 8.629-8.526 14.785-17.255 14.761-7.361-.02-13.807-4.569-16.28-11.488-2.458-6.879-.337-14.596 5.291-19.228.425-.35.861-.694 1.326-.985.995-.623 1.18-.556 1.316.604.278 2.37.875 4.637 1.991 6.754 4.1 7.776 13.352 11.245 21.638 7.94 2.502-.998 2.286-.354 1.973 1.642zm20.871.779a12.195 12.195 0 0 1-.225-1.635c-.083-1.403.093-1.563 1.401-1.004 3.839 1.641 7.769 1.918 11.773.81 6.683-1.849 11.603-7.687 12.406-14.584.066-.568-.266-1.418.528-1.626.629-.165 1.128.457 1.625.825 5.866 4.345 8.344 12.202 6.066 19.195-2.368 7.266-8.948 12.02-16.612 12.001-8.312-.021-15.362-5.829-16.962-13.982z"
      style={{
        fill: "#fefefe",
      }}
    />
  </svg>
)

export default Ghost
