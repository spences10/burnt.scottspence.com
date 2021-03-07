# toast.scottspence.com

Uses `rehype-local-image-to-cloudinary` and requires a `.env` with the
following keys:

```
CLOUDINARY_CLOUD_NAME=<cloud_name>
CLOUDINARY_API_KEY=<api_key>
CLOUDINARY_API_SECRET=<api_secret>
```

Note if deploying on Vercel that the `vercel.json` config needs to
have `cleanUrls` se to `true`.
