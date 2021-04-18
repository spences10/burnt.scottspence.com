/** @jsx h */
import { EyeOffIcon } from '@heroicons/react/outline/index.js'
import { h } from 'preact'

export const PrivateBanner = () => {
  return (
    <div class="-mt-4 mb-8">
      <div class="max-w-7xl mx-auto">
        <div class="p-2 rounded-lg bg-red-400 shadow-lg sm:p-3">
          <div class="flex items-center justify-between flex-wrap">
            <div class="w-0 flex-1 flex items-center">
              <span class="flex p-2 rounded-lg bg-primary-400">
                <EyeOffIcon class="w-4 h-4" />
              </span>
              <p class="ml-3 font-medium w-full text-center">
                This is a private post 🤫
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
