import AppContextProvider from "@/providers/AppContextProvider";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import TagManager from "react-gtm-module";
import { useEffect } from "react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const tagManagerArgs = {
    gtmId: "GTM-NW8R72RH",
  };
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  });
  return (
    <>
      <Head>
        <title>LetBeFound</title>
        <link rel="icon" href="/logo.ico" />
      </Head>

      <AppContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppContextProvider>
    </>
  );
};

export default MyApp;
