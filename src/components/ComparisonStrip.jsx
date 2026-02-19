export default function ComparisonStrip() {
  const rows = [
    { bad: "Generic, repetitive design", good: "Unique brand identity" },
    { bad: "Third-party dependencies", good: "Zero-dependency core" },
    { bad: "Security vulnerabilities", good: "Hardened custom code" },
  ];

  return (
    <section className="py-24 px-6 bg-slate-100 dark:bg-slate-950/50">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-2 text-center py-6 border-b border-slate-200 dark:border-slate-800 font-bold uppercase tracking-widest text-xs">
            <div className="text-slate-400">Generic AI Template</div>
            <div className="text-primary">Bespoke Build</div>
          </div>
          <div className="divide-y divide-slate-200 dark:divide-slate-800">
            {rows.map((row, i) => (
              <div key={i} className="grid grid-cols-2 py-6 px-8 items-center">
                <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 text-sm">
                  <span className="material-symbols-outlined text-red-500/50">
                    close
                  </span>
                  {row.bad}
                </div>
                <div className="flex items-center gap-3 text-slate-900 dark:text-white text-sm font-semibold border-l border-slate-200 dark:border-slate-800 pl-8">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  {row.good}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
