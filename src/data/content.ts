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
  heroTechnicalCutaway: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7IpN5-W0WOuqj9HAabcerWG5-uXD_y9F5b-EtD6U2USkoo7rCDXlevJd8JEIJlaIOM7Lk5XFrPZDesxmKIza9bZdJyOOcSuRYVphOew4phmM0-rpbLhjsccPi0K4H-9afsw9mrX5AcQbf3ipkl8Wh7n2I0W2bXjCYUxSFSr8_OhmsP3MeEzKA3BxdPbTIrCoVkJRmdKcbeAp3cX7eP-OsjzCrwUisLINDpWuHoSfjx6w6oRAVIgxZd4xgfyqmxHm_H6__Rgsw118",
  productSchematics: {
    radialPiston: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXoG3-ogqG4FMVtXqjmyqWJiA-BYYE2jBaq7IOZboabF0PiWa2CUWC4bdOns7kJ6oazFxOuE0YPujJI4rO02hY9Fcy036HL_9kaD9UXSPXomVF3XzuRjsh0csnxR0hMzDP45yOCqu10CRNJBmaKcWxX7fdb6lIJ8E_pb9ZWymn1JMqWN6GeZJJomb6rjZHr-Nff0F6tBw-PI9a7YlfO-AdoZ0v39yCKWcWfL7h8zOkyMBXor_XSrEI4HE4UAoV90meEdm8uw71Eqg",
    directionalValve: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTy7feUqRiy_789_nne3Q1mbYpMv70S3HYLH7hDCYk0_H3u-J-L_ehnaIDhDqdq2jUc9I20-TA0kCafUoxUmXvQ7VVFoYeViMhE_ARLYMce0wEXAUj85TSprjNFAvWwOBdKX1YAH5I1Id7qN0MYE_ObvwizfBtjrRV9cBfqmeH8l-e6voeocjHRPpI-iAGzr8POgQtO-JiEOFgCikBqvAy_NmxQwYzZteiZX2wzRRIEZ1V9FWeBvmDyYE27HNW24vtoLTo5Rr1sKI",
    axialPiston: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaimBm4UIE9648wHRnUUnb6a3muY9GS-03D23N1Zm5BhPTEzrgCts4pgoAQP5C2NnHqZluldBd_tXrB8D7hgQsTUek5TO3Jjc8A2y12dNlAqMpJm80WA1g-ND6XF_mGv_GyUSL70ky-nXVdmK1QmSV1OaU__119bf3Qfwnqzth8v72E9GAnIlaKNWKaC-IpNN9ZomCECDdM_oAI7rCXYvld-cuGvVbghAarxMC-yHAHEtrLb-Sf11BO0sPEiz8W3JIQ_FSMXEZeW0",
    powerPack: "https://lh3.googleusercontent.com/aida-public/AB6AXuCE36vYU2q_gLGGmghc-dgCzPuVZi8PkKo3N1bpu4bx_xpbO1fDBSEGRJ7UtK7h5mnXs3IYyO31SWrODN5KtTBFtSeq5LpqimlvuY-HJhuh7gpPU6nj-pidptT7_uy0L1H2Ui0h0yukwTCUY1xjo6WFJ9wEBN8sEj5OL06Yay73wam1gesd0BPnbkjEHMpb3_KDdXb2ajKmL6Q6q-CZkuAhB3TUdat7IFfG8ixtxKbhckBjRhpyWrYKHVZ9sga0UYOMaTSlAxOFhpU",
  },
  sascoBanners: {
    cylinders: "https://www.sascohydraulics.com/wp-content/uploads/2025/09/Banner-1-3.jpg",
    systems: "https://www.sascohydraulics.com/wp-content/uploads/2025/09/Banner-5.jpg",
    components: "https://www.sascohydraulics.com/wp-content/uploads/2025/09/Banner-3-2.jpg",
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
