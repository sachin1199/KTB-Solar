import SEO from '../components/SEO'
import StatsGrid from '../components/StatsGrid'
import Reveal from '../components/Reveal'
import TeamGraphic from '../components/TeamGraphic'

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="KTB Solar is a Greater Toronto Area-based solar PV and BESS engineering firm, providing remote engineering support to installers, EPCs, and developers across Canada and the United States."
      />

      <section className="bg-navy-950">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <span className="eyebrow text-sun-400 justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-sun-400" />
            Who We Are
          </span>
          <h1 className="mt-4 font-display font-bold text-white text-4xl md:text-5xl leading-tight">
            Built to be the engineering team behind your team.
          </h1>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-5 gap-12 items-start">
          <Reveal className="md:col-span-3">
            <p className="text-slate text-lg leading-relaxed">
              KTB Solar is a solar PV and Battery Energy Storage System (BESS) engineering and design firm based in the Greater Toronto Area, Canada. We work exclusively as the technical design partner for solar installers, EPC contractors, and developers. We produce the permit-ready plan sets, electrical designs, and technical documentation that turn a project from an idea into something that can be built.
            </p>
            <p className="mt-6 text-slate text-lg leading-relaxed">
              Our remote engineering capabilities let our team of 20+ solar PV, BESS, electrical design, and QA/QC specialists support projects across multiple jurisdictions. We currently serve partners across Canada and the United States, without geographic limitations.
            </p>
            <p className="mt-6 text-slate text-lg leading-relaxed">
              {'Since our founding, we\u2019ve supported 100+ residential and commercial solar and energy storage projects, with a focus on precision engineering that helps our partners move through permitting and interconnection with fewer delays and fewer revisions.'}
            </p>
          </Reveal>
          <Reveal delay={150} className="md:col-span-2">
            <div className="rounded-2xl overflow-hidden border border-navy-950/8 shadow-sm aspect-[4/3]">
              <TeamGraphic />
            </div>
          </Reveal>
        </div>
      </section>

      <StatsGrid />

      <section className="bg-offwhite">
        <Reveal className="max-w-3xl mx-auto px-6 py-20">
          <h2 className="font-display font-bold text-navy-950 text-2xl md:text-3xl">How we work with you</h2>
          <p className="mt-4 text-slate leading-relaxed">
            {"We're not a competitor to installers, EPCs, or developers. We're the technical partner behind them. Our team handles the engineering complexity so yours can focus on what you do best: building. From first design to commissioning support, we stay engaged through every stage of the process."}
          </p>
        </Reveal>
      </section>
    </>
  )
}
