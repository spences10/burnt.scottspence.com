/** @jsx h */
import Fuse from 'fuse.js'
import { Fragment, h } from 'preact'
import { useEffect, useRef, useState } from 'preact/hooks'
import SEO from '../components/seo/index.js'
import { SiteMetadata } from '../site-config.js'

export default function Writing({ posts }) {
  const [query, updateQuery] = useState('')
  const searchRef = useRef(null)

  // TODO: add a tags array for buttons

  const options = {
    includeScore: true,
    keys: ['title', 'tags', 'description'],
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
    siteTitle,
    siteDescription,
    siteLastBuildDate,
    siteUrl,
    siteAuthorName,
    siteTwitter,
    siteLanguage,
    siteLocale,
  } = SiteMetadata

  return (
    <Fragment>
      <SEO
        title={siteTitle}
        titleTemplate={`Writing`}
        description={siteDescription || 'nothin’'}
        image={`image`}
        pathname={`${siteUrl}/writing/`}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={siteTwitter}
      />
      <form>
        <label class="block" htmlFor="search">
          Search:
        </label>
        <input
          class="mt-1 mb-6 p-2 block w-full rounded-lg shadow-theme-xl bg-transparent"
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
                  <article class="p-4 mb-6 rounded-lg shadow-theme-xl">
                    <h2 class="text-2xl mb-1 font-bold">
                      {post.title}
                    </h2>
                    <div class="text-xs font-semibold uppercase mb-4">
                      {post.timeToRead} minutes to read
                    </div>
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
