/** @jsx h */
import { h } from 'preact'
import { ToggleTheme } from './toggle-theme.js'

export default function Nav({ theme, setTheme }) {
  return (
    <div class="hidden lg:block">
      <div class="flex items-center justify-between px-4 py-4 text-gray-200 sm:px-6 md:justify-start md:space-x-10">
        <div class="lg:flex-1 lg:w-0">
          <div class="flex">
            <a href="/" class="flex">
              Scott Spence
            </a>
          </div>
        </div>

        <nav class="hidden space-x-10 md:flex">
          <a class="px-4" href="/garden" alt="writing page">
            Writing
          </a>
          <a class="px-4" href="/speaking" alt="speaking page">
            Speaking
          </a>
        </nav>
        <div class="hidden items-center justify-end space-x-8 md:flex md:flex-1 lg:w-0">
          <ToggleTheme theme={theme} setTheme={setTheme} />
        </div>
      </div>
    </div>
  )
}
