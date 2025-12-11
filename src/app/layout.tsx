import type { Metadata } from "next";
import "./globals.css";
import { WalletProvider } from "@/context/WalletContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WalletModal from "@/components/WalletModal";

export const metadata: Metadata = {
  title: "Marcelo | Fine Art Photography NFTs",
  description: "Colección exclusiva de fotografía artística como NFTs. Cada pieza es una edición única certificada en blockchain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col">
        <ThemeProvider>
          <LanguageProvider>
            <WalletProvider>
              <Navbar />
              <main className="flex-1 pt-20">
                {children}
              </main>
              <Footer />
              <WalletModal />
            </WalletProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
