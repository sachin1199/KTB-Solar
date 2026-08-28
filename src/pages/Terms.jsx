import SEO from '../components/SEO'

export default function Terms() {
  return (
    <>
      <SEO title="Terms & Conditions" description="KTB Solar's terms and conditions." />
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <h1 className="font-display font-bold text-navy-950 text-3xl md:text-4xl mb-8">Terms &amp; Conditions</h1>
          <p className="text-slate leading-relaxed mb-4 text-sm italic">
            {/* same not yet reviewed update will needed */}
          </p>

          <div className="prose-sm text-slate space-y-6 mt-8">
            <div>
              <h2 className="font-display font-semibold text-navy-950 text-lg mb-2">Use of This Website</h2>
              <p className="leading-relaxed">
                This website is provided for informational purposes about KTB Solar's engineering and design
                services. By using this site, you agree to use it only for lawful purposes.
              </p>
            </div>
            <div>
              <h2 className="font-display font-semibold text-navy-950 text-lg mb-2">Services</h2>
              <p className="leading-relaxed">
                Descriptions of services on this site are for general informational purposes and do not constitute
                a binding offer. Specific project scope, pricing, and deliverables are agreed upon separately with
                each client.
              </p>
            </div>
            <div>
              <h2 className="font-display font-semibold text-navy-950 text-lg mb-2">Intellectual Property</h2>
              <p className="leading-relaxed">
                All content on this site, including text, graphics, and logos, is the property of KTB Solar unless
                otherwise noted.
              </p>
            </div>
            <div>
              <h2 className="font-display font-semibold text-navy-950 text-lg mb-2">Limitation of Liability</h2>
              <p className="leading-relaxed">
                KTB Solar makes no warranties regarding the completeness or accuracy of information on this site
                and is not liable for any damages arising from its use.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
