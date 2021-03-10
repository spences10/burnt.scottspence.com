// https://github.com/toastdotdev/toast-tools/blob/41d1d3627f04a4f58df1fd27ebeb8cd543fe4953/packages/mdx/rehype-prism-mdx.js
import rangeParser from 'parse-numeric-range'
import { h } from 'preact'
import renderToString from 'preact-render-to-string'
import Highlight from 'prism-react-renderer'
import Prism from 'prismjs'
// import prismComponents from 'prismjs/components.js'
// import loadLanguages from 'prismjs/components/index.js'
import visit from 'unist-util-visit'
import codeSyntaxHighlightTheme from '../src/code-style.js'

// try {
//   // meta doesn't exist in the prismjs package and thus will *FAIL* because it's a FAILURE
//   loadLanguages(
//     Object.keys(prismComponents.languages).filter(v => v !== 'meta')
//   )
// } catch (e) {
//   // this is here in case prismjs ever removes a language, so we can easily debug
//   console.log(e)
// }

const RE = /{([\d,-]+)}/

const calculateLinesToHighlight = meta => {
  if (RE.test(meta)) {
    const strlineNumbers = RE.exec(meta)[1]
    const lineNumbers = rangeParser(strlineNumbers)
    // console.log(lineNumbers)
    return index => lineNumbers.includes(index + 1)
  } else {
    return () => false
  }
}

export default function rehypePrismMdx(options) {
  return ast => {
    visit(ast, 'element', parentTree => {
      if (
        parentTree.tagName === 'pre' &&
        parentTree.children.length === 1 &&
        parentTree.children[0].tagName === 'code'
      ) {
        let tree = parentTree.children[0]
        // store codestring for later
        tree.properties.codestring = tree.children[0].value.trim()
        const shouldHighlightLine = calculateLinesToHighlight(
          tree.properties.metastring
        )

        const lang =
          tree.properties.className &&
          tree.properties.className[0] &&
          tree.properties.className[0].split('-')[1]
        const highlightedCode = renderToString(
          h(
            Highlight.default,
            {
              ...Highlight.defaultProps,
              ...{
                code: tree.children[0].value.trim(),
                language: lang,
                theme: options?.theme || codeSyntaxHighlightTheme,
                Prism,
              },
            },
            ({
              className,
              style,
              tokens,
              getLineProps,
              getTokenProps,
            }) =>
              h(
                'pre',
                {
                  className: className,
                  style: {
                    ...style,
                    'background-color': 'transparent',
                  },
                },
                tokens.map((line, i) =>
                  h(
                    'div',

                    getLineProps({
                      line,
                      key: i,
                      className: shouldHighlightLine(i)
                        ? 'mdx-highlight-line'
                        : '',
                    }),

                    line.map((token, key) =>
                      h(
                        'span',
                        getTokenProps({
                          token,
                          key,
                        })
                      )
                    )
                  )
                )
              )
          )
        )
        // render code to string
        parentTree.tagName = 'codeblock'
        parentTree.properties = tree.properties
        parentTree.children = [
          {
            value: highlightedCode,
            type: 'text',
          },
        ]
      }
    })
  }
}
