import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

import ToastProvider from "@/components/Providers/ToastProvider";
import ConfettiProvider from "@/components/Providers/ConfettiProvider";

export const metadata: Metadata = {
  title: "Zarno",
  description: "Learning is an endless process.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={GeistSans.className}>
        <body>
          <ConfettiProvider />
          <ToastProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
