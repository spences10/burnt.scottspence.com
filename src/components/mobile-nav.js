/** @jsx h */
import { h } from 'preact'
import { ToggleTheme } from './header.js'

export default function MobileNav({ theme, setTheme }) {
  return (
    <div class="lg:hidden fixed top-auto bottom-0 left-0 right-0 flex items-center justify-center z-10">
      <div class="max-w-3xl px-10 py-5 mx-5 my-4 bg-primary-500 text-gray-200 rounded-lg shadow-lg">
        <nav class="flex justify-evenly py-3 bg-secondary rounded-lg overflow-hidden">
          <div>
            <a href="/" alt="home page">
              <p class="px-4">scottspence.com</p>
            </a>
          </div>
          <div>
            <a class="px-4" href="/garden" alt="garden page">
              Garden
            </a>
            <a class="px-4" href="/speaking" alt="speaking page">
              Speaking
            </a>
            <ToggleTheme theme={theme} setTheme={setTheme} />
          </div>
        </nav>
      </div>
    </div>
  )
}
