"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface WalletContextType {
  isConnected: boolean;
  address: string;
  connect: () => void;
  disconnect: () => void;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

const MOCK_ADDRESS = "0x1234...abcd";
const MOCK_FULL_ADDRESS = "0x1234567890abcdef1234567890abcdef12345678";

export function WalletProvider({ children }: { children: ReactNode }) {
  const [isConnected, setIsConnected] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const connect = () => {
    setIsConnected(true);
    setIsModalOpen(true);
  };

  const disconnect = () => {
    setIsConnected(false);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <WalletContext.Provider
      value={{
        isConnected,
        address: isConnected ? MOCK_ADDRESS : "",
        connect,
        disconnect,
        isModalOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
}

export { MOCK_FULL_ADDRESS };
