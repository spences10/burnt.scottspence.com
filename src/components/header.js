/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'
import MobileNav from './mobile-nav.js'
import Nav from './nav.js'

export const Header = () => {
  // change dark back to system once FOUC fixed
  const [theme, setTheme] = useState('dark')

  return (
    <header class="mb-6 bg-primary-500">
      <Nav theme={theme} setTheme={setTheme} />
      <MobileNav theme={theme} setTheme={setTheme} mobile={true} />
    </header>
  )
}
