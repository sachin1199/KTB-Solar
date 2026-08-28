import SEO from '../components/SEO'
import LeadQuiz from '../components/LeadQuiz'

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with KTB Solar to discuss your solar PV or BESS engineering and design needs."
      />

      <section className="bg-navy-950">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <span className="eyebrow text-sun-400 justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-sun-400" />
            Get In Touch
          </span>
          <h1 className="mt-4 font-display font-bold text-white text-4xl md:text-5xl leading-tight">
            Let's talk about your next project.
          </h1>
          <p className="mt-5 text-slate-light text-lg max-w-xl mx-auto leading-relaxed">
            Tell us a bit about what you're working on and our team will follow up shortly.
          </p>
        </div>
      </section>

      <section className="bg-offwhite">
        <div className="max-w-xl mx-auto px-6 py-20">
          <LeadQuiz />
        </div>
      </section>
    </>
  )
}
