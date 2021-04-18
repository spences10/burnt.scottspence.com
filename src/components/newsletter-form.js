/** @jsx h */
import { h } from 'preact'
import { useEffect, useRef, useState } from 'preact/hooks'

export const NewsLetterForm = () => {
  const [email, emailSet] = useState(``)
  const [submitted, submittedSet] = useState(``)

  const SubmitEmail = async () => {
    await fetch('https://api.sendgrid.com/v3/marketing/contacts', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.TOAST_SENDGRID_API_KEY}`,
      },
      body: JSON.stringify({
        list_ids: ['785c6867-cc31-46e9-84af-c5bf6935acd7'],
        contacts: [
          {
            email,
          },
        ],
      }),
    }).then(() => {
      submittedSet(true)
    })
  }
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const show = document.querySelector(`.table-of-contents`)
        if (show === null) return
        if (entry.intersectionRatio > 0) {
          show.style.display = 'none'
        } else {
          show.style.display = 'flex'
        }
      },
      {
        root: null,
        rootMargin: '100px',
        threshold: 0,
      }
    )
    if (ref && ref.current) {
      observer.observe(ref.current)
    }
  }, [ref])

  return (
    <div ref={ref}>
      {!submitted ? (
        <div class="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
          <div class="py-10 px-6 bg-primary-700 rounded-3xl sm:py-16 sm:px-12 lg:p-20 lg:flex lg:items-center">
            <div class="lg:w-0 lg:flex-1">
              <h3 class="text-3xl font-extrabold tracking-tight text-white">
                Sign up for the newsletter
              </h3>
              <p class="mt-4 max-w-3xl text-lg text-indigo-100">
                Want to keep up to date with what I'm working on?
                <p class="mt-4 max-w-3xl text-lg text-indigo-100">
                  Important dev related content, directly to your
                  inbox (for free).
                </p>
              </p>
            </div>
            <div class="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
              <form
                class="sm:flex"
                action="#"
                onSubmit={e => {
                  e.preventDefault()
                  SubmitEmail()
                }}
              >
                <label htmlFor="email" className="sr-only">
                  Your Email:
                </label>
                <input
                  class="w-full border-white px-5 py-3 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md"
                  id="email"
                  aria-label="email"
                  type="email"
                  name="email"
                  autocomplete="email"
                  placeholder="ada@lovelace.com"
                  required
                  value={email}
                  onChange={e => emailSet(e.target.value)}
                ></input>
                <button
                  class="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                  type="submit"
                >
                  Submit
                </button>
              </form>
              <p class="mt-3 text-sm text-indigo-100">
                I care about the protection of your data. Read my{' '}
                <a
                  href="/privacy-policy/"
                  class="text-white font-medium underline"
                >
                  Privacy Policy.
                </a>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div class="text-center max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
          <div class="py-10 px-6 bg-primary-700 rounded-3xl sm:py-16 sm:px-12 lg:p-20 lg:flex lg:items-center">
            <div class="lg:w-0 lg:flex-1">
              <h3 class="text-3xl font-extrabold tracking-tight text-white">
                Awesome, you're all signed up!
              </h3>
              <p class="mt-4 text-lg text-indigo-100">
                Thanks for showing interest in my content.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
