/** @jsx h */
import { h } from 'preact'

export const GitHubContributions = () => {
  const thisYear = new Date().getFullYear()
  // TODO needs overflow auto on image for smaller screen sizes
  return (
    <div class="flex justify-center md:-mx-24 lg:-mx-52 xl:-mx-64 2xl:-mx-96 md:h-[260px]">
      <a
        href={`https://ghui.vercel.app/heat.png?username=spences10&year=${thisYear}&interactive=true`}
        target="_blank"
        rel="noopener noreferrer"
        class="hover:opacity-100"
      >
        <img
          src={`https://ghui.vercel.app/heat.png?username=spences10&year=${thisYear}`}
          alt="GitHub contributions heatmap"
          loading="eager"
        />
      </a>
    </div>
  )
}
