// app/components/LanguageSwitcher.tsx
'use client';

import { useRouter } from 'next/navigation';

type Props = { locale: string };

const ITEMS: Array<[string, string]> = [
  ['en', 'English'],
  ['ja', '日本語'],
  ['zh', '中文'],
];

export default function LanguageSwitcher({ locale }: Props) {
  const router = useRouter();

  const setLang = (loc: string) => {
    // 1年保持の Cookie をセット
    document.cookie = `NEXT_LOCALE=${loc}; path=/; max-age=${60 * 60 * 24 * 365}`;
    // 必要な場所へ遷移（/xx/home）
    router.replace(`/${loc}/home`);
    router.refresh();
  };

  return (
    <div className="flex items-center gap-2">
      {ITEMS.map(([loc, label]) => (
        <button
          key={loc}
          type="button"
          onClick={() => setLang(loc)}
          className={loc === locale ? 'no-underline opacity-60' : 'no-underline'}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
