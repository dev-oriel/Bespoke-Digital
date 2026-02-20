export default function TrustIndicators() {
  const indicators = [
    {
      icon: "shield",
      title: "Secure Hosting",
      desc: "Enterprise-grade infrastructure",
    },
    {
      icon: "language",
      title: "Domain Control",
      desc: "Full ownership and autonomy",
    },
    {
      icon: "payments",
      title: "Milestone Billing",
      desc: "Satisfaction-based payments",
    },
  ];

  return (
    <section className="border-y border-slate-200 dark:border-slate-800 py-10 sm:py-12 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {indicators.map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="size-10 sm:size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <div>
                <h3 className="font-bold leading-tight">{item.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
