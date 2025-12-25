import type { Metadata } from "next";
import { Audiowide, Sora, Golos_Text } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/navbar";
import Footer from "@/Components/Footer/Footer";

const audioWide =  Audiowide({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-audiowide",})

const golostext =  Golos_Text({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-golostext",})

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sora",})


export const metadata: Metadata = {
  title: "Setup Teletravail",
  description: "Guide pour bien se préparer au télétravail",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${audioWide.variable} ${golostext.variable} ${sora.variable} `}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
