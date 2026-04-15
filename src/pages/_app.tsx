import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} ${playfair.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
