import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Header from "@/components/header";
import { ConditionalFooter } from "@/components/conditional-footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
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

const SITE_DESCRIPTION =
  "India's first Early College Access program. Earn a US-accredited transcript and real college credits while still in school. Free assessment — personalised report in 60 seconds.";

export const metadata: Metadata = {
  title: {
    default: "Go Early College | Your Future Starts Earlier",
    template: "%s | Go Early College",
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL("https://goearlycollege.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Go Early College | Your Future Starts Earlier",
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: "Go Early College",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Go Early College | Your Future Starts Earlier",
    description: SITE_DESCRIPTION,
  },
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
        <WhatsAppButton />
      </body>
    </html>
  );
}
