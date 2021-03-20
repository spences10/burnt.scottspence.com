/** @jsx h */
import Fuse from 'fuse.js'
import { Fragment, h } from 'preact'
import { useEffect, useRef, useState } from 'preact/hooks'
import SEO from '../components/seo/index.js'
import { SiteConfig } from '../site-config.js'

export default function Garden({ posts }) {
  const [query, updateQuery] = useState('')
  const searchRef = useRef(null)

  // TODO: add a tags array for buttons

  const options = {
    includeScore: true,
    keys: ['title', 'tags'],
    includeMatches: true,
    threshold: 0.5,
  }
  const fuse = new Fuse(posts, options)

  const results = fuse.search(query)
  const searchResults = query
    ? results.map(result => result.item)
    : posts

  function onSearch({ currentTarget = {} }) {
    updateQuery(currentTarget.value)
  }

  useEffect(() => {
    searchRef.current.focus()
  }, [])

  const {
    title,
    description,
    lastBuildDate,
    siteUrl,
    authorName,
    twitterUsername,
    siteLanguage,
    siteLocale,
  } = SiteConfig

  return (
    <Fragment>
      <SEO title="Garden" titleTemplate={siteUrl} />
      <form>
        <label class="block" htmlFor="search">
          Search:
        </label>
        <input
          class="mt-1 mb-6 block w-full rounded-lg border shadow-lg bg-transparent"
          name="search"
          id="search"
          type="text"
          placeholder="Search the things!"
          value={query}
          onChange={onSearch}
          ref={searchRef}
        />
      </form>
      <div>
        {searchResults.map(post => {
          return (
            <Fragment>
              {!post.private ? (
                <a
                  href={post.slug}
                  alt={post.description}
                  class="no-underline hover:underline"
                >
                  <article class="p-4 mb-6 border rounded-lg shadow-lg">
                    <h2 class="text-xl mb-1 font-bold">
                      {post.title}
                    </h2>
                    <p
                      class="no-underline"
                      style={{ marginBottom: 0 }}
                    >
                      {post.description}
                    </p>
                  </article>
                </a>
              ) : null}
            </Fragment>
          )
        })}
      </div>
    </Fragment>
  )
}
