import React from "react";

type Props = {
  eventName: string;
  logo: string;
};

export const EventCard = ({ eventName, logo }: Props) => {
  return (
    <div className="relative flex col-span-1 row-span-1 md:row-span-2 flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-jsconf-yellow px-6 pb-16 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none">
        <span className="absolute left-0 right-0 bottom-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
      </div>
      <h1 className="mt-8 mb-4 text-black font-bold uppercase tracking-widest font-koulen">
        {eventName}
      </h1>
      {/* <p className="z-10 max-w-[40ch] text-black/80 sm:max-w-[32ch]">
        Revive los eventos de la comunidad de JavaScript Chile!
      </p> */}
      <p className="z-10 max-w-[40ch] text-black/80 sm:max-w-[32ch]">
        Tienes fotos que quieras compartir? Envíanos un correo a{" "}
        <a className="font-bold" href="mailto:contacto@jschile.org">
          contacto@jschile.org
        </a>
      </p>
    </div>
  );
};
