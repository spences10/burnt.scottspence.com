/** @jsx h */
import { h } from 'preact'
import { useEffect, useState } from 'preact/hooks'

export const ToggleTheme = ({ theme, setTheme }) => {
  useEffect(() => {
    if ('theme' in localStorage) {
      setTheme(localStorage.theme)
    }
  }, [])

  useEffect(() => {
    // see static/theme.js to check theme setting in local storage
    // to add class onto the document before the HTML begins rendering
    // thank's to Benjamin Lannon for this
    if (theme === 'light' || theme === 'dark') {
      localStorage.theme = theme
    } else {
      localStorage.removeItem('theme')
    }

    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    console.log(localStorage.theme)
  }, [theme])

  const [isSystemDark, setSystemDark] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setSystemDark(true)
    } else {
      setSystemDark(false)
    }
  }, [theme])

  return (
    <button
      aria-label="theme switch"
      onClick={() => {
        theme === 'dark' ? setTheme('light') : setTheme('dark')
      }}
    >
      <svg
        height="20"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    </button>
  )
}
