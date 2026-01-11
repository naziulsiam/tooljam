# 🛠️ ToolJam - Simple & Free Online Tools

A clean, modern collection of free online tools built with Next.js 14, TypeScript, and Tailwind CSS.

## ✨ Features

- **Age Calculator** - Calculate age with 3 modes (Birth→Today, Birth→Custom, Date Range)
- **Currency Converter** - Live exchange rates with real-time conversion
- **Light & Airy UI** - Clean, modern design with soft colors
- **Dark Mode** - Smooth theme switching
- **Legal Pages** - About, Contact, Privacy Policy, Terms of Service
- **AdSense Ready** - Monetization-ready structure
- **SEO Optimized** - Proper metadata for all pages
- **Fully Responsive** - Works on all devices
- **Production Ready** - Optimized for Vercel deployment

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd tooljam
```

2. Install dependencies
```bash
npm install
```

3. Create environment file
```bash
cp .env.local.example .env.local
```

4. Configure Currency API:
   - Get your FREE API key from [ExchangeRate-API](https://www.exchangerate-api.com/)
   - Open `.env.local` and add your credentials:
```env
NEXT_PUBLIC_CURRENCY_API_URL=https://v6.exchangerate-api.com/v6
NEXT_PUBLIC_CURRENCY_API_KEY=your_actual_api_key_here
```

5. Run development server
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure
````
tooljam/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with SEO
│   ├── page.tsx             # Home page
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── privacy-policy/      # Privacy policy
│   ├── terms/               # Terms of service
│   └── tools/               # Tools pages
├── components/              # React components
│   ├── age-calculator/     # Age calculator components
│   ├── AdSlot.tsx          # AdSense placeholder
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ToolCard.tsx
│   ├── ThemeToggle.tsx
│   └── Hero.tsx
├── lib/                     # Utility functions
│   ├── age.ts              # Age calculation logic
│   ├── currency.ts         # Currency API (env vars)
│   └── constants.ts        # App constants
├── hooks/                   # Custom React hooks
│   ├── useCurrency.ts
│   └── useTheme.ts
├── types/                   # TypeScript types
│   └── index.ts
└── styles/                  # Global styles
    └── globals.css
    
Design System
Color Palette

Primary: Amber/Yellow (primary-400 to primary-600)
Background: Soft off-white (light-200)
Cards: White with subtle shadows
Dark Mode: Warm dark tones
Components

Rounded cards with soft shadows
Subtle hover effects
Smooth animations
Accessible focus states


