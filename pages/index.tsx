import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import Logo from "../components/Icons/Logo";
import Modal from "../components/Modal";
import getResults from "../utils/cachedImages";
import getBase64ImageUrl from "../utils/generateBlurPlaceholder";
import { ImageProps } from "../utils/types";
import { useLastViewedPhoto } from "../utils/useLastViewedPhoto";
import imageLoader from "../utils/image-loader";

const Home: NextPage = ({ images }: { images: ImageProps[] }) => {
  const router = useRouter();
  const { photoId } = router.query;
  const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto();
  const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // This effect keeps track of the last viewed photo in the modal to keep the index page in sync when the user navigates back
    if (lastViewedPhoto && !photoId) {
      lastViewedPhotoRef.current.scrollIntoView({ block: "center" });
      setLastViewedPhoto(null);
    }
  }, [photoId, lastViewedPhoto, setLastViewedPhoto]);

  return (
    <>
      <Head>
        <title>JSConf Chile 2023 Photos</title>
        <meta
          property="og:image"
          content={
            process.env.PHOTOS_HOST + "/69ae16b6-4cc0-4701-411c-4e06daec1400"
          }
        />
      </Head>
      <main className="mx-auto max-w-[1960px] p-4">
        <Modal
          images={images}
          isOpen={Boolean(photoId)}
          onClose={() => {
            setLastViewedPhoto(photoId);
          }}
        />
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
          <div className="after:content relative mb-5 flex h-[629px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white/10 px-6 pb-16 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
            <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20">
              <span className="flex max-h-full max-w-full items-center justify-center">
                {/* <Bridge /> */}
              </span>
              <span className="absolute left-0 right-0 bottom-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
            </div>
            <Logo />
            <h1 className="mt-8 mb-4 text-base font-bold uppercase tracking-widest">
              JSConf CHILE 2023
            </h1>
            <p className="z-10 max-w-[40ch] text-white/75 sm:max-w-[32ch]">
              Revive la primera conferencia de JavaScript de Chile! Tienes fotos
              que quieras agregar?{" "}
              <a className="font-bold" href="mailto:contacto@jsconf.cl">
                contacto@jsconf.cl
              </a>
            </p>
            <a
              className="pointer z-10 mt-6 rounded-lg border border-white bg-white px-3 py-2 text-sm font-semibold text-black transition hover:bg-white/10 hover:text-white md:mt-4"
              href="https://github.com/JSConfCL/2023_images"
              target="_blank"
              rel="noreferrer"
            >
              Github Repo
            </a>
          </div>
          {images.map(({ id, index, blurDataUrl }) => {
            return (
              <Link
                key={id}
                href={`/?photoId=${index}`}
                as={`/p/${index}`}
                ref={
                  index === Number(lastViewedPhoto) ? lastViewedPhotoRef : null
                }
                shallow
                className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
              >
                <Image
                  loader={imageLoader}
                  alt="Next.js Conf photo"
                  className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                  style={{ transform: "translate3d(0, 0, 0)" }}
                  placeholder="blur"
                  blurDataURL={blurDataUrl}
                  id={id}
                  src={id}
                  width={720}
                  height={480}
                  sizes="(max-width: 640px) 25w,
                  (max-width: 1280px) 33w,
                  (max-width: 1536px) 100w,
                  25vw"
                />
              </Link>
            );
          })}
        </div>
      </main>
      <footer className="p-6 text-center text-white/80 sm:p-12">
        Gracias a{" "}
        <a
          href="https://santoremedio.cl/"
          target="_blank"
          className="font-semibold hover:text-white"
          rel="noreferrer"
        >
          Santo Remedio
        </a>
        ,{" "}
        <a
          href="https://jsconf.cl/"
          target="_blank"
          className="font-semibold hover:text-white"
          rel="noreferrer"
        >
          Corporación JavaScript Chile
        </a>
        , y{" "}
        <a
          href="http://jsconf.cl/"
          target="_blank"
          className="font-semibold hover:text-white"
          rel="noreferrer"
        >
          la comunidad 💛
        </a>{" "}
        por sus fotos y media.
      </footer>
    </>
  );
};

export default Home;

// export async function getServerSideProps() {
//   let results = await getResults();
//   const limit = results.length;
//   const blurImagePromises = results
//     .filter((e, index) => index < limit)
//     .map((image) => {
//       return getBase64ImageUrl(image);
//     });
//   const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);
//   for (let index = 0; index < limit; index++) {
//     results[index].blurDataUrl = imagesWithBlurDataUrls[index];
//   }
//   return {
//     props: {
//       images: results,
//     },
//   };
// }

export async function getStaticProps() {
  let results = await getResults();
  const limit = results.length;
  const blurImagePromises = results
    .filter((e, index) => index < limit)
    .map((image) => {
      return getBase64ImageUrl(image);
    });
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);
  for (let index = 0; index < limit; index++) {
    results[index].blurDataUrl = imagesWithBlurDataUrls[index];
  }
  return {
    props: {
      images: results,
    },
  };
}
