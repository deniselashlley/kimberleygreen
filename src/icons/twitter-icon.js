import React from 'react'

const TwitterIcon = props => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28">
      <path
        d="M8.806 28c10.566 0 16.345-10.774 16.345-20.115 0-.307 0-.612-.017-.915 1.124-1 2.095-2.24 2.866-3.66a9.825 9.825 0 01-3.298 1.113C25.9 3.54 26.797 2.151 27.227.512a10.314 10.314 0 01-3.648 1.716c-2.176-2.846-5.814-2.984-8.129-.307-1.49 1.727-2.125 4.3-1.661 6.756-4.619-.286-8.923-2.97-11.84-7.386-1.525 3.23-.745 7.362 1.78 9.436a4.915 4.915 0 01-2.609-.883v.09c.001 3.364 1.93 6.262 4.609 6.929a4.68 4.68 0 01-2.593.12c.752 2.881 2.91 4.854 5.366 4.91-2.034 1.968-4.547 3.037-7.134 3.033A9.604 9.604 0 010 24.825c2.628 2.074 5.684 3.175 8.806 3.17"
        fill={props.fill}
        fillRule="nonzero"
      />
    </svg>
  )
}

TwitterIcon.defaultProps = {
  fill: '#000',
}

export default TwitterIcon