import "../styles/globals.css";
import "@fontsource/ibm-plex-mono";
import "@fontsource/source-serif-4/400.css";
import "@fontsource/source-serif-4/variable-full.css";
import type { AppProps } from "next/app";
import { LazyMotion, domAnimation } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LazyMotion strict features={domAnimation}>
      <Component {...pageProps} />
    </LazyMotion>
  );
}

export default MyApp;
