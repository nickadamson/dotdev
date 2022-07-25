import "../styles/globals.css";
import "@fontsource/source-serif-4/400.css";
import "@fontsource/source-serif-4/variable-full.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
