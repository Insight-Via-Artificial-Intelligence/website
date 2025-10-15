import "@/styles/shared.scss";
import "@/styles/home.scss";
import "@/styles/process-guardian.scss";
import "@/styles/vital-guardian.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
