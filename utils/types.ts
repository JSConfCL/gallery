import { EventImagesQuery } from "../src/gql/graphql";

/* eslint-disable no-unused-vars */
export interface ImageProps {
  id: string;
  url: string;
  index: number;
  blurDataUrl?: string;
}

export interface SharedModalProps {
  index: number;
  images?: EventImagesQuery["allEventImage"];
  currentPhoto?: EventImagesQuery["allEventImage"][number];
  changePhotoId: (newVal: number) => void;
  closeModal: () => void;
  navigation: boolean;
  direction?: number;
}
