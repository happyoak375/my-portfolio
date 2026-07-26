import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
// 1. THIS IMPORT MUST BE HERE
import LanguageToggle from "../../components/LanguageToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Custom Web Development | Medellín",
  description: "Building high-performance web applications and custom software.",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;

  return (
    <html lang={resolvedParams.lang} className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-900 relative`}>

        {/* 2. THE BUTTON MUST BE HERE */}
        <LanguageToggle currentLang={resolvedParams.lang} />

        {children}
      </body>
    </html>
  );
}