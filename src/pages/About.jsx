export default function About() {
  const stats = [
    { number: "0", label: "Templates" },
    { number: "100", label: "Lighthouse" },
    { number: "24h", label: "Response" },
    { number: "100%", label: "Ownership" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center mb-20 md:mb-24 text-center lg:text-left">
        <div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            We Engineer
            <br />
            <span className="text-primary">Digital Assets.</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            The web is flooded with disposable, fast-fashion websites built on
            bloated templates. We exist to build the exact opposite. We engineer
            bespoke software and high-performance websites that belong on your
            balance sheet as true assets.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
              <span className="material-symbols-outlined">terminal</span>
            </div>
            <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
              <span className="material-symbols-outlined">architecture</span>
            </div>
            <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
              <span className="material-symbols-outlined">speed</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass-card p-6 md:p-8 rounded-2xl flex flex-col items-center justify-center text-center"
            >
              <span className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-2">
                {stat.number}
              </span>
              <span className="text-xs md:text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="glass-card p-8 md:p-16 rounded-[2rem] border-primary/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none hidden md:block">
          <span className="material-symbols-outlined text-[15rem] text-primary">
            policy
          </span>
        </div>
        <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-8 relative z-10 text-center md:text-left">
          Our Manifesto
        </h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 relative z-10">
          {[
            {
              t: "1. No Generic Output",
              d: "We refuse to ship cookie-cutter designs or rely entirely on generic AI generation. Your brand identity deserves unique architecture.",
            },
            {
              t: "2. Performance is Mandatory",
              d: "If it doesn't load instantly, it's broken. We optimize for Core Web Vitals relentlessly because speed equals revenue.",
            },
            {
              t: "3. Radical Transparency",
              d: "No hidden fees, no hostage situations with your domains. You own what you pay for, and our pricing is always clear upfront.",
            },
            {
              t: "4. Shared Success",
              d: "Through our commission model and milestone billing, our financial success is tied directly to your satisfaction and revenue.",
            },
          ].map((m, i) => (
            <div key={i} className="text-center md:text-left">
              <h3 className="text-lg md:text-xl font-bold text-primary mb-2 md:mb-3">
                {m.t}
              </h3>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {m.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
