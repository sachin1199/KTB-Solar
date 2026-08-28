import { SunMedium, Zap, FileCheck2, BatteryCharging, Calculator, Building2, PlugZap, ClipboardCheck } from 'lucide-react'
import services from '../data/services'
import Reveal from './Reveal'


const ICON_MAP = {
  SunMedium,
  Zap,
  FileCheck2,
  BatteryCharging,
  Calculator,
  Building2,
  PlugZap,
  ClipboardCheck,
}

export default function ServicesGrid({ limit }) {
  const list = limit ? services.slice(0, limit) : services

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {list.map((s, i) => {
        const Icon = ICON_MAP[s.icon] || SunMedium
        return (
          <Reveal
            key={s.title}
            delay={(i % 3) * 100}
            className="group rounded-2xl border border-navy-950/8 bg-white p-7 transition-all hover:border-brand-400/40 hover:shadow-xl hover:shadow-brand-600/5"
          >
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-brand-600 to-sun-500 flex items-center justify-center text-white">
              <Icon size={22} strokeWidth={2.2} />
            </div>
            <h3 className="mt-5 font-display font-semibold text-navy-950 text-lg">{s.title}</h3>
            <p className="mt-2 text-slate text-sm leading-relaxed">{s.description}</p>
          </Reveal>
        )
      })}
    </div>
  )
}
