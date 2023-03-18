export default function imageLoader({ src, width, quality }) {
  return `${process.env.PHOTOS_HOST}/${src}/w=${width},quality=${
    quality || 75
  }`;
}
