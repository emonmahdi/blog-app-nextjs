import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
 
export const metadata = {
  title: "My Blog",
  description: "Transform your coding journey",
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
