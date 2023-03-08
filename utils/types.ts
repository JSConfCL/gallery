/* eslint-disable no-unused-vars */
export interface ImageProps {
  id: string;
  index: number;
  width: number;
  height: number;
  blurDataUrl?: string
}

export interface SharedModalProps {
  index: number
  images?: ImageProps[]
  currentPhoto?: ImageProps
  changePhotoId: (newVal: number) => void
  closeModal: () => void
  navigation: boolean
  direction?: number
}
