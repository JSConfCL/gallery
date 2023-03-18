export default function imageLoader({ src, width, quality, env }) {
  return `${
    process.env.PHOTOS_HOST || process.env.NEXT_PUBLIC_PHOTOS_HOST
  }/${src}/w=${width},quality=${quality || 75}`;
}
