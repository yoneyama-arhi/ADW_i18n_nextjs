import Image from 'next/image'
import { getDictionary } from '@/lib/dictionary'

export default async function About({ params:{ locale } }:{ params:{locale:'en'|'ja'|'zh'} }) {
  const t = await getDictionary(locale)
  return (
    <main className="p-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
      <div>
        <h1 className="text-3xl font-bold mb-4">{t['about.title']}</h1>
        <p className="text-gray-600">{t['about.body']}</p>
      </div>
      <Image src="https://www.ndi.com/path/to/about.jpg" alt="" width={1000} height={700}/>
    </main>
  )
}
