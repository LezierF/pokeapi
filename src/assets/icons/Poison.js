import * as React from "react"

const Poison = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 255.1 255.1"
    style={{
      enableBackground: "new 0 0 255.1 255.1",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <circle
      cx={127.6}
      cy={127.6}
      r={121.6}
      style={{
        fill: `${props.fillColor}`,
      }}
    />
    <path
      d="M128.427 48.754c19.618.311 38.458 5.782 54.862 18.477 10.72 8.297 18.841 18.639 23.114 31.606 6.464 19.618 3.226 37.867-8.529 54.693-3.865 5.532-8.551 10.334-13.873 14.472-1.559 1.212-1.905 2.331-1.391 4.266 1.96 7.365 1.446 14.622-1.629 21.633-1.678 3.826-4.063 7.126-7.523 9.564-5.646 3.979-12.45 3.981-18.075-.019-3.966-2.821-6.451-6.739-8.215-11.188-.299-.754-.319-2.101-1.053-2.096-1.025.007-.869 1.401-1.182 2.186-1.59 3.986-3.922 7.39-7.433 9.921-6.592 4.752-15.276 4.259-21.313-1.189-2.797-2.524-4.812-5.562-6.094-9.097-.199-.55-.375-1.112-.625-1.639-.186-.393-.533-.429-.727-.017-.319.68-.569 1.392-.834 2.096-1.321 3.501-3.254 6.602-5.955 9.213-6.663 6.439-15.861 6.422-22.499-.082-4.838-4.741-7.14-10.678-7.784-17.284-.417-4.272-.286-8.565 1.061-12.696.477-1.465.067-2.282-1.084-3.171-7.037-5.439-12.9-11.95-17.46-19.599-6.079-10.195-9.1-21.24-8.608-33.105.598-14.431 5.961-27.051 15.311-37.977 10.974-12.824 24.943-20.893 41.051-25.457 8.352-2.37 16.902-3.396 26.487-3.511zm-.914 106.744c6.418.027 12.708-.843 18.842-2.734 8.822-2.719 16.62-7.116 22.798-14.109 10.484-11.866 10.84-27.416.905-39.747-3.192-3.962-7.067-7.145-11.428-9.737-7.928-4.712-16.535-7.192-25.708-7.937-11.636-.946-22.735.933-33.181 6.176-7.652 3.841-14.052 9.155-18.169 16.821-4.725 8.797-4.976 17.777-.631 26.797 3.504 7.274 9.146 12.548 16.023 16.562 9.429 5.504 19.695 7.864 30.549 7.908z"
      style={{
        fill: "#fefefe",
      }}
    />
  </svg>
)

export default Poison
