/** @jsx h */
import { h } from 'preact'
import MobileNav from './mobile-nav.js'
import Nav from './nav.js'

export const Header = () => {
  return (
    <header class="mb-6">
      <Nav />
      <MobileNav />
    </header>
  )
}
