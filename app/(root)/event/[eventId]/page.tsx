import Image from "next/image";
import Modal from "../../../../src/components/Modal";
import { API } from "../../../../src/gql/sanityApi";
import { urlForImage } from "../../../../src/lib/sanity";
import { AnimatedNavigationCardLink } from "../../../../src/components/Transitions/AnimatedNavigationCardLink";
import { AnimatedGridContainer } from "../../../../src/components/Transitions/AnimatedGridContainer";
import { EventCard } from "../../../../src/components/EventCard";

export default async function Page({
  params,
}: {
  params: { eventId: string };
}) {
  const { eventId } = params;
  const data = await API.eventImages({
    eventId,
    where: {
      eventInstance: {
        // @ts-expect-error los tipos estan mal, pide que le enviemos todas as
        // propiedades de eventInstance, cuando solo necesita una.
        _id: {
          eq: eventId,
        },
      },
    },
  });

  const imagesWithIndex = data.allEventImage.map((image, index) => ({
    ...image,
    index,
  }));

  const eventName = data.EventInstance.eventType.title
    ? `${data.EventInstance.eventType.title} ${data.EventInstance.title}`
    : data.EventInstance.eventType.title;

  const image = data.EventInstance.image ?? data.EventInstance.eventType.image;

  return (
    <main className="mx-auto max-w-[1960px] p-4">
      <Modal images={imagesWithIndex} eventId={eventId} />
      <AnimatedGridContainer>
        <EventCard eventName={eventName} photo={image} />
        {/* <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20">
            <span className="flex max-h-full max-w-full items-center justify-center"></span>
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
            className="pointer z-10 mt-6 rounded-lg border border-black px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/10 hover:text-white md:mt-4 bg-black"
            href="https://github.com/JSConfCL/2023_images"
            target="_blank"
            rel="noreferrer"
          >
            Github Repo
          </a>
        </EventCard> */}
        {data.allEventImage.map(({ _id, title, image }) => {
          return (
            <AnimatedNavigationCardLink
              id={_id}
              key={_id}
              href={`/event/${eventId}/photo/${_id}`}
              as={`/event/${eventId}?photoId=${_id}`}
              scroll={false}
              shallow
              prefetch={true}
              className="after:content group relative block w-full cursor-pointer after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
            >
              <Image
                alt="Next.js Conf photo"
                className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                style={{ transform: "translate3d(0, 0, 0)" }}
                placeholder="blur"
                blurDataURL={image.asset.metadata.lqip}
                id={_id}
                src={urlForImage(image, {
                  width: 500,
                  height: 334,
                  fit: "fill",
                  auto: "format",
                  crop: "entropy",
                })}
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
