import type { Metadata } from "next";
import "./globals.css";
import ConvexClientProvider from "@/provider/ConvexClientProvider";

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
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
