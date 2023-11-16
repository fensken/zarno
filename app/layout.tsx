import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ToastProvider from "@/components/Providers/ToastProvider";

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
          <ToastProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
