import SEO from '../components/SEO'

export default function Privacy() {
  return (
    <>
      <SEO title="Privacy Policy" description="KTB Solar's privacy policy." />
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <h1 className="font-display font-bold text-navy-950 text-3xl md:text-4xl mb-8">Privacy Policy</h1>
          <p className="text-slate leading-relaxed mb-4 text-sm italic">
            {/* once legal confirmation ,,, will mention here */}
          </p>

          <div className="prose-sm text-slate space-y-6 mt-8">
            <div>
              <h2 className="font-display font-semibold text-navy-950 text-lg mb-2">Information We Collect</h2>
              <p className="leading-relaxed">
                When you submit a form on this site, we collect the information you provide, which may include your
                name, email address, phone number, company name, and details about your project.
              </p>
            </div>
            <div>
              <h2 className="font-display font-semibold text-navy-950 text-lg mb-2">How We Use Your Information</h2>
              <p className="leading-relaxed">
                We use the information you provide to respond to your inquiry, discuss potential engineering and
                design services, and, where you've consented, to send you relevant updates. We do not sell your
                information to third parties.
              </p>
            </div>
            <div>
              <h2 className="font-display font-semibold text-navy-950 text-lg mb-2">Your Consent</h2>
              <p className="leading-relaxed">
                By submitting a form on this site, you consent to KTB Solar contacting you regarding your inquiry,
                in accordance with Canada's Anti-Spam Legislation (CASL). You may withdraw consent at any time by
                contacting us directly.
              </p>
            </div>
            <div>
              <h2 className="font-display font-semibold text-navy-950 text-lg mb-2">Data Retention &amp; Security</h2>
              <p className="leading-relaxed">
                We retain personal information only as long as necessary to fulfill the purposes it was collected
                for, and take reasonable steps to protect it from unauthorized access.
              </p>
            </div>
            <div>
              <h2 className="font-display font-semibold text-navy-950 text-lg mb-2">Contact Us</h2>
              <p className="leading-relaxed">
                Questions about this policy can be directed to our team through the contact form on this site.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
