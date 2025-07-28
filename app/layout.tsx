import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import StoreProvider from "./StoreProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Complete IELTS Course in Bangladesh - Munzereen Shahid [2025]",
  description:
    "IELTS-এর সেরা প্রস্তুতি নিতে আজই জয়েন করুন Complete IELTS Course-টিতে, যেখানে থাকছে দেশসেরা IELTS ইন্সট্রাক্টরের গাইডলাইন, Mock Test ও প্রিমিয়াম হার্ডকপি বই।",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Product",
              "name": "IELTS Course by Munzereen Shahid",
              "image": "https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png",
              "description": "IELTS-এর সেরা প্রস্তুতি নিতে আজই জয়েন করুন Complete IELTS Course-টিতে, যেখানে থাকছে দেশসেরা IELTS ইন্সট্রাক্টরের গাইডলাইন, Mock Test ও প্রিমিয়াম হার্ডকপি বই।",
              "brand": {
                "@type": "Brand",
                "name": "10 Minute School"
              },
              "sku": "153",
              "offers": {
                "@type": "Offer",
                "url": "https://10minuteschool.com/product/ielts-course",
                "priceCurrency": "BDT",
                "price": "5000"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <StoreProvider>
          <Header />
          {children}
          <div className=" max-w-6xl mx-auto">
            <Footer />
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
