/** @jsx h */
import { ChevronRightIcon } from '@heroicons/react/outline/index.js'
import { h } from 'preact'

export const LandingHero = ({ height = 533, width = 849 }) => {
  return (
    <div class="relative 2xl:-mx-96 mb-24 lg:-mx-52 xl:-mx-64">
      <div class="pt-10 sm:pt-16 lg:pb-14 lg:pt-8 lg:overflow-hidden">
        <div class="mx-auto max-w-7xl lg:px-8">
          <div class="lg:grid lg:gap-8 lg:grid-cols-2">
            <div class="mx-auto px-4 max-w-md sm:px-6 sm:max-w-2xl sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
              <div class="lg:py-24">
                <a
                  href="/garden"
                  class="inline-flex items-center p-1 pr-2 hover:text-gray-200 bg-black rounded-full sm:text-base lg:text-sm xl:text-base"
                >
                  <span class="bg-primary-500 px-3 py-0.5 text-white text-xs font-semibold tracking-wide leading-5 rounded-full uppercase">
                    I'm writing
                  </span>
                  <span class="ml-4 text-sm">
                    Visit the writing page
                  </span>
                  <ChevronRightIcon class="ml-2 w-4 h-4 text-gray-500" />
                </a>
                <h1 class="mt-4 text-6xl font-extrabold tracking-tight sm:mt-5 sm:text-6xl lg:mt-6">
                  <span class="block">Scott Spence</span>
                  <span class="text-primary-400 block">
                    Hello World!
                  </span>
                </h1>
                <p class="mt-3 text-gray-300 text-base sm:mt-5 sm:text-xl lg:text-lg">
                  This is my blog where I write about many things,
                  including, but not limited to JavaScript, React,
                  Gatsby, Toast, Tailwind, Svelte and many more web
                  dev related topics.
                </p>
              </div>
            </div>
            <div class="mt-12 lg:relative lg:m-0">
              <div class="flex justify-center mx-auto px-4 max-w-md overflow-hidden sm:px-6 sm:max-w-xl lg:px-0 lg:max-w-none">
                <img
                  class="w-full h-full rounded-full lg:absolute lg:inset-y-0 lg:w-auto lg:max-w-none lg:h-full"
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
