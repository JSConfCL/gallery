import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import Logo from "../src/components/Icons/Logo";
import Modal from "../src/components/Modal";
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
        <title>Fotos de la JSConf Chile 2023</title>
        <meta name="author" content="JSConf Chile" />
        <meta
          name="image"
          property="og:image"
          content={
            process.env.NEXT_PUBLIC_PHOTOS_HOST +
            "/69ae16b6-4cc0-4701-411c-4e06daec1400/w=1920,fit=cover"
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
          <div className="after:content relative mb-5 flex h-[629px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-jsconf-yellow px-6 pb-16 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
            <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20">
              <span className="absolute left-0 right-0 bottom-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
            </div>
            <Logo color="#000" />
            <h1 className="mt-8 mb-4 text-black font-bold uppercase tracking-widest font-koulen">
              JSConf CHILE 2023
            </h1>
            <p className="z-10 max-w-[40ch] text-black/80 sm:max-w-[32ch]">
              Revive la primera conferencia de JavaScript de Chile! Tienes fotos
              que quieras agregar?{" "}
              <a className="font-bold" href="mailto:contacto@jsconf.cl">
                contacto@jsconf.cl
              </a>
            </p>
            <a
              className="pointer z-10 mt-6 rounded-lg border border-black bg-black px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/10 hover:text-white md:mt-4 bg-black"
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
                <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20">
                  <span className="absolute left-0 right-0 bottom-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
                </div>
                <Image
                  loader={imageLoader}
                  alt="Next.js Conf photo"
                  className="z-0 transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
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
                  35w"
                />
              </Link>
            );
          })}
        </div>
      </main>
      <footer className="flex flex-col gap-2 p-7 text-center text-white/80 sm:p-12">
        <div>
          Gracias a{" "}
          <a
            href="https://santoremedio.cl/"
            target="_blank"
            className="font-bold text-jsconf-yellow hover:text-white font-koulen"
            rel="noreferrer"
          >
            Santo Remedio
          </a>
          ,{" "}
          <a
            href="https://jsconf.cl/"
            target="_blank"
            className="font-bold text-jsconf-yellow hover:text-white font-koulen"
            rel="noreferrer"
          >
            Corporación JavaScript Chile
          </a>
          , y a la comunidad 💛 por sus fotos y media.
        </div>
        <div>
          Síguenos en{" "}
          <a
            href="https://www.linkedin.com/company/jsconf-chile"
            target="_blank"
            className="font-bold text-jsconf-yellow hover:text-white font-koulen"
            rel="noreferrer"
          >
            Linkedin
          </a>
          ,{" "}
          <a
            href="https://twitter.com/jsconfcl"
            target="_blank"
            className="font-bold text-jsconf-yellow hover:text-white font-koulen"
            rel="noreferrer"
          >
            Twitter
          </a>
          ,{" "}
          <a
            href="https://www.instagram.com/jsconf.cl/"
            target="_blank"
            className="font-bold text-jsconf-yellow hover:text-white font-koulen"
            rel="noreferrer"
          >
            Instagram
          </a>
          , y{" "}
          <a
            href="https://www.facebook.com/jsconfcl"
            target="_blank"
            className="font-bold text-jsconf-yellow hover:text-white font-koulen"
            rel="noreferrer"
          >
            Facebook
          </a>
        </div>
        <div>
          Esta galería es un fork de{" "}
          <a
            href="https://nextjsconf-pics.vercel.app/"
            target="_blank"
            className="font-bold text-jsconf-yellow hover:text-white font-koulen"
            rel="noreferrer"
          >
            NEXT.js CONF Gallery
          </a>
        </div>
      </footer>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  // let results = await getResults();
  // const limit = results.length;
  // const blurImagePromises = results
  //   .filter((e, index) => index < limit)
  //   .map(getBase64ImageUrl);
  // const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);
  // for (let index = 0; index < limit; index++) {
  //   results[index].blurDataUrl = imagesWithBlurDataUrls[index];
  // }
  // return {
  //   props: {
  //     images: results,
  //   },
  // };
}
