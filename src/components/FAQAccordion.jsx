import { useState } from 'react'
import faqs from '../data/faqs'
import Reveal from './Reveal'

function FAQItem({ index, question, answer, isOpen, onToggle }) {
  const panelId = `faq-answer-${index}`
  return (
    <div className="border border-navy-950/10 rounded-2xl overflow-hidden bg-white">
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className="flex items-center gap-4">
          <span className="font-mono text-sm text-brand-600 shrink-0">{String(index + 1).padStart(2, '0')}</span>
          <span className="font-display font-semibold text-navy-950">{question}</span>
        </span>
        <svg
          width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
          className={`shrink-0 text-brand-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <p id={panelId} role="region" hidden={!isOpen} className="px-6 pb-5 text-slate text-sm leading-relaxed pl-[3.25rem]">
        {answer}
      </p>
    </div>
  )
}

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="flex flex-col gap-4">
      {faqs.map((faq, i) => (
        <Reveal key={faq.question} delay={i * 80}>
          <FAQItem
            index={i}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
          />
        </Reveal>
      ))}
    </div>
  )
}
