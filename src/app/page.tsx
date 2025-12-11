"use client";

import Image from "next/image";
import NFTCard from "@/components/NFTCard";
import { nfts } from "@/data/nfts";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-transparent to-[var(--background)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center py-20">
          <div className="relative w-32 h-32 mx-auto mb-8 overflow-hidden rounded-full ring-4 ring-[var(--border)] shadow-2xl">
            <Image
              src="/logo2.jpeg"
              alt="Marcelo"
              fill
              className="object-cover"
              priority
            />
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6">
            Marcelo
          </h1>

          <p className="text-lg md:text-xl text-[var(--muted)] max-w-2xl mx-auto mb-4 leading-relaxed">
            {t.fineArtPhotography}
          </p>

          <div className="w-24 h-px bg-[var(--accent)] mx-auto mb-8" />

          <p className="text-base md:text-lg text-[var(--muted)] max-w-2xl mx-auto leading-relaxed">
            {t.heroDescription}
          </p>

          <div className="flex items-center justify-center gap-6 mt-10 text-sm text-[var(--muted)]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[var(--accent)] rounded-full" />
              <span>4 {t.availableWorks}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[var(--accent)] rounded-full" />
              <span>ERC-1155</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[var(--accent)] rounded-full" />
              <span>{t.uniqueEditions}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Section */}
      <section className="py-20 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
              {t.collection}
            </h2>
            <p className="text-[var(--muted)] max-w-xl mx-auto">
              {t.collectionDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {nfts.map((nft) => (
              <NFTCard key={nft.id} nft={nft} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[var(--card-bg)] border-y border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-8">
            {t.aboutCollection}
          </h2>

          <div className="space-y-6 text-[var(--muted)] leading-relaxed">
            <p>{t.aboutParagraph1}</p>
            <p>{t.aboutParagraph2}</p>
          </div>

          <div className="mt-12 p-6 bg-[var(--background)] rounded-xl border border-[var(--border)]">
            <p className="text-sm text-[var(--muted)] mb-2">{t.tokenStandard}</p>
            <p className="font-mono text-lg font-medium">ERC-1155</p>
            <p className="text-xs text-[var(--muted)] mt-2">
              {t.preparedForThirdweb}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
