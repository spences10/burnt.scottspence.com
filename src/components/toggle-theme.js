/** @jsx h */
import { ColorSwatchIcon } from '@heroicons/react/outline/index.js'
import { h } from 'preact'
import { useEffect, useState } from 'preact/hooks'

export const ToggleTheme = ({ theme, setTheme, mobile }) => {
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

  const Icon = () => {
    return <ColorSwatchIcon class="h-5 w-5" />
  }

  // remove class='hidden' once FOUC fixed
  return (
    <div class="hidden">
      {mobile ? (
        <button
          class="flex justify-center flex-col items-center"
          aria-label="theme switch"
          onClick={() => {
            theme === 'dark' ? setTheme('light') : setTheme('dark')
          }}
        >
          <div>
            <Icon />
          </div>
          <p class="text-xs">Theme</p>
        </button>
      ) : (
        <button
          aria-label="theme switch"
          onClick={() => {
            theme === 'dark' ? setTheme('light') : setTheme('dark')
          }}
        >
          <Icon />
        </button>
      )}
    </div>
  )
}
