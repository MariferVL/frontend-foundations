# 📝 Profile Page — HTML & CSS Project

This project implements a **fintech profile page** for **Luka Go💰**, displaying client information, active products, account status, and professional relationships. The design follows **mobile‑first**, **a11y**, and **premium UX/UI** principles.

---

## 📚 HTML Glossary

### `<header>` and `<nav>`
- **Purpose**: Brand bar and main navigation.  
- **Usage**: Luka Go logo + navigation links + sign‑out button.

### `<main>`
- **Purpose**: Semantic container for primary content.  
- **Usage**: Profile card, products, account status, connection requests, trusted network.

### `<section>`
- **Purpose**: Group related content blocks.  
- **Usage**: Client profile, product list, account status, requests, and network.

### `<ul>` and `<li>`
- **Purpose**: Semantic lists.  
- **Usage**: Active products, financial details, pending requests, verified contacts.

### `<time>` and `<span>`
- **Purpose**: Semantic markup for dates and currency.  
- **Usage**: Next payment date, CLP balances.

---

## 🎨 CSS Glossary

### Selectors
- `.profile-card`, `.section`, `.connections`, `.network` → modular classes.  
- `header nav a:hover` → interactive navigation styling.

### Box Model
- `padding`, `border-radius`, `box-shadow` → premium card look.  
- `.account-level` → gold badge with translucent background.  
- `border-top: 4px solid var(--gold)` → fintech accent on sections.

### Display / Flex / Grid
- `display: flex` in header → balanced logo + nav + logout.  
- `display: grid` in main → responsive layout with `gap`.  
- `place-items: center` in profile hero → modern centering.  
- `flex` in lists → avatar + details + actions aligned.

### Positioning
- `@media (max-width: 600px)` → reorganizes profile for mobile.  
- `justify-content: space-between` → balanced header layout.

### Extras
- `clamp()` → fluid typography.  
- `color-scheme: light dark` → dark mode support.  
- `transition` on buttons and links → micro‑interactions.  
- `.visually-hidden` → accessible hidden headings.

---

## 🔐 Accessibility & UX

- `aria-label` and `aria-labelledby` → clear section descriptions for screen readers.  
- High contrast palette: navy + gold + white.  
- Clear hierarchy in profile card: name, badge, secondary info.  
- Buttons (`Edit profile`, `Accept`, `Decline`, `Dismiss`) with hover and focus states.  
- Semantic currency (`CLP`) and `<time>` for dates.  
- Mobile‑first layout → consistent experience across devices.  
- Empty state support for requests.

---

## 🚀 How to Test

1. Open `index.html` in your browser.  
2. Check the navigation bar, hover states, and sign‑out button.  
3. Observe the profile card hierarchy (name, badge, bio).  
4. Explore sections: products, account status, connection requests, trusted network.  
5. Resize the window to see mobile responsiveness.  
6. Use DevTools to inspect `grid`, `flex`, `clamp()`, and focus states.

---

## 🧠 Author Notes

This project is part of the [`frontend-foundations`](https://github.com/MariferVL/frontend-foundations) repo — a curated collection of microprojects to review core frontend concepts with fintech relevance.
