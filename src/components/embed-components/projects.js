/** @jsx h */
import { h } from 'preact'
import { PORTFOLIO_PROJECTS } from '../../site-config.js'

export const Projects = () => {
  return (
    <div class="relative lg:-mx-52 xl:-mx-64 2xl:-mx-96 mb-24">
      <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div class="space-y-12">
          <ul class="sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8 project-list-none">
            {PORTFOLIO_PROJECTS.map(project => (
              <li class="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left pb-4">
                <div class="space-y-6 xl:space-y-10">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                      src={project.image}
                      alt={project.title}
                    />
                  </a>
                  <div class="space-y-2 xl:flex xl:items-center xl:justify-between">
                    <div class="font-medium text-lg leading-6 space-y-1">
                      <h3 class="text-white">{project.title}</h3>
                      <p class="text-primary-400">{project.copy}</p>
                    </div>
                  </div>
                  <ul class="flex justify-center space-x-5 project-list-none">
                    <li>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener"
                        class="text-gray-400 hover:text-gray-300"
                      >
                        <span class="sr-only">Site</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener"
                        class="text-gray-400 hover:text-gray-300"
                      >
                        <span class="sr-only">GitHub</span>
                        <svg
                          class="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
