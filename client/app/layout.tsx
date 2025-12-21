import { Toaster} from 'sonner';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { Footer } from "@/components/Footer";
import ReduxProvider from "@/app/redux-provider"; // 👈 import wrapper-ka client

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: 'LGO',
  description: 'Ecomercy Wep fo gaming',
  icons: {
    icon: [
      { url: '/headIcon.jpg',}
    ],
    apple: '/apple-touch-icon.png', // iOS shortcut
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Toaster position="top-right" richColors />
        <ReduxProvider>   {/* 👈 provider-ka client */}
          <Nav />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}