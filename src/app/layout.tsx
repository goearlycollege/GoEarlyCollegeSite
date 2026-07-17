import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Header from "@/components/header";
import { ConditionalFooter } from "@/components/conditional-footer";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: "variable",
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Go Early College | Your Future Starts Earlier",
    template: "%s | Go Early College",
  },
  description:
    "India's first Early College Access program. Earn a US-accredited transcript while still in school, and enter university stronger and earlier.",
  metadataBase: new URL("https://goearlycollege.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-ivory text-charcoal antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <ConditionalFooter />
      </body>
    </html>
  );
}
