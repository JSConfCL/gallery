import React from "react";

export const Footer = () => {
  return (
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
  );
};
