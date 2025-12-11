"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--card-bg)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 overflow-hidden rounded-full ring-1 ring-[var(--border)]">
              <Image
                src="/logo2.jpeg"
                alt="Marcelo Photography"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="font-serif text-lg font-medium">Marcelo</span>
              <p className="text-xs text-[var(--muted)]">{t.fineArtPhotography}</p>
            </div>
          </div>

          <div className="flex items-center gap-8 text-sm text-[var(--muted)]">
            <Link href="/" className="hover:text-[var(--foreground)] transition-colors duration-200">
              {t.collection}
            </Link>
            <span className="text-[var(--border)]">|</span>
            <span>ERC-1155</span>
            <span className="text-[var(--border)]">|</span>
            <span>Powered by thirdweb</span>
          </div>

          <p className="text-xs text-[var(--muted)]">
            © {new Date().getFullYear()} Marcelo. {t.allRightsReserved}.
          </p>
        </div>
      </div>
    </footer>
  );
}
