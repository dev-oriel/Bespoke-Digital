const features = [
  {
    title: "Tailored Architecture",
    icon: "architecture",
    desc: "No bloated themes or 'Frankenstein' plugins. Just clean, high-performance code written for your specific business.",
  },
  {
    title: "Performance Optimized",
    icon: "speed",
    desc: "We chase 100s on Lighthouse like it's a sport. If your site doesn't load instantly, we've failed you.",
  },
  {
    title: "Designed for Revenue",
    icon: "trending_up",
    desc: "A pretty site that doesn't sell is just an expensive painting. We build tools that actually move the needle.",
  },
];

export default function Features() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 flex flex-col items-center gap-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            Why Bespoke Wins
          </h2>

          <p className="text-slate-500 max-w-2xl text-base sm:text-lg">
            We don't do "fast-fashion" for the web. We build lasting
            infrastructure designed to outlast the latest AI trend.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="glass-card p-6 sm:p-8 lg:p-10 rounded-default group hover:border-primary/50 transition-all duration-500 flex flex-col gap-6"
            >
              <div className="size-12 sm:size-14 rounded-xl bg-primary/20 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl sm:text-3xl">
                  {f.icon}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold">{f.title}</h3>
              <p className="text-slate-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
