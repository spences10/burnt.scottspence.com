// Credits to Chris Biscardi, Prince Wilson and Benjamin Lannon
// What diamonds 💎
import mdx from '@mdx-js/mdx'
import smartypants from '@silvenon/remark-smartypants'
import { fetchMdxFromDisk } from '@toastdotdev/mdx'
import frontmatter from 'gray-matter'
import rehypeLink from 'rehype-autolink-headings'
import cloudinaryPlugin from 'rehype-local-image-to-cloudinary'
import rehypeSlug from 'rehype-slug'
import externalLinks from 'remark-external-links'
import wordcount from 'wordcount'
import rehypePrismMdx from '../data/rehype-prism-mdx.js'

const IMAGE_PATH = filename => {
  const directoryRoot = filename.slice(0, -`index.mdx`.length)
  return directoryRoot
}

export const sourceData = async (contentPath, { setDataForSlug }) => {
  const mdxObjects = await fetchMdxFromDisk({
    directory: contentPath,
  })

  return await Promise.all(
    mdxObjects.map(async ({ file, filename }) => {
      const pathSplit = filename.split(`/`)
      const splitShit = () => {
        // copy > content/copy
        if (pathSplit.length === 3) {
          return pathSplit.slice(-1)[0]
        }
        // else writing > content/posts
        return pathSplit
          .splice(2, pathSplit.length, -3)
          .join(`/`)
          .slice(0, -`index.mdx`.length)
      }
      const slug = splitShit()
      const { data, content } = frontmatter(file)
      data['slug'] = slug
      let compiledMdx = null
      // don't pass nulls in the plugins array
      try {
        compiledMdx = await mdx(content, {
          rehypePlugins: [
            rehypePrismMdx,
            [
              cloudinaryPlugin,
              {
                baseDir: IMAGE_PATH(filename),
                uploadFolder: 'scottspence.com',
                // transformations: 'q_auto,f_auto',
              },
            ],
            rehypeSlug,
            [
              rehypeLink,
              {
                behavior: 'wrap',
                properties: {
                  className: 'underline',
                },
              },
            ],
          ],
          remarkPlugins: [
            [externalLinks, { target: '_blank', rel: 'noopener' }],
            smartypants,
          ],
        })
        // time to read
        const avgWPM = 180
        const timeToRead = Math.round(wordcount(content) / avgWPM)
        data['timeToRead'] = timeToRead
        // description
        const description = `${content.slice(0, 150)}...`
        data['description'] = description
      } catch (e) {
        // Gotta catchem all
        console.log(e)
      }

      await setDataForSlug(slug, {
        component: {
          mode: 'source',
          value: `/** @jsx mdx */
                  import {mdx} from '@mdx-js/preact';
                  ${compiledMdx}
          `,
        },
        data,
      })
      // Bringing the data back w/ slug
      return {
        ...data,
        slug,
      }
    })
  ).then(posts => {
    // use this part to remove any unneeded posts
    // return posts.filter((post) => !post.private);
    return posts
  })
}
