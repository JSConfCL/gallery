import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="See pictures from JSConf Chile." />
          <meta
            property="og:site_name"
            content="https://gallery.jsconf.cl/app"
          />
          <meta
            property="og:description"
            content="See pictures from JSConf Chile."
          />
          <meta property="og:title" content="JSConf Chile 2023 Photos" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="JSConf Chile 2023 Photos" />
          <meta
            name="twitter:description"
            content="See pictures from JSConf Chile."
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
