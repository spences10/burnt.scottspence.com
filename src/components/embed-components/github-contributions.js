/** @jsx h */
import { h } from 'preact'

export const GitHubContributions = () => {
  const thisYear = new Date().getFullYear()
  return (
    <div class="flex justify-center lg:-mx-52 xl:-mx-64 2xl:-mx-96">
      <a
        href={`https://ghui.vercel.app/heat.png?username=spences10&year=${thisYear}&interactive=true`}
        target="_blank"
        rel="noopener noreferrer"
        class="hover:opacity-100 h-[260]"
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
