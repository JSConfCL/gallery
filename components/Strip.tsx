import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import NextImage from "next/image";
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { range } from "../utils/range";
import type { ImageProps, SharedModalProps } from "../utils/types";
import { useRouter } from "next/router";

export default function Strip({
  images,
  changePhotoId,
  closeModal,
  navigation,
  currentPhoto,
  direction,
}: SharedModalProps) {
  const router = useRouter();
  const { photoId } = router.query;
  const index = Number(photoId);

  let filteredImages = images?.filter((img: ImageProps) =>
    range(index - 15, index + 15).includes(img.index),
  );

  // const handlers = useSwipeable({
  //   onSwipedLeft: () => {
  //     if (index < images?.length - 1) {
  //       changePhotoId(index + 1);
  //     }
  //   },
  //   onSwipedRight: () => {
  //     if (index > 0) {
  //       changePhotoId(index - 1);
  //     }
  //   },
  //   trackMouse: true,
  // });

  let currentImage = images ? images[index] : currentPhoto;
  // Preloads the next and previous images
  useEffect(() => {
    let prevImageId = images ? images[index - 1] : undefined;
    if (prevImageId) {
      const prevImage = new Image();
      prevImage.src = `${process.env.NEXT_PUBLIC_PHOTOS_HOST}/${
        prevImageId.id
      }/${navigation ? "w=1280" : "w=1920"},fit=cover`;
    }
    let nextImageId = images ? images[index + 1] : undefined;
    if (nextImageId) {
      const prevImage = new Image();
      prevImage.src = `${process.env.NEXT_PUBLIC_PHOTOS_HOST}/${
        nextImageId.id
      }/${navigation ? "w=1280" : "w=1920"},fit=cover`;
    }
  }, [currentImage, navigation]);
  return (
    <MotionConfig
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
    >
      <div
        id="NAVIGATION"
        className="fixed inset-x-0 bottom-0 z-40 overflow-hidden bg-gradient-to-b from-black/0 to-black/60"
      >
        <motion.div
          initial={false}
          className="mx-auto mt-6 mb-6 flex aspect-[3/2] h-14"
        >
          <AnimatePresence initial={false}>
            {filteredImages.map(({ index: id }) => {
              console.log({ id, index, currentImage, filteredImages });
              return (
                <motion.button
                  initial={{
                    width: "0%",
                    x: `${Math.max((index - 1) * -100, 15 * -100)}%`,
                  }}
                  animate={{
                    scale: id === index ? 1.25 : 1,
                    width: "100%",
                    x: `${Math.max(index * -100, 15 * -100)}%`,
                  }}
                  exit={{ width: "0%" }}
                  onClick={() => changePhotoId(id)}
                  key={id}
                  className={`${
                    id === index
                      ? "z-20 rounded-md shadow shadow-black/50"
                      : "z-10"
                  } ${id === 0 ? "rounded-l-md" : ""} ${
                    id === images.length - 1 ? "rounded-r-md" : ""
                  } relative inline-block w-full shrink-0 transform-gpu overflow-hidden focus:outline-none`}
                >
                  <NextImage
                    alt="small photos on the bottom"
                    width={180}
                    height={120}
                    className={`${
                      id === index
                        ? "brightness-110 hover:brightness-110"
                        : "brightness-50 contrast-125 hover:brightness-75"
                    } h-full transform object-cover transition`}
                    src={`/${currentImage.id}`}
                  />
                </motion.button>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </MotionConfig>
  );
}
