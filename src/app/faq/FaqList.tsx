'use client'

import { useState } from 'react'
import styles from './page.module.css'

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

function FaqItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={styles.item}>
      <button onClick={onToggle} className={styles.trigger}>
        <span className={styles.question}>{q}</span>
        <span className={styles.icon}>
          <span className={styles.iconBar} />
          <span className={`${styles.iconCross} ${isOpen ? styles.iconCrossOpen : ''}`} />
        </span>
      </button>
      <div className={`${styles.panel} ${isOpen ? styles.panelOpen : styles.panelClosed}`}>
        <p className={styles.answer}>{a}</p>
      </div>
    </div>
  )
}

export function FaqList() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className={styles.faqList}>
      {FAQ_ITEMS.map((item, i) => (
        <FaqItem
          key={i}
          q={item.q}
          a={item.a}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  )
}
