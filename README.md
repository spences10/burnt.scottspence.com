# toast.scottspence.com

Uses `rehype-local-image-to-cloudinary` and requires a `.env` with the
following keys:

```
CLOUDINARY_CLOUD_NAME=<cloud_name>
CLOUDINARY_API_KEY=<api_key>
CLOUDINARY_API_SECRET=<api_secret>
```

direnv is needed for `TOAST_DEVELOP=true` so as not to process
`rehype-local-image-to-cloudinary` locally.

Note if deploying on Vercel that the `vercel.json` config needs to
have `cleanUrls` se to `true`.

## Credits and examples

Thanks to all that have shared their own sites for reference. They are
credited throughout this codebase. 🙏

- [Prince]
- [Benjamin]
- [Mike]
- [Chris]
- [Jason]

<!-- Links -->

[prince]: https://github.com/maxcell/prince-toast/
[benjamin]: https://github.com/lannonbr/Portfolio
[mike]: https://github.com/m-allanson/garden/
[chris]:
  https://github.com/ChristopherBiscardi/christopherbiscardi.github.com/
[jason]: https://github.com/jlengstorf/jason.af/
