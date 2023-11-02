import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
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
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
