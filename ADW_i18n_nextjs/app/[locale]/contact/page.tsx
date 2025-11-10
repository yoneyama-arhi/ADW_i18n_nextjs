import { getDictionary } from '@/lib/dictionary';

export default async function ContactPage({
  params,
}: {
  params: { locale: 'en' | 'ja' | 'zh' };
}) {
  const t = await getDictionary(params.locale);

  return (
    <section className="max-w-xl">
      <h1 className="text-3xl font-bold mb-3">Contact</h1>
      <p className="text-gray-700 mb-6">{t.about.body}</p>
      <a
        href={`mailto:info@example.com`}
        className="btn btn-primary inline-block"
      >
        {t.cta.bespoke}
      </a>
    </section>
  );
}
