import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ADW — Modern Luxury Faux Florals',
  description: 'Museum-grade faux arrangements for fashion-forward interiors.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ▼ ファビコンを明示指定（ここを追加） */}
        <link rel="icon" href="/favicon.ico" />
        {/* ▼ メタデータの指定（必要に応じて） */}
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${inter.className} bg-white text-zinc-900`}>
        {children}
      </body>
    </html>
  );
}
