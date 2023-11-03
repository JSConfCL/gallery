import Image from "next/image";
import { useRouter } from "next/router";
import useKeypress from "react-use-keypress";
import type { ImageProps } from "../../utils/types";
import { useLastViewedPhoto } from "../../utils/useLastViewedPhoto";
import SharedModal from "./SharedModal";

export default function Carousel({
  index,
  currentPhoto,
}: {
  index: number;
  currentPhoto: ImageProps;
}) {
  const router = useRouter();
  const [, setLastViewedPhoto] = useLastViewedPhoto();

  function closeModal() {
    setLastViewedPhoto(currentPhoto.index);
    router.push("/", undefined, { shallow: true });
  }

  function changePhotoId(newVal: number) {
    return newVal;
  }

  useKeypress("Escape", () => {
    closeModal();
  });

  return (
    <div className="fixed inset-0">
      <button
        className="absolute inset-0 z-10 cursor-default bg-black backdrop-blur-2xl"
        onClick={closeModal}
      >
        <Image
          src={currentPhoto.blurDataUrl}
          className="pointer-events-none h-full w-full"
          alt="blurred background"
          id="blur"
          fill
          priority={true}
          style={{
            filter: `blur(40px)`,
          }}
        />
      </button>

      <SharedModal
        index={index}
        changePhotoId={changePhotoId}
        currentPhoto={currentPhoto}
        closeModal={closeModal}
        navigation={false}
      />
    </div>
  );
}
