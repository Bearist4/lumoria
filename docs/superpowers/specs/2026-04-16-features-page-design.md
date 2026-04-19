# Features Page — Design Spec

**Date:** 2026-04-16
**File:** `website` (Figma — `gsGxFwD5zklAy4fz1s1xRL`)
**Target node:** Features canvas (`163:105`) — replaces current flat 14-card grid
**Scope:** Figma design only. No implementation in this spec.

---

## 1. Intent

The current Features page lays 14 feature cards in a flat grid. Signal is weak: every feature competes for attention, categories are buried in eyebrow labels, and the hero card carries all the visual weight while the rest read as an index.

This redesign re-structures the page around **5 pillars**, each presented as an editorial story row with its own illustration and sub-features. The goal is to **maximize discovery** — every one of the 14 existing features must remain visible and readable, but grouped into a cognitive hierarchy that lets a visitor scan, understand the product's shape, and dive into whichever pillar matters to them.

**Approach:** alternating story rows (Layout 2 from brainstorm), not a bento or chip grid. Editorial rhythm matches Lumoria's brand voice (editorial + luminous, EB Garamond gravity, present-tense copy).

---

## 2. Page Architecture

```
Nav                  (reuse existing component)
 │
Hero header          "Every feature you need. Nothing you don't."
 │                   sub: "From creation to export — every detail of Lumoria
 │                         is built around making your memories look exactly
 │                         as good as they felt."
 │
Pillar row 1 — CREATE     (illustration L, copy R)
Pillar row 2 — ORGANISE   (illustration R, copy L)
Pillar row 3 — SHARE      (illustration L, copy R)
Pillar row 4 — REMEMBER   (illustration R, copy L)
Pillar row 5 — YOURS      (illustration L, copy R)
 │
Beta CTA section     (reuse existing)
Footer               (reuse existing)
```

- 1440 artboard, 1184 container, centered, 128px side margins.
- Each pillar row is a full-width card, ~560px tall, 96px vertical gap between.
- First row starts 80px below hero header. Final row ends 120px above beta CTA.

---

## 3. Pillar Row Anatomy

Each pillar row = single card:

- Card width: 1184px
- Card height: ~560px (auto-adjusts to content; 560 is target)
- Padding: 48px
- Corner radius: 24px
- Background: `#FFFFFF`
- Border: 1px `rgba(0,0,0,0.05)`
- Internal layout: two columns 560 / 560, gap 64px
- Alternation: odd rows illustration-left, even rows illustration-right

### 3.1 Copy column

Vertical stack, gap 32px, left-aligned, justified to top:

1. **Eyebrow** — pillar name, uppercase, Inter Semibold 11pt, tracking 0.5pt, accent color
2. **Headline** — pillar promise, Inter Medium 42pt, near-black (`#171717`), 2 lines max
3. **Body** — 3–4 sentences, Inter Regular 16pt / 24pt line height, `#525252` (gray/600)
4. **Divider** — 1px `#F5F5F5` (gray/100), top + bottom margin 8px
5. **Feature list** — vertical stack, gap 24px. Each feature:
   - Leading 7-point star bullet, 4pt, accent color
   - Title: Inter Semibold 17pt, near-black
   - Body: Inter Regular 15pt / 22pt, `#525252`

### 3.2 Illustration column (placeholder zone)

The illustration is NOT designed in Figma — each row ships with a placeholder frame containing a brief for the user to fill later.

- Frame: 560 × 464px
- Border: 1.5px dashed `#D4D4D4` (gray/300)
- Background: `#FAFAFA` (gray/50)
- Corner radius: 20px
- Center content (vertical stack, gap 12px, text-align center, max width 360px):
  - Small eyebrow label "ILLUSTRATION" — Inter Semibold 11pt, `#A3A3A3`, tracking 0.5pt
  - Short description (1–3 lines) — Inter Regular 14pt, `#737373`, line height 22pt
- Bottom-left corner of frame: dimension label "560 × 464" — Inter Regular 11pt, `#A3A3A3`, 16px padding from edges

The illustration briefs describe the intended hybrid composition (iPhone mockup + floating tickets + aurora orb) so the user can create the art later.

---

## 4. Pillar Accent Colors

Each pillar gets a single accent color. Used for eyebrow text and (later, when illustrations are created) the aurora orb tint.

| Pillar    | Accent         | Hex        |
|-----------|----------------|------------|
| Create    | Warm orange    | `#F2986A`  |
| Organise  | Rose pink      | `#F07AC0`  |
| Share     | Sky blue       | `#6EC4E8`  |
| Remember  | Warm yellow    | `#F5D46A`  |
| Yours     | Neutral black  | `#171717`  |

Rationale: the four content pillars use the four logogram-band colors (the brand's "light" palette). Yours is a meta pillar (customisation), so it steps back to neutral — the pillar where the user's own identity, not Lumoria's, provides the color.

---

## 5. Content — per pillar

### 5.1 CREATE (orange)

- **Headline:** *Tickets that look as good as they felt.*
- **Body:** Every ticket starts as a blank canvas — and ends as something you'd be proud to hang on a wall. Pick a template, set the mood, and watch your trip take shape in seconds. No design skills. No clutter. Just the feeling, rendered.
- **Features:**
  - **Ticket Creation** — Choose your template, orientation, and palette, then watch it render live as you type. Every change feels instant, intentional, and impossibly polished.
  - **Templates per type** — Flights, trains, concerts, hotels — each category has its own set of crafted templates, built around the details that actually matter for that moment.
  - **Every detail, your way** — Inner borders, outer frames, custom colors, background patterns. Fine-tune until the ticket feels like *yours*, with a live preview that never lies.
  - **Drafts that wait** — Start in the cab to the airport, finish at the gate. Lumoria saves every edit automatically, so nothing is ever lost between the idea and the final design.

**Illustration brief:** Aurora orb (orange, blurred 120px, ~60% opacity) behind top-left. iPhone mockup tilted ~-4° showing the editor screen with a ticket half-rendered on the canvas and a color picker visible. Two finished ticket stubs float beside the phone — one flight, one concert — with soft drop shadows.

### 5.2 ORGANISE (pink)

- **Headline:** *Every trip, beautifully placed.*
- **Body:** Your memories deserve more than a scroll through camera roll chaos. In Lumoria, every ticket has a home — a collection, a trip, a city pin on the map. Everything sits where you remember it, ready to revisit whenever the mood returns.
- **Features:**
  - **Collections** — Group tickets into trips, festivals, long weekends, or entire summers. Each collection tells its own quiet story — a cover image, a date range, a feeling.
  - **Pinned on the world** — Every collection drops onto an interactive world map. Zoom out to see your whole life in travel. Zoom in to relive a single afternoon.
  - **Ticket detail** — One calm screen with everything: the full ticket, its collection, a contextual menu for quick actions, and no visual noise in the way.

**Illustration brief:** Aurora orb (pink, blurred 120px, ~60% opacity) behind top-right. iPhone mockup tilted ~+4° showing the map view with pins across a world map. Three ticket stubs float as "pinned" — each tilted, connected to the map by a faint thread or pin drop shadow.

### 5.3 SHARE (sky blue)

- **Headline:** *Look great everywhere.*
- **Body:** A ticket that stays inside the app doesn't mean much. Lumoria was built for the share sheet — optimized, sized, and polished for every platform your friends already live on. Your ticket looks as good out there as it does in your hand.
- **Features:**
  - **Every format, ready** — Instagram Story, TikTok vertical, 1:1, 4:5, Facebook, X. Every export is sized perfectly — no cropping, no letterboxing, no guessing.
  - **iOS stickers** — Turn any ticket into a sticker and drop it straight into Messages, WhatsApp, or any chat app. No screenshots. No downloads. Just send.
  - **Export anywhere** — Save to camera roll, copy a link, or AirDrop to a friend. The ticket keeps its colors, shadows, and resolution — pixel-perfect every time.

**Illustration brief:** Aurora orb (sky blue, blurred 120px, ~60% opacity) behind top-left. iPhone mockup tilted ~-4° showing an Instagram Story export preview with a ticket inside. A Messages bubble sticker (ticket-as-sticker) floats beside. A TikTok vertical frame peeks behind the phone.

### 5.4 REMEMBER (warm yellow)

- **Headline:** *One year ago, today.*
- **Body:** The best part of a trip is often remembering it. Lumoria quietly keeps your memories alive — resurfacing old tickets on their anniversaries, catching you off guard in the best way. A soft tap on the shoulder from your past self.
- **Features:**
  - **Throwback** — On this day, one year ago. Lumoria brings back the ticket from that Tokyo weekend, that Lisbon sunset, that gig you almost forgot — right when you need it.
  - **Anniversary notifications** — Optional, gentle, never pushy. Turn them on and your lock screen becomes a slow reel of every place that once meant something.

**Illustration brief:** Aurora orb (warm yellow, blurred 120px, ~60% opacity) behind top-right — warm glow. iPhone mockup tilted ~+4° showing a lock screen with a throwback push notification ("1 year ago today — Tokyo"). One ticket stub floats beside, slightly faded, with a small "1Y" badge.

### 5.5 YOURS (neutral)

- **Headline:** *Make it yours.*
- **Body:** The app should feel as personal as the memories inside it. Custom icons, custom themes, custom stats — every corner of Lumoria bends toward you, not the other way around. It's a keepsake, not a SaaS dashboard.
- **Features:**
  - **Custom app icons** — Switch the home screen icon to match your wallpaper, your season, or your mood. Small detail. Big feeling.
  - **Light, dark, system** — Pick a skin and it commits beautifully — from the nav bar down to the smallest ticket shadow.
  - **Profile & stats** — Trips counted, tickets saved, countries pinned. A quiet dashboard of where you've been, without turning life into a scoreboard.
  - **Invite a friend** — A personal invite link. Send it, and unlock extra features the moment they join — a reward for making Lumoria better for both of you.

**Illustration brief:** Aurora orb using all four logogram colors blended (softest mix, blurred 120px, ~50% opacity) behind top-left. iPhone mockup tilted ~-4° showing the settings/profile screen with a custom icon picker row. Two alternate app icon variants float beside. A light + dark ticket pair floats below, showing theme sync.

---

## 6. Mapping From Existing 14-Card Grid

Every feature from the current Features page (node `163:105`) is preserved. Nothing is cut.

| Existing card             | New pillar   | Sub-feature slot         |
|---------------------------|--------------|--------------------------|
| Ticket Creation           | Create       | Ticket Creation          |
| Templates                 | Create       | Templates per type       |
| Style                     | Create       | Every detail, your way   |
| Draft                     | Create       | Drafts that wait         |
| Collections & Maps (lg)   | Organise     | Collections + Pinned     |
| Collections               | Organise     | Collections              |
| Map View                  | Organise     | Pinned on the world      |
| Ticket Detail             | Organise     | Ticket detail            |
| Export & Share (lg)       | Share        | Every format + Export    |
| iOS Stickers              | Share        | iOS stickers             |
| Social Formats            | Share        | Every format, ready      |
| Notifications             | Remember     | Anniversary notifications|
| Throwback                 | Remember     | Throwback                |
| Plans                     | Yours        | Invite a friend (merged) |
| Settings                  | Yours        | Custom app icons + modes + profile |

The two larger "Collections & Maps" and "Export & Share" cards are decomposed into their sub-features under the Organise and Share pillars. Plans is merged into the "Invite a friend" sub-feature under Yours, since the invite-to-unlock mechanic is the user-facing hook.

---

## 7. Responsive Behaviour

At viewport widths below ~900px, pillar rows collapse to a single column:

- Illustration stacks above copy, full-width.
- Card padding drops to 32px.
- Row gap drops to 64px.
- Headline reduces to 32pt.
- Body 15pt, feature title 16pt, feature body 14pt.

Mobile is not in scope for this Figma design (desktop 1440 only), but specs are noted so downstream implementation has a target.

---

## 8. Typography, Tokens, Reuse

- Fonts match existing Figma file (Inter family). Do not introduce new fonts.
- Colors match existing tokens in the Figma file where available (`gray/0`, `gray/600`, `gray/black`, and the four accent tokens).
- Nav, beta CTA, and footer components are reused as-is. Do not modify.
- Existing hero header frame (`163:114`) is reused with unchanged copy.

---

## 9. Out of Scope

- Actual illustrations inside the placeholder zones (user will create).
- Mobile/tablet breakpoints in Figma (desktop only).
- Web implementation in Next.js.
- Changes to Nav, beta CTA, or Footer.
- Dark-mode variant (desktop Figma only, light mode).

---

## 10. Acceptance

The Figma design is done when:

1. A new Features page frame exists in the `website` file, replacing or cloning from node `163:105`.
2. The hero header and existing Nav / Beta CTA / Footer are reused unchanged.
3. Five pillar row cards are laid out per section 2, alternating illustration side.
4. Each row contains the copy per section 5 and a placeholder illustration zone per section 3.2 with its brief embedded.
5. Accent colors per section 4 are applied to eyebrow + star bullet.
6. All 14 original features are present as sub-features per section 6.
