"use client";

import { useWallet, MOCK_FULL_ADDRESS } from "@/context/WalletContext";
import { useLanguage } from "@/context/LanguageContext";

export default function WalletModal() {
  const { isConnected, isModalOpen, closeModal, disconnect } = useWallet();
  const { t } = useLanguage();

  if (!isModalOpen || !isConnected) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closeModal}
      />
      <div className="relative bg-[var(--card-bg)] border border-[var(--border)] rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-green-500/10 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-green-500"
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
            {t.walletConnected}
          </h3>
          <p className="text-[var(--muted)] text-sm mb-6">
            {t.walletConnectedSuccess}
          </p>

          <div className="bg-[var(--background)] rounded-lg p-4 mb-6">
            <p className="text-xs text-[var(--muted)] mb-1">{t.address}</p>
            <p className="font-mono text-sm break-all">{MOCK_FULL_ADDRESS}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-[var(--background)] rounded-lg p-3">
              <p className="text-xs text-[var(--muted)] mb-1">{t.network}</p>
              <p className="text-sm font-medium">Ethereum Mainnet</p>
            </div>
            <div className="bg-[var(--background)] rounded-lg p-3">
              <p className="text-xs text-[var(--muted)] mb-1">{t.balance}</p>
              <p className="text-sm font-medium">2.45 ETH</p>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={closeModal}
              className="flex-1 px-4 py-2.5 bg-[var(--foreground)] text-[var(--background)] text-sm font-medium rounded-lg hover:bg-[var(--accent)] transition-colors duration-200"
            >
              {t.continue}
            </button>
            <button
              onClick={() => {
                disconnect();
                closeModal();
              }}
              className="px-4 py-2.5 border border-[var(--border)] text-sm font-medium rounded-lg hover:border-[var(--foreground)] transition-colors duration-200"
            >
              {t.disconnect}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
