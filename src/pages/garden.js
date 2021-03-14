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
          class="form-input mt-1 block w-full mb-6"
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
                <p>
                  <a
                    class="underline text-lg font-bold text-gray-900"
                    href={post.slug}
                  >
                    {post.title}
                  </a>
                </p>
              ) : null}
            </Fragment>
          )
        })}
      </div>
    </Fragment>
  )
}
