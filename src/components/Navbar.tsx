"use client";

import Image from "next/image";
import Link from "next/link";
import { useWallet } from "@/context/WalletContext";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export default function Navbar() {
  const { isConnected, address, connect, disconnect, openModal } = useWallet();
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/95 backdrop-blur-sm border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 overflow-hidden rounded-full ring-2 ring-[var(--border)] group-hover:ring-[var(--accent)] transition-all duration-300">
              <Image
                src="/logo2.jpeg"
                alt="Marcelo Photography"
                fill
                className="object-cover"
                priority
              />
            </div>
            <span className="font-serif text-lg sm:text-xl font-medium tracking-tight hidden sm:block">
              Marcelo
            </span>
          </Link>

          {/* Controls */}
          <div className="flex items-center gap-1 sm:gap-4">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === "es" ? "en" : "es")}
              className="flex items-center gap-1 px-2 sm:px-3 py-2 text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors duration-200"
              aria-label="Toggle language"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                />
              </svg>
              <span className="uppercase text-xs sm:text-sm">{language}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              )}
            </button>

            <div className="w-px h-6 bg-[var(--border)] hidden sm:block" />

            {/* Wallet */}
            {isConnected ? (
              <div className="flex items-center gap-2 sm:gap-4">
                <button
                  onClick={openModal}
                  className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 bg-[var(--card-bg)] border border-[var(--border)] rounded-lg hover:border-[var(--accent)] transition-colors duration-200"
                >
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm font-medium">{address}</span>
                </button>
                <button
                  onClick={disconnect}
                  className="text-xs sm:text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors duration-200 hidden sm:block"
                >
                  {t.disconnect}
                </button>
              </div>
            ) : (
              <button
                onClick={connect}
                className="px-3 sm:px-6 py-2 sm:py-2.5 bg-[var(--foreground)] text-[var(--background)] text-xs sm:text-sm font-medium rounded-lg hover:bg-[var(--accent)] transition-colors duration-200"
              >
                <span className="hidden sm:inline">{t.connectWallet}</span>
                <span className="sm:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
