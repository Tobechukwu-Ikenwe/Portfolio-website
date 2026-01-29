# Portfolio (Next.js)

One-page portfolio built with **Next.js 14**, **Tailwind CSS**, and **Lucide React** icons. Dark-mode UI with Hero, Projects grid, Experience timeline, and Contact form.

## Setup

From the **Portfolio website** directory (this folder):

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** (custom dark palette, animations)
- **Lucide React** (icons)
- **next/image** for project placeholders (placehold.co allowed in `next.config.js`)

## Structure

- `app/page.js` – Single page composing all sections
- `app/layout.js` – Root layout, Inter font, dark theme
- `app/globals.css` – Tailwind + base styles
- `components/Nav.jsx` – Fixed nav with mobile menu
- `components/Hero.jsx` – Hero + “Hire Me” CTA
- `components/Projects.jsx` – 6-project grid with placeholder images
- `components/Experience.jsx` – Vertical timeline
- `components/Contact.jsx` – Contact form (client-side submit; wire to your backend)

Replace placeholder project data, images, and experience entries with your own. Connect the contact form to an API or service (e.g. Formspree, Resend) when ready.
