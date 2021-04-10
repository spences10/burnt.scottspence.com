/** @jsx h */
import { h } from 'preact'

export const Blockquote = ({ children }) => {
  return (
    <blockquote class="blockquote">
      <Quote fill="#4a5568" />
      {children}
      <Quote fill="#4a5568" rotate="180" />
    </blockquote>
  )
}

const Quote = ({ fill, rotate }) => {
  return (
    <div style={{ transform: `rotate(${rotate}deg)` }}>
      <svg
        width="52"
        height="40"
        viewBox="0 0 62 50"
        fill="none"
        class="-m-5 ml-5"
      >
        <path
          d="M61.8 0C45.63 4.36 35.4 20.33 35.4 34.65 35.4 44.19 41.33 50 49.3 50 56.68 50 62 44.2 62 37.14c0-6.85-4.5-12.04-10.44-12.87-1.63-.2-2.25-.83-2.25-2.28 0-8.3 4.91-17.22 12.69-21.58L61.8 0zM26.6 0C10.44 4.36 0 20.33 0 34.65 0 44.19 6.14 50 13.91 50c7.37 0 12.9-5.8 12.9-12.86 0-6.85-4.5-12.04-10.44-12.87-1.84-.2-2.25-.83-2.25-2.28 0-8.3 4.91-17.22 12.69-21.58L26.6 0z"
          fill={fill}
        ></path>
      </svg>
    </div>
  )
}
