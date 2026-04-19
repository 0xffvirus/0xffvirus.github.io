import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Playfair_Display, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif-body",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const arabic = localFont({
  src: [
    { path: "./fonts/TheYearofHandicrafts-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/TheYearofHandicrafts-Medium.otf", weight: "500", style: "normal" },
    { path: "./fonts/TheYearofHandicrafts-SemiBold.otf", weight: "600", style: "normal" },
    { path: "./fonts/TheYearofHandicrafts-Bold.otf", weight: "700", style: "normal" },
    { path: "./fonts/TheYearofHandicrafts-Black.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-arabic",
  display: "swap",
  // Scale TheYearofHandicrafts up ~18% so its x-height roughly matches Inter
  // and Playfair. Without this, Arabic text at the same font-size looks
  // noticeably smaller than the Latin equivalents.
  declarations: [{ prop: "size-adjust", value: "118%" }],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <main
        className={`${inter.variable} ${playfair.variable} ${sourceSerif.variable} ${jetbrainsMono.variable} ${arabic.variable} font-sans`}
      >
        <Component {...pageProps} />
      </main>
    </LanguageProvider>
  );
}
