import type { Metadata } from "next";
import "./globals.css";
import ConvexClientProvider from "@/provider/ConvexClientProvider";
import { Toaster } from "react-hot-toast";
import Header from "@/components/base/Header";

export const metadata: Metadata = {
  title: "Job board",
  description: "Find Your Dream Job in Tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-pro-sans">
        <ConvexClientProvider>
          <Header />
          {children}
          <Toaster />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
