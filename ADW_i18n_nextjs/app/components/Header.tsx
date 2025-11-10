'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const pathname = usePathname() || '/';
  const segs = pathname.split('/').filter(Boolean);
  const currentLocale = ['en', 'ja', 'zh'].includes(segs[0]) ? segs[0] : 'en';

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-zinc-200">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-baseline gap-2">
          <Link href={`/${currentLocale}/home`} className="font-semibold tracking-wide">
            ADW
          </Link>
          <span className="hidden sm:inline text-xs text-zinc-500 tracking-widest">
            LUXURY FAUX FLORALS & BOTANICALS
          </span>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] tracking-wide">
          <Link
            href={`/${currentLocale}/collections`}
            className="text-zinc-700 hover:text-black relative after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:scale-x-0 hover:after:scale-x-100 after:bg-zinc-900 after:origin-left after:transition-transform"
          >
            Collections
          </Link>
          <Link
            href={`/${currentLocale}/about`}
            className="text-zinc-700 hover:text-black relative after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:scale-x-0 hover:after:scale-x-100 after:bg-zinc-900 after:origin-left after:transition-transform"
          >
            About
          </Link>
          <Link
            href={`/${currentLocale}/contact`}
            className="text-zinc-700 hover:text-black relative after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:scale-x-0 hover:after:scale-x-100 after:bg-zinc-900 after:origin-left after:transition-transform"
          >
            Contact
          </Link>
        </nav>

        {/* Lang */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
