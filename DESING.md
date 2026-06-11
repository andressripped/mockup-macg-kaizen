# Antigravity Design System Rules
# Target: High-End Corporate Architecture (Macg Kaizen Consulting)

## 1. Color Tokens & Restrictive Matrix
Strict adherence to the official brand palette. No automatic gradients, foreign hex codes, or soft pastel variations are allowed.

* `--navy-deep`: #10182D (Primary foundation for Hero background, section headers, and dark alternating blocks)
* `--lime-kaizen`: #8CC63F (Interactive high-contrast accent for micro-components, structural lines, and main CTAs)
* `--white-pure`: #FFFFFF (Primary surface for clean navigation, card backgrounds, and standard page background)
* `--gray-corporate`: #F4F6F9 (Secondary surface contrast for form wrappers and alternating light zones)
* `--text-dark`: #1C2434 (Dominant color for all primary text titles and labels)
* `--text-muted`: #64748B (Secondary color for supporting descriptions and utility text)

## 2. Geometry & Border-Radius Constraints
Anti-AI template rules to eliminate "bubble-like" or generic app interface behaviors.

* **Structural Containers (Cards, Rows, Content Blocks):** `border-radius: 0px` or max `4px`. Corners must remain sharp, geometric, and editorial.
* **Interactive Controls (Buttons):** `border-radius: 50px` (Strict Pill shape configuration).
* **Dividers and Structural Accents:** `border-radius: 0px`. All lines must be perfectly straight and crisp.

## 3. Typographic Hierarchy & Alignment Rules
Text tracking must feel expansive and balanced.

* **Global Constraint:** Never center body text within structural information blocks. Force strict left-alignment.
* **H1 (Hero Headline):** Size: 3.5rem | Weight: 800 (Bold condensed corporate style) | Line-Height: 1.15 | Color: `--white-pure`
* **H2 (Section Headline):** Size: 2.25rem | Weight: 700 | Line-Height: 1.25 | Color: `--text-dark` or `--white-pure`
* **H3 (Card Title):** Size: 1.5rem | Weight: 600 | Line-Height: 1.3 | Color: `--text-dark`
* **P (Body & Descriptions):** Size: 1rem | Weight: 400 | Line-Height: 1.7 (Generous air tracking for readability)

## 4. Layout Architecture Primitives (KPMG Standard)

### 4.1 Split Utility Header
* Top micro-bar (height 40px, surface `--gray-corporate`) with utility text ("Chile (ES)") floated strictly to the far right at `font-size: 0.75rem`.
* Main navbar (height 80px, background `--white-pure`) with logo anchored far left, navigation items centered, and contact triggers far right.

### 4.2 Asymmetric Hero Block
* Full-width container locked to `--navy-deep` with heavy vertical spacing (`padding: 100px 0`).
* Divided into an asymmetric 60% / 40% grid. Left 60% handles bold white typography stack. Right 40% accommodates geometric, clean technical graphics (no centered stock images).

### 4.3 Balanced 2x2 Services Grid
* To prevent compressed or narrow cards, layout must wrap into a 2-column grid (`grid-template-columns: repeat(2, 1fr)`) with a generous gap of `32px`.
* Cards must use `width: 100%` (`fill container` behavior) with `--white-pure` surface and sharp edges.
* **Signature Accent:** Every card title (H3) must feature a 4px solid vertical line (`border-left: 4px solid var(--lime-kaizen)`) directly attached to its left edge.

### 4.4 High-Contrast Alternating Mid-Blocks
* Break the vertical flow of the page using abrupt surface shifts (switching from light sections to dark `--navy-deep` sections) with typography automatically adapting to white text layers.

### 4.5 Sharp Form Fields
* Input boundaries must use a solid light outline (`1px solid #CBD5E1`) with zero rounded corners. Text labels must sit explicitly above the input track.