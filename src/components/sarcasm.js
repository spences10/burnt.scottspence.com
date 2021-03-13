/** @jsx h */
import { h } from 'preact'

export const Sarcasm = ({ children }) => {
  const sarky = children
    .split('')
    .map((char, i) => char[`to${i % 2 ? 'Upper' : 'Lower'}Case`]())
    .join('')
  return <span class="font-semibold">{sarky}</span>
}
