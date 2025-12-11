"use client";

import Image from "next/image";
import Link from "next/link";
import { NFT } from "@/data/nfts";
import { useLanguage } from "@/context/LanguageContext";

interface NFTCardProps {
  nft: NFT;
}

export default function NFTCard({ nft }: NFTCardProps) {
  const { t } = useLanguage();
  const nftTranslation = t.nfts[nft.id as keyof typeof t.nfts];
  const title = nftTranslation?.title || nft.title;

  return (
    <Link href={`/obra/${nft.id}`} className="group block">
      <article className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-black/5 hover:border-[var(--accent-light)]">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={nft.image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-5">
          <h3 className="font-serif text-xl font-medium mb-2 group-hover:text-[var(--accent)] transition-colors duration-200">
            {title}
          </h3>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-[var(--muted)] mb-0.5">{t.price}</p>
              <p className="font-medium flex items-center gap-1">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z" />
                </svg>
                {nft.price} ETH
              </p>
            </div>

            <div className="text-right">
              <p className="text-xs text-[var(--muted)] mb-0.5">{t.edition}</p>
              <p className="text-sm font-medium">{nft.edition}</p>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-[var(--border)]">
            <p className="text-xs text-[var(--muted)] font-mono truncate">
              {nft.tokenHash}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}
