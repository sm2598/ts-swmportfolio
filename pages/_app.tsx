import "../styles/globals.css";
import GlobalStyles from "../src/commons/styles/globalStyles";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
