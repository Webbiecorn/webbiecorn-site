# webbiecorn-site — AI Context (SSOT)

> Aangemaakt: 16 maart 2026 — Bijgewerkt: 16 maart 2026

## Project

| Veld         | Waarde                                                                                     |
| ------------ | ------------------------------------------------------------------------------------------ |
| Naam         | webbiecorn-site                                                                            |
| Type         | Statische website (plain HTML/CSS/JS)                                                      |
| Beschrijving | De officiële brochuresite van Webbiecorn. Gepubliceerd op webbiecorn.nl + webbiecorn.com.  |
| Doelgroep    | Potentiële klanten, partners, creatieve professionals die een rebelse studio zoeken.       |
| Taal         | Nederlands                                                                                 |
| Hosting      | Hostinger — upload via File Manager naar `public_html` (lege HTML/PHP optie, NIET Node.js) |
| Domeinen     | webbiecorn.nl + webbiecorn.com → zelfde `public_html` map                                  |
| Locatie      | `/home/kevin/Webbiecorn-bedrijf/WEBBIECORN-SSOT/webbiecorn-site/`                          |

---

## Bestanden

| Bestand        | Beschrijving                                                       |
| -------------- | ------------------------------------------------------------------ |
| `index.html`   | Volledige site in één bestand — upload dit naar Hostinger          |
| `catcorn.html` | Standalone Three.js Catcorn testbestand (nog niet live in de site) |

---

## Huisstijl

| Variabele   | Waarde                               |
| ----------- | ------------------------------------ |
| Achtergrond | `#0d0d0d` / `#111111`                |
| Accent/rood | `#D92B4B`                            |
| Wit         | `#ffffff`                            |
| Font        | Open Sans (Google Fonts)             |
| Stijl       | Dark, rebels, hoog-contrast, premium |

> **Let op:** `#022859` (navy) is de kleur van klantproject CvW — NIET van Webbiecorn zelf.

---

## Tech Stack (index.html)

| Onderdeel            | Details                                                                           |
| -------------------- | --------------------------------------------------------------------------------- |
| Talen                | HTML5, CSS3, vanilla JavaScript — geen build-stap, geen npm                       |
| Fonts                | Open Sans via Google Fonts CDN                                                    |
| Particle achtergrond | Canvas 2D API — 80 deeltjes (wit + 15% rood), verbindingslijnen < 120px           |
| Hero 3D              | CSS `perspective: 1100px` + `transform-style: preserve-3d` op kaartenrij          |
| Mouse parallax       | JS `requestAnimationFrame` met lerp — kaarten + tekst in tegengestelde richtingen |
| Scroll animaties     | `IntersectionObserver` — `.reveal` klassen, 3 delay-varianten                     |
| Card tilt (diensten) | JS `mousemove` → `perspective(1000px) rotateX rotateY` per kaart                  |
| Navbar               | Sticky glassmorphism bij scroll (`scrolled` klasse)                               |
| Hamburger menu       | Mobiel, inline JS toggle                                                          |

## Tech Stack (catcorn.html)

| Onderdeel   | Details                                                                                                                                       |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Three.js    | 0.163.0 via `importmap` CDN (unpkg)                                                                                                           |
| Materialen  | `MeshToonMaterial` met 3-staps `DataTexture` gradient map                                                                                     |
| Geometrie   | SphereGeometry (lichaam, hoofd), CapsuleGeometry (nek, poten), ConeGeometry (oren, hoorn, tanden), TubeGeometry (staart via CatmullRomCurve3) |
| Animatie    | Hoofd volgt muis via `rotation.y/x` + lerp (0.07) — verder stil                                                                               |
| Verlichting | AmbientLight + 4x DirectionalLight (wit key, rood fill, rood rim, wit top)                                                                    |

---

## Secties (index.html)

| Sectie   | ID          | Inhoud                                                                    |
| -------- | ----------- | ------------------------------------------------------------------------- |
| Navbar   | `#navbar`   | Logo, links, hamburger (mobile)                                           |
| Hero     | `#hero`     | Particles canvas + gecentreerde tekst + 4 3D-kaarten in perspective-stage |
| Over ons | `#over`     | Tekst links + "waarom wij" kaartje rechts                                 |
| Diensten | `#diensten` | 4 kaarten: Fotografie, Illustratie, Design, Code (3D tilt hover)          |
| Cases    | `#cases`    | 3 projectkaarten (BuurtApp, Kluswinkel, CvW)                              |
| Contact  | `#contact`  | Formulier + contactgegevens                                               |
| Footer   | —           | Copyright, links                                                          |

---

## Hero (huidige versie — 16 maart 2026)

**Layout:** Gecentreerd (niet split). Volgorde: eyebrow → h1 → sub → CTA-knoppen → kaartenrij.

**Kaartenrij:**
- 4 kaarten: Fotografie / Illustratie / Design / Code
- CSS `perspective: 1100px` + `rotateX(24deg)` basisstand → kaarten lijken op een tafel
- Hover per kaart: `translateZ(60px)` + rode glow + rode bottom-bar animatie
- Mouse parallax over hele hero: kaarten kantelen mee (Y-as), tekst beweegt zacht tegengesteld

**Catcorn in hero:** Verwijderd (16 maart 2026) — Three.js vervangen door CSS/Canvas-only oplossing.

---

## Deploy instructies (Hostinger)

1. Log in op Hostinger → File Manager → `public_html`
2. Verwijder eventuele standaard `index.html`
3. Upload `index.html` (en straks eventueel losse assets zoals afbeeldingen)
4. DNS: webbiecorn.nl + webbiecorn.com → Hostinger nameservers

---

## TODO / Volgende stappen

- [ ] Logo als SVG/PNG asset toevoegen (Catcorn of woordmerk)
- [ ] Echte foto's van Bianca & Kevin in "Over ons"
- [ ] Contactformulier koppelen (Formspree of n8n webhook)
- [ ] Cases uitbreiden met echte screenshots
- [ ] catcorn.html verder verfijnen + eventueel integreren in hero
- [ ] Uploaden naar Hostinger `public_html`
- [ ] DNS configureren voor beide domeinen
