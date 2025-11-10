import Image from 'next/image';
import { getDictionary } from '@/lib/dictionary';

export default async function HomePage({
  params,
}: {
  params: { locale: 'en' | 'ja' | 'zh' };
}) {
  const t = await getDictionary(params.locale);

  return (
    <section className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-4xl font-bold mb-3">
          ADW — {t.brand.tagline}
        </h1>
        <p className="text-gray-600 mb-6">{t.about.body}</p>
        <div className="flex gap-3">
          <a href={`/${params.locale}/collections`} className="btn btn-primary">
            {t.cta.shop}
          </a>
          <a href={`/${params.locale}/contact`} className="btn btn-ghost">
            {t.cta.bespoke}
          </a>
        </div>
      </div>

      {/* 右側 4枚グリッド（デモ画像） */}
      <div className="grid grid-cols-2 gap-4">
        {['1', '2', '3', '4'].map((n) => (
          <div key={n} className="rounded-xl overflow-hidden">
            <Image
              src={`/images/hero-${n}.jpg`}
              alt=""
              width={800}
              height={800}
              className="w-full h-auto object-cover"
              // 画像最適化で躓く場合は下行のコメントを外す
              // unoptimized
            />
          </div>
        ))}
      </div>

      {/* Featured */}
      <div className="md:col-span-2 mt-12">
        <h2 className="text-xl font-semibold mb-6">{t.section.featured}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 3, 4].map((n) => (
            <div key={n} className="rounded-2xl border p-4">
              <div className="aspect-square relative mb-3">
                <Image
                  src={`/images/hero-${n}.jpg`}
                  alt=""
                  fill
                  sizes="(min-width:1024px) 33vw, 100vw"
                  className="object-cover rounded-xl"
                  // unoptimized
                />
              </div>
              <div className="text-sm text-gray-500">Category</div>
              <div className="font-medium">Product Name</div>
              <a
                href={`/${params.locale}/collections`}
                className="mt-3 inline-block w-full text-center rounded-xl border py-2"
              >
                View
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


