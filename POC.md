# Andal Kalyanam Invitation Website: Proof of Concept (POC)

This document acts as a Proof of Concept (POC) report detailing the design choices, custom architecture, implementation steps, and interactive specifications of the single-page cultural wedding invitation website: **"Kanaa Kanden: An Andal Kalyanam"**.

---

## 1. Project Overview & Themes
The goal of this project was to construct a premium, culturally rich, and highly interactive digital wedding invitation page.

* **Theme**: "Kanaa Kanden: An Andal Kalyanam".
* **Aesthetics**: Draws structural and lyrical inspiration from Andal's *Nachiyar Thirumozhi* poetry (focused on the *Vaaranam Aayiram* verses describing her divine dream union with Lord Krishna).
* **Color Palette**: Curated Deep Maroons (`#7B1A24`), warm Gold tones (`#B3822B`), light Cream accents (`#F5EFE6`), and deep Garland Greens (`#2B4A39`).
* **Visual Elements**: Features clean border outlines, lotus motifs, a circular mandap monogram, and stylized background silhouettes of the Temple Gopuram structure layered subtly behind deep red panels.

---

## 2. Technical Stack
Built to run efficiently without complex build tools, module dependencies, or compiler steps, ensuring maximum speed and direct browser compatibility.

* **Frontend Structure**: Semantic HTML5 markup.
* **Styling**: Modern, fluid CSS3 utilizing variables, custom layouts, and `@media` responsive selectors.
* **Scripting Logic**: Vanilla JavaScript (ES6 syntax) managing dynamic scroll animations, automated media autoplay policies, and live event countdown ticks.
* **Media Assets**: Vector icons, SVG inline layout graphs, transparent logo prints, and high-quality compressed Carnatic audio (`.mp3`).
* **Dev Server**: Vite server targeting port `5179`.

---

## 3. Core Functional Requirements
All primary items specified by the wedding requirements have been integrated:

### A. Dynamic Information Panels
* **Couples Registry**: Highlights groom **Rahul Babu M V** and bride **Suruthi R** with parents' names situated directly below them in a clear hierarchical layout.
* **Ceremonial Schedule**: Organized cards for the **Engagement** (Sept 12, 6:00 PM), **Reception** (Sept 12, 7:30 PM), and the **Muhurtham** (Sept 13, 8:30 AM).
* **Muhurtham Icon**: Displays a customized, vector outline Kalasam (sacred pot/coconut) icon.
* **Sanctum Venue**: Details the venue **Thaibala Wedding Hall** (Melagaram, Tenkasi) with a custom styled navigation link directly to Google Maps.

### B. Literary Accent (Nachiyar Thirumozhi)
* Displays Andal's dream verse in three formats:
  1. Traditional Tamil Script
  2. Transliterated Roman Script (*Vaaranam aayiram soozha...*)
  3. Literal English Translation

### C. Live Countdown Timer
* Tracks remaining time down to the second relative to the IST timezone target `2026-09-13T08:30:00+05:30`.
* Customizes layout display and prints a congratulations message when the countdown reaches zero.

### D. Smart Audio Player
* Integrates the Carnatic track *Sita Kalyana Vaibhogame* on loop.
* **Smart Autoplay**: Bypasses strict browser sandbox blocks by listening for the user's first page interaction (scrolling, swiping, tapping, clicking, or typing) to seamlessly launch audio.
* Includes custom-designed play/pause controls and a high-contact volume range slider.

---

## 4. Layout & Mobile Responsiveness
Since the vast majority of visitors access wedding invitations via mobile phones, the design was optimized mobile-first:

* **Fluid Grid Columns**: Swaps ceremony grids and parent separation columns from multi-column rows on desktop to stacked, single-column columns on mobile viewports.
* **Flexible Typography**: Uses `clamp()` calculations and targeted media query definitions to auto-scale heading sizes, preventing layout breakage or visual clipping.
* **Accessible Targets**: Sized the navigation and volume controls to support generous touch target parameters (e.g. 100%-width maps button and expanded height ranges).
* **Gopuram Silhouettes**: Scaled down visual assets (`45vh` height and `0.05` opacity) on mobile to maintain contrast and legibility of foreground text.

---

## 5. Verification & Version Control
* Tested on Google Chrome, Safari, and Firefox.
* The workspace is fully version-controlled, with commits managing updates to:
  * Responsive layout fixes.
  * Audio track source hooks.
  * Logo updates (Favicon tab & Monogram footer).
  * Gopuram layer scaling.
