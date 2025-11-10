import '../globals.css';
import Header from '../components/Header';
import type { ReactNode } from 'react';

export default function LocaleLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {/* ここでヘッダーを表示 */}
        <Header />
        <main className="max-w-6xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
