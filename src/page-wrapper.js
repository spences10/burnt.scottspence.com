import { h } from "preact";
import { Helmet } from "react-helmet";
import { MDXProvider } from "@mdx-js/preact";

const components = {
  codeblock: (props) => (
    <div
      class="bg-gray-900 overflow-auto"
      dangerouslySetInnerHTML={{ __html: props.children }}
    />
  ),
  YouTube: (props) => <div></div>,
  Vimeo: (props) => <div></div>,
};

export default function PageWrapper(props) {
  return (
    <MDXProvider components={components}>
      <div class="m-auto max-w-2xl">
        <Helmet>
          <link rel="stylesheet" href="/styles.css" />
        </Helmet>
        {props.children}
      </div>
    </MDXProvider>
  );
}
