import { Changa } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/NavigationBar/Navbar";

const changa = Changa({
  variable: "--font-changa",
  subsets: ["latin"],
});

export const metadata = {
  title: "IzumiPrints",
  description: "Shop your favorite show's clothes,accessories & merchandises",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={changa.variable}>
      <body>
        <header>
          <Navbar/></header>
        {children}</body>
    </html>
  );
}
