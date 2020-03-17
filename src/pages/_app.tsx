import { AppProps } from "next/app";
import "minireset.css";
import "./global.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
