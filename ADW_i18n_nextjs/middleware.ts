import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // 1) 静的ファイルやAPIは対象外
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('/favicon') ||
    pathname.match(/\.(ico|jpg|jpeg|png|gif|svg|css|js)$/)
  ) {
    return
  }

  // 2) Cookie から言語取得（デフォルトは en）
  const locale = req.cookies.get('NEXT_LOCALE')?.value || 'en'
  const supportedLocales = ['en', 'ja', 'zh'] as const
  const hasLocalePrefix = supportedLocales.some((loc) =>
    pathname === `/${loc}` || pathname.startsWith(`/${loc}/`)
  )

  // 3) すでにロケール付きなら、そのまま
  if (hasLocalePrefix) {
    // `/en` のように末尾スラッシュなしで来たら `/en/home` に寄せる
    if (supportedLocales.some((loc) => pathname === `/${loc}`)) {
      return NextResponse.redirect(new URL(`/${locale}/home`, req.url))
    }
    return
  }

  // 4) ルート `/` は 1 回だけ `/[locale]/home` に
  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${locale}/home`, req.url))
  }

  // 5) そのほかロケール無しのパスは `/[locale]${pathname}` に補完（重複スラッシュ防止）
  const safePath = pathname.startsWith('/') ? pathname : `/${pathname}`
  return NextResponse.redirect(new URL(`/${locale}${safePath}`, req.url))
}
