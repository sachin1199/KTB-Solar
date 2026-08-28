import SEO from '../components/SEO'
import ServicesGrid from '../components/ServicesGrid'
import Reveal from '../components/Reveal'
import SLDGraphic from '../components/SLDGraphic'
import RooftopGraphic from '../components/RooftopGraphic'
import { Link } from 'react-router-dom'

export default function Services() {
  return (
    <>
      <SEO
        title="Services"
        description="PV system design, electrical design, permit-ready plan sets, BESS design, engineering documentation, AHJ and utility support, permitting, and QA/QC. This is KTB Solar's full engineering service scope."
      />

      <section className="relative bg-navy-950 overflow-hidden">
        <div className="absolute inset-0">
          <RooftopGraphic className="w-full h-full opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/95 to-navy-950/70" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
          <span className="eyebrow text-sun-400 justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-sun-400" />
            Our Services
          </span>
          <h1 className="mt-4 font-display font-bold text-white text-4xl md:text-5xl leading-tight">
            Engineering &amp; design, end to end.
          </h1>
          <p className="mt-5 text-slate-light text-lg max-w-2xl mx-auto leading-relaxed">
            We produce the technical packages installers, EPCs, and developers need to to permit and build. Our scope covers everything from initial design through commissioning support.
          </p>
        </div>
      </section>

      <section className="bg-offwhite">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <ServicesGrid />
        </div>
      </section>

      {/* Illustrative diagram section */}
      <section className="bg-white border-t border-navy-950/5">
        <Reveal className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <span className="eyebrow justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-600" />
              What We Deliver
            </span>
            <h2 className="mt-4 font-display font-bold text-navy-950 text-2xl md:text-3xl">
              From concept to a build-ready design
            </h2>
          </div>
          <div className="rounded-2xl border border-navy-950/8 bg-offwhite p-8">
            <SLDGraphic />
          </div>
          <p className="mt-4 text-center text-xs text-slate-light italic">
            {/* the image is not provided for the usage yet */}
          </p>
        </Reveal>
      </section>

      <section className="bg-white border-t border-navy-950/5">
        <Reveal className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="font-display font-bold text-navy-950 text-2xl md:text-3xl">
            Have a project in mind?
          </h2>
          <p className="mt-3 text-slate">Tell us about it and we'll get back to you with next steps.</p>
          <Link to="/contact" className="btn-primary mt-6 inline-flex">
            Request A Quote
          </Link>
        </Reveal>
      </section>
    </>
  )
}
