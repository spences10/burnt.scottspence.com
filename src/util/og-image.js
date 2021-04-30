const objectToQueryParams = obj => {
  const params = Object.entries(obj).map(
    ([key, value]) => `${key}=${value}`
  )
  return '?' + params.join('&')
}

export const ogImageUrl = (author, website, title) => {
  const params = {
    author,
    website: website || `scottspence.com`,
    title,
    image: `https://res.cloudinary.com/defkmsrpw/image/upload/f_auto,q_auto/v1614936697/scottspence.com/mugFace.png`,
  }
  return `https://image-og.now.sh/og.jpg${objectToQueryParams(
    params
  )}`
}
