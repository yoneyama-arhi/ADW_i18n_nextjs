import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'ADW | Luxury Faux Florals & Botanicals',
  description: 'Inspired by natural beauty — ADW Luxury Faux Florals & Botanicals.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-white text-zinc-900">{children}</body>
    </html>
  );
}
/* ==== Apple SF Pro Font (optional local use) ==== */
@font-face {
  font-family: 'SF Pro Display';
  src: url('/fonts/SF-Pro-Display-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}

/* フォント適用（Appleシステムフォントと併用） */
body {
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Inter', sans-serif;
}
