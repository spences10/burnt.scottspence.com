/** @jsx h */
import { h } from 'preact'
import MobileNav from './mobile-nav.js'
import Nav from './nav.js'

export default function Header() {
  return (
    <header class="flex items-center justify-between bg-gray-600 tracking-widest px-4 py-6">
      <Nav />
      <MobileNav />
    </header>
  )
}
