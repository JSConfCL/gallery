import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";
import type { ImageProps } from "./types";

const cache = new Map<ImageProps, string>();

export default async function getBase64ImageUrl(
  image: ImageProps
): Promise<string> {
  let url = cache.get(image);
  if (url) {
    return url;
  }

  const response = await fetch(`${process.env.PHOTOS_HOST}/${image.id}/fit=cover,w=300`);
  const buffer = await response.arrayBuffer();
  const minified = await imagemin.buffer(Buffer.from(buffer), {
    plugins: [
      imageminWebp({
        quality: 15,
        lossless: 9,
      }),
    ],
  });
  url = `data:image/webp;base64, ${Buffer.from(minified).toString("base64")}`;
  cache.set(image, url);
  return url;
}
