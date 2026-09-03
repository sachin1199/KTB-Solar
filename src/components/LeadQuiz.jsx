import { useState } from 'react'


const FORM_ENDPOINT = 'https://formspree.io/f/xrpgkvbj'


const PHONE_PATTERN = '^[0-9+\\-\\s()]{7,20}$'

const initialData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  role: '',
  projectType: '',
  volume: '',
  bottleneck: '',
}


function trackEvent(name, params = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', name, params)
  }
}

export default function LeadQuiz() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState(initialData)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const totalSteps = 3

  function update(field, value) {
    setData((d) => ({ ...d, [field]: value }))
  }

  function next(e) {
    e.preventDefault()
    trackEvent('lead_quiz_step_complete', { step })
    setStep((s) => Math.min(s + 1, totalSteps))
  }

  function back() {
    setStep((s) => Math.max(s - 1, 1))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('success')
        trackEvent('lead_quiz_submit_success', { role: data.role, projectType: data.projectType })
      } else {
        setStatus('error')
        trackEvent('lead_quiz_submit_error')
      }
    } catch {
      setStatus('error')
      trackEvent('lead_quiz_submit_error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl bg-brand-600/5 border border-brand-600/20 p-8 text-center">
        <p className="font-display font-semibold text-navy-950 text-lg">{'Thanks, your message is in.'}</p>
        <p className="mt-1 text-slate text-sm">{'We reply within 1 business day.'}</p>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-navy-950/10 bg-white p-8 shadow-sm">
      
      <div className="flex flex-col items-center text-center mb-8">
  <img
    src="/logo.png"
    alt="KTB Solar"
    className="h-16 w-16 object-contain"
  />

  <div className="mt-2">
    <div className="font-display font-bold text-xl text-navy-950">
      KTB Solar
    </div>

    <div className="text-xs text-slate tracking-wide">
      From concept to commissioning
    </div>
  </div>
</div>
      {/* progress indicator */}
      <div className="flex items-center gap-2 mb-8">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div key={i} className="flex-1 h-1.5 rounded-full bg-navy-950/8 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-brand-600 to-brand-400 transition-all duration-300"
              style={{ width: i + 1 <= step ? '100%' : '0%' }}
            />
          </div>
        ))}
      </div>
      <p className="text-xs font-mono text-slate mb-6">Step {step} of {totalSteps}</p>

      {step === 1 && (
        <form onSubmit={next} className="flex flex-col gap-5">
          <h3 className="font-display font-semibold text-navy-950 text-xl">Let's get started</h3>
          <input
            className="input-field"
            type="text"
            placeholder="Your Name"
            required
            value={data.name}
            onChange={(e) => update('name', e.target.value)}
          />
          <input
            className="input-field"
            type="email"
            placeholder="Email Address"
            required
            value={data.email}
            onChange={(e) => update('email', e.target.value)}
          />
          <button type="submit" className="btn-primary justify-center mt-2">
            Continue
          </button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={next} className="flex flex-col gap-5">
          <h3 className="font-display font-semibold text-navy-950 text-xl">A bit about your company</h3>
          <input
            className="input-field"
            type="tel"
            placeholder="Phone Number"
            required
            pattern={PHONE_PATTERN}
            title="Enter a valid phone number (digits, spaces, +, -, ( ) only)"
            value={data.phone}
            onChange={(e) => update('phone', e.target.value)}
          />
          <input
            className="input-field"
            type="text"
            placeholder="Company Name"
            required
            value={data.company}
            onChange={(e) => update('company', e.target.value)}
          />
          <div className="flex gap-3 mt-2">
            <button type="button" onClick={back} className="btn-secondary">
              Back
            </button>
            <button type="submit" className="btn-primary flex-1 justify-center">
              Continue
            </button>
          </div>
        </form>
      )}

      {step === 3 && (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <h3 className="font-display font-semibold text-navy-950 text-xl">Almost done</h3>

          <select
            className="input-field"
            required
            value={data.role}
            onChange={(e) => update('role', e.target.value)}
          >
            <option value="" disabled>Which best describes you?</option>
            <option value="Installer">Installer</option>
            <option value="EPC">EPC Contractor</option>
            <option value="Developer">Developer</option>
            <option value="Other">Other</option>
          </select>

          <select
            className="input-field"
            required
            value={data.projectType}
            onChange={(e) => update('projectType', e.target.value)}
          >
            <option value="" disabled>Project type</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Both">Both</option>
          </select>

          <input
            className="input-field"
            type="text"
            placeholder="Typical project volume (e.g. 10 systems/month)"
            value={data.volume}
            onChange={(e) => update('volume', e.target.value)}
          />

          <textarea
            className="input-field min-h-[90px] resize-y"
            placeholder="What's your biggest current bottleneck? (permitting delays, engineering capacity, turnaround time...)"
            value={data.bottleneck}
            onChange={(e) => update('bottleneck', e.target.value)}
          />

          {status === 'error' && (
            <p className="text-sm text-red-600">{'Something went wrong. Please try again in a moment.'}</p>
          )}

          <p className="text-xs text-slate-light">{'We reply within 1 business day.'}</p>

          <div className="flex gap-3 mt-2">
            <button type="button" onClick={back} className="btn-secondary">
              Back
            </button>
            <button type="submit" disabled={status === 'submitting'} className="btn-primary flex-1 justify-center disabled:opacity-60">
              {status === 'submitting' ? 'Submitting…' : 'Submit'}
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
