import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "El obrador de Alba",
  description: "Blog de recetas y consejos sobre reposteria y pasteleria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
