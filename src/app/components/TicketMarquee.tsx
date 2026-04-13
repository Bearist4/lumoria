'use client'

import Image from 'next/image'
import styles from './TicketMarquee.module.css'

// Ticket metadata: [filename, width, height]
const TICKETS: [string, number, number][] = [
  ['Ticket 01.png', 988, 586],
  ['Ticket 02.png', 942, 538],
  ['Ticket 03.png', 942, 538],
  ['Ticket 04.png', 538, 942],
  ['Ticket 05.png', 988, 585],
  ['Ticket 06.png', 942, 538],
  ['Ticket 07.png', 942, 538],
  ['Ticket 08.png', 538, 942],
  ['Ticket 09.png', 942, 538],
]

// All tickets share the same long-side display length so portrait and
// landscape tickets feel the same visual size — just oriented differently.
const DISPLAY_LONG_SIDE = 470

export function TicketMarquee() {
  const items = [
    ...TICKETS.map((t, i) => ({ ticket: t, key: `a-${i}` })),
    ...TICKETS.map((t, i) => ({ ticket: t, key: `b-${i}` })),
  ]

  // Strip height = tallest item (a portrait ticket at DISPLAY_LONG_SIDE)
  const stripHeight = DISPLAY_LONG_SIDE

  return (
    <div className={styles.wrapper} style={{ height: stripHeight }}>

      <div className={styles.strip}>
        {items.map(({ ticket: [name, w, h], key }) => {
          const longSide = Math.max(w, h)
          const scale = DISPLAY_LONG_SIDE / longSide
          const displayW = Math.round(w * scale)
          const displayH = Math.round(h * scale)
          return (
            <div key={key} className={styles.ticket} style={{ width: displayW, height: displayH }}>
              <Image
                src={`/assets/tickets/${encodeURIComponent(name)}`}
                alt="Sample Lumoria ticket"
                width={w}
                height={h}
                className={styles.ticketImage}
                draggable={false}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
