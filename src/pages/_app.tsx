import Head from "next/head";
import type { AppProps } from "next/app";

import "@/styles/globals.css";
import { firaGO } from "@/assets/fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Default App Title</title>
      </Head>
      <div className={firaGO.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
