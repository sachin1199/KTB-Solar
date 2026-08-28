
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-light">
      <div className="max-w-7xl mx-auto px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="KTB Solar"
              className="h-12 w-12 object-contain"
            />
            <span className="font-display font-bold text-lg text-white">
              KTB Solar
            </span>
          </div>

          <p className="mt-3 text-sm text-brand-400 font-medium">
            From concept to commissioning
          </p>

          <p className="mt-4 text-sm max-w-xs leading-relaxed">
            Solar PV and BESS engineering and design. The technical foundation
            installers, EPCs, and developers build on.
          </p>
        </div>

        {/* Services */}
        <div>
  <h4 className="font-display font-semibold text-white mb-4">Services</h4>

  <ul className="flex flex-col gap-2 text-sm">
    <li>
      <Link to="/contact" className="hover:text-brand-400 transition-colors">
        PV System Design
      </Link>
    </li>

    <li>
      <Link to="/contact" className="hover:text-brand-400 transition-colors">
        Electrical Design
      </Link>
    </li>

    <li>
      <Link to="/contact" className="hover:text-brand-400 transition-colors">
        BESS Design
      </Link>
    </li>

    <li>
      <Link to="/contact" className="hover:text-brand-400 transition-colors">
        Permit-Ready Plans
      </Link>
    </li>

    <li>
      <Link to="/contact" className="hover:text-brand-400 transition-colors">
        Engineering & Documentation
      </Link>
    </li>

    <li>
      <Link to="/contact" className="hover:text-brand-400 transition-colors">
        Professional Engineering
      </Link>
    </li>
  </ul>
</div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-semibold text-white mb-4">
            Quick Links
          </h4>

          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <Link
                to="/about"
                className="hover:text-brand-400 transition-colors"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                className="hover:text-brand-400 transition-colors"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                to="/faq"
                className="hover:text-brand-400 transition-colors"
              >
                FAQ
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-brand-400 transition-colors"
              >
                Contact
              </Link>
            </li>

            <li>
              <Link
                to="/privacy"
                className="hover:text-brand-400 transition-colors"
              >
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link
                to="/terms"
                className="hover:text-brand-400 transition-colors"
              >
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold text-white mb-4">
            Contact
          </h4>

          <ul className="flex flex-col gap-3 text-sm">

            <li>
              <span className="block text-slate-light/60 text-xs uppercase tracking-wide mb-1">
                Address
              </span>
             <a
        href="https://www.google.com/maps/search/?api=1&query=Greater+Toronto+Area+Canada"
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-1 hover:text-brand-400 transition-colors"
      >
        Greater Toronto Area, Canada
      </a>
            </li>

            <li>
              <span className="block text-slate-light/60 text-xs uppercase tracking-wide mb-1">
                Email
              </span>
              <a
                href="mailto:Kptcaps@gmail.com"
                className="hover:text-brand-400 transition-colors"
              >
                Kptcaps@gmail.com
              </a>
            </li>

            <li>
              <span className="block text-slate-light/60 text-xs uppercase tracking-wide mb-1">
                Phone
              </span>
              <a
                href="tel:+16472103500"
                className="hover:text-brand-400 transition-colors"
              >
                +1 (647) 210-3500
              </a>
            </li>

          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-6 text-center text-xs text-slate-light/70">
        © {new Date().getFullYear()} KTB Solar. All rights reserved.
      </div>
    </footer>
  )
}