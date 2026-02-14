# 📐 Product Gallery Page — Implementation Plan

> **Feature**: Product Gallery with Image Previewer & Engineering Specifications
> **Design System**: Utilitarian Grid (ref: `DESIGN_SKILL.md`)
> **Route**: `/products/gallery` (new) — accessed via **Products** dropdown in Navbar
> **Zero external dependencies** — built entirely with React 19 + Tailwind CSS

---

## Table of Contents

1. [Feature Overview](#1-feature-overview)
2. [Information Architecture](#2-information-architecture)
3. [Data Model Changes](#3-data-model-changes)
4. [New Files & Modified Files](#4-new-files--modified-files)
5. [Component Specifications](#5-component-specifications)
6. [Image Lightbox / Previewer Spec](#6-image-lightbox--previewer-spec)
7. [Engineering Specification Panel Spec](#7-engineering-specification-panel-spec)
8. [CSS / Animation Additions](#8-css--animation-additions)
9. [Routing & Navigation Changes](#9-routing--navigation-changes)
10. [Responsive Behavior Matrix](#10-responsive-behavior-matrix)
11. [Interaction Flow Diagrams](#11-interaction-flow-diagrams)
12. [Accessibility Requirements](#12-accessibility-requirements)
13. [Implementation Steps (Ordered)](#13-implementation-steps-ordered)
14. [Component Tree](#14-component-tree)

---

## 1. Feature Overview

### What We're Building

A **Product Gallery page** that serves as the visual showcase hub for all Sasco Hydraulics products. It is accessible from the **Products** dropdown in the Navbar. The page features:

1. **Filterable product grid** — Filter by product category (Cylinders / Systems / Components)
2. **Gallery cards** — Each sub-product displayed as a technical schematic card with thumbnail, ref code, category badge, and summary specs
3. **Image Lightbox/Previewer** — Clicking a card's image opens a full-screen overlay with:
   - Zooming (scroll wheel / pinch / +/- buttons)
   - Panning/dragging when zoomed in
   - Left/right navigation (arrow keys, swipe, buttons) to cycle through gallery images
   - Image counter (`03 / 12`)
   - Close button (Escape key, click outside, × button)
4. **Engineering Specification Drawer** — Clicking "View Specs" on a card (or a dedicated area) slides open a right-side panel showing:
   - Product name, reference code, category
   - Full engineering specification table (key-value rows)
   - Description text
   - Tagline badge
   - "Request Quote" and "Download Datasheet" CTAs
   - Close button

### Design Principles Applied

| Principle | How It's Applied |
|---|---|
| **Grid-first** | `technical-grid` with bordered cells for the gallery layout |
| **Hard edges** | All cards, modals, panels use `border-radius ≤ 2px` |
| **Monochrome + Accent** | White/slate cards with `#c41e3a` primary accent on badges, active filters |
| **Data-dense** | Spec rows visible on cards, full spec table in drawer |
| **Hover-invert** | Cards use the signature white→dark inversion on hover |
| **Typography hierarchy** | Uppercase headings, `font-mono` spec data, tiny tracking-widest labels |
| **Breadcrumb** | `/// Home / Products / Gallery` format |
| **Status indicators** | Image count, active filter pills, zoom level indicator |

---

## 2. Information Architecture

### Page Structure (top → bottom)

```
┌─────────────────────────────────────────────────────────────┐
│ BREADCRUMB BAR                                              │
│ /// Home / Products / Gallery         ● 12 ITEMS LOADED     │
├─────────────────────────────────────────────────────────────┤
│ PAGE HEADER                                                 │
│ PRODUCT GALLERY                                             │
│ Explore our complete range of hydraulic solutions...        │
├─────────────────────────────────────────────────────────────┤
│ FILTER BAR                                                  │
│ [ALL] [CYLINDERS] [SYSTEMS] [COMPONENTS]    Grid/List icon  │
├────────────┬────────────┬────────────┬──────────────────────┤
│ GALLERY    │ GALLERY    │ GALLERY    │                      │
│ CARD 1     │ CARD 2     │ CARD 3     │  ...auto-fit grid    │
│            │            │            │                      │
│ [image]    │ [image]    │ [image]    │                      │
│ REF-01-A   │ REF-01-B   │ REF-01-C   │                      │
│ Title      │ Title      │ Title      │                      │
│ spec: val  │ spec: val  │ spec: val  │                      │
│ [🔍 VIEW] [📋 SPECS]                                       │
├────────────┴────────────┴────────────┴──────────────────────┤
│ CTA SECTION (dark bg)                                       │
│ ■ NEED A CUSTOM SOLUTION?                                   │
│ Contact our engineering team for bespoke specifications.    │
│ [ENQUIRE NOW]                                               │
└─────────────────────────────────────────────────────────────┘
```

### Overlay Components (rendered via portal/z-index)

```
IMAGE LIGHTBOX (z-60, full-screen overlay)
┌─────────────────────────────────────────────────────────────┐
│ ┌─────────────────────────────────────────────────────────┐ │
│ │                                                         │ │
│ │  ◄              [ZOOMED/PANNABLE IMAGE]             ►   │ │
│ │                                                         │ │
│ │                                                         │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ [−] [100%] [+]           03 / 12                    [✕]    │
│                                                             │
│ PRODUCT NAME                                                │
│ Category Badge            REF-01-A                          │
└─────────────────────────────────────────────────────────────┘

SPEC DRAWER (z-50, right-side slide-in panel)
┌─────────────────────────────┐
│ [✕ CLOSE]                   │
│                             │
│ REF-01-A                    │
│ ─────────────               │
│ PRODUCT NAME                │
│ [CATEGORY BADGE]            │
│                             │
│ Description text here...    │
│                             │
│ ━━ SPECIFICATIONS ━━        │
│ Bore Size        50–200mm   │
│ Stroke Length    Up to 3000mm│
│ Pressure         700 bar    │
│ Rod Diameter     25–140mm   │
│ Mounting         Flange     │
│ Seal Type        Parker     │
│ Temperature      -20°C–80°C │
│ Fluid            ISO VG 46  │
│ ─────────────               │
│                             │
│ [REQUEST QUOTE]             │
│ [DOWNLOAD DATASHEET]        │
└─────────────────────────────┘
```

---

## 3. Data Model Changes

### New Interfaces (in `src/data/content.ts`)

```typescript
/** Extended spec data for gallery items (sub-products) */
export interface GalleryItemSpec {
  label: string;
  value: string;
  isPrimary?: boolean;
}

/** A single gallery item representing a sub-product variant */
export interface GalleryItem {
  id: string;                   // Unique ID, e.g. "cyl-tierod"
  ref: string;                  // Reference code, e.g. "REF-01-A"
  name: string;                 // Display name
  category: string;             // "cylinders" | "systems" | "components"
  categoryLabel: string;        // "Hydraulic Cylinders" etc.
  tagline: string;              // Badge text, e.g. "Built to Endure"
  description: string;          // Full engineering description
  imageUrl: string;             // Primary product image (real photo/banner)
  schematicUrl: string;         // Technical schematic drawing
  icon: string;                 // Material Symbol icon name
  specs: GalleryItemSpec[];     // Detailed engineering specifications
}
```

### New Data Export

```typescript
export const galleryItems: GalleryItem[] = [
  // ── CYLINDERS ─────────────────────────────────────
  {
    id: "cyl-tierod",
    ref: "REF-01-A",
    name: "Tie Rod Type Hydraulic Cylinder",
    category: "cylinders",
    categoryLabel: "Hydraulic Cylinders",
    tagline: "Built to Endure",
    description: "Tie rod type hydraulic cylinders are widely used for their robust construction...",
    imageUrl: siteImages.sascoBanners.cylinders,
    schematicUrl: siteImages.heroTechnicalCutaway,
    icon: "settings_applications",
    specs: [
      { label: "Bore Size", value: "50 – 200 mm" },
      { label: "Stroke Length", value: "Up to 3000 mm" },
      { label: "Operating Pressure", value: "700 bar", isPrimary: true },
      { label: "Rod Diameter", value: "25 – 140 mm" },
      { label: "Mounting", value: "Flange / Trunnion / Clevis" },
      { label: "Seal Type", value: "Parker / Hallite" },
      { label: "Temperature Range", value: "-20°C to +80°C" },
      { label: "Hydraulic Fluid", value: "ISO VG 32/46/68" },
      { label: "Surface Finish", value: "Hard Chrome Plated" },
      { label: "Standard", value: "ISO 6020/6022" },
    ],
  },
  {
    id: "cyl-welded",
    ref: "REF-01-B",
    name: "Welded Type Hydraulic Cylinder",
    category: "cylinders",
    categoryLabel: "Hydraulic Cylinders",
    tagline: "Welded to Perform",
    description: "Welded type hydraulic cylinders are known for their compact design...",
    imageUrl: siteImages.sascoBanners.cylinders,
    schematicUrl: siteImages.heroTechnicalCutaway,
    icon: "settings_applications",
    specs: [
      { label: "Bore Size", value: "40 – 300 mm" },
      { label: "Stroke Length", value: "Up to 4000 mm" },
      { label: "Operating Pressure", value: "700 bar", isPrimary: true },
      { label: "Rod Diameter", value: "20 – 200 mm" },
      { label: "Mounting", value: "Cross Tube / Pin Eye" },
      { label: "Seal Type", value: "Polyurethane / NBR" },
      { label: "Temperature Range", value: "-20°C to +100°C" },
      { label: "Hydraulic Fluid", value: "ISO VG 32/46/68" },
      { label: "Surface Finish", value: "Hard Chrome Plated" },
      { label: "Standard", value: "Custom / OEM" },
    ],
  },
  {
    id: "cyl-millduty",
    ref: "REF-01-C",
    name: "Mill Duty Hydraulic Cylinder",
    category: "cylinders",
    categoryLabel: "Hydraulic Cylinders",
    tagline: "Built for the Toughest Jobs",
    description: "Mill duty hydraulic cylinders are specifically designed for the most demanding industrial applications...",
    imageUrl: siteImages.sascoBanners.cylinders,
    schematicUrl: siteImages.heroTechnicalCutaway,
    icon: "settings_applications",
    specs: [
      { label: "Bore Size", value: "100 – 500 mm" },
      { label: "Stroke Length", value: "Up to 6000 mm" },
      { label: "Operating Pressure", value: "350 bar", isPrimary: true },
      { label: "Rod Diameter", value: "50 – 350 mm" },
      { label: "Mounting", value: "Flanged Head / Cap" },
      { label: "Seal Type", value: "Heavy Duty Polyurethane" },
      { label: "Temperature Range", value: "-20°C to +120°C" },
      { label: "Hydraulic Fluid", value: "ISO VG 46/68" },
      { label: "Surface Finish", value: "Hard Chrome / Ceramic Coated" },
      { label: "Standard", value: "NFPA / Heavy Duty Custom" },
    ],
  },
  {
    id: "cyl-jacks",
    ref: "REF-01-D",
    name: "Hydraulic Jacks",
    category: "cylinders",
    categoryLabel: "Hydraulic Cylinders",
    tagline: "Lift with Confidence",
    description: "Sasco Hydraulics designs and manufactures high-performance hydraulic jacks...",
    imageUrl: siteImages.sascoBanners.cylinders,
    schematicUrl: siteImages.heroTechnicalCutaway,
    icon: "settings_applications",
    specs: [
      { label: "Capacity", value: "5 – 500 Tons" },
      { label: "Stroke", value: "50 – 300 mm" },
      { label: "Operating Pressure", value: "700 bar", isPrimary: true },
      { label: "Type", value: "Single / Double Acting" },
      { label: "Material", value: "Alloy Steel" },
      { label: "Seal Type", value: "High Pressure Polyurethane" },
      { label: "Temperature Range", value: "-10°C to +80°C" },
      { label: "Application", value: "Construction / Mining / Rail" },
    ],
  },

  // ── SYSTEMS ───────────────────────────────────────
  {
    id: "sys-powerpacks",
    ref: "REF-02-A",
    name: "Hydraulic Power Packs",
    category: "systems",
    categoryLabel: "Hydraulic Systems",
    tagline: "Built to Power",
    description: "Sasco Hydraulics offers high-performance hydraulic power packs...",
    imageUrl: siteImages.sascoBanners.systems,
    schematicUrl: siteImages.productSchematics.powerPack,
    icon: "bolt",
    specs: [
      { label: "Tank Capacity", value: "10 – 500 L" },
      { label: "Motor Power", value: "0.75 – 75 kW" },
      { label: "Operating Pressure", value: "700 bar", isPrimary: true },
      { label: "Flow Rate", value: "1 – 120 L/min" },
      { label: "Pump Type", value: "Gear / Vane / Piston" },
      { label: "Valve Configuration", value: "Modular / Manifold" },
      { label: "Cooling", value: "Air / Water Cooled" },
      { label: "Standard", value: "CE / ISO 4413" },
    ],
  },
  {
    id: "sys-filtration",
    ref: "REF-02-B",
    name: "Hydraulic Oil Filtration Units",
    category: "systems",
    categoryLabel: "Hydraulic Systems",
    tagline: "Pure Power, Clean Oil",
    description: "Sasco Hydraulics provides advanced hydraulic oil filtration units...",
    imageUrl: siteImages.sascoBanners.systems,
    schematicUrl: siteImages.productSchematics.powerPack,
    icon: "bolt",
    specs: [
      { label: "Filtration Rating", value: "3 – 25 µm" },
      { label: "Flow Rate", value: "10 – 200 L/min" },
      { label: "Operating Pressure", value: "420 bar", isPrimary: true },
      { label: "Filter Element", value: "Glass Fibre / Cellulose" },
      { label: "Contamination Indicator", value: "Visual / Electrical" },
      { label: "Connection", value: "BSP / SAE / Flange" },
      { label: "Temperature Range", value: "-10°C to +100°C" },
    ],
  },
  {
    id: "sys-flushing",
    ref: "REF-02-C",
    name: "Hydraulic Oil Flushing Systems",
    category: "systems",
    categoryLabel: "Hydraulic Systems",
    tagline: "Flushing Out Failure",
    description: "Sasco Hydraulics offers high-efficiency hydraulic oil flushing systems...",
    imageUrl: siteImages.sascoBanners.systems,
    schematicUrl: siteImages.productSchematics.powerPack,
    icon: "bolt",
    specs: [
      { label: "Flow Rate", value: "25 – 300 L/min" },
      { label: "Filtration", value: "3 µm absolute" },
      { label: "Operating Pressure", value: "10 bar", isPrimary: true },
      { label: "Heating", value: "Up to 70°C" },
      { label: "Cleanliness Target", value: "ISO 4406 16/14/11" },
      { label: "Tank Capacity", value: "100 – 500 L" },
      { label: "Connection", value: "Quick Disconnect / Flange" },
    ],
  },
  {
    id: "sys-testrigs",
    ref: "REF-02-D",
    name: "Hydraulic Test Rigs",
    category: "systems",
    categoryLabel: "Hydraulic Systems",
    tagline: "Performance. Verified.",
    description: "Sasco Hydraulics designs and manufactures high-performance hydraulic test rigs...",
    imageUrl: siteImages.sascoBanners.systems,
    schematicUrl: siteImages.productSchematics.powerPack,
    icon: "bolt",
    specs: [
      { label: "Test Pressure", value: "Up to 1000 bar", isPrimary: true },
      { label: "Flow Rate", value: "10 – 200 L/min" },
      { label: "Components Tested", value: "Cylinders / Valves / Pumps" },
      { label: "Data Logging", value: "Digital / Chart Recorder" },
      { label: "Accuracy", value: "±0.5% FS" },
      { label: "Power Supply", value: "415V / 3-Phase / 50Hz" },
      { label: "Standard", value: "ISO 10100 / Custom" },
    ],
  },

  // ── COMPONENTS ────────────────────────────────────
  {
    id: "comp-pumps",
    ref: "REF-03-A",
    name: "Hydraulic Pumps & Motor Pump Assembly",
    category: "components",
    categoryLabel: "Hydraulic Components",
    tagline: "Driven to Deliver",
    description: "Sasco Hydraulics provides a wide range of high-efficiency hydraulic pumps...",
    imageUrl: siteImages.sascoBanners.components,
    schematicUrl: siteImages.productSchematics.radialPiston,
    icon: "valve",
    specs: [
      { label: "Type", value: "Gear / Vane / Piston" },
      { label: "Displacement", value: "0.5 – 250 cc/rev" },
      { label: "Operating Pressure", value: "350 bar", isPrimary: true },
      { label: "Speed Range", value: "500 – 3000 RPM" },
      { label: "Motor Rating", value: "0.37 – 75 kW" },
      { label: "Mounting", value: "Foot / Flange / Bell Housing" },
      { label: "Rotation", value: "CW / CCW / Bi-directional" },
      { label: "Standard", value: "SAE / DIN / ISO" },
    ],
  },
  {
    id: "comp-valves",
    ref: "REF-03-B",
    name: "Hydraulic Valves & Manifolds",
    category: "components",
    categoryLabel: "Hydraulic Components",
    tagline: "Flow Perfected",
    description: "Sasco Hydraulics offers precision-engineered hydraulic valves and manifolds...",
    imageUrl: siteImages.sascoBanners.components,
    schematicUrl: siteImages.productSchematics.directionalValve,
    icon: "valve",
    specs: [
      { label: "Type", value: "Directional / Pressure / Flow" },
      { label: "Max Pressure", value: "500 bar", isPrimary: true },
      { label: "Flow Rate", value: "Up to 350 L/min" },
      { label: "Actuation", value: "Solenoid / Manual / Pilot" },
      { label: "Spool Configuration", value: "2/2 / 3/2 / 4/3" },
      { label: "Mounting", value: "Cetop 3/5/7/8 / Manifold" },
      { label: "Seal Material", value: "NBR / FKM / EPDM" },
      { label: "Standard", value: "ISO 4401 / DIN 24340" },
    ],
  },
  {
    id: "comp-filters",
    ref: "REF-03-C",
    name: "Hydraulic Filters & Oil Measurement Units",
    category: "components",
    categoryLabel: "Hydraulic Components",
    tagline: "Protect Your System",
    description: "Sasco Hydraulics provides high-performance hydraulic filtration solutions...",
    imageUrl: siteImages.sascoBanners.components,
    schematicUrl: siteImages.productSchematics.directionalValve,
    icon: "valve",
    specs: [
      { label: "Filtration Rating", value: "3 – 25 µm" },
      { label: "Type", value: "Suction / Return / Pressure" },
      { label: "Max Pressure", value: "420 bar", isPrimary: true },
      { label: "Flow Rate", value: "10 – 400 L/min" },
      { label: "Element Material", value: "Glass Fibre / SS Mesh" },
      { label: "Bypass Valve", value: "Integrated" },
      { label: "Particle Counter", value: "Laser-based Portable" },
      { label: "Standard", value: "ISO 16889 / ISO 4406" },
    ],
  },
  {
    id: "comp-rotary",
    ref: "REF-03-D",
    name: "Hydraulic Rotary Joints",
    category: "components",
    categoryLabel: "Hydraulic Components",
    tagline: "Rotate. Seal. Perform.",
    description: "Sasco Hydraulics offers high-performance hydraulic rotary joints...",
    imageUrl: siteImages.sascoBanners.components,
    schematicUrl: siteImages.productSchematics.axialPiston,
    icon: "valve",
    specs: [
      { label: "Passages", value: "1 – 8 Port" },
      { label: "Max Pressure", value: "400 bar", isPrimary: true },
      { label: "Speed", value: "Up to 500 RPM" },
      { label: "Media", value: "Hydraulic Oil / Water / Air" },
      { label: "Seal Type", value: "Mechanical / Lip Seal" },
      { label: "Connection", value: "BSP / SAE / Custom" },
      { label: "Housing Material", value: "Carbon Steel / SS" },
      { label: "Temperature Range", value: "-20°C to +150°C" },
    ],
  },
];

export type GalleryCategory = "all" | "cylinders" | "systems" | "components";
```

### Why This Structure?

- Each gallery item maps directly to an existing `SubProduct` section from `cylinders.sections`, `systems.sections`, `components.sections`
- The `category` field enables filtering
- The `specs` array is **much richer** than the parent product's 3-spec summary — these are full engineering datasheets
- `imageUrl` points to real product photos, `schematicUrl` to technical drawings
- Reference codes use parent prefix + sequential letter (`REF-01-A`, `REF-01-B`, etc.)

---

## 4. New Files & Modified Files

### New Files

| File | Purpose |
|---|---|
| `pages/ProductGalleryPage.tsx` | Main page component — breadcrumb, header, filter bar, gallery grid, CTA |
| `components/GalleryCard.tsx` | Individual gallery card (thumbnail, ref, title, mini-specs, action buttons) |
| `components/ImageLightbox.tsx` | Full-screen image previewer with zoom, pan, navigate |
| `components/SpecDrawer.tsx` | Right-side slide-in panel showing full engineering specifications |

### Modified Files

| File | Change |
|---|---|
| `src/data/content.ts` | Add `GalleryItem`, `GalleryItemSpec`, `GalleryCategory` interfaces + `galleryItems` data array |
| `App.tsx` | Add route: `/products/gallery` → `<ProductGalleryPage />` |
| `components/Navbar.tsx` | Add "Product Gallery" link inside Products dropdown (both desktop & mobile) |
| `index.css` | Add lightbox animations, spec drawer transitions, zoom cursor styles |

---

## 5. Component Specifications

### 5.1 `ProductGalleryPage.tsx`

**State**:
```typescript
const [activeFilter, setActiveFilter] = useState<GalleryCategory>("all");
const [lightboxOpen, setLightboxOpen] = useState(false);
const [lightboxIndex, setLightboxIndex] = useState(0);
const [specDrawerOpen, setSpecDrawerOpen] = useState(false);
const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
```

**Sections**:

#### Breadcrumb Bar
```
/// Home / Products / Gallery         ● {count} ITEMS LOADED
```
- Classes: `border-b border-border-slate bg-slate-50 px-4 sm:px-6 lg:px-12 py-2`
- Left: Breadcrumb links with `///` prefix in `text-primary font-bold`
- Right: Item count with green status dot, `font-mono text-[10px] sm:text-xs uppercase`

#### Page Header
```
PRODUCT GALLERY
Explore our complete range...
```
- Background: Grid-line pattern decoration (same as existing pages)
- Title: `text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tighter`
- Subtitle: `text-text-muted text-xs sm:text-sm max-w-3xl leading-relaxed`

#### Filter Bar
```
[ALL ●12] [CYLINDERS ●4] [SYSTEMS ●4] [COMPONENTS ●4]
```
- Container: `border-b border-border-slate bg-white px-4 sm:px-6 lg:px-12 py-3 flex items-center gap-3 flex-wrap`
- Each filter button:
  - Default: `border border-border-slate text-text-muted text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 sm:px-4 py-2 min-h-[44px]`
  - Active: `bg-text-main text-white border-text-main` (inverted = active)
  - Hover: `hover:border-text-main`
  - Count badge: Inline `text-primary font-mono` count next to label

#### Gallery Grid
- Class: `technical-grid bg-white dark:bg-background-dark`
- Items filtered by `activeFilter`
- Each cell renders `<GalleryCard />`
- Animated filter transition: cards fade in/out with `transition-opacity duration-200`

#### Bottom CTA Section
- Container: `bg-text-main text-white p-6 sm:p-8 lg:p-16`
- Section marker: `w-2 h-2 bg-primary` (red square)
- Title: `text-lg sm:text-xl font-bold uppercase tracking-wider`
- Description: `text-xs sm:text-sm text-gray-400`
- CTA: `bg-primary text-white font-bold uppercase tracking-widest min-h-[44px]` → links to `/contact-us`

---

### 5.2 `GalleryCard.tsx`

**Props**:
```typescript
interface GalleryCardProps {
  item: GalleryItem;
  index: number;
  onImageClick: (index: number) => void;
  onSpecClick: (item: GalleryItem) => void;
}
```

**Visual Structure**:
```
┌──────────────────────────────────┐
│ REF-01-A    [settings_apps icon] │
│ [CYLINDERS] badge                │
│                                  │
│ ┌──────────────────────────────┐ │
│ │                              │ │
│ │    Product Image             │ │
│ │    (4:3 aspect ratio)        │ │
│ │              [🔍 zoom icon]  │ │
│ └──────────────────────────────┘ │
│                                  │
│ TIE ROD TYPE HYDRAULIC CYLINDER  │
│ Built to Endure                  │
│                                  │
│ Bore Size          50–200 mm     │
│ Operating Pressure  700 bar      │
│ Stroke Length    Up to 3000 mm   │
│ ─────────────────────────────    │
│                                  │
│ [🔍 VIEW IMAGE]  [📋 VIEW SPECS]│
└──────────────────────────────────┘
```

**Key Design Decisions**:
- Container: `technical-cell p-0 group hover-invert transition-colors duration-200`
- Image wrapper: `aspect-[4/3] bg-slate-50 rounded-sm overflow-hidden relative cursor-pointer`
  - Image: `bg-cover bg-center` (real photos, not `bg-contain` like schematics)
  - Zoom icon overlay: `absolute bottom-2 right-2 bg-white/80 backdrop-blur p-1` — appears on hover via `opacity-0 group-hover:opacity-100`
  - Click triggers `onImageClick(index)`
- Ref code: `text-[10px] font-mono border border-border-slate px-1`
- Category badge: `py-0.5 px-2 border border-primary text-primary text-[10px] font-bold uppercase tracking-widest bg-primary/5`
- Title: `text-base sm:text-lg font-bold uppercase`
- Tagline: `text-[10px] text-text-muted uppercase tracking-wider font-mono`
- Mini-specs: First 3 specs displayed as `flex justify-between` rows with `font-mono text-[10px] sm:text-xs`
- Action buttons at `mt-auto`:
  - "View Image": `text-[10px] font-bold uppercase tracking-widest text-text-muted hover:text-primary` with `zoom_in` icon
  - "View Specs": `text-[10px] font-bold uppercase tracking-widest text-primary` with `assignment` icon

---

### 5.3 Shared Design Tokens for Gallery

| Token | Value | Context |
|---|---|---|
| Card min-width | `280px` (from `technical-grid`) | Minimum card size |
| Image aspect | `4:3` | Consistent thumbnails |
| Spec rows shown | 3 | Preview on card, full list in drawer |
| Card padding | `p-4 sm:p-6` | Inner content padding |
| Transition speed | `200ms` for colors, `300ms` for transforms | Card hover/animations |
| Font stack | Space Grotesk (display + mono) | All text |
| Border color | `#e2e8f0` (light), `#27272a` (dark) | Grid borders |

---

## 6. Image Lightbox / Previewer Spec

### `ImageLightbox.tsx`

**Props**:
```typescript
interface ImageLightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
  onOpenSpecs: (item: GalleryItem) => void;
}
```

**State**:
```typescript
const [zoom, setZoom] = useState(1);           // 1 = fit, range 1–5
const [pan, setPan] = useState({ x: 0, y: 0 }); // offset in px
const [isDragging, setIsDragging] = useState(false);
const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
```

### Visual Layout

```
┌─────────────────────────────────────────────────────────────────┐
│                                                        [✕]     │  ← top bar
│                                                                 │
│                                                                 │
│   [◄]           ┌──────────────────────────────┐       [►]     │
│                  │                              │               │
│                  │     ZOOMABLE / PANNABLE      │               │
│                  │        IMAGE AREA            │               │
│                  │                              │               │
│                  │     (cursor: grab/grabbing   │               │
│                  │      when zoomed)            │               │
│                  │                              │               │
│                  └──────────────────────────────┘               │
│                                                                 │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ [−] [100%] [+]          03 / 12         [📋 VIEW SPECS]     │ │  ← bottom bar
│ │ PRODUCT NAME            [CATEGORY]                  REF-XX  │ │
│ └─────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

### Controls & Behavior

| Control | Action | Implementation |
|---|---|---|
| **Close button (✕)** | Close lightbox | Top-right, `material-symbols-outlined` `close` icon |
| **Escape key** | Close lightbox | `useEffect` with `keydown` listener |
| **Click outside image** | Close lightbox | `onClick` on backdrop (not on image/controls) |
| **Left arrow (◄)** | Previous image | Button + `ArrowLeft` key |
| **Right arrow (►)** | Next image | Button + `ArrowRight` key |
| **Swipe left/right** | Navigate images | Touch events (`touchstart`, `touchmove`, `touchend`) with 50px threshold |
| **Zoom In (+)** | Increase zoom × 1.5 | Button, max zoom = 5× |
| **Zoom Out (−)** | Decrease zoom ÷ 1.5 | Button, min zoom = 1× |
| **Zoom level (100%)** | Display current zoom | Shows `100%`, `150%`, `200%`, etc. |
| **Scroll wheel** | Zoom in/out | `onWheel` event on image container, `deltaY` determines direction |
| **Pinch gesture** | Zoom on mobile | Touch events detecting 2 fingers, distance change = zoom delta |
| **Drag / Pan** | Move image when zoomed | `mousedown` → `mousemove` → `mouseup` (desktop), `touchmove` single finger (mobile) |
| **Double click** | Toggle zoom (1× ↔ 2.5×) | `onDoubleClick` on image |
| **View Specs** | Open spec drawer | Button in bottom bar, calls `onOpenSpecs(currentItem)` |

### Styling Details

| Element | Classes |
|---|---|
| **Backdrop** | `fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm` |
| **Top bar** | `absolute top-0 left-0 right-0 p-4 flex justify-end z-10` |
| **Close button** | `w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white/60 hover:text-white border border-white/20 hover:border-white transition-colors` |
| **Nav arrows** | `absolute top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/60 hover:text-white border border-white/10 hover:border-white/40 bg-black/40 backdrop-blur transition-colors` |
| **Left arrow** | `left-4` |
| **Right arrow** | `right-4` |
| **Image container** | `flex-1 flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing` (when zoomed) / `cursor-default` (when not zoomed) |
| **Image** | `<img>` tag with `max-w-full max-h-full object-contain select-none` + `transform: scale(${zoom}) translate(${pan.x}px, ${pan.y}px)` via inline style, `transition-transform duration-150` (only when not dragging) |
| **Bottom bar** | `absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6` |
| **Zoom controls** | `flex items-center gap-2 border border-white/20 px-2 py-1 text-xs font-mono text-white/80` |
| **Counter** | `text-xs sm:text-sm font-mono text-white/60 tracking-widest` — format: `03 / 12` (zero-padded) |
| **Product name** | `text-xs sm:text-sm font-bold uppercase text-white tracking-wider` |
| **Ref code** | `text-[10px] font-mono text-white/40 border border-white/20 px-1` |

### Zoom & Pan Logic (Pseudocode)

```typescript
// Zoom constraints
const MIN_ZOOM = 1;
const MAX_ZOOM = 5;
const ZOOM_STEP = 1.5;

// On wheel zoom
const handleWheel = (e: WheelEvent) => {
  e.preventDefault();
  const direction = e.deltaY > 0 ? -1 : 1;
  const newZoom = clamp(zoom * (direction > 0 ? ZOOM_STEP : 1/ZOOM_STEP), MIN_ZOOM, MAX_ZOOM);
  setZoom(newZoom);
  if (newZoom <= 1) setPan({ x: 0, y: 0 }); // Reset pan when fully zoomed out
};

// On drag (only active when zoom > 1)
const handleMouseDown = (e) => {
  if (zoom <= 1) return;
  setIsDragging(true);
  setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
};
const handleMouseMove = (e) => {
  if (!isDragging) return;
  setPan({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
};
const handleMouseUp = () => setIsDragging(false);

// Navigation resets zoom
const navigate = (newIndex: number) => {
  setZoom(1);
  setPan({ x: 0, y: 0 });
  onNavigate(newIndex);
};

// Swipe detection (mobile)
let touchStartX = 0;
const handleTouchStart = (e) => { touchStartX = e.touches[0].clientX; };
const handleTouchEnd = (e) => {
  const delta = e.changedTouches[0].clientX - touchStartX;
  if (zoom <= 1 && Math.abs(delta) > 50) {
    navigate(delta > 0 ? currentIndex - 1 : currentIndex + 1);
  }
};
```

### Navigation Wraparound
- Circular: last → first and first → last
- `const wrappedIndex = ((index % items.length) + items.length) % items.length;`

### Image Loading
- Show skeleton loader (`bg-white/5 animate-pulse`) while image loads
- Use `<img onLoad={...} onError={...}>` to detect load state
- On error: show fallback with `material-symbols-outlined` `broken_image` icon

---

## 7. Engineering Specification Panel Spec

### `SpecDrawer.tsx`

**Props**:
```typescript
interface SpecDrawerProps {
  item: GalleryItem | null;
  isOpen: boolean;
  onClose: () => void;
}
```

### Visual Layout (Right-side Slide-in)

```
┌─────────────────────────────────────┐
│ ← CLOSE                            │
│                                     │
│ REF-01-A                            │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│ TIE ROD TYPE                        │
│ HYDRAULIC CYLINDER                  │
│                                     │
│ [BUILT TO ENDURE]  [CYLINDERS]     │
│                                     │
│ Tie rod type hydraulic cylinders    │
│ are widely used for their robust    │
│ construction, easy maintenance...   │
│                                     │
│ ━━ ENGINEERING DATA ━━              │
│                                     │
│ Bore Size ............. 50–200 mm   │
│ Stroke Length ...... Up to 3000 mm  │
│ Operating Pressure .... 700 bar  ●  │
│ Rod Diameter ......... 25–140 mm    │
│ Mounting ........ Flange/Trunnion   │
│ Seal Type ........ Parker/Hallite   │
│ Temperature Range  -20°C to +80°C  │
│ Hydraulic Fluid .... ISO VG 32/46   │
│ Surface Finish .... Hard Chrome     │
│ Standard ......... ISO 6020/6022    │
│                                     │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│                                     │
│ [████ REQUEST QUOTE ████]           │
│ [░░░░ DOWNLOAD DATASHEET ░░░░]      │
│                                     │
│ ID: cyl-tierod                      │
│ Last Updated: 2026                  │
└─────────────────────────────────────┘
```

### Styling Details

| Element | Classes |
|---|---|
| **Backdrop** | `fixed inset-0 z-[50] bg-black/40 backdrop-blur-sm` — click to close |
| **Panel** | `fixed top-0 right-0 bottom-0 z-[51] w-full sm:w-[420px] md:w-[480px] bg-white dark:bg-background-dark border-l border-border-slate overflow-y-auto` |
| **Slide animation** | `transform transition-transform duration-300 ease-out` — `translate-x-full` when closed, `translate-x-0` when open |
| **Close button** | `flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-text-muted hover:text-primary min-h-[44px] p-4 sm:p-6 border-b border-border-slate` with `arrow_back` icon |
| **Ref code** | `text-[10px] font-mono border border-border-slate px-1 mb-4 inline-block` |
| **Title** | `text-xl sm:text-2xl font-bold uppercase tracking-tighter leading-tight mb-3` |
| **Tagline badge** | `py-1 px-2 border border-primary text-primary text-[10px] font-bold uppercase tracking-widest bg-primary/5 inline-block` |
| **Category badge** | `py-1 px-2 border border-border-slate text-text-muted text-[10px] font-bold uppercase tracking-widest inline-block` |
| **Description** | `text-xs sm:text-sm text-text-muted leading-relaxed` |
| **Section divider label** | `text-[10px] font-mono uppercase tracking-widest text-text-muted border-b border-border-slate pb-1 mb-4` — text: `ENGINEERING DATA` |
| **Spec rows** | Inside a bordered container with alternating `bg-slate-50` / `bg-white` |
| **Spec label** | `text-[10px] sm:text-xs text-text-muted font-mono uppercase` |
| **Spec value** | `text-[10px] sm:text-xs font-mono font-bold text-text-main` |
| **Primary spec** | Value gets `text-primary` + `●` indicator dot |
| **Primary CTA** | `w-full min-h-[44px] bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-primary/90` → mailto link |
| **Secondary CTA** | `w-full min-h-[44px] border border-border-slate text-text-main text-xs font-bold uppercase tracking-widest hover:border-text-main` → mailto link |
| **Footer meta** | `text-[10px] font-mono text-text-muted mt-6` showing ID + year |
| **Content padding** | `p-6 sm:p-8` for all inner sections |

### Behavior
- **Open**: Slides in from right, backdrop fades in
- **Close**: Escape key, click backdrop, click Close button
- **Scroll**: Panel content scrolls independently (`overflow-y-auto`)
- **Body scroll lock**: When drawer is open, `document.body.style.overflow = 'hidden'`
- **Focus trap**: Tab key cycles within the drawer when open

---

## 8. CSS / Animation Additions

### New CSS in `index.css`

```css
/* ── Lightbox / Previewer ──────────────────────── */

/* Lightbox fade-in */
.lightbox-enter {
  animation: lightbox-fade-in 200ms ease-out forwards;
}

@keyframes lightbox-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Lightbox fade-out */
.lightbox-exit {
  animation: lightbox-fade-out 150ms ease-in forwards;
}

@keyframes lightbox-fade-out {
  from { opacity: 1; }
  to { opacity: 0; }
}

/* Zoom cursor states */
.cursor-zoom-in { cursor: zoom-in; }
.cursor-zoom-out { cursor: zoom-out; }
.cursor-grab { cursor: grab; }
.cursor-grabbing { cursor: grabbing; }

/* ── Spec Drawer ───────────────────────────────── */

/* Drawer slide-in */
.drawer-enter {
  animation: drawer-slide-in 300ms ease-out forwards;
}

@keyframes drawer-slide-in {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

/* Drawer slide-out */
.drawer-exit {
  animation: drawer-slide-out 200ms ease-in forwards;
}

@keyframes drawer-slide-out {
  from { transform: translateX(0); }
  to { transform: translateX(100%); }
}

/* Backdrop fade */
.backdrop-enter {
  animation: backdrop-fade-in 200ms ease-out forwards;
}

@keyframes backdrop-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* ── Filter transitions ────────────────────────── */

.gallery-item-enter {
  animation: gallery-fade-in 200ms ease-out forwards;
}

@keyframes gallery-fade-in {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Alternating spec row backgrounds */
.spec-row:nth-child(even) {
  background-color: rgba(241, 245, 249, 0.5); /* slate-50 at 50% */
}

.dark .spec-row:nth-child(even) {
  background-color: rgba(39, 39, 42, 0.3); /* zinc-800 at 30% */
}

/* Image skeleton loading */
.image-skeleton {
  background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%);
  background-size: 200% 100%;
  animation: skeleton-shimmer 1.5s infinite;
}

@keyframes skeleton-shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.dark .image-skeleton {
  background: linear-gradient(90deg, #27272a 25%, #3f3f46 50%, #27272a 75%);
  background-size: 200% 100%;
}
```

---

## 9. Routing & Navigation Changes

### App.tsx Route Addition

```tsx
// New import
import ProductGalleryPage from './pages/ProductGalleryPage';

// New route (add before the catch-all or after existing routes)
<Route path="/products/gallery" element={<ProductGalleryPage />} />
```

### Navbar.tsx Dropdown Addition

In the Products dropdown (both desktop and mobile), add a **"Product Gallery"** link:

**Desktop dropdown** — append after the product links:
```tsx
{/* Divider */}
<div className="border-t border-border-slate my-1"></div>
{/* Gallery link */}
<Link
  to="/products/gallery"
  onClick={() => setMobileOpen(false)}
  className="block px-4 py-3 text-sm font-medium uppercase tracking-wide hover:bg-slate-50 dark:hover:bg-zinc-800 hover:text-primary touch-target flex items-center gap-2"
>
  <span className="material-symbols-outlined text-sm">photo_library</span>
  Product Gallery
</Link>
```

**Mobile nav** — add after the product list items:
```tsx
<Link
  to="/products/gallery"
  onClick={() => setMobileOpen(false)}
  className="block px-4 py-3 text-sm font-medium uppercase tracking-wide hover:bg-white dark:hover:bg-zinc-800 hover:text-primary border-l-2 border-transparent hover:border-primary touch-target"
>
  ● Product Gallery
</Link>
```

### Navigation Flow
```
User clicks "Products" in Navbar
  └─ Dropdown appears:
       ├─ Hydraulic Cylinders    → /hydraulic-cylinder (existing SubPage)
       ├─ Hydraulic Systems      → /hydraulic-systems  (existing SubPage)
       ├─ Hydraulic Components   → /hydraulic-components (existing SubPage)
       ├─ ─────────────────────  (divider)
       └─ Product Gallery        → /products/gallery   (NEW PAGE)
```

---

## 10. Responsive Behavior Matrix

| Component | Mobile (< 640px) | SM (640px+) | MD (768px+) | LG (1024px+) |
|---|---|---|---|---|
| **Page header text** | `text-3xl` | `text-4xl` | `text-4xl` | `text-5xl` |
| **Filter bar** | Horizontal scroll, wrapped | Wrapped row | Single row | Single row |
| **Gallery grid** | 1 column | 1–2 columns | 2–3 columns | 3–4 columns |
| **Card padding** | `p-4` | `p-6` | `p-6` | `p-6` |
| **Card image** | `aspect-[4/3]` | Same | Same | Same |
| **Card action buttons** | Full width, stacked | Inline row | Inline row | Inline row |
| **Lightbox arrows** | Hidden (use swipe) | Visible | Visible | Visible |
| **Lightbox bottom bar** | Stacked (name, controls) | Single row | Single row | Single row |
| **Lightbox zoom controls** | Smaller, touch-friendly | Standard | Standard | Standard |
| **Spec drawer width** | `w-full` (full screen) | `w-[420px]` | `w-[480px]` | `w-[480px]` |
| **Spec drawer padding** | `p-4` | `p-6` | `p-8` | `p-8` |
| **Swipe navigation** | ✅ Enabled | ✅ Enabled | ❌ Use arrows | ❌ Use arrows |
| **Pinch zoom** | ✅ Enabled | ✅ Enabled | ❌ Use wheel | ❌ Use wheel |

---

## 11. Interaction Flow Diagrams

### Flow 1: Browse & Filter

```
User arrives at /products/gallery
  │
  ├─ Sees all 12 items in technical-grid
  │
  ├─ Clicks [CYLINDERS] filter
  │   └─ Grid animates to show only 4 cylinder items
  │       └─ Active filter button inverts (dark bg, white text)
  │       └─ Item count updates: "● 4 ITEMS LOADED"
  │
  ├─ Clicks [ALL] filter
  │   └─ All 12 items restored
  │
  └─ Scrolls down → sees bottom CTA → "ENQUIRE NOW"
```

### Flow 2: Image Preview

```
User clicks on product image (or "View Image" button)
  │
  ├─ Lightbox opens (fade-in animation)
  │   ├─ Image displayed at fit-to-screen (zoom = 1×)
  │   ├─ Bottom bar shows: product name, ref code, counter "05 / 12", zoom "100%"
  │   │
  │   ├─ User scrolls wheel UP → zoom increases to 150%
  │   │   ├─ Cursor changes to grab hand
  │   │   ├─ User clicks and drags → image pans
  │   │   └─ Zoom display updates: "150%"
  │   │
  │   ├─ User presses → (right arrow)
  │   │   ├─ Zoom resets to 100%
  │   │   ├─ Pan resets to center
  │   │   └─ Next image slides in, counter updates "06 / 12"
  │   │
  │   ├─ User double-clicks image → toggles zoom (100% ↔ 250%)
  │   │
  │   ├─ User clicks [VIEW SPECS] in bottom bar
  │   │   └─ Spec drawer slides in from right (lightbox stays open beneath)
  │   │
  │   └─ User presses Escape / clicks ✕ / clicks backdrop
  │       └─ Lightbox closes (fade-out animation)
  │
  └─ Page restored to normal scroll state
```

### Flow 3: Engineering Specs

```
User clicks "View Specs" on a gallery card
  │
  ├─ Spec drawer slides in from right (300ms ease-out)
  │   ├─ Backdrop overlay appears (click to close)
  │   ├─ Body scroll locked
  │   │
  │   ├─ User reads full spec table
  │   │   ├─ Primary specs highlighted in red
  │   │   ├─ Alternating row backgrounds for readability
  │   │   └─ Scrollable if content exceeds viewport
  │   │
  │   ├─ User clicks [REQUEST QUOTE]
  │   │   └─ Opens mailto: with pre-filled subject + product ref
  │   │
  │   ├─ User clicks [DOWNLOAD DATASHEET]
  │   │   └─ Opens mailto: with datasheet request subject
  │   │
  │   └─ User closes drawer (Escape / ✕ / backdrop click)
  │       └─ Drawer slides out (200ms), backdrop fades, scroll restored
  │
  └─ Page restored
```

### Flow 4: Lightbox → Specs (Combined)

```
User is viewing image in lightbox
  │
  ├─ Clicks [📋 VIEW SPECS] in lightbox bottom bar
  │   ├─ Spec drawer slides in OVER the lightbox (z-51 > z-60? No.)
  │   │   Actually: Spec drawer z-index is below lightbox.
  │   │   So we close lightbox first, then open spec drawer.
  │   │
  │   └─ OR: We render spec drawer at z-[70] when triggered from lightbox.
  │       ├─ Lightbox remains visible but dimmed
  │       ├─ Spec drawer overlays on top
  │       └─ Closing spec drawer returns to lightbox
  │
  └─ Design decision: **Close lightbox, open spec drawer**
      (simpler, cleaner UX — no triple-layer stacking)
```

---

## 12. Accessibility Requirements

| Requirement | Implementation |
|---|---|
| **Keyboard navigation** | All interactive elements focusable via Tab |
| **Escape to close** | Both lightbox and drawer close on Escape |
| **Arrow key navigation** | Left/Right arrows navigate lightbox images |
| **Focus trap** | Tab cycles within lightbox/drawer when open |
| **Screen reader** | `aria-label` on all buttons, `role="dialog"` on overlays, `aria-modal="true"` |
| **Alt text** | All `<img>` tags have descriptive `alt` from `item.name` |
| **Touch targets** | All buttons `min-h-[44px] min-w-[44px]` per WCAG 2.5.5 |
| **Reduced motion** | `@media (prefers-reduced-motion: reduce)` → disable animations |
| **Body scroll lock** | `overflow: hidden` on body when overlay open |
| **High contrast** | White text on dark overlays exceeds AAA contrast |
| **Filter state** | `aria-pressed="true"` on active filter button |

---

## 13. Implementation Steps (Ordered)

### Phase 1: Data Layer
- [ ] **Step 1**: Add `GalleryItem`, `GalleryItemSpec`, `GalleryCategory` interfaces to `src/data/content.ts`
- [ ] **Step 2**: Add `galleryItems` array with all 12 sub-products (4 cylinders + 4 systems + 4 components) — full specs for each
- [ ] **Step 3**: Export new types and data

### Phase 2: Core Components
- [ ] **Step 4**: Create `components/GalleryCard.tsx` — individual gallery card component
- [ ] **Step 5**: Create `components/ImageLightbox.tsx` — full-screen image previewer with zoom/pan/navigate
- [ ] **Step 6**: Create `components/SpecDrawer.tsx` — right-side engineering specification panel

### Phase 3: Page Assembly
- [ ] **Step 7**: Create `pages/ProductGalleryPage.tsx` — main page with breadcrumb, header, filter bar, grid, CTA
- [ ] **Step 8**: Wire up state management: filter, lightbox open/close/navigate, spec drawer open/close

### Phase 4: Routing & Navigation
- [ ] **Step 9**: Add `/products/gallery` route to `App.tsx`
- [ ] **Step 10**: Add "Product Gallery" link to Navbar dropdown (desktop + mobile)

### Phase 5: Styling & Polish
- [ ] **Step 11**: Add new CSS animations and utility classes to `index.css`
- [ ] **Step 12**: Test responsive behavior across all breakpoints
- [ ] **Step 13**: Test keyboard navigation, focus trapping, screen reader compatibility
- [ ] **Step 14**: Test touch interactions (swipe, pinch-zoom) on mobile

---

## 14. Component Tree

```
App.tsx
├── Navbar.tsx (MODIFIED — add gallery link to Products dropdown)
├── Routes
│   ├── ... (existing routes)
│   └── /products/gallery → ProductGalleryPage.tsx (NEW)
│       │
│       ├── Breadcrumb Bar
│       ├── Page Header (with grid-line bg)
│       ├── Filter Bar (ALL | CYLINDERS | SYSTEMS | COMPONENTS)
│       ├── Gallery Grid (technical-grid)
│       │   └── GalleryCard.tsx × N (NEW)
│       │       ├── Image thumbnail (clickable → lightbox)
│       │       ├── Ref code + icon + category badge
│       │       ├── Title + tagline
│       │       ├── Mini spec rows (3)
│       │       └── Action buttons: [View Image] [View Specs]
│       │
│       ├── CTA Section (dark bg, "Need a custom solution?")
│       │
│       ├── ImageLightbox.tsx (NEW, conditional render)
│       │   ├── Backdrop (click to close)
│       │   ├── Navigation arrows (← →)
│       │   ├── Zoomable/pannable image
│       │   ├── Zoom controls (−, level, +)
│       │   ├── Image counter (03 / 12)
│       │   ├── Product info bar (name, category, ref)
│       │   └── [View Specs] button
│       │
│       └── SpecDrawer.tsx (NEW, conditional render)
│           ├── Backdrop (click to close)
│           ├── Close button
│           ├── Ref code
│           ├── Product name + tagline badge + category badge
│           ├── Description paragraph
│           ├── "Engineering Data" section header
│           ├── Full spec table (all rows, alternating bg)
│           ├── [Request Quote] CTA
│           ├── [Download Datasheet] CTA
│           └── Footer meta (ID + year)
│
└── Footer.tsx (unchanged)
```

---

> **End of Implementation Plan**
> Ready for development. All components follow the Utilitarian Grid design system documented in `DESIGN_SKILL.md`.
