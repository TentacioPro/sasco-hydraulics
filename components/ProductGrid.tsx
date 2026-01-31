import React from 'react';

interface Product {
  ref: string;
  icon: string;
  image: string;
  title: string;
  specs: {
    label: string;
    value: string;
    isPrimary?: boolean;
  }[];
}

const products: Product[] = [
  {
    ref: "REF-01",
    icon: "settings_applications",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXoG3-ogqG4FMVtXqjmyqWJiA-BYYE2jBaq7IOZboabF0PiWa2CUWC4bdOns7kJ6oazFxOuE0YPujJI4rO02hY9Fcy036HL_9kaD9UXSPXomVF3XzuRjsh0csnxR0hMzDP45yOCqu10CRNJBmaKcWxX7fdb6lIJ8E_pb9ZWymn1JMqWN6GeZJJomb6rjZHr-Nff0F6tBw-PI9a7YlfO-AdoZ0v39yCKWcWfL7h8zOkyMBXor_XSrEI4HE4UAoV90meEdm8uw71Eqg",
    title: "Radial Piston Pump R",
    specs: [
      { label: "Pressure", value: "700 bar", isPrimary: true },
      { label: "Flow", value: "120 l/min" },
      { label: "Displacement", value: "Fixed" }
    ]
  },
  {
    ref: "REF-02",
    icon: "valve",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTy7feUqRiy_789_nne3Q1mbYpMv70S3HYLH7hDCYk0_H3u-J-L_ehnaIDhDqdq2jUc9I20-TA0kCafUoxUmXvQ7VVFoYeViMhE_ARLYMce0wEXAUj85TSprjNFAvWwOBdKX1YAH5I1Id7qN0MYE_ObvwizfBtjrRV9cBfqmeH8l-e6voeocjHRPpI-iAGzr8POgQtO-JiEOFgCikBqvAy_NmxQwYzZteiZX2wzRRIEZ1V9FWeBvmDyYE27HNW24vtoLTo5Rr1sKI",
    title: "Directional Seated Valve",
    specs: [
      { label: "Pressure", value: "500 bar", isPrimary: true },
      { label: "Feature", value: "Leak-free" },
      { label: "Actuation", value: "Solenoid" }
    ]
  },
  {
    ref: "REF-03",
    icon: "swap_driving_apps_wheel",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaimBm4UIE9648wHRnUUnb6a3muY9GS-03D23N1Zm5BhPTEzrgCts4pgoAQP5C2NnHqZluldBd_tXrB8D7hgQsTUek5TO3Jjc8A2y12dNlAqMpJm80WA1g-ND6XF_mGv_GyUSL70ky-nXVdmK1QmSV1OaU__119bf3Qfwnqzth8v72E9GAnIlaKNWKaC-IpNN9ZomCECDdM_oAI7rCXYvld-cuGvVbghAarxMC-yHAHEtrLb-Sf11BO0sPEiz8W3JIQ_FSMXEZeW0",
    title: "Axial Piston Pump",
    specs: [
      { label: "Displacement", value: "Variable", isPrimary: true },
      { label: "System", value: "Load Sensing" },
      { label: "Rating", value: "Heavy Duty" }
    ]
  },
  {
    ref: "REF-04",
    icon: "bolt",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCE36vYU2q_gLGGmghc-dgCzPuVZi8PkKo3N1bpu4bx_xpbO1fDBSEGRJ7UtK7h5mnXs3IYyO31SWrODN5KtTBFtSeq5LpqimlvuY-HJhuh7gpPU6nj-pidptT7_uy0L1H2Ui0h0yukwTCUY1xjo6WFJ9wEBN8sEj5OL06Yay73wam1gesd0BPnbkjEHMpb3_KDdXb2ajKmL6Q6q-CZkuAhB3TUdat7IFfG8ixtxKbhckBjRhpyWrYKHVZ9sga0UYOMaTSlAxOFhpU",
    title: "Compact Power Pack",
    specs: [
      { label: "Tank Vol", value: "30 L" },
      { label: "Pressure", value: "700 bar", isPrimary: true },
      { label: "Type", value: "Submerged" }
    ]
  }
];

const ProductGrid: React.FC = () => {
  return (
    <>
      {/* Section Header: Product Schematics */}
      <div className="bg-slate-50 dark:bg-zinc-900 border-b border-border-slate p-6 lg:px-12 flex items-end justify-between">
        <div>
          <h3 className="text-2xl font-bold uppercase tracking-tight">Product Schematics</h3>
          <p className="text-sm text-text-muted mt-1 max-w-lg">Select a component to view detailed engineering specifications and compatibility charts.</p>
        </div>
        <a className="hidden md:flex items-center gap-1 text-sm font-bold uppercase text-primary hover:underline" href="#">
          View Full Catalog <span className="material-symbols-outlined text-sm">chevron_right</span>
        </a>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white dark:bg-background-dark border-b border-border-slate">
        {products.map((product, index) => (
          <div 
            key={index} 
            className="group relative border-b border-r border-border-slate p-0 hover:bg-text-main hover:text-white transition-colors duration-200 cursor-pointer"
          >
            <div className="p-6 h-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-mono border border-border-slate px-1 group-hover:border-white/20">{product.ref}</span>
                <span className="material-symbols-outlined text-border-slate group-hover:text-white">{product.icon}</span>
              </div>
              
              <div className="aspect-[4/3] bg-slate-50 dark:bg-white/5 mb-6 rounded-sm relative overflow-hidden">
                <div 
                  className="w-full h-full bg-contain bg-center bg-no-repeat mix-blend-multiply dark:mix-blend-normal opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  style={{ backgroundImage: `url('${product.image}')` }}
                ></div>
              </div>
              
              <h4 className="text-lg font-bold uppercase mb-4 group-hover:text-white">{product.title}</h4>
              
              <div className="mt-auto space-y-2 font-mono text-xs">
                {product.specs.map((spec, idx) => (
                  <div key={idx} className="flex justify-between border-b border-border-slate/50 pb-1 group-hover:border-white/20">
                    <span className="text-text-muted group-hover:text-white/60">{spec.label}</span>
                    <span className={`font-bold ${spec.isPrimary ? 'text-primary' : ''}`}>{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductGrid;