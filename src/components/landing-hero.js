/** @jsx h */
import { ChevronRightIcon } from '@heroicons/react/outline/index.js'
import { h } from 'preact'

export const LandingHero = ({ height = 533, width = 849 }) => {
  return (
    <div class="relative lg:-mx-52 xl:-mx-64 2xl:-mx-96 mb-24">
      <div class="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
        <div class="mx-auto max-w-7xl lg:px-8">
          <div class="lg:grid lg:grid-cols-2 lg:gap-8">
            <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
              <div class="lg:py-24">
                <a
                  href="/garden"
                  class="inline-flex items-center bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                >
                  <span class="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-primary-500 rounded-full">
                    I'm writing
                  </span>
                  <span class="ml-4 text-sm">
                    Visit the writing page
                  </span>
                  <ChevronRightIcon class="ml-2 w-4 h-4 text-gray-500" />
                </a>
                <h1 class="mt-4 text-6xl tracking-tight font-extrabold sm:mt-5 sm:text-6xl lg:mt-6">
                  <span class="block">Scott Spence</span>
                  <span class="block text-primary-400">
                    Hello World!
                  </span>
                </h1>
                <p class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg">
                  This is my blog where I write about many things,
                  including, but not limited to JavaScript, React,
                  Gatsby, Toast, Tailwind, Svelte and many more web
                  dev related topics.
                </p>
              </div>
            </div>
            <div class="mt-12 lg:m-0 lg:relative">
              <div class="overflow-hidden mx-auto max-w-md px-4 sm:max-w-xl sm:px-6 lg:max-w-none lg:px-0 flex justify-center">
                <img
                  class="w-full h-full lg:absolute lg:inset-y-0 lg:h-full lg:w-auto lg:max-w-none rounded-full"
                  src="/mug-face.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
