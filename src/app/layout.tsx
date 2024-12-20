// IMPORT FONTS
import { martelSans, raleway } from "./ui/fonts";
// IMPORT GLOBAL STYLES APP
import "./ui/global.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${martelSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
