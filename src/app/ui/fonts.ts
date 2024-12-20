import { Raleway } from "next/font/google";
import { Martel_Sans } from "next/font/google";

export const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway-title",
});
export const martelSans = Martel_Sans({
  weight: ["400", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-martel-text",
});
