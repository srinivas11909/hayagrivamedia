import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import "../../globals.css";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingThemeToggle from "@/components/FloatingThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hayagriva Media",
  icons: {
    icon: "/favicon.ico",
  },
  description: "Hayagriva Media is a premium cinematic event management and media production agency creating unforgettable weddings, corporate events, films, and visual stories.",

  keywords: [
    "Hayagriva Media",
    "event management company",
    "cinematic event management",
    "wedding planners",
    "corporate event management",
    "movie production company",
    "media production agency",
    "event photography",
    "cinematic weddings",
    "premium event management",
  ],
  authors: [{ name: "Hayagriva Media" }],
  creator: "Hayagriva Media",
  publisher: "Hayagriva Media",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <FloatingThemeToggle />
        <WhatsAppFloat />

      </body>
    </html>
  );
}
