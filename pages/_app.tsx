import "../styles/globals.css";
import type { AppProps } from "next/app";
import { OrderDataProvider } from "../components/context/context";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <OrderDataProvider>
        <Component {...pageProps} />
      </OrderDataProvider>
    </>
  );
}

export default MyApp;
