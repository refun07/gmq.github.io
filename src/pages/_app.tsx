import "@/styles/globals.css";
import "@/styles/app.css";
import type { AppProps } from "next/app";
import { outfit, manrope } from "@/fonts";
import { NavBar } from "@/components/navBar";
import Footer from "@/components/footer/Footer";
import NextTopLoader from "nextjs-toploader";
import { AppGoToTop, AppScrollProgress } from "@/components/share";
import { AnimatePresence } from "framer-motion";
import TopHeader from "@/components/navBar/topHeader/TopHeader";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <style jsx global>{`
        * {
          font-family: ${outfit.style.fontFamily};
        }
        h1,
        h2,
        h3,
        h4,
        h5 {
          font-family: ${outfit.style.fontFamily};
          font-weight: bold;
          line-height: normal;
        }
        .manropeFont {
          font-family: ${manrope.style.fontFamily};
        }
      `}</style>
      <NextTopLoader showSpinner={false} color="#00aaac" />
      <AppScrollProgress />
      <TopHeader />
      <NavBar />
      <AnimatePresence mode={"wait"}>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
      <AppGoToTop />
      <Footer />
    </>
  );
}
