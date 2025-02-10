import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark:bg-gray-900 min-h-screen flex flex-col justify-between">
        <Header />
        {/* <div className="px-20 py-8">{children}</div> */}
        <main className="max-w-6xl mx-auto p-6 flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
