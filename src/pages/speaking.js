/** @jsx h */
import { h } from 'preact'
import Speaking from '../../speaking.js'
import SEO from '../components/seo.js'

export default function IndexPage() {
  return (
    <div>
      <SEO title="Speaking" />
      <Speaking />
    </div>
  )
}
