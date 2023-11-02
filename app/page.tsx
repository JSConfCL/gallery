import Link from "next/link";
import Image from "next/image";
import Logo from "../components/Icons/Logo";
import { Button } from "../components/ui/button";

const baseImages = Array.from({ length: 100 }, (_, i) => i + 1).map((i) => {
  return {
    id: i,
    index: i,
    blurDataUrl: "",
  };
});

export default function Home({ images = baseImages }: { images: any[] }) {
  return (
    <main className="mx-auto max-w-[1960px] p-4">
      <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
        <div className="after:content relative mb-5 flex h-[629px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-jsconf-yellow px-6 pb-16 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
          <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none">
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
          <Button asChild variant="secondary" className="pointer">
            <a
              href="https://github.com/JSConfCL/2023_images"
              target="_blank"
              rel="noreferrer"
            >
              Github Repo
            </a>
          </Button>
        </div>
        {images.map(({ id, index, blurDataUrl }) => {
          return (
            <Link
              key={id}
              href={`/?photoId=${index}`}
              as={`/p/${index}`}
              shallow
              className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
            >
              <Image
                // loader={imageLoader}
                alt="Next.js Conf photo"
                className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                style={{ transform: "translate3d(0, 0, 0)" }}
                // placeholder="blur"
                // blurDataURL={blurDataUrl}
                id={id}
                // Load cat-api images from the web
                src={`https://cataas.com/cat?${id}`}
                width={720}
                height={480}
                //   sizes="(max-width: 640px) 25w,
                // (max-width: 1280px) 33w,
                // (max-width: 1536px) 100w,
                // 35w"
              />
            </Link>
          );
        })}
      </div>
    </main>
  );
}
