import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ToolJam - Simple & Free Online Tools',
  description:
    'Free online tools for everyday tasks. Age calculator, currency converter, and more. Simple, fast, and no signup required.',
  keywords: ['online tools', 'calculator', 'converter', 'productivity', 'utilities', 'free tools'],
  authors: [{ name: 'ToolJam' }],
  openGraph: {
    title: 'ToolJam - Simple & Free Online Tools',
    description: 'Free online tools for everyday tasks - simple, fast, and no signup required',
    type: 'website',
    siteName: 'ToolJam',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ToolJam - Simple & Free Online Tools',
    description: 'Free online tools for everyday tasks',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* AdSense Script - Add when ready to monetize */}
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossOrigin="anonymous"></script> */}
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
