'use client';

import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';

type Props = {
  locale: string;
  t: any;
};

export default function Header({ locale, t }: Props) {
  return (
    <header>
      <nav className="flex items-center gap-6 text-sm">
        <Link href={`/${locale}/collections`} className="no-underline">
          {t.nav.collections}
        </Link>
        <Link href={`/${locale}/about`} className="no-underline">
          {t.nav.about}
        </Link>
        <Link href={`/${locale}/contact`} className="no-underline">
          {t.nav.contact}
        </Link>
        <LanguageSwitcher locale={locale} />
      </nav>
    </header>
  );
}
