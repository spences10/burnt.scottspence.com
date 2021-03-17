/** @jsx h */
import { formatDistance } from 'date-fns'
import { h } from 'preact'

export const DateDistance = ({ date }) => {
  const distance = formatDistance(
    new Date(Date.now()),
    new Date(date)
  )
  return <span>{distance}</span>
}
