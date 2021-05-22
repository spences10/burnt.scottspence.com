/** @jsx h */
import { EyeOffIcon } from '@heroicons/react/outline/index.js'
import { h } from 'preact'

export const PrivateBanner = () => {
  return (
    <div class="-mt-4 mb-8">
      <div class="mx-auto max-w-7xl">
        <div class="p-2 bg-red-400 rounded-lg shadow-lg sm:p-3">
          <div class="flex flex-wrap items-center justify-between">
            <div class="flex flex-1 items-center w-0">
              <span class="bg-primary-400 flex p-2 rounded-lg">
                <EyeOffIcon class="w-4 h-4" />
              </span>
              <p class="ml-3 w-full text-center font-medium">
                This is a private post 🤫
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
