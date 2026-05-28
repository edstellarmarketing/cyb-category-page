import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cybersecurity Training | Edstellar",
  description:
    "Edstellar delivers instructor-led cybersecurity training to corporate teams worldwide, from CISSP and CEH to cloud, AI, and governance programs.",
  icons: {
    icon: [
      { url: "/seo/favicon.png", type: "image/png" },
    ],
    shortcut: "/seo/favicon.png",
    apple: "/seo/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-black">
        {children}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-50 eds-page-glow"
        />
      </body>
    </html>
  );
}
