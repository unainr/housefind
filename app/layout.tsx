import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner"
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "HouseFind: Your Home Search Solution",
  description: "Find your dream home or investment property. Explore a wide range of houses for rent and sale in. Our user-friendly platform makes it easy to search, compare, and contact agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader
						color="#6b08cf"
            height={2}
						crawlSpeed={50}
						speed={1000}
						showSpinner={false}
					/>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
             
            <Navbar/>


        {children}
        <Toaster />
        <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
