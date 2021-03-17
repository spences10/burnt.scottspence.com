/** @jsx h */
import { format } from 'date-fns'
import { Fragment, h } from 'preact'

export const DateUpdated = ({ date, small }) => {
  const lastBuildDate = new Date()
  const buildDate = date
    ? format(new Date(date), 'MMMM do yyyy')
    : format(new Date(lastBuildDate), 'MMMM do yyyy')

  return (
    <Fragment>
      {small ? (
        <span class="text-xs">{buildDate}</span>
      ) : (
        <span class="text-base">{buildDate}</span>
      )}
    </Fragment>
  )
}
