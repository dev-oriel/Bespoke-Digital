export default function About() {
  const stats = [
    { number: "0", label: "Templates Used" },
    { number: "100", label: "Lighthouse Scores" },
    { number: "24h", label: "Support Response" },
    { number: "100%", label: "Code Ownership" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <h1 className="text-5xl lg:text-7xl font-black mb-6 tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            We Engineer
            <br />
            <span className="text-primary">Digital Assets.</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
            The web is flooded with disposable, fast-fashion websites built on
            bloated templates. We exist to build the exact opposite. We engineer
            bespoke software and high-performance websites that belong on your
            balance sheet as true assets.
          </p>
          <div className="flex gap-4">
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
              className="glass-card p-8 rounded-2xl flex flex-col items-center justify-center text-center"
            >
              <span className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-2">
                {stat.number}
              </span>
              <span className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="glass-card p-12 md:p-16 rounded-[2rem] border-primary/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
          <span className="material-symbols-outlined text-[15rem] text-primary">
            policy
          </span>
        </div>
        <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-8 relative z-10">
          Our Manifesto
        </h2>
        <div className="grid md:grid-cols-2 gap-10 relative z-10">
          <div>
            <h3 className="text-xl font-bold text-primary mb-3">
              1. No Generic Output
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              We refuse to ship cookie-cutter designs or rely entirely on
              generic AI generation. Your brand identity deserves unique
              architecture.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-primary mb-3">
              2. Performance is Mandatory
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              If it doesn't load instantly, it's broken. We optimize for Core
              Web Vitals relentlessly because speed equals revenue.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-primary mb-3">
              3. Radical Transparency
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              No hidden fees, no hostage situations with your domains. You own
              what you pay for, and our pricing is always clear upfront.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-primary mb-3">
              4. Shared Success
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Through our commission model and milestone billing, our financial
              success is tied directly to your satisfaction and revenue.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
