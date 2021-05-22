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
        <div class="mx-auto px-4 py-12 max-w-7xl sm:px-6 lg:px-8 lg:py-16">
          <div class="bg-primary-700 px-6 py-10 rounded-3xl sm:px-12 sm:py-16 lg:flex lg:items-center lg:p-20">
            <div class="lg:flex-1 lg:w-0">
              <h3 class="text-white text-3xl font-extrabold tracking-tight">
                Sign up for the newsletter
              </h3>
              <p class="mt-4 max-w-3xl text-indigo-100 text-lg">
                Want to keep up to date with what I'm working on?
                <p class="mt-4 max-w-3xl text-indigo-100 text-lg">
                  Important dev related content, directly to your
                  inbox (for free).
                </p>
              </p>
            </div>
            <div class="mt-12 sm:w-full sm:max-w-md lg:flex-1 lg:ml-8 lg:mt-0">
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
                  class="placeholder-gray-500 px-5 py-3 w-full text-gray-900 border-white rounded-md focus:outline-none focus:ring-white focus:ring-offset-indigo-700 focus:ring-offset-2 focus:ring-2"
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
                  class="bg-primary-500 hover:bg-primary-400 flex items-center justify-center mt-3 px-5 py-3 w-full text-white text-base font-medium border border-transparent rounded-md focus:outline-none focus:ring-white focus:ring-offset-indigo-700 focus:ring-offset-2 focus:ring-2 sm:flex-shrink-0 sm:ml-3 sm:mt-0 sm:w-auto"
                  type="submit"
                >
                  Submit
                </button>
              </form>
              <p class="mt-3 text-indigo-100 text-sm">
                I care about the protection of your data. Read my{' '}
                <a
                  href="/privacy-policy/"
                  class="text-white underline font-medium"
                >
                  Privacy Policy.
                </a>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div class="mx-auto px-4 py-12 max-w-7xl text-center sm:px-6 lg:px-8 lg:py-16">
          <div class="bg-primary-700 px-6 py-10 rounded-3xl sm:px-12 sm:py-16 lg:flex lg:items-center lg:p-20">
            <div class="lg:flex-1 lg:w-0">
              <h3 class="text-white text-3xl font-extrabold tracking-tight">
                Awesome, you're all signed up!
              </h3>
              <p class="mt-4 text-indigo-100 text-lg">
                Thanks for showing interest in my content.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
