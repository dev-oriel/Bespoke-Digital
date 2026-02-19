import ServiceBlock from "../components/ServiceBlock";

export default function Services() {
  const services = [
    {
      icon: "monitor",
      title: "Web Development",
      quote: "Fast enough to outrun your regrets.",
      features: [
        "Pixel-perfect responsive interfaces",
        "SEO-first architecture",
        "Lightning fast Core Web Vitals",
      ],
    },
    {
      icon: "settings_input_component",
      title: "Software Solutions",
      quote: "We solve problems you don't even know you have yet.",
      features: [
        "Scalable backend API",
        "System modernizations",
        "Internal automation tools",
      ],
    },
    {
      icon: "shopping_cart",
      title: "E-Commerce",
      quote: "Conversion rates so high it's almost unfair.",
      features: [
        "Headless integrations",
        "Checkout optimization",
        "Inventory syncing",
      ],
    },
    {
      icon: "cloud_queue",
      title: "Hosting & Domains",
      quote: "So fast your competitors will think we're cheating.",
      features: [
        "99.99% Uptime SLA",
        "Global Edge Computing",
        "DDoS protection",
      ],
    },
    {
      icon: "support_agent",
      title: "Tech Support",
      quote: "We sleep so your servers don't have to.",
      features: [
        "24/7 Monitoring",
        "Security updates",
        "4-hour bug fix priority",
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 relative z-10">
      {/* Header */}
      <div className="max-w-3xl mb-20">
        <h1 className="text-6xl lg:text-8xl font-black tracking-tighter text-white mb-6">
          What We <span className="text-primary">Build.</span>
        </h1>
        <p className="text-slate-300 text-xl max-w-2xl leading-relaxed">
          From first line of code to long-term digital dominance. We build
          products that scale as fast as your ambition.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {services.map((s, i) => (
          <ServiceBlock key={i} {...s} isWide={i === 4} />
        ))}

        {/* Custom Engineer CTA Card */}
        <div className="border-2 border-dashed  border-slate-700 rounded-xl p-8 flex flex-col items-center justify-center text-center gap-4 group cursor-pointer hover:border-primary/50 transition-all">
          <span className="material-symbols-outlined text-5xl text-slate-500 group-hover:text-primary transition-colors">
            add_circle
          </span>
          <p className="text-slate-300 font-medium">
            Need something more specific?
          </p>
          <button className="text-primary font-bold text-sm underline underline-offset-8">
            Talk to an Engineer
          </button>
        </div>
      </div>

      {/* Special Offer - High Contrast Amber with Dark Text */}
      <div className="mb-32">
        <div className="bg-accent-amber rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_0_30px_rgba(245,158,11,0.2)]">
          <div className="flex items-center gap-6">
            <div className="size-16 rounded-full bg-slate-900/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-slate-900 text-4xl">
                celebration
              </span>
            </div>
            <div>
              <h4 className="text-2xl lg:text-3xl font-black text-slate-900">
                First Year Special Offer
              </h4>
              <p className="text-slate-900/80 font-bold mt-1">
                Launch this year for discounted hosting and 24/7 priority
                support.
              </p>
            </div>
          </div>
          <button className="bg-slate-900 text-white px-10 py-4 rounded-full font-black uppercase tracking-tight hover:scale-105 transition-all shadow-xl">
            Claim Offer Now
          </button>
        </div>
      </div>

      {/* Pricing Models */}
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Direct Build */}
        <div className="glass-card p-12 rounded-xl flex flex-col">
          <h3 className="text-3xl font-black text-white mb-4">Direct Build</h3>
          <p className="text-slate-400 mb-10">
            Fixed-cost engagement for high-ownership projects.
          </p>
          <div className="space-y-8 mb-12">
            {[
              { t: "Deposit", d: "30% upfront to kickstart discovery." },
              { t: "Milestones", d: "40% split across agreed dev phases." },
              { t: "Final Payment", d: "30% upon launch & QA." },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <span className="font-black text-primary text-3xl opacity-50">
                  0{i + 1}
                </span>
                <div>
                  <h5 className="font-bold text-white text-lg">{item.t}</h5>
                  <p className="text-slate-400 text-sm">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-auto bg-primary text-white py-4 rounded-full font-bold shadow-[0_0_20px_rgba(60,131,246,0.3)] hover:scale-105 transition-transform">
            Get Fixed Quote
          </button>
        </div>

        {/* Commission Based */}
        <div className="glass-card border-primary/40 p-12 rounded-xl flex flex-col relative overflow-hidden">
          <div className="absolute top-6 right-6 bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
            Partner Model
          </div>
          <h3 className="text-3xl font-black text-white mb-4">Commission</h3>
          <p className="text-slate-400 mb-10">
            Lower entry costs with long-term shared success.
          </p>
          <div className="space-y-8 mb-12">
            {[
              {
                i: "keyboard_double_arrow_down",
                t: "Lower Upfront",
                d: "Significantly reduced initial fee.",
              },
              {
                i: "handshake",
                t: "Revenue Share",
                d: "Small % of revenue for 12-24 months.",
              },
              {
                i: "update",
                t: "Forever Support",
                d: "Maintenance included at no extra cost.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <span className="material-symbols-outlined text-primary text-3xl">
                  {item.i}
                </span>
                <div>
                  <h5 className="font-bold text-white text-lg">{item.t}</h5>
                  <p className="text-slate-400 text-sm">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-auto bg-white text-slate-900 py-4 rounded-full font-bold hover:bg-slate-200 transition-colors">
            Apply for Partnership
          </button>
        </div>
      </div>
    </div>
  );
}
