/** @jsx h */
import { h } from 'preact'
import MugFace from '../components/mugface.js'
import SEO from '../components/seo.js'

export default function IndexPage() {
  return (
    <div>
      <SEO title="Home" />
      <MugFace />
      <h1>Hello World</h1>
    </div>
  )
}
