import type { Metadata } from "next";
import { Audiowide, Cal_Sans, Golos_Text } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/navbar";

const audioWide =  Audiowide({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-audiowide",})

const golostext =  Golos_Text({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-golostext",})

const calsans =  Cal_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-calsans",})


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
        className={`${audioWide.variable} ${golostext.variable} ${calsans.variable} `}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
