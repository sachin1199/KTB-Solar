const stats = [
  { value: '100+', label: 'Projects Completed' },
  { value: '20+', label: 'Expert Team Members' },
  { value: '2', label: 'Markets Served (Canada & US)' },
  { value: 'Res + Com', label: 'Residential & Commercial' },
]

import Reveal from './Reveal'

export default function StatsGrid() {
  return (
    <section className="bg-white border-y border-navy-950/5">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 100} className="text-center">
            <div className="font-mono text-3xl md:text-4xl font-semibold text-brand-600">{s.value}</div>
            <p className="mt-2 text-slate text-sm">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
