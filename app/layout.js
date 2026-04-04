import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/NavigationBar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "IzumiPrints",
  description: "Shop your favorite show's clothes,accessories & merchandises",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" theme="light" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <header>
          <Navbar/></header>
        {children}</body>
    </html>
  );
}
