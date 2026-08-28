import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import StatsGrid from '../components/StatsGrid'
import ServicesGrid from '../components/ServicesGrid'
import FAQAccordion from '../components/FAQAccordion'
import EngineeringGraphic from '../components/EngineeringGraphic'
import Reveal from '../components/Reveal'
import organizationSchema from '../data/schema'

export default function Home() {
  return (
    <>
      <SEO
        title="Solar PV & BESS Engineering Partner"
        description="KTB Solar delivers permit-ready PV and BESS engineering packages for installers, EPCs, and developers across Canada and the United States."
        schema={organizationSchema}
      />

      {/* Hero */}
      <section className="relative bg-navy-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="eyebrow text-sun-400">
              <span className="w-1.5 h-1.5 rounded-full bg-sun-400" />
              From concept to commissioning
            </span>
            <h1 className="mt-5 font-display font-bold text-white text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight">
              The engineering behind
              <br />
              <span className="text-brand-400">every solar build.</span>
            </h1>
            <p className="mt-6 text-slate-light text-lg max-w-md leading-relaxed">
              {'KTB Solar designs the permit-ready PV and BESS engineering packages that installers, EPCs, and developers rely on to build with confidence. We serve partners across Canada and the United States.'}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Request A Quote
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 text-white font-display font-semibold px-6 py-3 transition-colors hover:bg-white/10"
              >
                View Services
              </Link>
            </div>
          </div>
          <div className="relative h-[320px] md:h-[420px]">
            <EngineeringGraphic />
          </div>
        </div>
      </section>

      <StatsGrid />

      {/* Services preview */}
      <section className="bg-offwhite">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-600" />
              What We Do
            </span>
            <h2 className="mt-4 font-display font-bold text-navy-950 text-3xl md:text-4xl leading-tight">
              Precision engineering, built for your build.
            </h2>
            <p className="mt-4 text-slate leading-relaxed">
              From initial design to commissioning support, we produce the technical packages your team needs to permit and build accurately, and on time.
            </p>
          </Reveal>
          <div className="mt-14">
            <ServicesGrid limit={3} />
          </div>
          <div className="mt-10">
            <Link to="/services" className="btn-secondary">
              See All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Positioning strip */}
      <section className="bg-gradient-to-r from-brand-600 to-navy-950 py-14">
        <Reveal className="max-w-4xl mx-auto px-6 text-center" as="div">
          <p className="font-display font-semibold text-white text-2xl md:text-3xl leading-snug">
            {"We're the technical partner installers, EPCs, and developers trust to get the engineering right, every time."}
          </p>
        </Reveal>
      </section>

      {/* FAQ preview */}
      <section className="bg-offwhite">
        <div className="max-w-3xl mx-auto px-6 py-24">
          <Reveal>
            <span className="eyebrow">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-600" />
              Ask Us Anything
            </span>
            <h2 className="mt-4 font-display font-bold text-navy-950 text-3xl md:text-4xl">Frequently Asked Questions</h2>
          </Reveal>
          <div className="mt-10">
            <FAQAccordion />
          </div>
        </div>
      </section>
    </>
  )
}
