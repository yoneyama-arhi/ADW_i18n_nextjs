'use client'
import { useRouter, usePathname } from 'next/navigation'
const LOCALES = ['en','ja','zh'] as const
type L = typeof LOCALES[number]

export default function LanguageSwitcher() {
  const r = useRouter(); const p = usePathname()
  const go = (l:L) => {
    document.cookie = `NEXT_LOCALE=${l}; Path=/; Max-Age=31536000; SameSite=Lax`
    const seg = p.split('/').filter(Boolean)
    if (seg[0] && LOCALES.includes(seg[0] as L)) seg[0] = l; else seg.unshift(l)
    r.push('/' + seg.join('/'))
  }
  return (
    <div className="flex gap-2">
      {LOCALES.map(l => <button key={l} onClick={()=>go(l)} className="px-2 py-1 border rounded">{l.toUpperCase()}</button>)}
    </div>
  )
}
