/** @jsx h */
import { h } from 'preact'
import { ToggleTheme } from './toggle-theme.js'

export default function MobileNav({ theme, setTheme, mobile }) {
  return (
    <div class="lg:hidden fixed top-auto bottom-0 left-0 right-0 flex items-center justify-center z-10">
      <div class="max-w-3xl px-4 py-5 mx-5 my-4 bg-primary-500 text-gray-200 rounded-lg shadow-lg">
        <nav class="flex justify-evenly bg-secondary rounded-lg overflow-hidden">
          <div class="flex flex-row">
            <a
              href="/"
              alt="home page"
              // px-2 sm:px-4 md-px-6 when ToC added
              class="px-4 sm:px-6 md:px-8 no-underline"
            >
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
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <p class="text-xs">Home</p>
              </div>
            </a>
            <a
              href="/writing"
              alt="writing page"
              class="px-4 sm:px-6 md:px-8 no-underline"
            >
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
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
                <p class="text-xs">Writing</p>
              </div>
            </a>
            <a
              href="/speaking"
              alt="speaking page"
              class="px-4 sm:px-6 md:px-8 no-underline"
            >
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <p class="text-xs">Speaking</p>
              </div>
            </a>
            <div class="px-4 sm:px-6 md:px-8 no-underline">
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
