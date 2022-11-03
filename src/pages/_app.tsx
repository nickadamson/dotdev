import "../styles/globals.css";
import "@fontsource/ibm-plex-mono";
import "@fontsource/source-serif-4/400.css";
import "@fontsource/source-serif-4/variable-full.css";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
