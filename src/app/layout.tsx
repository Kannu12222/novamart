import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "NovaMart | Smarter Shopping",
    template: "%s | NovaMart",
  },
  description: "Curated technology, fashion, and lifestyle essentials with fast delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}
        <Toaster
  position="top-right"
  toastOptions={{
    style: {
      background: "#111827",
      color: "#fff",
      border: "1px solid #374151",
      padding: "16px",
      borderRadius: "16px",
    },
  }}
/>
      </body>
    </html>
  );
}
