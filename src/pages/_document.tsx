import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="/fonts/industry-600.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/proxima-nova-400.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/proxima-nova-600.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <body className="font-Inter bg-white text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
