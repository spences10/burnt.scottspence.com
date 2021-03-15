/** @jsx h */
import { h } from 'preact'

export default function MobileNav() {
  return (
    <div class="w-2/3 rounded-3xl left-0 right-0 bg-gray-700 xl:hidden fixed z-50 top-auto bottom-0  p-4 ">
      <nav class="flex justify-evenly py-3 bg-secondary rounded-lg overflow-hidden">
        <div>
          <a href="/" alt="home page">
            <p class="text-lg">scottspence.com</p>
          </a>
        </div>
        <div>
          <a class="px-4" href="/garden" alt="garden page">
            Garden
          </a>
          <a class="px-4" href="/speaking" alt="speaking page">
            Speaking
          </a>
        </div>
      </nav>
    </div>
  )
}
