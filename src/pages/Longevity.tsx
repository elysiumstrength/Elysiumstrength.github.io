import { useMemo, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './Longevity.css';


type FAQItem = {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  { question: 'TODO: FAQ Q1', answer: 'TODO: FAQ A1' },
  { question: 'TODO: FAQ Q2', answer: 'TODO: FAQ A2' },
  { question: 'TODO: FAQ Q3', answer: 'TODO: FAQ A3' },
  { question: 'TODO: FAQ Q4', answer: 'TODO: FAQ A4' },
  { question: 'TODO: FAQ Q5', answer: 'TODO: FAQ A5' },
  { question: 'TODO: FAQ Q6', answer: 'TODO: FAQ A6' },
  { question: 'TODO: FAQ Q7', answer: 'TODO: FAQ A7' },
  { question: 'TODO: FAQ Q8', answer: 'TODO: FAQ A8' },
]

export default function Longevity() {
  //const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqJsonLd = useMemo(() => {
    const data = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    }
    return JSON.stringify(data)
  }, [])

  const title = 'TODO: Page Title — Elysium Strength & Wellness'
  const description =
    'TODO: Meta description for Longevity training in Goleta at Elysium Strength & Wellness.'
  const canonical = 'https://your-domain.com/longevity-training-goleta'

  // Add meta tags and JSON-LD without Helmet
  useEffect(() => {
    const setMeta = (attr: 'name' | 'property', key: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    const setLink = (rel: string, href: string) => {
      let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
      if (!el) {
        el = document.createElement('link')
        el.setAttribute('rel', rel)
        document.head.appendChild(el)
      }
      el.setAttribute('href', href)
    }

    document.title = title
    setMeta('name', 'description', description)
    setLink('canonical', canonical)

    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', canonical)
    setMeta('property', 'og:image', 'https://your-domain.com/og/longevity.jpg')

    setMeta('name', 'twitter:card', 'summary_large_image')

    const scriptId = 'faq-jsonld'
    let script = document.getElementById(scriptId) as HTMLScriptElement | null
    if (!script) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      script.id = scriptId
      document.head.appendChild(script)
    }
    script.text = faqJsonLd

    return () => {
      const s = document.getElementById(scriptId)
      if (s?.parentNode) s.parentNode.removeChild(s)
    }
  }, [title, description, canonical, faqJsonLd])

  return (
    <>
      {/* Hero */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
                TODO: Hero Title (h1)
              </h1>
              <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700">
                TODO: Hero subtitle/lead paragraph. Include the exact copy.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-6 py-3 text-sm font-semibold hover:bg-gray-800 transition"
                  href="https://elysium.pushpress.com/landing/appointments/apptpkg_b7bc861cb2f843e908da036e2ee4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Free Consult
                </a>
                <Link
                  to="/trainers"
                  className="inline-flex items-center justify-center rounded-md border border-gray-300 text-gray-900 px-6 py-3 text-sm font-semibold hover:bg-gray-100 transition"
                >
                  Meet Our Trainers
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/placeholder-hero.jpg"
                alt="Adults training for strength and longevity at Elysium Strength & Wellness in Goleta"
                className="w-full h-64 sm:h-80 md:h-full object-cover rounded-xl shadow-lg"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Exercise */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Why Exercise</h2>
          <p className="mt-4 text-gray-700">
            TODO: Section copy — include the exact text from the brief.
          </p>
          <div className="mt-6 rounded-xl bg-gray-100 p-4 sm:p-6">
            <h3 className="text-lg font-semibold text-gray-900">💡 Did You Know?</h3>
            <p className="mt-2 text-gray-700">
              TODO: Did You Know content exactly as written.
            </p>
          </div>
          <img
            src="/images/placeholder-why-exercise.jpg"
            alt="Example of evidence-based exercise supporting healthy aging"
            className="mt-8 w-full h-64 object-cover rounded-xl"
            loading="lazy"
          />
        </div>
      </section>

      {/* Functional Strength */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Functional Strength</h2>
          <p className="mt-4 text-gray-700">
            TODO: Section copy — include the exact text from the brief.
          </p>
          <div className="mt-6 rounded-xl bg-gray-100 p-4 sm:p-6">
            <h3 className="text-lg font-semibold text-gray-900">💡 Did You Know?</h3>
            <p className="mt-2 text-gray-700">TODO: Did You Know content.</p>
          </div>
          <img
            src="/images/placeholder-functional.jpg"
            alt="Functional strength training movements to support daily life"
            className="mt-8 w-full h-64 object-cover rounded-xl"
            loading="lazy"
          />
        </div>
      </section>

      {/* Bone Density */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Bone Density</h2>
          <p className="mt-4 text-gray-700">TODO: Section copy.</p>
          <div className="mt-6 rounded-xl bg-gray-100 p-4 sm:p-6">
            <h3 className="text-lg font-semibold text-gray-900">💡 Did You Know?</h3>
            <p className="mt-2 text-gray-700">TODO: Did You Know content.</p>
          </div>
          <img
            src="/images/placeholder-bone-density.jpg"
            alt="Resistance training to improve bone mineral density"
            className="mt-8 w-full h-64 object-cover rounded-xl"
            loading="lazy"
          />
        </div>
      </section>

      {/* Menopause Support */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Menopause Support</h2>
          <p className="mt-4 text-gray-700">TODO: Section copy.</p>
          <div className="mt-6 rounded-xl bg-gray-100 p-4 sm:p-6" role="note" aria-label="Did You Know">
            <h3 className="text-lg font-semibold text-gray-900">💡 Did You Know?</h3>
            <p className="mt-2 text-gray-700">TODO: Did You Know content.</p>
          </div>
          <img
            src="/images/placeholder-menopause.jpg"
            alt="Supportive strength training for women at Elysium Strength & Wellness"
            className="mt-8 w-full h-64 object-cover rounded-xl"
            loading="lazy"
            />
                    </div>
                </section>
                </>
            )
            }
