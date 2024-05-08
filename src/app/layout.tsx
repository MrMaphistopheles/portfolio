import "~/styles/globals.css";

import { Inter } from "next/font/google";
import Nav from "./_componenets/navbar/Nav";
import { type Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Vasyl Marchak",
  description: "Vasyl Marchak CV",
  icons: [
    {
      rel: "icon",
      url: "https://storage.googleapis.com/bonuslite1/vasyl_marchak_favicon.ico",
    },
  ],
  openGraph: {
    type: "website",
    url: "https://vasylmarchak.com",
    images: [
      {
        url: "https://storage.googleapis.com/bonuslite1/avatar.jpeg",
        width: 800,
        height: 600,
      },
      {
        url: "https://storage.googleapis.com/bonuslite1/avatar.jpeg",
        width: 1800,
        height: 1600,
        alt: "Vasyl Marchak",
      },
    ],
    siteName: "Vasyl Marchak",
    title: "Vasyl Marchak",
    description: "Vasyl Marchak CV",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Vasyl Marchak",
    description: "Vasyl Marchak CV",
    images: ["https://storage.googleapis.com/bonuslite1/avatar.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans ${inter.variable}`}>
        <main className="flex min-h-screen w-full flex-col items-center justify-center bg-blue-600 px-3 text-white">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
