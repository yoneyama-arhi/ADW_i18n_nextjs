import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';  // ← これを追加！

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 border-b">
      <div className="text-xl font-bold">
        <Link href="/">ADW</Link>
      </div>
      <nav className="flex gap-4">
        <Link href="/en/collections">Collections</Link>
        <Link href="/en/about">About</Link>
        <Link href="/en/contact">Contact</Link>
      </nav>
      <LanguageSwitcher /> {/* ← これをここに追加 */}
    </header>
  );
}

