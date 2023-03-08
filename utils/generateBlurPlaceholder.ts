import imagemin from 'imagemin'
import imageminJpegtran from 'imagemin-jpegtran'
import type { ImageProps } from './types'

const cache = new Map<number, string>()

export default async function getBase64ImageUrl(
  image: ImageProps
): Promise<string> {
  let url = cache.get(image.index)
  if (url) {
    return url
  }
  const response = await fetch(`${process.env.PHOTOS_HOST}/${image.id}`)
  const buffer = await response.arrayBuffer()
  const minified = await imagemin.buffer(Buffer.from(buffer), {
    plugins: [imageminJpegtran()],
  })
  url = `data:image/jpeg;base64, ${Buffer.from(minified).toString('base64')}`
  cache.set(image.index, url)
  return url
}
