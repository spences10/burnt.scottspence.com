/** @jsx h */
import { h } from 'preact'
import About from '../../about.js'
import MugFace from '../components/mugface.js'
import SEO from '../components/seo.js'

export default function IndexPage() {
  return (
    <div>
      <SEO title="Home" />
      <h1>Hello World</h1>
      <MugFace />
      <About />
    </div>
  )
}
