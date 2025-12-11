# Marcelo Studio

NFT Marketplace mockup para fotografía artística de Marcelo.

## Descripción

Plataforma de coleccionables digitales que presenta una colección exclusiva de fotografía artística como NFTs en la blockchain de Ethereum. Cada pieza es una edición única certificada con el estándar ERC-1155.

## Características

- **Galería NFT**: Grid de obras con vista detallada de cada pieza
- **Simulación de Wallet**: Conexión de wallet mockup con dirección simulada
- **Internacionalización**: Soporte completo para Español e Inglés
- **Tema Claro/Oscuro**: Toggle para cambiar entre modos de visualización
- **Diseño Elegante**: Estética minimalista con tipografía serif (Playfair Display)
- **Preparado para Web3**: Estructura lista para integración con thirdweb

## Stack Tecnológico

- **Framework**: Next.js 14+ (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Fuentes**: Google Fonts (Playfair Display, Inter)
- **Estándar NFT**: ERC-1155

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/pablofelipe01/marcelo-studio.git

# Entrar al directorio
cd marcelo-studio

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## Estructura del Proyecto

```
src/
├── app/
│   ├── obra/[id]/     # Página de detalle de NFT
│   ├── globals.css    # Estilos globales y temas
│   ├── layout.tsx     # Layout principal
│   └── page.tsx       # Página Home
├── components/
│   ├── Navbar.tsx     # Navegación con toggles
│   ├── Footer.tsx     # Pie de página
│   ├── NFTCard.tsx    # Card de NFT
│   └── WalletModal.tsx # Modal de wallet
├── context/
│   ├── LanguageContext.tsx  # i18n
│   ├── ThemeContext.tsx     # Tema claro/oscuro
│   └── WalletContext.tsx    # Estado de wallet
└── data/
    ├── nfts.ts           # Datos de NFTs
    └── translations.ts   # Traducciones ES/EN
```

## Próximos Pasos

- [ ] Integración con thirdweb SDK
- [ ] Conexión real de wallet (MetaMask, WalletConnect)
- [ ] Deploy de smart contract ERC-1155
- [ ] Funcionalidad de compra real
- [ ] Panel de administración

## Deploy

El proyecto está listo para deploy en [Vercel](https://vercel.com):

```bash
npm run build
```

## Licencia

Todos los derechos reservados © 2025 Marcelo Studio
