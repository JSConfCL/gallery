import Image from "next/image";
import { API } from "../../src/gql/sanityApi";
import { ImageParams, urlForImage } from "../../src/lib/sanity";
import JSChileLogo from "../../src/components/Icons/JSChileLogo";
import { AnimatedNavigationCardLink } from "../../src/components/Transitions/AnimatedNavigationCardLink";
import { AnimatedGridContainer } from "../../src/components/Transitions/AnimatedGridContainer";
import { SortOrder } from "../../src/gql/graphql";

const imageConfig = {
  width: 720,
  height: 480,
  fit: "fill",
  auto: "format",
  crop: "entropy",
} satisfies ImageParams;
export default async function Page() {
  const data = await API.allEvents({
    // @ts-expect-error los tipos estan mal, pide que le enviemos todas as
    // propiedades de Event, cuando solo necesita una.
    where: { galleryEnabled: { eq: true } },
    // @ts-expect-error los tipos estan mal, pide que le enviemos todas as
    // propiedades de Event, cuando solo necesita una.
    sort: {
      startDate: SortOrder.Desc,
    },
  });
  const communityEvents = data?.allEvent ?? [];

  return (
    <main className="mx-auto max-w-[1960px] p-4 flex-1">
      <AnimatedGridContainer>
        <div className="after:content relative flex flex-grow-0 row-span-1 md:row-span-2 flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-jsconf-yellow px-6 py-8 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
          <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none">
            <span className="absolute left-0 right-0 bottom-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
          </div>
          <JSChileLogo color="#000" className="w-1/4 sm:w-1/2" />
          <h1 className="mt-8 mb-4 text-black font-bold uppercase tracking-widest font-koulen">
            JavaScript Chile
          </h1>
          <p className="z-10 max-w-[40ch] text-black/80 sm:max-w-[32ch]">
            Revive los eventos de la comunidad de JavaScript Chile! Tienes fotos
            que quieras compartir? Envíanos un correo a{" "}
            <a className="font-bold" href="mailto:contacto@jschile.org">
              contacto@jschile.org
            </a>
          </p>
        </div>
        {communityEvents.map(({ _id, title, project, image }) => {
          return (
            <AnimatedNavigationCardLink
              id={_id}
              key={_id}
              href={`/event/${_id}`}
              className="after:content group relative block w-full cursor-pointer after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
            >
              <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                <span className="absolute left-0 z-10 right-0 bottom-0 h-[50%] "></span>
                <div className="absolute bottom-0 text-white  z-20 left-0 right-0 flex gap-2 flex-col w-fill h-[50%] items-end justify-end">
                  <h2 className="px-4 py-3 w-fill flex justify-center items-center bg-black/80 flex-col gap">
                    <span className="font-bold text-lg drop-shadow-md">
                      {project.title}
                    </span>
                  </h2>
                  <span className="px-4 py-2 flex justify-center items-center font-bold bg-black/80 drop-shadow-md">
                    {title}
                  </span>
                </div>
              </div>
              <Image
                alt="Javascript Chile Event"
                className="transform rounded-lg brightness-90 z-0 transition will-change-auto group-hover:brightness-110"
                style={{ transform: "translate3d(0, 0, 0)" }}
                placeholder="blur"
                blurDataURL={project.image.asset.metadata.lqip}
                id={_id}
                src={urlForImage(image ?? project.image, imageConfig)}
                width={720}
                height={480}
                sizes="(max-width: 640px) 25w,
                  (max-width: 1280px) 33w,
                  (max-width: 1536px) 100w,
                  35w"
              />
            </AnimatedNavigationCardLink>
          );
        })}
      </AnimatedGridContainer>
    </main>
  );
}
