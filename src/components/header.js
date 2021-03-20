/** @jsx h */
import { h } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import MobileNav from './mobile-nav.js'
import Nav from './nav.js'

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
      onClick={() => {
        theme === 'dark' ? setTheme('light') : setTheme('dark')
      }}
    >
      {theme === 'dark' ? 'light' : 'dark'}
    </button>
  )
}

export const Header = () => {
  const [theme, setTheme] = useState('system')

  return (
    <header class="mb-6 bg-primary-500">
      <Nav theme={theme} setTheme={setTheme} />
      <MobileNav theme={theme} setTheme={setTheme} />
    </header>
  )
}
