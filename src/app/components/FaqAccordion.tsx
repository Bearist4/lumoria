'use client'

import { useState } from 'react'

const FAQ_ITEMS = [
  {
    q: 'Is Lumoria free?',
    a: 'The beta is completely free and includes the full product — no paywalls, no feature limits. Pricing for the public release will be 4.99€/month and 16.99€/year. Beta testers will receive 1 month free when the product launches publicly.',
  },
  {
    q: 'How long will I wait?',
    a: "We're moving quickly. Once you're on the list, you'll receive a TestFlight invite as slots open up. We'll keep you posted.",
  },
  {
    q: 'What devices does Lumoria support?',
    a: 'Lumoria is an iOS app, available on iPhone and iPad running iOS 17 or later.',
  },
  {
    q: 'How do I give feedback?',
    a: "There's a built-in feedback option inside the app. You can also reach us directly at hello@lumoria.com — we read every message.",
  },
  {
    q: 'Will my tickets carry over after launch?',
    a: 'Yes. Everything you create during the beta is yours. Your tickets, collections, and settings will all carry over to the public release.',
  },
]

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="w-full max-w-2xl">
      {FAQ_ITEMS.map((item, i) => (
        <div
          key={i}
          className="border-t border-black/5"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-start justify-between gap-6 py-6 text-left"
          >
            <span className="text-[18px] font-semibold text-black leading-snug">
              {item.q}
            </span>
            <span className="shrink-0 mt-1 relative size-4">
              <span className="absolute inset-y-[7px] left-0 right-0 h-[1.5px] bg-black" />
              <span
                className={`absolute inset-x-[7px] top-0 bottom-0 w-[1.5px] bg-black transition-all duration-200 ${
                  open === i ? 'opacity-0 rotate-90' : 'opacity-100'
                }`}
              />
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-200 ${
              open === i ? 'max-h-48 pb-6' : 'max-h-0'
            }`}
          >
            <p className="text-[16px] leading-relaxed text-[#6b7380]">{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
