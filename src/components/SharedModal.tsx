"use client";
import {
  ArrowDownTrayIcon,
  ArrowTopRightOnSquareIcon,
  ArrowUturnLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import NextImage from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { variants } from "../../utils/animationVariants";
import downloadPhoto from "../../utils/downloadPhoto";
import { range } from "../../utils/range";
import type { ImageProps, SharedModalProps } from "../../utils/types";
import Twitter from "./Icons/Twitter";
import { urlForImage } from "../lib/sanity";

export default function SharedModal({
  index,
  images,
  changePhotoId,
  closeModal,
  navigation,
  currentPhoto,
  direction,
}: SharedModalProps) {
  const [loaded, setLoaded] = useState(false);

  let filteredImages = images?.filter((img) =>
    range(index - 15, index + 15).includes(img),
  );

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (index < images?.length - 1) {
        changePhotoId(index + 1);
      }
    },
    onSwipedRight: () => {
      if (index > 0) {
        changePhotoId(index - 1);
      }
    },
    trackMouse: true,
  });

  let currentImage = images ? images[index] : currentPhoto;

  const options = useMemo(
    () => ({
      width: navigation ? 1280 : 1920,
      height: navigation ? 853 : 1280,
      quality: 100,
      auto: "format" as "format",
    }),
    [navigation],
  );
  // Preloads the next and previous images
  useEffect(() => {
    let prevImage = images ? images[index - 1] : undefined;
    let prevPrevImage = images ? images[index - 2] : undefined;
    let nextImage = images ? images[index + 1] : undefined;
    let nextNextImage = images ? images[index + 2] : undefined;

    if (prevImage) {
      const prevImageNode = new Image();
      prevImageNode.src = urlForImage(prevImage.image, options).url();
    }
    if (prevPrevImage) {
      setTimeout(() => {
        const prevPrevImageNode = new Image();
        prevPrevImageNode.src = urlForImage(prevPrevImage.image, options).url();
      }, 100);
    }

    if (nextImage) {
      const nextImageNode = new Image();
      nextImageNode.src = urlForImage(nextImage.image, options).url();
    }
    if (nextNextImage) {
      setTimeout(() => {
        const nextNextImageNode = new Image();
        nextNextImageNode.src = urlForImage(nextNextImage.image, options).url();
      }, 100);
    }
  }, [currentImage, navigation, index]);
  return (
    <MotionConfig
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
    >
      <div
        id="wrapper1"
        className="fixed inset-0 z-10 flex items-center justify-center"
      >
        <div
          className="relative z-50 flex aspect-[3/2] w-full max-w-7xl items-center wide:h-full xl:taller-than-854:h-auto"
          {...handlers}
        >
          {/* Main image */}
          <div className="w-full overflow-hidden">
            <div className="relative flex aspect-[3/2] items-center justify-center">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={index}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute"
                >
                  <NextImage
                    src={urlForImage(currentImage.image, options).url()}
                    width={navigation ? 1280 : 1920}
                    height={navigation ? 853 : 1280}
                    priority
                    alt="Imagen de la JSConf Chile"
                    onLoadingComplete={() =>
                      setTimeout(() => setLoaded(true), 300)
                    }
                    placeholder="blur"
                    blurDataURL={currentImage.image.asset.metadata.lqip}
                    sizes="(max-width: 640px) 25w,
                    (max-width: 1280px) 33w,
                    (max-width: 1536px) 100w,
                    35w"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Buttons + bottom nav bar */}
          <div
            id="buttons"
            className="absolute inset-0 z-50 mx-auto flex max-w-7xl items-center justify-center"
          >
            {/* Buttons */}
            <AnimatePresence initial={true}>
              {loaded && (
                <motion.div
                  animate={{ opacity: 1 }}
                  initial={{
                    opacity: 0,
                  }}
                  exit={{ opacity: 0 }}
                  className="relative aspect-[3/2] max-h-full w-full"
                >
                  {navigation && (
                    <>
                      {index > 0 && (
                        <button
                          className="absolute left-3 top-[calc(50%-16px)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white focus:outline-none"
                          style={{ transform: "translate3d(0, 0, 0)" }}
                          onClick={() => changePhotoId(index - 1)}
                        >
                          <ChevronLeftIcon className="h-6 w-6" />
                        </button>
                      )}
                      {index + 1 < images.length && (
                        <button
                          className="absolute right-3 top-[calc(50%-16px)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white focus:outline-none"
                          style={{ transform: "translate3d(0, 0, 0)" }}
                          onClick={() => changePhotoId(index + 1)}
                        >
                          <ChevronRightIcon className="h-6 w-6" />
                        </button>
                      )}
                    </>
                  )}
                  <div className="absolute top-0 right-0 flex items-center gap-2 p-3 text-white">
                    <a
                      href={`${process.env.NEXT_PUBLIC_PHOTOS_HOST}/${currentImage.id}/w=10000`}
                      className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
                      target="_blank"
                      title="Open full-size version"
                      rel="noreferrer"
                    >
                      <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?text=Mira%20esta%20foto%20de%20la%20JSConf%20Chile!%20https://gallery.jsconf.cl/p/${index}`}
                      className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
                      target="_blank"
                      title="Share on Twitter"
                      rel="noreferrer"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <button
                      onClick={() =>
                        downloadPhoto(
                          `${process.env.NEXT_PUBLIC_PHOTOS_HOST}/${currentImage.id}/w=10000,format=png`,
                          `${index}.png`,
                        )
                      }
                      className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
                      title="Download fullsize version"
                    >
                      <ArrowDownTrayIcon className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="absolute top-0 left-0 flex items-center gap-2 p-3 text-white">
                    <button
                      onClick={closeModal}
                      className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
                    >
                      {navigation ? (
                        <XMarkIcon className="h-5 w-5" />
                      ) : (
                        <ArrowUturnLeftIcon className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            {/* Bottom Nav bar */}
          </div>
        </div>
      </div>

      <AnimatePresence initial={true}>
        {loaded && navigation && (
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            exit={{ opacity: 0 }}
            id="NAVIGATION2"
            className="fixed inset-x-0 bottom-0 z-40 overflow-hidden bg-gradient-to-b from-black/0 to-black/60"
          >
            <motion.div
              initial={false}
              className="mx-auto mt-6 mb-6 flex aspect-[3/2] h-14"
            >
              <AnimatePresence initial={false}>
                {filteredImages.map((filteredImage) => {
                  return (
                    <motion.button
                      initial={{
                        width: "0%",
                        x: `${Math.max((index - 1) * -100, 15 * -100)}%`,
                      }}
                      animate={{
                        scale: filteredImage.index === index ? 1.25 : 1,
                        width: "100%",
                        x: `${Math.max(index * -100, 15 * -100)}%`,
                      }}
                      exit={{ width: "0%" }}
                      // onHoverStart={() => {
                      //   const img = new Image();
                      //   img.src = `${process.env.NEXT_PUBLIC_PHOTOS_HOST}/${filteredImage.id}`;
                      // }}
                      onClick={() => changePhotoId(filteredImage.index)}
                      key={filteredImage.index}
                      className={`${
                        filteredImage.index === index
                          ? "z-20 rounded-md shadow shadow-black/50"
                          : "z-10"
                      } ${filteredImage.index === 0 ? "rounded-l-md" : ""} ${
                        filteredImage.index === images.length - 1
                          ? "rounded-r-md"
                          : ""
                      } relative inline-block w-full shrink-0 transform-gpu overflow-hidden focus:outline-none`}
                    >
                      <NextImage
                        alt="small photos on the bottom"
                        width={180}
                        height={120}
                        className={`${
                          filteredImage.index === index
                            ? "brightness-110 hover:brightness-110"
                            : "brightness-50 contrast-125 hover:brightness-75"
                        } h-full transform object-cover transition`}
                        src={`/${filteredImage.id}`}
                      />
                    </motion.button>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
}
