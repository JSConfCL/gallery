import { ImageProps } from "./types";

let cachedResults: ImageProps[] = null;

export default async function getResults() {
  if (!cachedResults) {
    console.log("Fetching ", process.env.PHOTO_API_HOST);
    cachedResults = (await (
      await fetch(process.env.PHOTO_API_HOST + "/images")
    ).json()) as ImageProps[];
    cachedResults.forEach((result, index) => {
      result.index = index;
    });
  }
  return cachedResults;
}
