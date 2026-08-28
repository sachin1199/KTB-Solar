import SEO from '../components/SEO'
import FAQAccordion from '../components/FAQAccordion'
import faqs from '../data/faqs'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.answer,
    },
  })),
}

export default function FAQPage() {
  return (
    <>
      <SEO
        title="FAQ"
        description="Answers to common questions about KTB Solar's engineering and design services for solar PV and BESS projects."
        schema={faqSchema}
      />

      <section className="bg-navy-950">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <span className="eyebrow text-sun-400 justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-sun-400" />
            Ask Us Anything
          </span>
          <h1 className="mt-4 font-display font-bold text-white text-4xl md:text-5xl">
            Frequently Asked Questions
          </h1>
        </div>
      </section>

      <section className="bg-offwhite">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <FAQAccordion />
        </div>
      </section>
    </>
  )
}
