export interface NFT {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
  tokenHash: string;
  edition: string;
  standard: string;
}

export const nfts: NFT[] = [
  {
    id: "1",
    title: "Eternal Silence",
    description: "A contemplative exploration of light and shadow, captured in the quiet hours of dawn. This photograph invites the viewer to pause and reflect on the transient beauty of everyday moments. The interplay between darkness and illumination creates a meditative atmosphere that transcends the ordinary.",
    image: "/image1.jpeg",
    price: "0.85",
    tokenHash: "0x7a3b9c2d1e4f5a6b8c9d0e1f2a3b4c5d6e7f8a9b",
    edition: "1 of 1",
    standard: "ERC-1155"
  },
  {
    id: "2",
    title: "Urban Poetry",
    description: "The city breathes in rhythms unseen by hurried eyes. This piece captures the soul of urban landscapes, where architecture meets humanity in an endless dance. Each line and curve tells a story of progress, dreams, and the quiet persistence of life in motion.",
    image: "/image2.jpeg",
    price: "1.20",
    tokenHash: "0x8b4c0d3e2f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c",
    edition: "1 of 1",
    standard: "ERC-1155"
  },
  {
    id: "3",
    title: "Whispers of Time",
    description: "Time leaves its mark in the most unexpected places. This photograph documents the poetry of decay and renewal, where nature reclaims what was once human-made. A meditation on impermanence and the beautiful inevitability of change.",
    image: "/image3.jpeg",
    price: "0.95",
    tokenHash: "0x9c5d1e4f3a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d",
    edition: "1 of 1",
    standard: "ERC-1155"
  },
  {
    id: "4",
    title: "Solitude in Light",
    description: "In the embrace of solitude, we find our truest selves. This work explores the sanctuary of quiet spaces, where light becomes a companion and silence speaks volumes. A tribute to the restorative power of being alone with one's thoughts.",
    image: "/image4.jpeg",
    price: "1.50",
    tokenHash: "0xad6e2f5a4b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e",
    edition: "1 of 1",
    standard: "ERC-1155"
  }
];

export function getNFTById(id: string): NFT | undefined {
  return nfts.find(nft => nft.id === id);
}
