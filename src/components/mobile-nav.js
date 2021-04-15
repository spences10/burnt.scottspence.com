/** @jsx h */
import {
  ChatIcon,
  HomeIcon,
  PencilIcon,
} from '@heroicons/react/outline/index.js'
import { h } from 'preact'
import { ToggleTheme } from './toggle-theme.js'

export default function MobileNav({ theme, setTheme, mobile }) {
  return (
    <div class="lg:hidden fixed top-auto bottom-0 left-0 right-0 flex items-center justify-center z-10">
      <div class="max-w-3xl px-1 py-5 mx-5 my-1 bg-primary-500 text-gray-200 rounded-lg shadow-lg">
        <nav class="flex justify-evenly bg-secondary rounded-lg overflow-hidden">
          <div class="flex flex-row">
            <a
              href="/"
              alt="home page"
              // px-2 sm:px-4 md-px-6 when ToC added
              class="px-4 sm:px-6 md:px-8 no-underline"
            >
              <div class="flex justify-center flex-col items-center">
                <HomeIcon class="h-5 w-5" />
                <p class="text-xs">Home</p>
              </div>
            </a>
            <a
              href="/garden"
              alt="writing page"
              class="px-4 sm:px-6 md:px-8 no-underline"
            >
              <div class="flex justify-center flex-col items-center">
                <PencilIcon class="h-5 w-5" />
                <p class="text-xs">Writing</p>
              </div>
            </a>
            <a
              href="/speaking"
              alt="speaking page"
              class="px-4 sm:px-6 md:px-8 no-underline"
            >
              <div class="flex justify-center flex-col items-center">
                <ChatIcon class="h-5 w-5" />
                <p class="text-xs">Speaking</p>
              </div>
            </a>
            {/* remove class hidden when FOUC fixed */}
            <div class="hidden px-4 sm:px-6 md:px-8 no-underline">
              {/* Styles in Theme Toggle */}
              <ToggleTheme
                theme={theme}
                setTheme={setTheme}
                mobile={mobile}
              />
            </div>
            {/* <button class="px-4 sm:px-6 md:px-8 no-underline">
              <div class="flex justify-center flex-col items-center">
                <svg
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <p class="text-xs">ToC</p>
              </div>
            </button> */}
          </div>
        </nav>
      </div>
    </div>
  )
}
