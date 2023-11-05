import React from "react";
import "./globals.css";
import { Nav } from "../src/components/Nav";
import { Clerk } from "../src/components/Auth/clerk";
import { Toaster } from "../src/components/ui/toaster";
import { Footer } from "../src/features/footer";
import { Metadata } from "next";

export async function generateMetadata({ params }): Promise<Metadata> {
  return {
    metadataBase: new URL("/", process.env.NEXT_PUBLIC_BASE_URL),
    title: "Javascript Chile Gallery",
    description: "Revive los eventos de la comunidad de JavaScript Chile!",
    openGraph: {
      siteName: "Javascript Chile Gallery",
      title: "Javascript Chile Gallery",
      description: "Revive los eventos de la comunidad de JavaScript Chile!",
      type: "website",
      url: new URL(`/`, process.env.NEXT_PUBLIC_BASE_URL).toString(),
    },
    twitter: {
      card: "summary_large_image",
      site: "@jsconfchile",
      title: "Javascript Chile Gallery",
      description: "Revive los eventos de la comunidad de JavaScript Chile!",
      images: [
        {
          url: new URL(
            `/og-image.png`,
            process.env.NEXT_PUBLIC_BASE_URL,
          ).toString(),
          width: 1200,
          height: 630,
          alt: "Javascript Chile Gallery",
        },
      ],
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Clerk>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="https://gallery.jsconf.cl" />
          <meta
            property="og:description"
            content="Explora las mejores fotos de la exitosa Conferencia de JavaScript en Chile de febrero de 2023 y revive los momentos más emocionantes de este evento de tecnología de vanguardia."
          />
          <meta property="og:title" content="JSConf Chile 2023 Photos" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="JSConf Chile 2023 Photos" />

          <meta
            name="twitter:description"
            content="Revive la JSConf Chile 2023!"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Koulen&display=swap"
            rel="stylesheet"
          />
        </head>
        <body className="dark antialiased h-[100dvh] w-[100dvw] flex flex-col overflow-hidden">
          <Nav />
          <div className="h-full overflow-auto relative">
            {children}
            <Footer />
          </div>
          <Toaster />
        </body>
      </html>
    </Clerk>
  );
}

export const runtime = "edge";
