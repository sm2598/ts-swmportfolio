import "../styles/globals.css";
import GlobalStyles from "../src/commons/styles/globalStyles";
import type { AppProps } from "next/app";
import Layout from "../src/commons/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <GlobalStyles />
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
