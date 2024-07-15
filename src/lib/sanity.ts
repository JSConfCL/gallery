import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "@/gql/graphql";
import { sanityDataset, sanityProjectId } from "./env";
import {
  CropMode,
  FitMode,
  ImageFormat,
  AutoMode,
} from "@sanity/image-url/lib/types/types";

const imageBuilder = createImageUrlBuilder({
  projectId: sanityProjectId,
  dataset: sanityDataset,
});

export type ImageParams = {
  width?: number;
  height?: number;
  format?: ImageFormat;
  quality?: number;
  forceDownload?: string;
  fit?: FitMode;
  crop?: CropMode;
  auto?: AutoMode;
  rect?: [number, number, number, number];
  removeRect?: boolean;
};

export const urlForImage = (
  source?: {
    asset: { _id: string | null; assetId: string | null } | null;
  } | null,
  params: ImageParams = {},
) => {
  if (source) {
    let img = imageBuilder?.image(source);
    if (params.width) {
      img = img.width(params.width);
    }
    if (params.height) {
      img = img.height(params.height);
    }
    if (params.format) {
      img = img.format(params.format);
    }
    if (params.quality) {
      img = img.quality(params.quality);
    }
    if (params.fit) {
      img = img.fit(params.fit);
    }
    if (params.auto) {
      img = img.auto(params.auto);
    }
    if (params.forceDownload) {
      img = img.forceDownload(params.forceDownload);
    }
    if (params.removeRect) {
      img = img.rect(0, 0, params.width, params.height);
      img.url;
      const url = new URL(img.url());
      url.searchParams.delete("rect");
      const finalUrl = url.toString();
      return finalUrl;
    } else {
      return img.url();
    }
  }
};
