import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return <Component {...pageProps} />
}
