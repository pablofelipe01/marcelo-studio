"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getNFTById, nfts } from "@/data/nfts";
import { useWallet } from "@/context/WalletContext";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";

export default function ObraDetail() {
  const params = useParams();
  const nft = getNFTById(params.id as string);
  const { isConnected, connect } = useWallet();
  const { t } = useLanguage();
  const [isPurchasing, setIsPurchasing] = useState(false);
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);

  const nftTranslation = nft ? t.nfts[nft.id as keyof typeof t.nfts] : null;
  const title = nftTranslation?.title || nft?.title || "";
  const description = nftTranslation?.description || nft?.description || "";

  if (!nft) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl mb-4">{t.workNotFound}</h1>
          <Link
            href="/"
            className="text-[var(--accent)] hover:underline"
          >
            {t.backToCollection}
          </Link>
        </div>
      </div>
    );
  }

  const handlePurchase = () => {
    if (!isConnected) {
      connect();
      return;
    }
    setIsPurchasing(true);
    setTimeout(() => {
      setIsPurchasing(false);
      setShowPurchaseModal(true);
    }, 1500);
  };

  const getRelatedTitle = (relatedNft: typeof nft) => {
    const relatedTranslation = t.nfts[relatedNft.id as keyof typeof t.nfts];
    return relatedTranslation?.title || relatedNft.title;
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link
            href="/"
            className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors duration-200 flex items-center gap-2 text-sm"
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
            {t.backToCollection}
          </Link>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] relative overflow-hidden rounded-xl border border-[var(--border)] shadow-2xl shadow-black/10">
              <Image
                src={nft.image}
                alt={title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <div className="mb-8">
              <p className="text-sm text-[var(--muted)] mb-2">
                {nft.edition}
              </p>
              <h1 className="font-serif text-4xl md:text-5xl font-medium mb-6">
                {title}
              </h1>
              <p className="text-[var(--muted)] leading-relaxed">
                {description}
              </p>
            </div>

            {/* Price Card */}
            <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-[var(--muted)] mb-1">
                    {t.currentPrice}
                  </p>
                  <p className="text-3xl font-medium flex items-center gap-2">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z" />
                    </svg>
                    {nft.price} ETH
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-[var(--muted)] mb-1">
                    ~USD
                  </p>
                  <p className="text-lg font-medium">
                    ${(parseFloat(nft.price) * 2350).toLocaleString()}
                  </p>
                </div>
              </div>

              <button
                onClick={handlePurchase}
                disabled={isPurchasing}
                className="w-full py-4 bg-[var(--foreground)] text-[var(--background)] text-base font-medium rounded-lg hover:bg-[var(--accent)] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isPurchasing ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    {t.processing}
                  </>
                ) : isConnected ? (
                  t.buyNow
                ) : (
                  t.connectWalletToBuy
                )}
              </button>
            </div>

            {/* Token Details */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-medium">
                {t.tokenDetails}
              </h3>

              <div className="bg-[var(--background)] border border-[var(--border)] rounded-lg divide-y divide-[var(--border)]">
                <div className="flex items-center justify-between p-4">
                  <span className="text-sm text-[var(--muted)]">
                    {t.standard}
                  </span>
                  <span className="text-sm font-medium font-mono">
                    {nft.standard}
                  </span>
                </div>
                <div className="flex items-center justify-between p-4">
                  <span className="text-sm text-[var(--muted)]">
                    {t.network}
                  </span>
                  <span className="text-sm font-medium">
                    Ethereum Mainnet
                  </span>
                </div>
                <div className="flex items-center justify-between p-4">
                  <span className="text-sm text-[var(--muted)]">
                    {t.edition}
                  </span>
                  <span className="text-sm font-medium">
                    {nft.edition}
                  </span>
                </div>
                <div className="p-4">
                  <span className="text-sm text-[var(--muted)] block mb-2">
                    {t.tokenHash}
                  </span>
                  <span className="text-xs font-mono break-all text-[var(--foreground)]">
                    {nft.tokenHash}
                  </span>
                </div>
              </div>
            </div>

            {/* Artist Info */}
            <div className="mt-8 pt-8 border-t border-[var(--border)]">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 overflow-hidden rounded-full ring-2 ring-[var(--border)]">
                  <Image
                    src="/logo2.jpeg"
                    alt="Marcelo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm text-[var(--muted)]">{t.artist}</p>
                  <p className="font-serif text-lg font-medium">Marcelo</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Works */}
        <section className="mt-24 pt-12 border-t border-[var(--border)]">
          <h2 className="font-serif text-2xl md:text-3xl font-medium mb-8 text-center">
            {t.otherWorks}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {nfts
              .filter((item) => item.id !== nft.id)
              .slice(0, 3)
              .map((relatedNft) => (
                <Link
                  key={relatedNft.id}
                  href={`/obra/${relatedNft.id}`}
                  className="group block"
                >
                  <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[var(--accent-light)]">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={relatedNft.image}
                        alt={getRelatedTitle(relatedNft)}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-serif text-lg font-medium group-hover:text-[var(--accent)] transition-colors">
                        {getRelatedTitle(relatedNft)}
                      </h3>
                      <p className="text-sm text-[var(--muted)] mt-1">
                        {relatedNft.price} ETH
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </div>

      {/* Purchase Success Modal */}
      {showPurchaseModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowPurchaseModal(false)}
          />
          <div className="relative bg-[var(--card-bg)] border border-[var(--border)] rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-green-500/10 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h3 className="font-serif text-2xl font-semibold mb-2">
              {t.simulatedPurchase}
            </h3>
            <p className="text-[var(--muted)] text-sm mb-6">
              {t.mockupMessage}
            </p>

            <div className="bg-[var(--background)] rounded-lg p-4 mb-6 text-left">
              <p className="text-xs text-[var(--muted)] mb-1">{t.work}</p>
              <p className="font-medium">{title}</p>
              <p className="text-xs text-[var(--muted)] mt-3 mb-1">{t.price}</p>
              <p className="font-medium">{nft.price} ETH</p>
            </div>

            <button
              onClick={() => setShowPurchaseModal(false)}
              className="w-full py-3 bg-[var(--foreground)] text-[var(--background)] text-sm font-medium rounded-lg hover:bg-[var(--accent)] transition-colors duration-200"
            >
              {t.understood}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
