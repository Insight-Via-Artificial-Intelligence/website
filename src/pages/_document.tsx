import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preload Avenir LT Std font files for better performance */}
        <link
          rel="preload"
          href="/fonts/Avenir LT Std/Avenir LT Std 45 Book/Avenir LT Std 45 Book.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Avenir LT Std/Avenir LT Std 55 Roman/Avenir LT Std 55 Roman.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Avenir LT Std/Avenir LT Std 65 Medium/Avenir LT Std 65 Medium.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Avenir LT Std/Avenir LT Std 85 Heavy/Avenir LT Std 85 Heavy.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Avenir LT Std/Avenir LT Std 95 Black/Avenir LT Std 95 Black.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
