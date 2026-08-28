import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-offwhite/90 backdrop-blur border-b border-navy-950/5">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        
<NavLink to="/" className="flex items-center gap-3">
  <img
    src="/logo.png"
    alt="KTB Solar"
    className="h-16 w-16 object-contain"
  />

  <span className="flex flex-col leading-tight">
    <span className="font-display font-bold text-xl text-navy-950">
      KTB Solar
    </span>
    <span className="text-xs text-slate tracking-wide">
      From concept to commissioning
    </span>
  </span>
</NavLink>
        <ul className="hidden md:flex items-center gap-8 font-body text-sm font-medium text-navy-900">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `transition-colors hover:text-brand-600 ${isActive ? 'text-brand-600' : ''}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <NavLink to="/contact" className="hidden md:inline-flex btn-primary !py-2.5 !px-5 text-sm">
          Request A Quote
        </NavLink>

        <button
          className="md:hidden text-navy-950"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-offwhite border-t border-navy-950/5 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className="font-body text-navy-900" onClick={() => setOpen(false)}>
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="btn-primary justify-center" onClick={() => setOpen(false)}>
            Request A Quote
          </NavLink>
        </div>
      )}
    </header>
  )
}
