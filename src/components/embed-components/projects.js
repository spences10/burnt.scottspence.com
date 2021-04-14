/** @jsx h */
import { Fragment, h } from 'preact'
import { PORTFOLIO_PROJECTS } from '../../site-config.js'

export const Projects = () => {
  return (
    <div class="relative lg:-mx-52 xl:-mx-64 2xl:-mx-96 mb-24">
      <div class="">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
            {PORTFOLIO_PROJECTS.map(project => (
              <div class="bg-gray-800 rounded-lg shadow-sm divide-y divide-gray-900">
                <div class="p-6">
                  <h3 class="text-2xl leading-6 font-bold">
                    {project.title}
                  </h3>
                  <p class="mt-4 text-sm opacity-70 sm:min-h-[2rem] md:min-h-[3rem] xl:min-h-[5rem]">
                    {project.copy}
                  </p>
                  <div class="flex gap-x-2">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener"
                      class="block w-full bg-primary-300 border border-primary-300 rounded-md py-2 text-sm font-semibold text-center hover:bg-primary-200"
                    >
                      Demo
                    </a>
                    {project.repo ? (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener"
                        class="block w-full bg-primary-300 border border-primary-300 rounded-md py-2 text-sm font-semibold text-center hover:bg-primary-200"
                      >
                        Repo
                      </a>
                    ) : (
                      <a class="opacity-50 cursor-not-allowed block w-full bg-primary-300 border border-primary-300 rounded-md py-2 text-sm font-semibold text-center">
                        Repo
                      </a>
                    )}
                  </div>
                </div>
                <div class="pt-6 pb-8 px-6">
                  <h3 class="text-sm font-medium text-primary-200 tracking-wide uppercase">
                    Built with
                  </h3>
                  <ul class="mt-6 space-y-4">
                    {project.tags.map(tag => (
                      <li class="flex space-x-3">
                        <Fragment>
                          <svg
                            class="flex-shrink-0 h-5 w-5 text-green-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <span class="text-sm opacity-70">
                            {tag}
                          </span>
                        </Fragment>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
