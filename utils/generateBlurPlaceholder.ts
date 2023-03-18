import type { ImageProps } from "./types";

const cache = new Map<ImageProps, string>();

export default async function getBase64ImageUrl(
  image: ImageProps
): Promise<string> {
  let url = cache.get(image);
  if (url) {
    return url;
  }

  const response = await fetch(
    `${process.env.PHOTOS_HOST}/${image.id}/fit=cover,w=200,blur=90,quality=10,format=webp`
  );
  const buffer = await response.arrayBuffer();
  url = `data:image/webp;base64, ${Buffer.from(buffer).toString("base64")}`;
  cache.set(image, url);
  return url;
}
