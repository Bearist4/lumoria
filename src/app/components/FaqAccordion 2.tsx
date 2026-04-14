'use client'

import { useState } from 'react'
import styles from './FaqAccordion.module.css'

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
    <div className={styles.list}>
      {FAQ_ITEMS.map((item, i) => (
        <div key={i} className={styles.item}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className={styles.trigger}
          >
            <span className={styles.question}>{item.q}</span>
            <span className={styles.icon}>
              <span className={styles.iconBar} />
              <span
                className={`${styles.iconCross} ${open === i ? styles.iconCrossOpen : ''}`}
              />
            </span>
          </button>
          <div className={`${styles.panel} ${open === i ? styles.panelOpen : styles.panelClosed}`}>
            <p className={styles.answer}>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
