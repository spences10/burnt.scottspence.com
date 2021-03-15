/** @jsx h */
import { h } from 'preact'

export default function Nav() {
  return (
    <div class="hidden lg:block">
      <div class="flex justify-between items-center px-4 py-4 bg-purple-900 text-gray-200 sm:px-6 md:justify-start md:space-x-10">
        <div class="lg:w-0 lg:flex-1">
          <div class="flex">
            <a href="/" class="flex">
              Scott Spence
            </a>
          </div>
        </div>

        <nav class="hidden md:flex space-x-10">
          <a class="px-4" href="/garden" alt="garden page">
            Garden
          </a>
          <a class="px-4" href="/speaking" alt="speaking page">
            Speaking
          </a>
        </nav>
        <div class="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0"></div>
      </div>
    </div>
  )
}
