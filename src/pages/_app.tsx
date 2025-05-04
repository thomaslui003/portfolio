import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Hanken_Grotesk } from "next/font/google";
import { LazyMotion, domAnimation } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";


const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"]
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LazyMotion features={domAnimation}>
      <style jsx global>{`
        :root {
          --font-hk: ${hankenGrotesk.style.fontFamily}, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        }
      `}</style>
      
      <Component {...pageProps} />
      <Analytics />
    </LazyMotion>
  );
}
