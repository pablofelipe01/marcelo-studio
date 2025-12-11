# Marcelo Studio

NFT Marketplace mockup for Marcelo's fine art photography.

## Description

A digital collectibles platform showcasing an exclusive collection of fine art photography as NFTs on the Ethereum blockchain. Each piece is a unique edition certified with the ERC-1155 standard.

## Features

- **NFT Gallery**: Grid of artworks with detailed view for each piece
- **Wallet Simulation**: Mockup wallet connection with simulated address
- **Internationalization**: Full support for Spanish and English
- **Light/Dark Theme**: Toggle to switch between display modes
- **Elegant Design**: Minimalist aesthetic with serif typography (Playfair Display)
- **Web3 Ready**: Structure prepared for thirdweb integration

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (Playfair Display, Inter)
- **NFT Standard**: ERC-1155

## Installation

```bash
# Clone the repository
git clone https://github.com/pablofelipe01/marcelo-studio.git

# Enter the directory
cd marcelo-studio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── obra/[id]/     # NFT detail page
│   ├── globals.css    # Global styles and themes
│   ├── layout.tsx     # Main layout
│   └── page.tsx       # Home page
├── components/
│   ├── Navbar.tsx     # Navigation with toggles
│   ├── Footer.tsx     # Footer
│   ├── NFTCard.tsx    # NFT card component
│   └── WalletModal.tsx # Wallet modal
├── context/
│   ├── LanguageContext.tsx  # i18n
│   ├── ThemeContext.tsx     # Light/dark theme
│   └── WalletContext.tsx    # Wallet state
└── data/
    ├── nfts.ts           # NFT data
    └── translations.ts   # ES/EN translations
```

## Next Steps

- [ ] thirdweb SDK integration
- [ ] Real wallet connection (MetaMask, WalletConnect)
- [ ] ERC-1155 smart contract deployment
- [ ] Real purchase functionality
- [ ] Admin dashboard

## Deploy

The project is ready to deploy on [Vercel](https://vercel.com):

```bash
npm run build
```

## License

All rights reserved © 2025 Marcelo Studio
