/** @jsx h */
import { h } from 'preact'

export default function Nav() {
  return (
    <div class="hidden xl:block container">
      <nav></nav>
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
    </div>
  )
}
