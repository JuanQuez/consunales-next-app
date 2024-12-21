// IMPORT FONTS
import Navbar from "./ui/components/global/nav/navbar";
import { martelSans, raleway } from "./ui/fonts";
// IMPORT GLOBAL STYLES APP
import "./ui/global.scss";
// IMPORT BOOTSTRAP LIBRARY
import 'bootstrap/dist/css/bootstrap.css';

export const metadata = {
  title: "Consunales SAS | Construcciones y Suministros Nacionales - Pagina Oficial",
  description: "Construcciones de sumistros para la industria y la construcción",
  icons: {
    icon: "/svg/global-svg/logotype-favicon.svg",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${martelSans.variable}`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
