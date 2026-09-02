# ONFUGE — Rocket-Themed Website (React + MUI)

## Setup

```bash
npm install
npm run dev
```

## What's new in this build

1. **MUI everywhere** — buttons, forms, cards, app bar all use `@mui/material` components,
   themed with your brand palette in `src/theme.js`.
2. **Rocket launch intro** (`src/components/LaunchIntro.jsx`) — plays once on load: countdown →
   ignition shake → liftoff → fades into the site.
3. **Custom rocket cursor** (`src/components/RocketCursor.jsx`) — replaces the mouse pointer with
   a glowing rocket icon that tilts toward its direction of travel and enlarges over clickable
   elements. Automatically disabled on touch devices.
4. **Video + image slots** — the Hero and Home page have `<video>` elements ready for
   `public/videos/hero-loop.mp4` and `public/videos/showreel.mp4`. Service and blog cards use
   picsum.photos placeholders — swap for real marketing photography in
   `src/components/Services.jsx`, `src/pages/Blog.jsx`, and `src/pages/About.jsx`.
5. **Contact info wired throughout** — phone (6367167465), email (onfuge@gmail.com), and founder
   (Prince Dangi) appear in the Header CTA, Contact section, and Footer.

## Brand palette (src/theme.js)

| Token       | Hex       | Used for                    |
|-------------|-----------|------------------------------|
| orange      | #DE671D   | primary CTAs, accents        |
| orangeLight | #FF8A44   | hover states, highlights     |
| blue        | #122C5F   | secondary elements           |
| blueLight   | #2E52A0   | secondary buttons, links     |
| dark        | #050816   | page background               |
| dark2       | #0A1128   | card/paper background        |

## Structure

```
src/
  theme.js                 → MUI theme with brand colors
  index.css                 → resets, cursor rules, keyframes
  components/
    Header.jsx               → MUI AppBar + Drawer nav
    Footer.jsx
    Hero.jsx                  → video background + rocket + MUI buttons
    Services.jsx              → image-backed MUI Card grid
    ContactSection.jsx        → MUI form + contact details
    RocketCursor.jsx           → custom cursor
    LaunchIntro.jsx             → rocket launch splash
  pages/
    Home.jsx, About.jsx, ServicesPage.jsx, Blog.jsx
  App.jsx, main.jsx
public/
  videos/  → add hero-loop.mp4, showreel.mp4
  images/  → add hero-poster.jpg
```
