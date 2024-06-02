import "@/styles/globals.css";
import Navbar from "@/components/Layouts/Navbar";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
