import type { Metadata } from "next";
import "@/app/ui/globals.css";
import { inter } from "@/app/ui/fonts";

import Header from "@/src/components/Header";
import Container from "@/src/components/Container";

export const metadata: Metadata = {
  title: "Lucas Next.js Example",
  description: "Project for learning Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter} antialiased`}>
        <Container>
          <Header />
          <div className="px-8 py-4">{children}</div>
        </Container>
      </body>
    </html>
  );
}
