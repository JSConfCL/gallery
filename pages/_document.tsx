import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Ve las fotos de la JSConf Chile 2023."
          />
          <meta property="og:site_name" content="https://gallery.jsconf.cl" />
          <meta
            property="og:description"
            content="Ve las fotos de la JSConf Chile 2023."
          />
          <meta property="og:title" content="JSConf Chile 2023 Photos" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="JSConf Chile 2023 Photos" />
          <meta
            name="twitter:description"
            content="Ve las fotos de la JSConf Chile 2023."
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
