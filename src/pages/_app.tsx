import Head from "next/head";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/next";

import "photoswipe/dist/photoswipe.css";
import "@/styles/globals.css";
import { firaGO } from "@/assets/fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>დავით ბალხამიშვილი - მანუალური თერაპია</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <div className={firaGO.className}>
        <Component {...pageProps} />
      </div>
      <Analytics />
    </>
  );
}
