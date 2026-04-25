import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrainsMono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Ranju Shrestha",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-screen bg-[var(--color-primary)] text-white">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 pt-28 mb-20">{children}</main> 
          <Footer />
        </div>
      </body>
    </html>
  );
}
