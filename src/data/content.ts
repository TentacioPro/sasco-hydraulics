/**
 * Site content extracted from scraped data.
 * All text cleaned (no \n or \t).
 */

export interface HeroData {
  headline: string;
  subHeadline: string;
  bannerImageUrl: string;
}

export interface ProductSpec {
  label: string;
  value: string;
  isPrimary?: boolean;
}

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
  name: string;                 // Full product name
  tagline: string;              // Short descriptive tagline
  category: "cylinders" | "systems" | "components";
  description: string;          // Detailed description
  imageUrl: string;             // Product photo
  schematicUrl: string;         // Technical drawing/schematic
  icon: string;                 // Material icon name
  specs: GalleryItemSpec[];     // Detailed engineering specifications
}

export type GalleryCategory = "all" | "cylinders" | "systems" | "components";

export interface Product {
  ref: string;
  name: string;
  description: string;
  imageUrl: string;
  schematicImageUrl: string;
  icon: string;
  specs: ProductSpec[];
  slug: string;
}

/** All image URLs used across the site for minimalistic/schematic style */
export const siteImages = {
  heroTechnicalCutaway: new URL('../../gallery/1.jpg', import.meta.url).href,
  productSchematics: {
    radialPiston: new URL('../../gallery/18.jpg', import.meta.url).href,
    directionalValve: new URL('../../gallery/20.jpg', import.meta.url).href,
    axialPiston: new URL('../../gallery/17.jpg', import.meta.url).href,
    powerPack: new URL('../../gallery/10.jpg', import.meta.url).href,
  },
  sascoBanners: {
    cylinders: new URL('../../gallery/1.jpg', import.meta.url).href,
    systems: new URL('../../gallery/9.jpg', import.meta.url).href,
    components: new URL('../../gallery/17.jpg', import.meta.url).href,
  },
} as const;

export interface ContactData {
  address: string;
  phones: string[];
  emails: string[];
}

export interface SubProduct {
  title: string;
  tagline: string;
  description: string;
}

export interface SubPage {
  title: string;
  slug: string;
  intro?: string;
  sections?: SubProduct[];
  content?: string[];
}

export interface SiteContent {
  hero: HeroData;
  products: Product[];
  contact: ContactData;
  about: SubPage;
  cylinders: SubPage;
  systems: SubPage;
  components: SubPage;
  services: SubPage;
  gallery: SubPage;
  nav: {
    home: string;
    about: string;
    products: string;
    services: string;
    gallery: string;
    contact: string;
    enquire: string;
  };
}

export const siteContent: SiteContent = {
  hero: {
    headline: "Power flows where hydraulics go.",
    subHeadline: "Strength in every motion.",
    bannerImageUrl: "https://www.sascohydraulics.com/wp-content/uploads/2025/09/Banner-1-3.jpg",
  },
  products: [
    {
      ref: "REF-01",
      name: "Hydraulic Cylinders",
      description: "Engineered for performance, durability, our cylinders are trusted across a wide range of industries and applications.",
      imageUrl: "https://www.sascohydraulics.com/wp-content/uploads/2025/09/Banner-1-3.jpg",
      schematicImageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7IpN5-W0WOuqj9HAabcerWG5-uXD_y9F5b-EtD6U2USkoo7rCDXlevJd8JEIJlaIOM7Lk5XFrPZDesxmKIza9bZdJyOOcSuRYVphOew4phmM0-rpbLhjsccPi0K4H-9afsw9mrX5AcQbf3ipkl8Wh7n2I0W2bXjCYUxSFSr8_OhmsP3MeEzKA3BxdPbTIrCoVkJRmdKcbeAp3cX7eP-OsjzCrwUisLINDpWuHoSfjx6w6oRAVIgxZd4xgfyqmxHm_H6__Rgsw118",
      icon: "settings_applications",
      specs: [
        { label: "Pressure", value: "700 bar", isPrimary: true },
        { label: "Flow", value: "120 l/min" },
        { label: "Type", value: "Tie Rod / Welded" },
      ],
      slug: "hydraulic-cylinder",
    },
    {
      ref: "REF-02",
      name: "Hydraulic Systems",
      description: "We specialize in the design, engineering, and manufacturing of custom and standard hydraulic systems.",
      imageUrl: "https://www.sascohydraulics.com/wp-content/uploads/2025/09/Banner-5.jpg",
      schematicImageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCE36vYU2q_gLGGmghc-dgCzPuVZi8PkKo3N1bpu4bx_xpbO1fDBSEGRJ7UtK7h5mnXs3IYyO31SWrODN5KtTBFtSeq5LpqimlvuY-HJhuh7gpPU6nj-pidptT7_uy0L1H2Ui0h0yukwTCUY1xjo6WFJ9wEBN8sEj5OL06Yay73wam1gesd0BPnbkjEHMpb3_KDdXb2ajKmL6Q6q-CZkuAhB3TUdat7IFfG8ixtxKbhckBjRhpyWrYKHVZ9sga0UYOMaTSlAxOFhpU",
      icon: "bolt",
      specs: [
        { label: "Tank Vol", value: "30 L" },
        { label: "Pressure", value: "700 bar", isPrimary: true },
        { label: "Type", value: "Power Pack" },
      ],
      slug: "hydraulic-systems",
    },
    {
      ref: "REF-03",
      name: "Hydraulic Components",
      description: "We supply a wide range of high-performance hydraulic components that form the efficient hydraulic systems.",
      imageUrl: "https://www.sascohydraulics.com/wp-content/uploads/2025/09/Banner-3-2.jpg",
      schematicImageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTy7feUqRiy_789_nne3Q1mbYpMv70S3HYLH7hDCYk0_H3u-J-L_ehnaIDhDqdq2jUc9I20-TA0kCafUoxUmXvQ7VVFoYeViMhE_ARLYMce0wEXAUj85TSprjNFAvWwOBdKX1YAH5I1Id7qN0MYE_ObvwizfBtjrRV9cBfqmeH8l-e6voeocjHRPpI-iAGzr8POgQtO-JiEOFgCikBqvAy_NmxQwYzZteiZX2wzRRIEZ1V9FWeBvmDyYE27HNW24vtoLTo5Rr1sKI",
      icon: "valve",
      specs: [
        { label: "Pressure", value: "500 bar", isPrimary: true },
        { label: "Feature", value: "Leak-free" },
        { label: "Actuation", value: "Solenoid" },
      ],
      slug: "hydraulic-components",
    },
  ],
  contact: {
    address: "No. 63/3, 11th Cross Street, Mahatma Gandhi Road, Tass Industrial Estate, Chennai – 600 098.",
    phones: ["+91 95005 23232", "+91 99402 50926"],
    emails: ["sascohydra@gmail.com", "info@sascohydraulics.com"],
  },
  nav: {
    home: "Home",
    about: "About Us",
    products: "Products",
    services: "Services",
    gallery: "Gallery",
    contact: "Contact Us",
    enquire: "Enquire Now",
  },
  about: {
    title: "About Us",
    slug: "about-us",
    intro: "Sasco Hydraulics, Design and manufacture standard and custom-made hydraulic cylinders, Hydraulic Systems & Components for various applications including Special Purpose machineries, earth moving, construction, material handling equipment, steel, cement, marine, mining, process industries and industrial machines.",
    content: [
      "We strictly adhere to quality norms in every stage of our periodical inspection during the manufacturing process and we do 100% testing of all the products we manufacture; hence our customers are guaranteed a total satisfaction through our long-lasting reliable solution to their needs in time.",
      "With a strong commitment to innovation and engineering excellence, Sasco Hydraulics continues to evolve by incorporating the latest technologies and precision manufacturing techniques.",
      "To be a globally recognized leader in hydraulic engineering by continuously advancing our technologies, expanding our capabilities, and setting new standards in quality and customer service across all industries we serve.",
      "To design, manufacture, and deliver high-quality, reliable hydraulic solutions that empower industries through innovation, precision, and performance—ensuring customer satisfaction, operational efficiency, and long-term value.",
      "Our core values are the foundation of everything we do. We are deeply committed to delivering uncompromising quality, ensuring that every product meets the highest standards of performance, durability, and safety.",
    ],
    sections: [
      {
        title: "Hydraulic Solutions We Deliver",
        tagline: "20+ Years of Experience",
        description: "At Sasco Hydraulics, we specialize in the design, engineering, and manufacturing of high-performance hydraulic cylinders, systems, and components for a wide range of industrial applications. Our capabilities extend from standard product offerings to fully customized hydraulic solutions tailored to meet the specific requirements of each client. We serve a broad spectrum of industries, including special purpose machinery, earthmoving and construction equipment, material handling systems, marine and offshore applications, mining, steel and cement plants, process industries, and other heavy-duty industrial machines. Whether it's powering complex equipment or ensuring smooth, reliable operations in the most demanding environments, our hydraulic solutions are built to deliver maximum efficiency, safety, and durability.",
      },
    ],
  },
  cylinders: {
    title: "Hydraulic Cylinders",
    slug: "hydraulic-cylinder",
    sections: [
      {
        title: "Tie Rod Type Hydraulic Cylinder",
        tagline: "Built to Endure",
        description: "Tie rod type hydraulic cylinders are widely used for their robust construction, easy maintenance, and versatility across a broad range of industrial applications. These cylinders feature high-strength steel tie rods that hold the end caps tightly against the cylinder barrel, ensuring structural integrity even under high pressure. Ideal for medium to heavy-duty operations, tie rod cylinders are commonly used in manufacturing equipment, machine tools, material handling systems, and other industrial machinery.",
      },
      {
        title: "Welded Type Hydraulic Cylinder",
        tagline: "Welded to Perform",
        description: "Welded type hydraulic cylinders are known for their compact design, high strength, and long-lasting performance in demanding applications. Unlike tie rod cylinders, these feature end caps welded directly to the cylinder barrel, resulting in a space-saving design that offers superior resistance to heavy loads and high pressures.",
      },
      {
        title: "Mill Duty type Hydraulic Cylinders",
        tagline: "Built for the Toughest Jobs",
        description: "Mill duty hydraulic cylinders are specifically designed for the most demanding industrial applications, including steel mills, foundries, presses, and other heavy machinery environments. These cylinders are built with heavy-duty construction, flanged end caps, and bolted or threaded heads, offering exceptional strength and resistance to harsh working conditions like high temperatures, heavy loads, and continuous operation.",
      },
      {
        title: "Hydraulic Jacks",
        tagline: "Lift with Confidence",
        description: "Sasco Hydraulics designs and manufactures high-performance hydraulic jacks engineered for lifting, pushing, pulling, and holding heavy loads with precision and safety. Our hydraulic jacks are built to deliver high force in compact, robust designs, making them ideal for applications in construction, automotive, railways, mining, heavy equipment maintenance, and industrial operations.",
      },
    ],
  },
  systems: {
    title: "Hydraulic Systems",
    slug: "hydraulic-systems",
    sections: [
      {
        title: "Hydraulic Power Packs",
        tagline: "Built to Power",
        description: "Sasco Hydraulics offers high-performance hydraulic power packs designed to deliver reliable and efficient hydraulic energy for a wide range of industrial and mobile applications. Our power packs integrate key components such as pumps, motors, valves, reservoirs, and control units into a compact, customizable system engineered for optimal performance.",
      },
      {
        title: "Hydraulic Oil Filtration Units",
        tagline: "Pure Power, Clean Oil",
        description: "Sasco Hydraulics provides advanced hydraulic oil filtration units designed to protect hydraulic systems by maintaining clean, contaminant-free oil. Our filtration solutions help extend the life of hydraulic components, reduce maintenance costs, and improve system reliability by efficiently removing particles, moisture, and impurities.",
      },
      {
        title: "Hydraulic Oil Flushing Systems",
        tagline: "Flushing Out Failure",
        description: "Sasco Hydraulics offers high-efficiency hydraulic oil flushing systems designed to clean and maintain the integrity of hydraulic circuits by removing contaminants, sludge, and residual particles. Our flushing systems ensure that new or serviced hydraulic systems meet strict cleanliness standards before commissioning, reducing wear and preventing system failure.",
      },
      {
        title: "Hydraulic Test Rigs",
        tagline: "Performance. Verified.",
        description: "Sasco Hydraulics designs and manufactures high-performance hydraulic test rigs used for testing hydraulic components, systems, and assemblies under real-world operating conditions. Our test rigs are engineered for precision, safety, and flexibility, allowing for accurate pressure, flow, and performance testing of cylinders, valves, pumps, motors, hoses, and other hydraulic equipment.",
      },
    ],
  },
  components: {
    title: "Hydraulic Components",
    slug: "hydraulic-components",
    sections: [
      {
        title: "Hydraulic Pumps & Motor Pump Assembly",
        tagline: "Driven to Deliver",
        description: "Sasco Hydraulics provides a wide range of high-efficiency hydraulic pumps and integrated motor pump assemblies designed for consistent fluid power delivery across demanding applications. Our solutions combine premium-quality hydraulic pumps with robust electric or diesel motors, engineered to deliver optimal flow, pressure, and energy efficiency.",
      },
      {
        title: "Hydraulic Valves & Manifolds",
        tagline: "Flow Perfected",
        description: "Sasco Hydraulics offers precision-engineered hydraulic valves and manifolds designed to control flow, direction, and pressure within hydraulic systems with maximum efficiency and reliability. Our valves—including directional, pressure control, flow control, and proportional types—are built to withstand high pressures and deliver responsive, leak-free operation in all working conditions.",
      },
      {
        title: "Hydraulic Filters & Oil Contamination Measuring Units",
        tagline: "Protect Your System",
        description: "Sasco Hydraulics provides high-performance hydraulic filtration solutions and oil contamination measuring units designed to protect and extend the life of your hydraulic systems. Our hydraulic filters effectively remove particles, water, and other contaminants from hydraulic fluids, ensuring optimal system performance and reducing wear on critical components.",
      },
      {
        title: "Hydraulic Rotary Joints",
        tagline: "Rotate. Seal. Perform.",
        description: "Sasco Hydraulics offers high-performance hydraulic rotary joints designed to transfer hydraulic fluid between stationary and rotating components without leakage or pressure loss. Built for durability and precision, our rotary joints are engineered to withstand high pressures, continuous rotation, and demanding operating conditions.",
      },
    ],
  },
  services: {
    title: "Services",
    slug: "services",
    sections: [
      {
        title: "Trouble Shooting and Modification of Hydraulic systems",
        tagline: "Expert Diagnosis",
        description: "Sasco Hydraulics offers expert troubleshooting and modification services for a wide range of hydraulic systems across industries. Our team of experienced engineers and technicians specializes in diagnosing performance issues, identifying root causes, and implementing efficient solutions to restore systems to optimal working condition. Whether it's pressure loss, overheating, slow response, leakage, or contamination problems, we provide fast and accurate fault analysis backed by advanced testing tools and deep technical know-how.",
      },
      {
        title: "Repair & Reconditioning of Hydraulic Cylinders & Components",
        tagline: "Precision Restoration",
        description: "Sasco Hydraulics provides expert repair and reconditioning services for all types of hydraulic cylinders and components. Our skilled team restores worn, damaged, or malfunctioning parts to like-new condition, ensuring reliable performance and extended service life. With precision machining, replacement of seals and rods, honing, testing, and quality checks, we help reduce downtime and save costs compared to full replacements.",
      },
    ],
  },
  gallery: {
    title: "Gallery",
    slug: "gallery",
    intro: "Explore our portfolio of hydraulic solutions and manufacturing capabilities.",
  },
};

/** Gallery items for the Product Gallery page */
export const galleryItems: GalleryItem[] = [
  // ── CYLINDERS ─────────────────────────────────────
  {
    id: "cyl-tierod",
    ref: "REF-01-A",
    name: "Tie Rod Type Hydraulic Cylinder",
    tagline: "Built to Endure",
    category: "cylinders",
    description: "Tie rod type hydraulic cylinders are widely used for their robust construction, easy maintenance, and versatility across a broad range of industrial applications. These cylinders feature high-strength steel tie rods that hold the end caps tightly against the cylinder barrel, ensuring structural integrity even under high pressure.",
    imageUrl: new URL('../../gallery/1.jpg', import.meta.url).href,
    schematicUrl: new URL('../../gallery/2.jpg', import.meta.url).href,
    icon: "settings_applications",
    specs: [
      { label: "Bore Size", value: "50–200 mm" },
      { label: "Stroke Length", value: "Up to 3000 mm" },
      { label: "Operating Pressure", value: "700 bar", isPrimary: true },
      { label: "Rod Diameter", value: "25–140 mm" },
      { label: "Mounting", value: "Flange/Trunnion" },
      { label: "Seal Type", value: "Parker/Hallite" },
      { label: "Temperature Range", value: "-20°C to +80°C" },
      { label: "Hydraulic Fluid", value: "ISO VG 32/46" },
      { label: "Surface Finish", value: "Hard Chrome" },
      { label: "Standard", value: "ISO 6020/6022" },
    ],
  },
  {
    id: "cyl-welded",
    ref: "REF-01-B",
    name: "Welded Type Hydraulic Cylinder",
    tagline: "Welded to Perform",
    category: "cylinders",
    description: "Welded type hydraulic cylinders are known for their compact design, high strength, and long-lasting performance in demanding applications. Unlike tie rod cylinders, these feature end caps welded directly to the cylinder barrel, resulting in a space-saving design that offers superior resistance to heavy loads and high pressures.",
    imageUrl: new URL('../../gallery/3.jpg', import.meta.url).href,
    schematicUrl: new URL('../../gallery/4.jpg', import.meta.url).href,
    icon: "settings_applications",
    specs: [
      { label: "Bore Size", value: "40–250 mm" },
      { label: "Stroke Length", value: "Up to 5000 mm" },
      { label: "Operating Pressure", value: "700 bar", isPrimary: true },
      { label: "Rod Diameter", value: "20–180 mm" },
      { label: "Mounting", value: "Clevis/Flange" },
      { label: "Seal Type", value: "Parker/NOK" },
      { label: "Temperature Range", value: "-20°C to +100°C" },
      { label: "Construction", value: "Welded Barrel" },
      { label: "Surface Finish", value: "Hard Chrome/Ceramic" },
    ],
  },
  {
    id: "cyl-millduty",
    ref: "REF-01-C",
    name: "Mill Duty Type Hydraulic Cylinders",
    tagline: "Built for the Toughest Jobs",
    category: "cylinders",
    description: "Mill duty hydraulic cylinders are specifically designed for the most demanding industrial applications, including steel mills, foundries, presses, and other heavy machinery environments. These cylinders are built with heavy-duty construction, flanged end caps, and bolted or threaded heads, offering exceptional strength and resistance to harsh working conditions.",
    imageUrl: new URL('../../gallery/5.jpg', import.meta.url).href,
    schematicUrl: new URL('../../gallery/6.jpg', import.meta.url).href,
    icon: "precision_manufacturing",
    specs: [
      { label: "Bore Size", value: "80–500 mm" },
      { label: "Stroke Length", value: "Up to 8000 mm" },
      { label: "Operating Pressure", value: "700 bar", isPrimary: true },
      { label: "Rod Diameter", value: "50–400 mm" },
      { label: "Construction", value: "Heavy-Duty Flanged" },
      { label: "Mounting", value: "Flanged/Threaded" },
      { label: "Temperature Range", value: "-40°C to +120°C" },
      { label: "Application", value: "Steel Mills/Foundries" },
      { label: "Load Capacity", value: "Up to 500 tons" },
    ],
  },
  {
    id: "cyl-jack",
    ref: "REF-01-D",
    name: "Hydraulic Jacks",
    tagline: "Lift with Confidence",
    category: "cylinders",
    description: "Sasco Hydraulics designs and manufactures high-performance hydraulic jacks engineered for lifting, pushing, pulling, and holding heavy loads with precision and safety. Our hydraulic jacks are built to deliver high force in compact, robust designs, making them ideal for applications in construction, automotive, railways, mining, heavy equipment maintenance, and industrial operations.",
    imageUrl: new URL('../../gallery/7.jpg', import.meta.url).href,
    schematicUrl: new URL('../../gallery/8.jpg', import.meta.url).href,
    icon: "build",
    specs: [
      { label: "Lifting Capacity", value: "5 to 500 tons", isPrimary: true },
      { label: "Stroke Length", value: "50–600 mm" },
      { label: "Operating Pressure", value: "700 bar" },
      { label: "Body Material", value: "Alloy Steel" },
      { label: "Base Type", value: "Toe/Bottle" },
      { label: "Safety Factor", value: "3:1" },
      { label: "Surface Finish", value: "Powder Coated" },
      { label: "Application", value: "Lifting/Pushing/Pulling" },
    ],
  },

  // ── SYSTEMS ───────────────────────────────────────
  {
    id: "sys-powerpack",
    ref: "REF-02-A",
    name: "Hydraulic Power Packs",
    tagline: "Built to Power",
    category: "systems",
    description: "Sasco Hydraulics offers high-performance hydraulic power packs designed to deliver reliable and efficient hydraulic energy for a wide range of industrial and mobile applications. Our power packs integrate key components such as pumps, motors, valves, reservoirs, and control units into a compact, customizable system engineered for optimal performance.",
    imageUrl: new URL('../../gallery/9.jpg', import.meta.url).href,
    schematicUrl: new URL('../../gallery/10.jpg', import.meta.url).href,
    icon: "bolt",
    specs: [
      { label: "Tank Capacity", value: "30–500 liters" },
      { label: "Operating Pressure", value: "700 bar", isPrimary: true },
      { label: "Flow Rate", value: "10–250 lpm" },
      { label: "Motor Power", value: "3–75 kW" },
      { label: "Pump Type", value: "Gear/Piston/Vane" },
      { label: "Control", value: "Manual/Automatic/PLC" },
      { label: "Filtration", value: "10–25 micron" },
      { label: "Mounting", value: "Horizontal/Vertical" },
      { label: "Enclosure", value: "IP54/IP55" },
    ],
  },
  {
    id: "sys-filtration",
    ref: "REF-02-B",
    name: "Hydraulic Oil Filtration Units",
    tagline: "Pure Power, Clean Oil",
    category: "systems",
    description: "Sasco Hydraulics provides advanced hydraulic oil filtration units designed to protect hydraulic systems by maintaining clean, contaminant-free oil. Our filtration solutions help extend the life of hydraulic components, reduce maintenance costs, and improve system reliability by efficiently removing particles, moisture, and impurities.",
    imageUrl: new URL('../../gallery/11.jpg', import.meta.url).href,
    schematicUrl: new URL('../../gallery/12.jpg', import.meta.url).href,
    icon: "water_drop",
    specs: [
      { label: "Flow Rate", value: "50–500 lpm" },
      { label: "Filtration Level", value: "3–25 micron", isPrimary: true },
      { label: "Operating Pressure", value: "350 bar" },
      { label: "Filter Type", value: "Depth/Suction/Return" },
      { label: "Media", value: "Cellulose/Glass Fiber" },
      { label: "Contamination Level", value: "ISO 4406 16/14/11" },
      { label: "Water Removal", value: "Coalescing System" },
      { label: "Indicator", value: "Visual/Electronic" },
    ],
  },
  {
    id: "sys-flushing",
    ref: "REF-02-C",
    name: "Hydraulic Oil Flushing Systems",
    tagline: "Flushing Out Failure",
    category: "systems",
    description: "Sasco Hydraulics offers high-efficiency hydraulic oil flushing systems designed to clean and maintain the integrity of hydraulic circuits by removing contaminants, sludge, and residual particles. Our flushing systems ensure that new or serviced hydraulic systems meet strict cleanliness standards before commissioning.",
    imageUrl: new URL('../../gallery/13.jpg', import.meta.url).href,
    schematicUrl: new URL('../../gallery/14.jpg', import.meta.url).href,
    icon: "cleaning_services",
    specs: [
      { label: "Flow Rate", value: "100–1000 lpm" },
      { label: "Operating Pressure", value: "700 bar", isPrimary: true },
      { label: "Temperature Control", value: "40–80°C" },
      { label: "Filtration", value: "3–10 micron" },
      { label: "Tank Capacity", value: "200–2000 liters" },
      { label: "Pump Type", value: "Centrifugal/Piston" },
      { label: "Heating", value: "Electric/Steam" },
      { label: "Cleanliness Target", value: "ISO 4406 14/12/9" },
    ],
  },
  {
    id: "sys-testrig",
    ref: "REF-02-D",
    name: "Hydraulic Test Rigs",
    tagline: "Performance. Verified.",
    category: "systems",
    description: "Sasco Hydraulics designs and manufactures high-performance hydraulic test rigs used for testing hydraulic components, systems, and assemblies under real-world operating conditions. Our test rigs are engineered for precision, safety, and flexibility, allowing for accurate pressure, flow, and performance testing.",
    imageUrl: new URL('../../gallery/15.jpg', import.meta.url).href,
    schematicUrl: new URL('../../gallery/16.jpg', import.meta.url).href,
    icon: "speed",
    specs: [
      { label: "Max Test Pressure", value: "1000 bar", isPrimary: true },
      { label: "Flow Range", value: "1–500 lpm" },
      { label: "Pressure Accuracy", value: "±0.5% FS" },
      { label: "Flow Accuracy", value: "±1% FS" },
      { label: "Data Logging", value: "PLC/SCADA" },
      { label: "Load Capacity", value: "Up to 500 tons" },
      { label: "Safety", value: "Burst Protection" },
      { label: "Temperature Range", value: "-20°C to +100°C" },
    ],
  },

  // ── COMPONENTS ────────────────────────────────────
  {
    id: "comp-pumps",
    ref: "REF-03-A",
    name: "Hydraulic Pumps & Motor Pump Assembly",
    tagline: "Driven to Deliver",
    category: "components",
    description: "Sasco Hydraulics provides a wide range of high-efficiency hydraulic pumps and integrated motor pump assemblies designed for consistent fluid power delivery across demanding applications. Our solutions combine premium-quality hydraulic pumps with robust electric or diesel motors.",
    imageUrl: new URL('../../gallery/17.jpg', import.meta.url).href,
    schematicUrl: new URL('../../gallery/18.jpg', import.meta.url).href,
    icon: "valve",
    specs: [
      { label: "Pump Type", value: "Gear/Piston/Vane" },
      { label: "Operating Pressure", value: "500 bar", isPrimary: true },
      { label: "Flow Rate", value: "10–250 lpm" },
      { label: "Motor Power", value: "3–100 kW" },
      { label: "Speed", value: "500–3000 RPM" },
      { label: "Displacement", value: "Variable/Fixed" },
      { label: "Mounting", value: "SAE/ISO Flange" },
      { label: "Seal Type", value: "Mechanical/Shaft" },
    ],
  },
  {
    id: "comp-valves",
    ref: "REF-03-B",
    name: "Hydraulic Valves & Manifolds",
    tagline: "Flow Perfected",
    category: "components",
    description: "Sasco Hydraulics offers precision-engineered hydraulic valves and manifolds designed to control flow, direction, and pressure within hydraulic systems with maximum efficiency and reliability. Our valves include directional, pressure control, flow control, and proportional types.",
    imageUrl: new URL('../../gallery/19.jpg', import.meta.url).href,
    schematicUrl: new URL('../../gallery/20.jpg', import.meta.url).href,
    icon: "swap_horiz",
    specs: [
      { label: "Valve Type", value: "Directional/Pressure/Flow" },
      { label: "Operating Pressure", value: "500 bar", isPrimary: true },
      { label: "Flow Rate", value: "Up to 500 lpm" },
      { label: "Actuation", value: "Solenoid/Manual/Pilot" },
      { label: "Ports", value: "2–10 ports" },
      { label: "Response Time", value: "<50 ms" },
      { label: "Leak Rate", value: "<5 drops/min" },
      { label: "Material", value: "Ductile Iron/Steel" },
    ],
  },
  {
    id: "comp-filters",
    ref: "REF-03-C",
    name: "Hydraulic Filters & Oil Contamination Measuring Units",
    tagline: "Protect Your System",
    category: "components",
    description: "Sasco Hydraulics provides high-performance hydraulic filtration solutions and oil contamination measuring units designed to protect and extend the life of your hydraulic systems. Our hydraulic filters effectively remove particles, water, and other contaminants from hydraulic fluids.",
    imageUrl: new URL('../../gallery/21.jpg', import.meta.url).href,
    schematicUrl: new URL('../../gallery/22.jpg', import.meta.url).href,
    icon: "filter_alt",
    specs: [
      { label: "Filtration Level", value: "3–25 micron", isPrimary: true },
      { label: "Flow Rate", value: "Up to 500 lpm" },
      { label: "Operating Pressure", value: "420 bar" },
      { label: "Filter Type", value: "Suction/Pressure/Return" },
      { label: "Media", value: "Glass Fiber/Wire Mesh" },
      { label: "Indicator", value: "Visual/Electronic" },
      { label: "Housing", value: "Aluminum/Steel" },
      { label: "Bypass Valve", value: "Integrated" },
    ],
  },
  {
    id: "comp-rotary",
    ref: "REF-03-D",
    name: "Hydraulic Rotary Joints",
    tagline: "Rotate. Seal. Perform.",
    category: "components",
    description: "Sasco Hydraulics offers high-performance hydraulic rotary joints designed to transfer hydraulic fluid between stationary and rotating components without leakage or pressure loss. Built for durability and precision, our rotary joints are engineered to withstand high pressures and continuous rotation.",
    imageUrl: new URL('../../gallery/23.jpg', import.meta.url).href,
    schematicUrl: new URL('../../gallery/24.jpg', import.meta.url).href,
    icon: "rotate_right",
    specs: [
      { label: "Operating Pressure", value: "500 bar", isPrimary: true },
      { label: "Max Speed", value: "Up to 500 RPM" },
      { label: "Passages", value: "1–12 passages" },
      { label: "Seal Type", value: "Balanced Mechanical" },
      { label: "Bearing", value: "Precision Ball/Roller" },
      { label: "Temperature Range", value: "-20°C to +100°C" },
      { label: "Leak Rate", value: "<0.1 cc/min" },
      { label: "Material", value: "Stainless Steel/Bronze" },
    ],
  },

  // ── ADDITIONAL CYLINDERS ──────────────────────────
  {
    id: "cyl-telescopic",
    ref: "REF-01-E",
    name: "Telescopic Hydraulic Cylinders",
    tagline: "Compact When Closed, Powerful When Extended",
    category: "cylinders",
    description: "Telescopic hydraulic cylinders provide extended stroke lengths while maintaining a compact retracted design. Ideal for dump trucks, cranes, and applications requiring maximum reach in confined spaces.",
    imageUrl: new URL('../../gallery/25.jpg', import.meta.url).href,
    schematicUrl: new URL('../../gallery/26.jpg', import.meta.url).href,
    icon: "height",
    specs: [
      { label: "Stages", value: "2-6 stages" },
      { label: "Extended Length", value: "Up to 12000 mm" },
      { label: "Operating Pressure", value: "350 bar", isPrimary: true },
      { label: "Bore Size", value: "60-300 mm" },
      { label: "Mounting", value: "Clevis/Flange" },
      { label: "Application", value: "Dump Trucks/Cranes" },
      { label: "Load Capacity", value: "Up to 100 tons" },
    ],
  },
  {
    id: "cyl-custom",
    ref: "REF-01-F",
    name: "Custom Engineered Cylinders",
    tagline: "Tailored to Your Specifications",
    category: "cylinders",
    description: "Custom-designed hydraulic cylinders engineered to meet unique application requirements. From special mounting configurations to extreme environmental conditions, we deliver bespoke solutions.",
    imageUrl: new URL('../../gallery/27.jpg', import.meta.url).href,
    schematicUrl: new URL('../../gallery/28.jpg', import.meta.url).href,
    icon: "engineering",
    specs: [
      { label: "Bore Size", value: "25-800 mm" },
      { label: "Stroke Length", value: "Custom" },
      { label: "Operating Pressure", value: "Up to 1000 bar", isPrimary: true },
      { label: "Material Options", value: "Alloy/Stainless/Chrome" },
      { label: "Coating", value: "Custom Surface Treatment" },
      { label: "Seal Type", value: "Application Specific" },
      { label: "Lead Time", value: "4-8 weeks" },
      { label: "Certifications", value: "ISO/CE/Custom" },
    ],
  },
  {
    id: "cyl-double-acting",
    ref: "REF-01-G",
    name: "Double Acting Hydraulic Cylinders",
    tagline: "Bidirectional Power",
    category: "cylinders",
    description: "Double-acting cylinders provide hydraulic power in both extension and retraction strokes, offering precise control and consistent force in both directions for demanding industrial applications.",
    imageUrl: new URL('../../gallery/29.jpg', import.meta.url).href,
    schematicUrl: new URL('../../gallery/30.jpg', import.meta.url).href,
    icon: "swap_vert",
    specs: [
      { label: "Bore Size", value: "32-250 mm" },
      { label: "Stroke Length", value: "50-4000 mm" },
      { label: "Operating Pressure", value: "700 bar", isPrimary: true },
      { label: "Rod Diameter", value: "18-180 mm" },
      { label: "Push/Pull Force", value: "Equal" },
      { label: "Mounting", value: "Universal" },
      { label: "Port Size", value: "1/4\" to 2\"" },
    ],
  },

  // ── ADDITIONAL SYSTEMS ────────────────────────────
  {
    id: "sys-cooling",
    ref: "REF-02-E",
    name: "Hydraulic Oil Cooling Systems",
    tagline: "Temperature Under Control",
    category: "systems",
    description: "Advanced hydraulic oil cooling systems designed to maintain optimal operating temperatures, preventing overheating and ensuring consistent performance in high-duty cycle applications.",
    imageUrl: new URL('../../gallery/31.jpg', import.meta.url).href,
    schematicUrl: new URL('../../gallery/32.jpg', import.meta.url).href,
    icon: "ac_unit",
    specs: [
      { label: "Cooling Capacity", value: "5-200 kW", isPrimary: true },
      { label: "Flow Rate", value: "50-1000 lpm" },
      { label: "Operating Temperature", value: "40-90°C" },
      { label: "Cooler Type", value: "Air/Water" },
      { label: "Fan Type", value: "AC/DC/Hydraulic" },
      { label: "Control", value: "Thermostat/PLC" },
      { label: "Efficiency", value: ">95%" },
    ],
  },
  {
    id: "sys-accumulator",
    ref: "REF-02-F",
    name: "Hydraulic Accumulator Systems",
    tagline: "Energy Storage Solutions",
    category: "systems",
    description: "Hydraulic accumulator systems store pressurized fluid for emergency backup, shock absorption, and energy efficiency. Available in bladder, piston, and diaphragm configurations.",
    imageUrl: new URL('../../gallery/33.jpg', import.meta.url).href,
    schematicUrl: new URL('../../gallery/34.jpg', import.meta.url).href,
    icon: "battery_charging_full",
    specs: [
      { label: "Capacity", value: "0.5-100 liters" },
      { label: "Working Pressure", value: "350 bar", isPrimary: true },
      { label: "Type", value: "Bladder/Piston/Diaphragm" },
      { label: "Gas Precharge", value: "Nitrogen" },
      { label: "Material", value: "Carbon/Stainless Steel" },
      { label: "Temperature Range", value: "-20°C to +80°C" },
      { label: "Certification", value: "ASME/PED" },
    ],
  },
  {
    id: "sys-lubrication",
    ref: "REF-02-G",
    name: "Centralized Lubrication Systems",
    tagline: "Automated Maintenance",
    category: "systems",
    description: "Automatic centralized lubrication systems ensure consistent lubricant delivery to critical components, reducing wear, downtime, and manual maintenance requirements.",
    imageUrl: new URL('../../gallery/35.jpg', import.meta.url).href,
    schematicUrl: new URL('../../gallery/1.jpg', import.meta.url).href,
    icon: "water_drop",
    specs: [
      { label: "Pump Type", value: "Progressive/Dual Line" },
      { label: "Delivery Rate", value: "0.5-10 kg/min", isPrimary: true },
      { label: "Outlets", value: "Up to 200 points" },
      { label: "Pressure", value: "Up to 400 bar" },
      { label: "Reservoir", value: "2-40 liters" },
      { label: "Control", value: "Timer/PLC/Sensor" },
      { label: "Lubricant Type", value: "Grease/Oil" },
    ],
  },

  // ── ADDITIONAL COMPONENTS ─────────────────────────
  {
    id: "comp-hoses",
    ref: "REF-03-E",
    name: "Hydraulic Hoses & Fittings",
    tagline: "Flexible Connections",
    category: "components",
    description: "High-pressure hydraulic hoses and fittings designed for durability and leak-free operation. Available in various pressure ratings, sizes, and end configurations.",
    imageUrl: new URL('../../gallery/2.jpg', import.meta.url).href,
    schematicUrl: new URL('../../gallery/3.jpg', import.meta.url).href,
    icon: "cable",
    specs: [
      { label: "Pressure Rating", value: "Up to 420 bar", isPrimary: true },
      { label: "Size Range", value: "1/4\" to 2\"" },
      { label: "Temperature", value: "-40°C to +100°C" },
      { label: "Construction", value: "1-6 wire braids/spiral" },
      { label: "Fitting Type", value: "JIC/NPT/BSP/SAE" },
      { label: "Material", value: "Steel/Stainless" },
      { label: "Length", value: "Custom cut" },
    ],
  },
  {
    id: "comp-gauges",
    ref: "REF-03-F",
    name: "Pressure Gauges & Sensors",
    tagline: "Precision Monitoring",
    category: "components",
    description: "Hydraulic pressure gauges and electronic sensors for accurate pressure monitoring. Digital and analog options with various mounting configurations and pressure ranges.",
    imageUrl: new URL('../../gallery/4.jpg', import.meta.url).href,
    schematicUrl: new URL('../../gallery/5.jpg', import.meta.url).href,
    icon: "speed",
    specs: [
      { label: "Pressure Range", value: "0-1000 bar", isPrimary: true },
      { label: "Accuracy", value: "±0.5% to ±2%" },
      { label: "Type", value: "Analog/Digital" },
      { label: "Connection", value: "1/4\" NPT/BSP" },
      { label: "Display", value: "LCD/LED/Dial" },
      { label: "Output", value: "4-20mA/0-10V" },
      { label: "Housing", value: "Stainless/Brass" },
    ],
  },
  {
    id: "comp-seals",
    ref: "REF-03-G",
    name: "Hydraulic Seals & O-Rings",
    tagline: "Zero Leakage",
    category: "components",
    description: "Complete range of hydraulic seals, O-rings, and seal kits for all cylinder and valve types. Premium materials ensure long service life and reliable sealing performance.",
    imageUrl: new URL('../../gallery/6.jpg', import.meta.url).href,
    schematicUrl: new URL('../../gallery/7.jpg', import.meta.url).href,
    icon: "radio_button_checked",
    specs: [
      { label: "Material", value: "NBR/FKM/PTFE/PU" },
      { label: "Temperature", value: "-40°C to +200°C" },
      { label: "Pressure", value: "Up to 700 bar", isPrimary: true },
      { label: "Types", value: "Piston/Rod/Wiper" },
      { label: "Sizes", value: "20-500 mm ID" },
      { label: "Application", value: "Universal" },
      { label: "Standard", value: "ISO/DIN/Parker" },
    ],
  },
  {
    id: "comp-couplers",
    ref: "REF-03-H",
    name: "Quick Disconnect Couplers",
    tagline: "Fast & Secure",
    category: "components",
    description: "High-flow quick disconnect couplers for rapid connection and disconnection of hydraulic lines. Flat-face and poppet valve designs available with various sealing options.",
    imageUrl: new URL('../../gallery/8.jpg', import.meta.url).href,
    schematicUrl: new URL('../../gallery/9.jpg', import.meta.url).href,
    icon: "link",
    specs: [
      { label: "Flow Rate", value: "Up to 400 lpm" },
      { label: "Operating Pressure", value: "420 bar", isPrimary: true },
      { label: "Type", value: "Flat-face/Poppet" },
      { label: "Connection", value: "Thread/Push-Lock" },
      { label: "Size Range", value: "1/4\" to 1\"" },
      { label: "Material", value: "Steel/Stainless" },
      { label: "Locking", value: "Push-Pull/Screw" },
    ],
  },
  {
    id: "comp-cylinders-repair",
    ref: "REF-03-I",
    name: "Cylinder Repair Kits",
    tagline: "Restore Performance",
    category: "components",
    description: "Comprehensive cylinder repair and rebuild kits including seals, bearings, rods, and bushings. OEM-equivalent quality for all major cylinder brands and types.",
    imageUrl: new URL('../../gallery/10.jpg', import.meta.url).href,
    schematicUrl: new URL('../../gallery/11.jpg', import.meta.url).href,
    icon: "build_circle",
    specs: [
      { label: "Kit Type", value: "Seal/Complete Rebuild" },
      { label: "Cylinder Type", value: "All types" },
      { label: "Components", value: "Seals/Bearings/Bushings", isPrimary: true },
      { label: "Material", value: "OEM Equivalent" },
      { label: "Size Range", value: "25-500 mm bore" },
      { label: "Quality", value: "ISO Certified" },
      { label: "Warranty", value: "12 months" },
    ],
  },
  {
    id: "comp-motors",
    ref: "REF-03-J",
    name: "Hydraulic Motors",
    tagline: "Rotary Power",
    category: "components",
    description: "High-torque hydraulic motors for industrial and mobile applications. Gear, piston, and vane motor types available in various displacements and mounting configurations.",
    imageUrl: new URL('../../gallery/12.jpg', import.meta.url).href,
    schematicUrl: new URL('../../gallery/13.jpg', import.meta.url).href,
    icon: "settings",
    specs: [
      { label: "Type", value: "Gear/Piston/Vane" },
      { label: "Displacement", value: "5-500 cc/rev" },
      { label: "Operating Pressure", value: "350 bar", isPrimary: true },
      { label: "Speed Range", value: "50-3000 RPM" },
      { label: "Torque", value: "Up to 5000 Nm" },
      { label: "Mounting", value: "SAE/ISO Flange" },
      { label: "Efficiency", value: ">90%" },
    ],
  },
  {
    id: "comp-reservoirs",
    ref: "REF-03-K",
    name: "Hydraulic Reservoirs & Tanks",
    tagline: "Fluid Storage",
    category: "components",
    description: "Custom and standard hydraulic reservoirs with integrated filtration, breathers, and level indicators. Designed for optimal fluid cooling and contamination control.",
    imageUrl: new URL('../../gallery/14.jpg', import.meta.url).href,
    schematicUrl: new URL('../../gallery/15.jpg', import.meta.url).href,
    icon: "storage",
    specs: [
      { label: "Capacity", value: "10-2000 liters", isPrimary: true },
      { label: "Material", value: "Steel/Aluminum/Stainless" },
      { label: "Features", value: "Baffle/Strainer/Breather" },
      { label: "Mounting", value: "Vertical/Horizontal" },
      { label: "Ports", value: "Custom Configuration" },
      { label: "Coating", value: "Powder/Epoxy" },
      { label: "Level Indicator", value: "Sight Glass/Electronic" },
    ],
  },
  {
    id: "comp-accumulators",
    ref: "REF-03-L",
    name: "Hydraulic Accumulators",
    tagline: "Pressure Compensation",
    category: "components",
    description: "Individual hydraulic accumulators for shock absorption, volume compensation, and emergency power. Gas-charged bladder and piston types for various applications.",
    imageUrl: new URL('../../gallery/16.jpg', import.meta.url).href,
    schematicUrl: new URL('../../gallery/17.jpg', import.meta.url).href,
    icon: "battery_std",
    specs: [
      { label: "Volume", value: "0.1-50 liters" },
      { label: "Max Pressure", value: "350 bar", isPrimary: true },
      { label: "Type", value: "Bladder/Piston" },
      { label: "Gas", value: "Nitrogen" },
      { label: "Connection", value: "SAE/BSP/Metric" },
      { label: "Application", value: "Shock/Emergency/Volume" },
      { label: "Certification", value: "CE/ASME" },
    ],
  },
];

