// Credits to Chris Biscardi, Prince Wilson and Benjamin Lannon
// What diamonds 💎
import mdx from '@mdx-js/mdx'
import { fetchMdxFromDisk } from '@toastdotdev/mdx'
import frontmatter from 'gray-matter'
import rehypeLink from 'rehype-autolink-headings'
// import cloudinaryPlugin from 'rehype-local-image-to-cloudinary'
import rehypeSlug from 'rehype-slug'
import externalLinks from 'remark-external-links'
import rehypePrismMdx from '../legacy-commonjs/prism-rehype-plugin/index.js'

const IMAGE_PATH = filename => {
  const directoryRoot = filename.slice(0, -`index.mdx`.length)
  return directoryRoot
}

export const sourceData = async ({ setDataForSlug }) => {
  const mdxObjects = await fetchMdxFromDisk({
    directory: './content/posts/',
  })

  return await Promise.all(
    mdxObjects.map(async ({ file, filename }) => {
      const split = filename.split(`/`)
      const slug = split
        .splice(2, split.length, -3)
        .join(`/`)
        .slice(0, -`index.mdx`.length)
      const { data, content } = frontmatter(file)
      let compiledMdx = null
      try {
        compiledMdx = await mdx(content, {
          rehypePlugins: [
            rehypePrismMdx,
            // [
            //   cloudinaryPlugin,
            //   {
            //     baseDir: IMAGE_PATH(filename),
            //     uploadFolder: 'scottspence.com',
            //   },
            // ],
            rehypeSlug,
            [
              rehypeLink,
              {
                behavior: 'wrap',
                properties: {
                  className: 'text-black underline',
                },
              },
            ],
          ],
          remarkPlugins: [
            [externalLinks, { target: '_blank', rel: 'noopener' }],
          ],
        })
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
