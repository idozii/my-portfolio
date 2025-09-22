import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://tonynguyen.com"), 
    alternates: {
    canonical: "https://tonynguyen.com",
    },
    title: "Tony Nguyen - Data Scientist",
    description:
      "Tony Nguyen is a Data Scientist.",
    keywords:
      "Tony Nguyen, Data Science, AI, Machine Learning, Deep Learning",
    openGraph: {
      locale: "en_US",
      siteName: "Tony Nguyen",
      type: "website",
    title: "Tony Nguyen",
    description:
      "Tony Nguyen is a Data Scientist.",
    url: "https://tonynguyen.com",
    images: [
      {
        url: "./og-large-meik-2.jpg", 
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tony Nguyen",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
