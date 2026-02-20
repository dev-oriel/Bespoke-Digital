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
      <div className="max-w-3xl mb-16 md:mb-20 text-center md:text-left">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-slate-900 dark:text-white mb-6">
          What We <span className="text-primary">Build.</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-2xl mx-auto md:mx-0 leading-relaxed">
          From first line of code to long-term digital dominance. We build
          products that scale as fast as your ambition.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20 md:mb-24">
        {services.map((s, i) => (
          <ServiceBlock key={i} {...s} isWide={i === 4} />
        ))}

        <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-8 flex flex-col items-center justify-center text-center gap-4 group cursor-pointer hover:border-primary/50 transition-all">
          <span className="material-symbols-outlined text-5xl text-slate-400 dark:text-slate-500 group-hover:text-primary transition-colors">
            add_circle
          </span>
          <p className="text-slate-600 dark:text-slate-300 font-medium">
            Need something more specific?
          </p>
          <button className="text-primary font-bold text-sm underline underline-offset-8">
            Talk to an Engineer
          </button>
        </div>
      </div>

      <div className="mb-20 md:mb-32">
        <div className="bg-accent-amber rounded-2xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left shadow-[0_0_30px_rgba(245,158,11,0.2)]">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="size-16 rounded-full bg-slate-900/10 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-slate-900 text-4xl">
                celebration
              </span>
            </div>
            <div>
              <h4 className="text-2xl lg:text-3xl font-black text-slate-900 leading-tight">
                First Year Special Offer
              </h4>
              <p className="text-slate-900/80 font-bold mt-2 md:mt-1">
                Launch this year for discounted hosting and 24/7 priority
                support.
              </p>
            </div>
          </div>
          <button className="w-full lg:w-auto bg-slate-900 text-white px-10 py-4 rounded-full font-black uppercase tracking-tight hover:scale-105 transition-all shadow-xl">
            Claim Offer Now
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
        <div className="glass-card p-8 md:p-12 rounded-xl flex flex-col">
          <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4 text-center md:text-left">
            Direct Build
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-10 text-center md:text-left">
            Fixed-cost engagement for high-ownership projects.
          </p>
          <div className="space-y-8 mb-12">
            {[
              { t: "Deposit", d: "30% upfront to kickstart discovery." },
              { t: "Milestones", d: "40% split across agreed dev phases." },
              { t: "Final Payment", d: "30% upon launch & QA." },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left"
              >
                <span className="font-black text-primary text-3xl opacity-50 shrink-0">
                  0{i + 1}
                </span>
                <div>
                  <h5 className="font-bold text-slate-900 dark:text-white text-lg">
                    {item.t}
                  </h5>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {item.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-auto w-full bg-primary text-white py-4 rounded-full font-bold shadow-[0_0_20px_rgba(60,131,246,0.3)] hover:scale-105 transition-transform">
            Get Fixed Quote
          </button>
        </div>

        <div className="glass-card border-primary/40 p-8 md:p-12 rounded-xl flex flex-col relative overflow-hidden">
          <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
            Partner Model
          </div>
          <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4 text-center md:text-left mt-6 md:mt-0">
            Commission
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-10 text-center md:text-left">
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
              <div
                key={i}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left"
              >
                <span className="material-symbols-outlined text-primary text-3xl shrink-0">
                  {item.i}
                </span>
                <div>
                  <h5 className="font-bold text-slate-900 dark:text-white text-lg">
                    {item.t}
                  </h5>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {item.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-auto w-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 py-4 rounded-full font-bold hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors">
            Apply for Partnership
          </button>
        </div>
      </div>
    </div>
  );
}
