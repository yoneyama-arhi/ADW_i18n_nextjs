// ADW_i18n_nextjs/lib/dictionary.ts

type Locale = 'en' | 'ja' | 'zh'

const dictionaries: Record<Locale, Record<string, any>> = {
  en: {
    brand: {
      tagline: 'Modern Luxury Faux Florals',
    },
    about: {
      body: 'Museum-grade faux arrangements for fashion-forward interiors.',
    },
    cta: {
      shop: 'Shop Now',
      bespoke: 'Bespoke Service',
    },
    section: {
      featured: 'Featured',
    },
  },
  ja: {
    brand: {
      tagline: 'モダン・ラグジュアリー造花',
    },
    about: {
      body: 'ファッション性の高いインテリアのための美術館グレードのアレンジメント。',
    },
    cta: {
      shop: '今すぐ購入',
      bespoke: 'オーダーメイドサービス',
    },
    section: {
      featured: '注目商品',
    },
  },
  zh: {
    brand: {
      tagline: '现代奢华仿真花艺',
    },
    about: {
      body: '为时尚室内设计打造的博物馆级仿真花艺。',
    },
    cta: {
      shop: '立即购买',
      bespoke: '定制服务',
    },
    section: {
      featured: '精选推荐',
    },
  },
}

// ✅ ページで呼び出している getDictionary() をエクスポート
export async function getDictionary(locale: Locale) {
  return dictionaries[locale]
}
