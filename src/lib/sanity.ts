import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "@/gql/graphql";
// import type { Image, ImageUrlBuilder } from "sanity";

import { sanityDataset, sanityProjectId } from "./env";

const imageBuilder = createImageUrlBuilder({
  projectId: sanityProjectId,
  dataset: sanityDataset,
});

export const urlForImage = (
  source?: {
    asset: { _id: string | null; assetId: string | null } | null;
  } | null,
) => {
  if (source) {
    return imageBuilder?.image(source).auto("format").fit("max");
  }
};
