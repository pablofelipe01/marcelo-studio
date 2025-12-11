export type Language = "es" | "en";

export const translations = {
  es: {
    // Navbar
    connectWallet: "Conectar Wallet",
    disconnect: "Desconectar",

    // Hero
    fineArtPhotography: "Fotografía Artística",
    heroDescription: "Una colección exclusiva de fotografía artística, donde cada imagen cuenta una historia única. Piezas originales certificadas como NFTs en la blockchain de Ethereum, preservando la autenticidad y el valor de cada obra para siempre.",
    availableWorks: "Obras Disponibles",
    uniqueEditions: "Ediciones Únicas",

    // Collection
    collection: "Colección",
    collectionDescription: "Cada fotografía es una pieza única, capturada con la visión artística que define mi trabajo. Explora la colección y encuentra la obra que resuene contigo.",
    price: "Precio",
    edition: "Edición",

    // About
    aboutCollection: "Sobre la Colección",
    aboutParagraph1: "Esta colección representa años de exploración visual, capturando momentos que trascienden lo ordinario. Cada fotografía es el resultado de una búsqueda constante de la luz perfecta, la composición ideal y la emoción genuina.",
    aboutParagraph2: "Al adquirir una de estas piezas, no solo obtienes una obra de arte digital, sino que te conviertes en custodio de un momento único en el tiempo. La tecnología blockchain garantiza la autenticidad y procedencia de cada obra, creando un vínculo permanente entre el artista y el coleccionista.",
    tokenStandard: "Estándar de Token",
    preparedForThirdweb: "Preparado para integración con thirdweb",

    // Detail page
    backToCollection: "Volver a la colección",
    workNotFound: "Obra no encontrada",
    currentPrice: "Precio actual",
    buyNow: "Comprar ahora",
    connectWalletToBuy: "Conectar wallet para comprar",
    processing: "Procesando...",
    tokenDetails: "Detalles del Token",
    standard: "Estándar",
    network: "Red",
    tokenHash: "Token Hash",
    artist: "Artista",
    otherWorks: "Otras obras de la colección",

    // Purchase modal
    simulatedPurchase: "Compra Simulada",
    mockupMessage: "Este es un mockup. En producción, aquí se procesaría la transacción real con thirdweb.",
    work: "Obra",
    understood: "Entendido",

    // Wallet modal
    walletConnected: "Wallet Conectada",
    walletConnectedSuccess: "Tu wallet ha sido conectada exitosamente",
    address: "Dirección",
    balance: "Balance",
    continue: "Continuar",

    // Footer
    allRightsReserved: "Todos los derechos reservados",

    // NFT titles and descriptions
    nfts: {
      "1": {
        title: "Silencio Eterno",
        description: "Una exploración contemplativa de luz y sombra, capturada en las horas tranquilas del amanecer. Esta fotografía invita al espectador a pausar y reflexionar sobre la belleza transitoria de los momentos cotidianos. La interacción entre oscuridad e iluminación crea una atmósfera meditativa que trasciende lo ordinario."
      },
      "2": {
        title: "Poesía Urbana",
        description: "La ciudad respira en ritmos invisibles para ojos apresurados. Esta pieza captura el alma de los paisajes urbanos, donde la arquitectura se encuentra con la humanidad en una danza interminable. Cada línea y curva cuenta una historia de progreso, sueños y la silenciosa persistencia de la vida en movimiento."
      },
      "3": {
        title: "Susurros del Tiempo",
        description: "El tiempo deja su marca en los lugares más inesperados. Esta fotografía documenta la poesía de la decadencia y la renovación, donde la naturaleza reclama lo que una vez fue hecho por el hombre. Una meditación sobre la impermanencia y la hermosa inevitabilidad del cambio."
      },
      "4": {
        title: "Soledad en la Luz",
        description: "En el abrazo de la soledad, encontramos nuestro ser más verdadero. Esta obra explora el santuario de los espacios silenciosos, donde la luz se convierte en compañera y el silencio habla volúmenes. Un tributo al poder restaurador de estar a solas con los pensamientos propios."
      }
    }
  },
  en: {
    // Navbar
    connectWallet: "Connect Wallet",
    disconnect: "Disconnect",

    // Hero
    fineArtPhotography: "Fine Art Photography",
    heroDescription: "An exclusive collection of artistic photography, where each image tells a unique story. Original pieces certified as NFTs on the Ethereum blockchain, preserving the authenticity and value of each work forever.",
    availableWorks: "Available Works",
    uniqueEditions: "Unique Editions",

    // Collection
    collection: "Collection",
    collectionDescription: "Each photograph is a unique piece, captured with the artistic vision that defines my work. Explore the collection and find the work that resonates with you.",
    price: "Price",
    edition: "Edition",

    // About
    aboutCollection: "About the Collection",
    aboutParagraph1: "This collection represents years of visual exploration, capturing moments that transcend the ordinary. Each photograph is the result of a constant search for perfect light, ideal composition, and genuine emotion.",
    aboutParagraph2: "By acquiring one of these pieces, you not only get a digital work of art, but you become the custodian of a unique moment in time. Blockchain technology guarantees the authenticity and provenance of each work, creating a permanent bond between artist and collector.",
    tokenStandard: "Token Standard",
    preparedForThirdweb: "Prepared for thirdweb integration",

    // Detail page
    backToCollection: "Back to collection",
    workNotFound: "Work not found",
    currentPrice: "Current price",
    buyNow: "Buy now",
    connectWalletToBuy: "Connect wallet to buy",
    processing: "Processing...",
    tokenDetails: "Token Details",
    standard: "Standard",
    network: "Network",
    tokenHash: "Token Hash",
    artist: "Artist",
    otherWorks: "Other works from the collection",

    // Purchase modal
    simulatedPurchase: "Simulated Purchase",
    mockupMessage: "This is a mockup. In production, the actual transaction would be processed with thirdweb here.",
    work: "Work",
    understood: "Understood",

    // Wallet modal
    walletConnected: "Wallet Connected",
    walletConnectedSuccess: "Your wallet has been successfully connected",
    address: "Address",
    balance: "Balance",
    continue: "Continue",

    // Footer
    allRightsReserved: "All rights reserved",

    // NFT titles and descriptions
    nfts: {
      "1": {
        title: "Eternal Silence",
        description: "A contemplative exploration of light and shadow, captured in the quiet hours of dawn. This photograph invites the viewer to pause and reflect on the transient beauty of everyday moments. The interplay between darkness and illumination creates a meditative atmosphere that transcends the ordinary."
      },
      "2": {
        title: "Urban Poetry",
        description: "The city breathes in rhythms unseen by hurried eyes. This piece captures the soul of urban landscapes, where architecture meets humanity in an endless dance. Each line and curve tells a story of progress, dreams, and the quiet persistence of life in motion."
      },
      "3": {
        title: "Whispers of Time",
        description: "Time leaves its mark in the most unexpected places. This photograph documents the poetry of decay and renewal, where nature reclaims what was once human-made. A meditation on impermanence and the beautiful inevitability of change."
      },
      "4": {
        title: "Solitude in Light",
        description: "In the embrace of solitude, we find our truest selves. This work explores the sanctuary of quiet spaces, where light becomes a companion and silence speaks volumes. A tribute to the restorative power of being alone with one's thoughts."
      }
    }
  }
} as const;

export type TranslationKey = keyof typeof translations.es;
