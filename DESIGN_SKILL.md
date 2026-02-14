# 🔧 SASCO Hydraulics — Utilitarian Grid Design Skill

> **Design System Reference & Replication Guide**
> Extracted from: `Design 1 - Utilitarian Grid.html` + React implementation
> Theme: **Industrial Technical / Engineering Schematic**
> Last updated: 2026-02-14

---

## Table of Contents

1. [Design Philosophy & Identity](#1-design-philosophy--identity)
2. [Color System](#2-color-system)
3. [Typography System](#3-typography-system)
4. [Spacing & Layout Grid](#4-spacing--layout-grid)
5. [Border & Radius System](#5-border--radius-system)
6. [Component Catalog](#6-component-catalog)
7. [UI/UX Patterns](#7-uiux-patterns)
8. [Interaction & Animation Patterns](#8-interaction--animation-patterns)
9. [Responsive Breakpoints & Metrics](#9-responsive-breakpoints--metrics)
10. [Tailwind Class Dictionary](#10-tailwind-class-dictionary)
11. [Design Elements & Decorative Patterns](#11-design-elements--decorative-patterns)
12. [Iconography System](#12-iconography-system)
13. [Image Treatment](#13-image-treatment)
14. [Dark Mode Strategy](#14-dark-mode-strategy)
15. [Accessibility Standards](#15-accessibility-standards)
16. [Content Architecture](#16-content-architecture)
17. [Original Design Material Content](#17-original-design-material-content)

---

## 1. Design Philosophy & Identity

### Core Aesthetic: **"Utilitarian Grid"**

The design is inspired by **engineering schematics**, **technical documentation**, and **data terminal interfaces**. It communicates:

- **Precision** — Every element is grid-aligned with hard edges
- **Authority** — Industrial confidence through ALL-CAPS typography and monospace data
- **Functionality** — No decorative flair; every pixel earns its place
- **Technical Credibility** — Schematic imagery, reference codes, live status indicators

### Design Pillars

| Pillar | Implementation |
|---|---|
| **Grid-first** | CSS Grid with visible borders forming a "spreadsheet" layout |
| **Hard edges** | Border-radius capped at 2px–8px (near-zero curves) |
| **Monochrome + Accent** | Grayscale palette with single red accent `#f20d0d` |
| **Data-dense** | Spec tables, reference codes, status bars on every section |
| **Inversion hover** | Cards flip from white → near-black on hover |
| **Typography hierarchy** | Massive display headlines, tiny uppercase labels |

### Brand Positioning
- **Company**: Sasco Hydraulics (ISO 9001:2015 Certified)
- **Sector**: Heavy industrial hydraulics — cylinders, systems, components
- **Tone**: Technical, authoritative, no-nonsense engineering firm
- **Tagline format**: `"Power flows where hydraulics go."` / `"Strength in every motion."`

---

## 2. Color System

### Tailwind Extended Colors (tailwind.config)

```js
colors: {
  "primary":          "#f20d0d",   // Vivid red — accent, CTAs, highlights
  "background-light": "#ffffff",   // Page background (light mode)
  "background-dark":  "#1a1a1a",   // Page background (dark mode)
  "border-slate":     "#e2e8f0",   // All structural borders (slate-200)
  "text-main":        "#1c0d0d",   // Primary text — near-black with warm undertone
  "text-muted":       "#64748b",   // Secondary text — slate-500
}
```

### Color Usage Rules

| Context | Color | Class |
|---|---|---|
| **Primary accent** | `#f20d0d` | `text-primary`, `bg-primary`, `border-primary` |
| **Primary hover** | `#b91c1c` (red-700) | `hover:bg-red-700` |
| **Primary subtle bg** | `rgba(242,13,13,0.05)` | `bg-primary/5` |
| **Primary overlay** | `rgba(242,13,13,0.1)` | `bg-primary/10` |
| **Body text** | `#1c0d0d` | `text-text-main` |
| **Muted/secondary text** | `#64748b` | `text-text-muted` |
| **Structural borders** | `#e2e8f0` | `border-border-slate` |
| **Section backgrounds** | Alternating `white` / `slate-50` | `bg-white`, `bg-slate-50` |
| **Dark section background** | `#1c0d0d` (text-main as bg) | `bg-text-main` |
| **Status green** | Tailwind `green-500` | `bg-green-500` |
| **Form dark elements** | `gray-700`, `gray-900` | `border-gray-700`, `bg-gray-900` |

### Gradient Usage
- **Hero headline gradient**: `bg-gradient-to-r from-primary to-red-800` applied via `text-transparent bg-clip-text`
- Used sparingly — only on hero headline for emphasis

---

## 3. Typography System

### Font Stack

```js
fontFamily: {
  "display": ["Space Grotesk", "sans-serif"],
  "mono":    ["Space Grotesk", "monospace"]
}
```

**Space Grotesk** is used universally — as display AND mono-styled text. It provides a technical, geometric feel while remaining highly legible.

Weight imports: `300, 400, 500, 600, 700`

### Type Scale & Patterns

| Element | Size | Weight | Transform | Tracking | Leading |
|---|---|---|---|---|---|
| **Hero H2** | `text-3xl → text-6xl` | `font-bold` (700) | `uppercase` | `tracking-tighter` | `leading-[0.9]` to `leading-[0.95]` |
| **Section H3** | `text-xl → text-3xl` | `font-bold` | `uppercase` | `tracking-tight` | default |
| **Card H4** | `text-base → text-lg` | `font-bold` | `uppercase` | default | default |
| **Page Title H1** | `text-3xl → text-5xl` | `font-bold` | `uppercase` | `tracking-tighter` | `leading-tight` |
| **Nav links** | `text-sm` | `font-medium` (500) | `uppercase` | `tracking-wide` | default |
| **Button text** | `text-xs → text-sm` | `font-bold` | `uppercase` | `tracking-widest` | default |
| **Label/tag** | `text-[10px] → text-xs` | `font-bold` | `uppercase` | `tracking-widest` | default |
| **Body/description** | `text-xs → text-sm` | `font-normal` | none | default | `leading-relaxed` |
| **Spec data** | `text-xs → text-sm` | `font-bold` for values, normal for labels | none | default | default |
| **Monospace data** | `text-xs → text-xl` | `font-mono font-bold` | none | default | default |
| **Reference codes** | `text-[10px]` | `font-mono` | none | default | default |
| **Breadcrumb** | `text-[10px] → text-xs` | `font-mono` | `uppercase` | default | default |
| **Footer legal** | `text-[9px] → text-[10px]` | `font-mono` | `uppercase` | default | default |
| **ISO badge** | `text-[10px]` | normal | `uppercase` | `tracking-widest` | default |

### Typography Rules
1. **ALL headings are uppercase** — no exceptions
2. **Labels and tags are always uppercase** with `tracking-widest` or `tracking-wider`
3. **Body text is sentence case** — only element NOT uppercased
4. **Data values use `font-mono`** for that terminal/readout feel
5. **Tight leading on hero text** (`leading-[0.9]`) creates dramatic compression
6. **`tracking-tighter`** on large headings, **`tracking-widest`** on small labels — inverse relationship

---

## 4. Spacing & Layout Grid

### Max Width Container
```
max-w-[1440px] mx-auto
```
All content constrained to 1440px with auto margins.

### Horizontal Padding (responsive)
```
px-4 sm:px-6 lg:px-12
```
- Mobile: 16px
- SM (640px+): 24px
- LG (1024px+): 48px

### Main Content Border
```
border-x border-border-slate
```
Visible left/right borders on the main content area create a "document" framing effect. Removed on mobile (`border-x-0 sm:border-x`).

### Section Padding Patterns

| Section Type | Padding Pattern |
|---|---|
| **Breadcrumb bar** | `px-4 sm:px-6 lg:px-12 py-2` |
| **Section header** | `p-4 sm:p-6 lg:px-12` |
| **Hero content** | `p-6 sm:p-8 lg:p-16` |
| **Page header** | `p-6 sm:p-8 lg:p-16` |
| **Card inner** | `p-4 sm:p-6` or `p-6 sm:p-8` |
| **Documentation block** | `p-6 sm:p-8 lg:p-12` |
| **Footer** | `py-6 sm:py-8` + horizontal padding |
| **Contact info cells** | `p-6 sm:p-8 lg:p-12` |

### Vertical Spacing
- **mb-4 sm:mb-6** — standard section element spacing
- **mb-6 sm:mb-8** — larger subsection spacing
- **gap-2 sm:gap-4** — flex/grid gaps (small)
- **gap-3 sm:gap-4** — flex/grid gaps (medium)
- **gap-6 sm:gap-8** — flex/grid gaps (large)
- **space-y-2** — spec list items
- **space-y-4** — form elements

### Technical Grid Layout
```css
.technical-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  border-top: 1px solid #e2e8f0;
  border-left: 1px solid #e2e8f0;
}
.technical-cell {
  border-right: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;
}
```
This creates a spreadsheet-like grid where borders form a visible wireframe. Uses `minmax(min(100%, 280px), 1fr)` for responsive-safe minimum column width.

---

## 5. Border & Radius System

### Border Radius (tailwind.config)
```js
borderRadius: {
  "DEFAULT": "2px",
  "sm": "2px",
  "lg": "4px",
  "xl": "8px"
}
```

**Key principle**: Near-zero border radius everywhere. The design is deliberately angular/sharp-edged to match the industrial/technical aesthetic.

### Border Usage

| Pattern | Usage |
|---|---|
| `border border-border-slate` | Standard structural borders |
| `border-b border-border-slate` | Section dividers |
| `border-x border-border-slate` | Main content side rails |
| `border-t border-b border-border-slate` | Spec data containers within sections |
| `border-l-2 border-transparent hover:border-primary` | Mobile nav active indicator |
| `border border-gray-700` | Dark form input borders |
| `border border-primary` | Tags, active states |
| `border-border-slate/50` | Subtle spec list dividers |
| `group-hover:border-white/20` | Border color shift on dark hover |

### Border Patterns
- **Every section separated by `border-b border-border-slate`**
- **Grid cells use all 4 borders** to create spreadsheet effect
- **No rounded corners on buttons or cards** — max `rounded-sm` (2px)
- **Accent borders use `border-primary`** for tags and focus states

---

## 6. Component Catalog

### 6.1 Navbar (Sticky Technical Header)

**Structure**: `sticky top-0 z-50` fixed header

```
┌─────────────────────────────────────────────┐
│ [■ Logo] SascoHydraulics  │ Nav Links │ [CTA]│
│          ISO 9001:2015    │           │      │
└─────────────────────────────────────────────┘
```

**Key classes**: 
- Container: `sticky top-0 z-50 w-full bg-white border-b border-border-slate`
- Height: `h-14 sm:h-16`
- Brand: Logo image `h-8 sm:h-10`
- Nav links: `text-sm font-medium uppercase tracking-wide hover:text-primary`
- CTA button: `h-9 px-5 bg-primary text-white text-xs font-bold uppercase tracking-wider`
- Dropdown: `bg-white border border-border-slate py-2 min-w-[200px] shadow-lg`
- Mobile: Animated slide-down with `max-h-[500px]`/`max-h-0` transition

### 6.2 Breadcrumb / Status Bar

```
┌─────────────────────────────────────────────────────────┐
│ /// Home / High-Pressure Solutions    ● OPERATIONAL UTC │
└─────────────────────────────────────────────────────────┘
```

**Key classes**:
- Container: `border-b border-border-slate bg-slate-50 py-2`
- Text: `text-[10px] sm:text-xs font-mono text-text-muted uppercase`
- Accent: `text-primary font-bold` on `///` prefix
- Status dot: `w-2 h-2 rounded-full bg-green-500`
- Current page: `text-text-main font-bold`

### 6.3 Hero Section (Split Screen Technical)

```
┌──────────────────────┬──────────────────────┐
│ [Tag: Series 700-X]  │                      │
│                      │   Technical Cutaway   │
│ HIGH-PRESSURE        │   Image with          │
│ HYDRAULIC            │   dot-grid overlay    │
│ SOLUTIONS            │                       │
│                      │          ┌──────────┐ │
│ Max Pressure: 700BAR │          │LIVE RENDER│ │
│ Flow Rate: 120 L/MIN │          │ID: CYL-.. │ │
│                      │          └──────────┘ │
│ [Explore] [Download] │                       │
└──────────────────────┴──────────────────────┘
```

**Layout**: `grid grid-cols-1 lg:grid-cols-2 border-b border-border-slate min-h-[500px]`

**Left panel**:
- Background decoration: CSS linear-gradient grid pattern with radial mask
- Tag badge: `py-1 px-2 border border-primary text-primary text-xs font-bold uppercase tracking-widest bg-primary/5`
- Headline: `text-5xl lg:text-6xl font-bold uppercase leading-[0.9] tracking-tighter`
- Gradient text: `text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-800`
- Spec grid: `grid grid-cols-2 gap-4 border-t border-b border-border-slate py-4`
- Primary CTA: `bg-text-main text-white hover:bg-primary text-sm font-bold uppercase tracking-widest`
- Secondary CTA: `border border-border-slate hover:border-text-main text-sm font-bold uppercase`

**Right panel**:
- Background: `bg-slate-100` with `radial-gradient` dot pattern overlay
- Image: `bg-contain bg-center bg-no-repeat scale-90` with `background-blend-mode: multiply`
- Color overlay: `bg-primary/10 mix-blend-overlay`
- Floating info card: `bg-white/90 backdrop-blur border border-border-slate p-3 text-xs font-mono shadow-lg`
- Pulsing dot: `w-2 h-2 bg-primary rounded-full animate-pulse`

### 6.4 Product Schematic Cards

```
┌─────────────────────┐
│ REF-01    [icon]    │
│                     │
│ ┌─────────────────┐ │
│ │ Schematic Image │ │
│ │ (4:3 aspect)    │ │
│ └─────────────────┘ │
│                     │
│ PRODUCT NAME        │
│                     │
│ Pressure    700 bar │
│ Flow      120 l/min │
│ Type         Fixed  │
└─────────────────────┘
```

**Card container**: `technical-cell p-0 group hover-invert transition-colors duration-200 cursor-pointer`

**Card inner**: `p-4 sm:p-6 h-full flex flex-col`

**Elements**:
- Ref code: `text-[10px] font-mono border border-border-slate px-1`
- Icon: `material-symbols-outlined text-border-slate group-hover:text-white`
- Image wrapper: `aspect-[4/3] bg-slate-50 rounded-sm overflow-hidden`
- Image: `bg-contain bg-center bg-no-repeat mix-blend-multiply opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300`
- Title: `text-base sm:text-lg font-bold uppercase`
- Specs: `mt-auto space-y-2 font-mono text-[10px] sm:text-xs`
- Spec row: `flex justify-between border-b border-border-slate/50 pb-1`
- Primary spec value: `font-bold text-primary`
- Standard spec value: `font-bold`
- Spec label: `text-text-muted group-hover:text-white/60`

### 6.5 Documentation Block (Split CTA)

```
┌──────────────────────┬──────────────────────┐
│ [📄 icon]            │ ■ SECURE ACCESS      │
│ TECHNICAL            │                      │
│ DOCUMENTATION        │ Step 1: Email        │
│                      │ >_ [input field]     │
│ Access CAD files...  │                      │
│                      │ Step 2: OTP          │
│ [📥 Datasheet]       │ [X][X][X][X][Verify] │
│ [🧊 CAD Model]       │                      │
│                      │ [INITIATE REQUEST]   │
└──────────────────────┴──────────────────────┘
```

**Layout**: `grid grid-cols-1 md:grid-cols-2 border-t border-border-slate`

**Left (light)**:
- Container: `bg-slate-100 p-8 lg:p-12 border-r border-border-slate`
- Icon: `material-symbols-outlined text-4xl text-primary`
- Download links: `flex items-center gap-3 p-3 bg-white border border-border-slate hover:border-primary`

**Right (dark)**:
- Container: `bg-text-main text-white p-8 lg:p-12`
- Section marker: `w-2 h-2 bg-primary` (small red square)
- Title: `text-xl font-bold uppercase tracking-wider`
- Input prefix: `bg-gray-900 border border-gray-700 text-gray-400 font-mono` with `>_` prompt
- Input field: `bg-transparent border border-gray-700 text-white font-mono focus:border-primary`
- OTP inputs: `w-12 h-12 text-center bg-gray-900 border border-gray-700 font-mono text-lg`
- Submit button: `w-full bg-primary text-white font-bold uppercase tracking-widest`

### 6.6 Section Sub-page Cards

```
┌─────────────────────┐
│ [TAGLINE BADGE]     │
│ SECTION TITLE       │
│                     │
│ Description text    │
│ flows here with     │
│ full detail...      │
└─────────────────────┘
```

**Classes**: Same `technical-cell hover-invert` pattern
- Badge: `py-1 px-2 border border-primary text-primary text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-primary/5 w-fit`
- Title: `text-lg sm:text-xl font-bold uppercase`
- Description: `text-text-muted text-xs sm:text-sm leading-relaxed group-hover:text-white/80`

### 6.7 Contact Info Grid

**Layout**: `grid grid-cols-1 md:grid-cols-3 border-b`

Each cell:
- Icon: `material-symbols-outlined text-2xl text-primary`
- Label: `text-xs font-bold uppercase tracking-wider text-text-muted`
- Data: `text-xs sm:text-sm font-mono text-text-main`
- Alternating bg: `bg-slate-50` / `bg-white` / `bg-slate-50`

### 6.8 Footer

```
┌─────────────────────────────────────────────────────┐
│ Sasco Hydraulics         | Nav Links | Crafted by   │
│ Address, Phone, Email    |           | [CruiseAI]   │
│─────────────────────────────────────────────────────│
│ © 2026 SASCO HYDRAULICS. ALL RIGHTS RESERVED.       │
└─────────────────────────────────────────────────────┘
```

- Container: `bg-white border-t border-border-slate py-6 sm:py-8`
- Company name: `text-sm font-bold uppercase tracking-wider`
- Address: `text-[10px] sm:text-xs text-text-muted font-mono`
- Links: `text-[10px] sm:text-xs font-medium uppercase tracking-wide text-text-muted hover:text-primary`
- Copyright: `text-[9px] sm:text-[10px] text-text-muted font-mono`

### 6.9 Back-to-Top Button

- Position: `fixed bottom-32 right-4 sm:right-6 z-40`
- Size: `w-10 h-10 sm:w-12 sm:h-12`
- Style: Circular border with hover → primary fill
- Tooltip: Appears on hover, positioned below

---

## 7. UI/UX Patterns

### 7.1 Navigation Pattern
- **Sticky header** — always accessible
- **Dropdown on hover** (desktop) for product categories
- **Full-height slide-down panel** (mobile) with animated max-height
- **Left border indicator** on mobile nav items (`border-l-2 hover:border-primary`)
- **CTA always visible** — "Request Quote" in header

### 7.2 Content Hierarchy Pattern
Every page follows this skeleton:
```
1. Sticky Navbar
2. Breadcrumb / Status Bar
3. Hero or Page Header (with grid-line background decoration)
4. Content Grid (technical-grid with bordered cells)
5. CTA Section (dark bg with form or action)
6. Footer
```

### 7.3 Card Interaction Pattern — "Hover Invert"
The signature interaction:
1. **Default state**: White background, dark text, muted details
2. **Hover state**: Near-black background, white text, primary accents preserved
3. **Active state**: `active:bg-text-main active:text-white` for touch feedback
4. All child elements transition colors via `group-hover:text-white` / `group-hover:text-white/60`
5. Image scales up: `group-hover:scale-105 group-hover:opacity-100`
6. Borders lighten: `group-hover:border-white/20`

### 7.4 Data Display Pattern
Technical specifications are displayed as key-value pairs:
```
Label (muted) ................. Value (bold)
─────────────────────────────────────────
```
- Uses `flex justify-between` with `font-mono`
- Separator: `border-b border-border-slate/50`
- Primary values highlighted: `text-primary`
- Compact density: `text-[10px] sm:text-xs` with `space-y-2`

### 7.5 Page Header Pattern
Every inner page uses:
1. Breadcrumb bar (`/// Home / Page Name`)
2. Full-width header section with grid-line background
3. Large uppercase title + optional intro paragraph
4. Content below in technical-grid or prose blocks

### 7.6 Form Pattern (2-Step Verification)
1. **Step 1**: Email input with terminal-style prefix (`>_`)
2. **Step 2**: 4-digit OTP inputs (fixed-width boxes)
3. Dark background context for security emphasis
4. Progressive disclosure — Step 2 revealed after Step 1

### 7.7 Link/Download Pattern
Download CTAs are styled as bordered cards with:
- Icon (Material Symbols) + Label + File metadata
- `hover:border-primary` for interaction feedback
- `group` hover for icon color change

### 7.8 Alternating Section Backgrounds
```
White → Slate-50 → White → Dark (text-main) → White
```
Creates visual rhythm without dividers (dividers are always present via borders).

### 7.9 Scroll-to-Top
Fixed position button with circular border, hover fills with primary accent.

---

## 8. Interaction & Animation Patterns

### Transitions
| Element | Transition |
|---|---|
| Card hover invert | `transition-colors duration-200` |
| Image scale on hover | `transition-all duration-300` |
| Nav link color | `transition-colors` (default 150ms) |
| Button hover | `transition-colors` |
| Mobile menu | `transition-all duration-200 ease-out` via max-height |
| Back-to-top | `transition duration-300` |

### Animations
| Element | Animation |
|---|---|
| Live render dot | `animate-pulse` (Tailwind built-in) |
| Status indicator | `animate-pulse` on green dot |
| Form step change | Custom `animate-fade-in` |

### Hover Effects Summary
1. **Cards**: Full background color inversion (white → near-black)
2. **Links**: `hover:text-primary` color shift
3. **Buttons (primary)**: `hover:bg-primary/90` or `hover:bg-red-700`
4. **Buttons (ghost)**: `hover:border-text-main` or `hover:border-primary`
5. **Images in cards**: `group-hover:opacity-100 group-hover:scale-105`
6. **Download items**: `hover:border-primary` with icon `group-hover:text-primary`
7. **Nav dropdowns**: `hidden group-hover:block`
8. **Mobile nav items**: Left border appears `hover:border-primary`

### Focus States
- Inputs: `focus:outline-none focus:border-primary focus:ring-0`
- Custom styling — no default focus ring, replaced with primary border

---

## 9. Responsive Breakpoints & Metrics

### Tailwind Breakpoint Usage

| Breakpoint | Width | Usage in Design |
|---|---|---|
| Default (mobile-first) | 0–639px | Single column, compact padding, smaller text |
| `sm:` | ≥640px | 2-column where appropriate, larger padding, normal text |
| `md:` | ≥768px | Navigation visible, 2–3 column grids, side-by-side layouts |
| `lg:` | ≥1024px | Full 2-column hero, maximum padding, largest text sizes |

### Responsive Behavior Matrix

| Component | Mobile | SM | MD | LG+ |
|---|---|---|---|---|
| **Navbar height** | 56px (`h-14`) | 64px (`h-16`) | 64px | 64px |
| **Nav links** | Hidden (hamburger) | Hidden | Visible (`md:flex`) | Visible |
| **Hero** | Stacked (1 col) | Stacked | Stacked | Side-by-side (`lg:grid-cols-2`) |
| **Hero image height** | 280px | 350px | 350px | Auto (fills grid) |
| **Hero headline** | `text-3xl` | `text-4xl` | `text-5xl` | `text-6xl` |
| **Product grid** | 1 column | 1–2 columns | 2–3 columns | 3–4 columns (auto-fit) |
| **Doc + Form** | Stacked | Stacked | Side-by-side (`md:grid-cols-2`) | Side-by-side |
| **Contact grid** | Stacked (1 col) | Stacked | 3 columns (`md:grid-cols-3`) | 3 columns |
| **Footer** | Stacked | Stacked | Row layout (`md:flex-row`) | Row layout |
| **Main borders** | No side borders | Side borders visible | Side borders | Side borders |
| **Padding** | `px-4` / `p-6` | `px-6` / `p-8` | Same as SM | `px-12` / `p-16` |

### Overflow Prevention
```css
html, body { overflow-x: hidden; min-width: 0; }
```
Applied globally + `min-w-0 overflow-x-hidden` on flex/grid children throughout.

### Touch Targets
Minimum touch target: **44×44px** enforced via:
```css
.touch-target { min-height: 44px; min-width: 44px; }
```
Applied to all interactive elements on mobile (nav links, buttons, phone/email links).

### Image Responsive Strategy
- Hero image: `bg-contain bg-center bg-no-repeat` with fixed heights per breakpoint
- Card images: `aspect-[4/3]` container with `bg-contain bg-center` — scales uniformly
- No `<img>` tags — all images via `background-image` (schematic/technical aesthetic choice)

### Container Strategy
```
max-w-[1440px] mx-auto  → caps content at 1440px
```
Content reads well from 320px (minimum) through 8K ultra-wide displays.

---

## 10. Tailwind Class Dictionary

### Layout Classes Used
```
flex flex-col flex-row flex-wrap flex-grow flex-shrink flex-shrink-0
grid grid-cols-1 grid-cols-2 grid-cols-3
lg:grid-cols-2 md:grid-cols-2 md:grid-cols-3
items-center items-start items-end
justify-between justify-center
gap-1 gap-2 gap-3 gap-4 gap-6 gap-8
gap-x-3 gap-x-6 gap-y-1 gap-y-2
min-w-0 min-h-0 min-h-screen min-h-[44px]
max-w-[1440px] max-w-md max-w-sm max-w-xs max-w-3xl
w-full w-auto w-2 w-5 w-10 w-11 w-12
h-full h-auto h-2 h-5 h-8 h-9 h-10 h-11 h-12 h-14 h-16
size-8 size-11
aspect-[4/3]
overflow-hidden overflow-x-hidden
```

### Positioning Classes
```
relative absolute fixed sticky
top-0 bottom-4 bottom-6 bottom-32 right-4 right-6
inset-0
z-10 z-40 z-50
```

### Typography Classes
```
font-bold font-medium font-normal font-light
font-mono font-display
text-[9px] text-[10px] text-[11px]
text-xs text-sm text-base text-lg text-xl text-2xl text-3xl text-4xl text-5xl text-6xl
uppercase
tracking-tight tracking-tighter tracking-wide tracking-wider tracking-widest
leading-none leading-tight leading-relaxed leading-[0.9] leading-[0.95]
truncate break-words break-all
line-clamp-2
whitespace-nowrap
text-center
```

### Color Classes
```
text-primary text-text-main text-text-muted text-white text-gray-400 text-gray-500 text-gray-600
bg-primary bg-primary/5 bg-primary/10 bg-primary/90
bg-white bg-black bg-slate-50 bg-slate-100 bg-gray-800 bg-gray-900 bg-green-500
bg-text-main bg-background-light bg-background-dark
bg-white/90 bg-black/90 bg-gray-900/50
border-primary border-border-slate border-border-slate/50 border-gray-700
border-transparent border-white/20
text-transparent bg-clip-text
```

### Spacing Classes
```
p-2 p-3 p-4 p-6 p-8 px-1 px-2 px-3 px-4 px-5 px-6 px-8
py-1 py-2 py-3 py-4 py-6 py-8
m-0 mb-1 mb-2 mb-3 mb-4 mb-6 mb-8 mt-2 mt-4 mx-auto mx-4 -mr-2 -mt-px
pt-1 pt-2
space-y-1 space-y-2 space-y-4 space-y-6
```

### Border Classes
```
border border-b border-t border-r border-l border-x border-x-0
border-b-0 border-r-0 border-l-2
rounded-sm rounded-full
```

### Effect & Filter Classes
```
shadow-lg
backdrop-blur
opacity-0 opacity-20 opacity-50 opacity-80
mix-blend-multiply mix-blend-overlay mix-blend-normal
bg-opacity-10
```

### Transition & Animation
```
transition-colors transition-all transition
duration-200 duration-300
ease-out
animate-pulse
```

### Interactive Classes
```
cursor-pointer pointer-events-none
hover:text-primary hover:bg-primary hover:bg-primary/90 hover:bg-red-700
hover:border-primary hover:border-text-main hover:underline hover:opacity-80
hover:bg-white hover:bg-slate-50
group group-hover:text-white group-hover:text-white/60 group-hover:text-primary
group-hover:border-white/20 group-hover:opacity-100 group-hover:scale-105
group-hover:bg-primary group-hover:bg-opacity-10
active:bg-text-main active:text-white
focus:outline-none focus:border-primary focus:ring-0
```

### Responsive Prefixes Used
```
sm: (≥640px) — text sizes, padding, heights, visibility
md: (≥768px) — grid columns, flex direction, visibility, borders
lg: (≥1024px) — grid columns, padding, text sizes, hero layout
```

### Display/Visibility
```
hidden block flex inline-flex inline-block
md:flex md:flex-row md:hidden md:border-r md:border-b-0
sm:flex sm:flex-row sm:hidden sm:inline-flex
lg:grid-cols-2 lg:border-r lg:h-auto lg:min-h-[400px]
```

### Background Patterns (CSS Custom)
```
bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)]
bg-[size:4rem_4rem]
[mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]
bg-[radial-gradient(#e2e8f0_1px,transparent_1px)]
[background-size:20px_20px]
```

---

## 11. Design Elements & Decorative Patterns

### 11.1 Grid-Line Background
Used on hero and page headers as a subtle architectural/blueprint feel:
```
bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),
    linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)]
bg-[size:4rem_4rem]
[mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]
pointer-events-none opacity-20
```
This creates a faint engineering grid that fades out radially from the top.

### 11.2 Dot-Grid Pattern
Used on image backgrounds:
```
bg-[radial-gradient(#e2e8f0_1px,transparent_1px)]
[background-size:20px_20px]
opacity-50
```
Creates a technical paper / perforated metal look behind product images.

### 11.3 Triple-Slash Prefix `///`
Used in breadcrumbs as a decorative "comment" marker:
```html
<span className="text-primary font-bold">///</span>
```
Evokes code/terminal comments — reinforces the technical identity.

### 11.4 Terminal Prompt `>_`
Form input prefix:
```html
<span className="inline-flex items-center px-3 border border-r-0 border-gray-700 bg-gray-900 text-gray-400 font-mono">&gt;_</span>
```
Makes form inputs feel like terminal/CLI interfaces.

### 11.5 Status Indicators
```html
<span className="w-2 h-2 rounded-full bg-green-500"></span> OPERATIONAL
<span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span> LIVE RENDER
<span className="w-2 h-2 bg-primary"></span> Section marker (square)
```
Three status dot variants: green (system status), red pulsing (live data), red square (section marker).

### 11.6 Reference Codes
Every product card has a REF code:
```html
<span className="text-[10px] font-mono border border-border-slate px-1">REF-01</span>
```
Provides an "engineering drawing reference number" aesthetic.

### 11.7 Floating Info Cards
Positioned over images:
```
absolute bottom-6 right-6 bg-white/90 backdrop-blur border border-border-slate p-3 text-xs font-mono shadow-lg
```
Creates a "HUD overlay" effect on technical images.

### 11.8 Image Color Overlay
```
<div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
```
Applies a subtle red tint to hero images for brand color integration.

### 11.9 Alternating Cell Backgrounds
Contact grid uses alternating `bg-slate-50` / `bg-white` for visual separation.

### 11.10 Spec Data Lines
Key-value pairs with bottom borders simulate data table rows within cards.

---

## 12. Iconography System

### Provider
**Google Material Symbols Outlined** (variable weight/fill)

```html
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1" rel="stylesheet" />
```

### Icons Used

| Icon Name | Context | Size |
|---|---|---|
| `settings_input_component` | Brand logo placeholder | `text-xl` |
| `settings_applications` | Hydraulic cylinders product | `text-lg`–`text-xl` |
| `valve` | Directional valve product | `text-lg`–`text-xl` |
| `swap_driving_apps_wheel` | Axial piston pump product | `text-lg`–`text-xl` |
| `bolt` | Power pack / systems product | `text-lg`–`text-xl` |
| `arrow_forward` | CTA directional indicator | `text-sm` |
| `chevron_right` | "View more" links | `text-sm` |
| `description` | Documentation section icon | `text-3xl`–`text-4xl` |
| `download` | Download/datasheet action | default |
| `3d_rotation` | CAD model download | default |
| `location_on` | Contact address | `text-2xl` |
| `phone` | Contact phone | `text-2xl` |
| `email` | Contact email | `text-2xl` |
| `lock_clock` | OTP waiting state | default |
| `menu` | Mobile hamburger | `text-2xl` |
| `close` | Mobile menu close | `text-2xl` |

### Icon Styling Rules
- **Default state**: `text-border-slate` (gray) or `text-text-muted`
- **Hover state**: `group-hover:text-white` (on invert cards) or `group-hover:text-primary`
- **Accent context**: `text-primary` (documentation, contact icons)
- **No filled icons** — always outlined for consistency with technical line-art style

---

## 13. Image Treatment

### Image Strategy
All images are rendered via `background-image` CSS (not `<img>` tags) to maintain the schematic/technical drawing aesthetic.

### Image Styles

| Context | Classes |
|---|---|
| **Hero cutaway** | `bg-contain bg-center bg-no-repeat scale-90` + `background-blend-mode: multiply` |
| **Product schematics** | `bg-contain bg-center bg-no-repeat mix-blend-multiply opacity-80` |
| **Dark mode images** | `dark:mix-blend-normal` (removes multiply in dark) |
| **Hover enhancement** | `group-hover:opacity-100 group-hover:scale-105 transition-all duration-300` |

### Image Containers
- **Hero**: Full height of grid cell, `overflow-hidden`
- **Cards**: `aspect-[4/3]` fixed ratio container with `bg-slate-50` placeholder background
- **Both**: `rounded-sm` (2px border radius) for subtle softening

### Blend Modes
- `mix-blend-multiply` — makes white backgrounds transparent, merging with slate bg
- `mix-blend-overlay` — for color tinting overlays
- Images intentionally look like technical schematics/wireframes, not photographs

---

## 14. Dark Mode Strategy

### Toggle Method
Class-based: `<html class="light">` or `<html class="dark">`

### Dark Mode Mappings

| Element | Light | Dark |
|---|---|---|
| Page background | `bg-white` | `dark:bg-background-dark` (#1a1a1a) |
| Section alt bg | `bg-slate-50` | `dark:bg-zinc-900` |
| Section mid bg | `bg-slate-100` | `dark:bg-zinc-800` |
| Image placeholder bg | `bg-slate-50` | `dark:bg-white/5` |
| Grid borders | `#e2e8f0` | `#27272a` (via CSS) |
| Hover invert bg | `#1c0d0d` | `#1a1a1a` (via CSS) |
| Image blend | `mix-blend-multiply` | `dark:mix-blend-normal` |
| Nav dropdown bg | `bg-white` | `dark:bg-background-dark` |
| Dark CTA section | `bg-text-main` | `dark:bg-black` |
| Floating overlay | `bg-white/90` | `dark:bg-black/90` |

### Dark Mode CSS Overrides
```css
.dark .technical-grid {
  border-top-color: #27272a;
  border-left-color: #27272a;
}
.dark .technical-cell {
  border-right-color: #27272a;
  border-bottom-color: #27272a;
}
.dark .hover-invert:hover {
  background-color: #1a1a1a;
}
```

---

## 15. Accessibility Standards

### Touch Targets
- All interactive elements: `min-height: 44px; min-width: 44px` (WCAG 2.5.5 AAA)
- Applied via `.touch-target` class and direct `min-h-[44px]` utilities

### Semantic HTML
- `<header>`, `<main>`, `<footer>`, `<nav>` landmark elements
- Heading hierarchy: H1 → H2 → H3 → H4 properly nested
- `<a>` for navigation, `<button>` for actions

### ARIA Attributes
- Mobile menu: `aria-label`, `aria-expanded` on toggle button
- Back-to-top: `aria-label="Back to top"`
- OTP inputs: `inputMode="numeric"` for mobile keyboards

### Color Contrast
- Primary red `#f20d0d` on white: ~4.2:1 (AA for large text)
- `text-main` `#1c0d0d` on white: ~17:1 (exceeds AAA)
- `text-muted` `#64748b` on white: ~4.6:1 (AA)
- White on `text-main` `#1c0d0d`: ~17:1 (exceeds AAA)

### Focus Management
- Custom focus styles: `focus:outline-none focus:border-primary`
- Keyboard navigable dropdowns and form flows

---

## 16. Content Architecture

### Data Model (`content.ts`)

```typescript
SiteContent {
  hero: { headline, subHeadline, bannerImageUrl }
  products: Product[] {
    ref, name, description, imageUrl, schematicImageUrl, icon,
    specs: { label, value, isPrimary }[],
    slug
  }
  contact: { address, phones[], emails[] }
  nav: { home, about, products, services, gallery, contact, enquire }
  about: SubPage
  cylinders: SubPage
  systems: SubPage
  components: SubPage
  services: SubPage
  gallery: SubPage
}
```

### Route Map
```
/                    → HomePage (Hero + ProductGrid + BrochureDownload)
/about-us            → SubPage (about)
/hydraulic-cylinder  → SubPage (cylinders)
/hydraulic-systems   → SubPage (systems)
/hydraulic-components → SubPage (components)
/services            → SubPage (services)
/gallery             → GalleryPage
/contact-us          → ContactPage
```

### Component Hierarchy
```
App
├── Navbar
├── Routes
│   ├── HomePage
│   │   ├── Hero
│   │   ├── ProductGrid
│   │   └── BrochureDownload
│   ├── SubPage (reusable for 5 pages)
│   ├── GalleryPage
│   └── ContactPage
└── Footer (+ Back-to-top button)
```

### Tech Stack
- **React 19** + **TypeScript**
- **React Router v7** (client-side routing)
- **Vite 6** (build tool)
- **Tailwind CSS** (CDN in HTML, utility-first in React)
- **Google Fonts** (Space Grotesk)
- **Material Symbols** (icon set)
- **GitHub Pages** deployment (base: `/sasco-hydraulics/`)

---

## 17. Original Design Material Content

### Hero Content
- **Tag**: `Series 700-X` (original) → `20+ Years of Experience` (React)
- **Headline**: `High-Pressure Hydraulic Solutions` (original) → `Power flows where hydraulics go.` (React)
- **Sub-headline**: (none in original) → `Strength in every motion.` (React)
- **Spec 1**: Max Pressure — `700 BAR`
- **Spec 2**: Flow Rate — `120 L/MIN`
- **Primary CTA**: `Explore Systems` → `Explore Products`
- **Secondary CTA**: `Download Spec Sheet`

### Product Cards (Original HTML)

**Card 1 — Radial Piston Pump R**
| Spec | Value |
|---|---|
| Pressure | 700 bar (primary) |
| Flow | 120 l/min |
| Displacement | Fixed |
| Ref | REF-01 |
| Icon | `settings_applications` |

**Card 2 — Directional Seated Valve**
| Spec | Value |
|---|---|
| Pressure | 500 bar (primary) |
| Feature | Leak-free |
| Actuation | Solenoid |
| Ref | REF-02 |
| Icon | `valve` |

**Card 3 — Axial Piston Pump**
| Spec | Value |
|---|---|
| Displacement | Variable (primary) |
| System | Load Sensing |
| Rating | Heavy Duty |
| Ref | REF-03 |
| Icon | `swap_driving_apps_wheel` |

**Card 4 — Compact Power Pack**
| Spec | Value |
|---|---|
| Tank Vol | 30 L |
| Pressure | 700 bar (primary) |
| Type | Submerged |
| Ref | REF-04 |
| Icon | `bolt` |

### Documentation Section Content
- **Title**: Technical Documentation
- **Description**: Access CAD files, detailed performance curves, and installation manuals for the Series 700-X.
- **Download 1**: Datasheet — PDF, 2.4MB
- **Download 2**: CAD Model — STEP, 14MB

### Secure Access Form
- **Title**: Secure Access
- **Description**: Enter corporate email to retrieve access code.
- **Step 1 Label**: Identification
- **Step 2 Label**: Verification (4-digit OTP)
- **Submit**: Initiate Request

### Hero Image Metadata
- **Alt**: Technical cutaway illustration of a heavy-duty hydraulic cylinder showing internal pistons and seals
- **ID**: CYL-900-REV2
- **Label**: LIVE RENDER

### Navigation Items (Original)
Products | Systems | Engineering | Support

### Footer Content (Original)
- **Company**: Sasco Hydraulics GmbH
- **Address**: Industriestraße 45, 80339 Munich, DE
- **Links**: Imprint | Privacy | Terms of Sale | Sitemap
- **Copyright**: © 2024 SASCO. ALL RIGHTS RESERVED.

### Status Bar Content (Original)
- **Status**: SYSTEM STATUS: OPERATIONAL
- **Time**: UTC: 14:02:45

### All Image URLs (Original Design)

| Image | URL |
|---|---|
| Hero cutaway | `https://lh3.googleusercontent.com/aida-public/AB6AXuD7IpN5-W0WOuqj9HAab...` |
| Radial Piston | `https://lh3.googleusercontent.com/aida-public/AB6AXuBXoG3-ogqG4FMVtXqj...` |
| Directional Valve | `https://lh3.googleusercontent.com/aida-public/AB6AXuBTy7feUqRiy_789_nn...` |
| Axial Piston | `https://lh3.googleusercontent.com/aida-public/AB6AXuCaimBm4UIE9648wHRn...` |
| Power Pack | `https://lh3.googleusercontent.com/aida-public/AB6AXuCE36vYU2q_gLGGmghc...` |

---

## Quick Reference — Replication Checklist

When building new pages/components for this design system:

- [ ] Use `Space Grotesk` font only
- [ ] ALL headings `uppercase` with appropriate tracking
- [ ] Labels: `text-[10px] uppercase tracking-widest font-mono`
- [ ] Data values: `font-mono font-bold`
- [ ] Borders everywhere — sections, cards, grids, spec rows
- [ ] `border-radius ≤ 8px` — no rounded corners
- [ ] Primary accent: `#f20d0d` — used sparingly for emphasis
- [ ] Background alternation: white → slate-50 → white → dark
- [ ] Card hover pattern: `group hover-invert` with full color inversion
- [ ] Status indicators: colored dots + uppercase monospace labels
- [ ] Breadcrumb: `/// Home / Page` format
- [ ] Touch targets: `min-h-[44px]` on all interactive elements
- [ ] Responsive: `px-4 sm:px-6 lg:px-12` padding scale
- [ ] Max width: `max-w-[1440px] mx-auto`
- [ ] Overflow: `min-w-0 overflow-x-hidden` on flex/grid children
- [ ] Images: `background-image` with `mix-blend-multiply`, never `<img>` for schematics
- [ ] Dark mode: Always provide `dark:` variant classes
