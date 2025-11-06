import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // 静的ファイルやAPIをスキップ
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('/favicon') ||
    pathname.match(/\.(ico|jpg|jpeg|png|gif|svg|css|js)$/)
  ) {
    return
  }

  // Cookieから言語を取得（デフォルトは英語）
  const locale = req.cookies.get('NEXT_LOCALE')?.value || 'en'

  // すでに言語プレフィックス付きなら何もしない
  if (pathname.startsWith(`/${locale}`)) {
    return
  }

  // "/" の場合のみリダイレクト（無限ループ防止）
  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${locale}/home`, req.url))
  }

  // その他のパスでロケールがない場合のみ補完
  const supportedLocales = ['en', 'ja', 'zh']
  const hasLocale = supportedLocales.some((loc) => pathname.startsWith(`/${loc}/`))
  if (!hasLocale) {
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, req.url))
  }

  // デフォルトは何もせず続行
  return
}
