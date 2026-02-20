import { Link } from "react-router-dom";

export default function Portfolio() {
  const projects = [
    {
      title: "Fintech Dashboard UI",
      category: "Web Application",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      metrics: "Reduced latency by 40%",
      tech: ["React", "Tailwind", "Node.js"],
    },
    {
      title: "Luxury E-Commerce",
      category: "Headless Commerce",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
      metrics: "Increased conversion by 125%",
      tech: ["Next.js", "Shopify Plus", "Framer Motion"],
    },
    {
      title: "Global Logistics Portal",
      category: "Enterprise Software",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
      metrics: "Zero downtime deployment",
      tech: ["Vue", "PostgreSQL", "AWS"],
    },
    {
      title: "AI Intake Automation",
      category: "Custom Tooling",
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop",
      metrics: "Saved 40hrs/week",
      tech: ["Python", "React", "OpenAI API"],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
      <div className="max-w-3xl mb-20">
        <h1 className="text-6xl lg:text-8xl font-black mb-6 tracking-tight text-slate-900 dark:text-white">
          Our <span className="text-primary">Work.</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-xl leading-relaxed">
          We don't just build websites. We engineer high-performance digital
          assets that solve complex business problems.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mb-24">
        {projects.map((p, i) => (
          <div
            key={i}
            className="glass-card rounded-2xl overflow-hidden group border-slate-200 dark:border-white/5 hover:border-primary/50 transition-all duration-500"
          >
            <div className="h-64 overflow-hidden relative">
              <div className="absolute inset-0 bg-slate-900/10 dark:bg-background-dark/20 group-hover:bg-transparent transition-all z-10"></div>
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-primary text-xs font-bold uppercase tracking-widest">
                    {p.category}
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                    {p.title}
                  </h3>
                </div>
                <div className="bg-primary/10 border border-primary/20 px-3 py-1 rounded-lg">
                  <span className="text-primary text-xs font-bold">
                    {p.metrics}
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-900/80 px-3 py-1 rounded-md border border-slate-200 dark:border-slate-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="glass-card p-12 rounded-[2rem] text-center max-w-4xl mx-auto border-primary/20">
        <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-6">
          See your project here next.
        </h2>
        <Link
          to="/start"
          className="inline-block bg-primary text-white px-10 py-4 rounded-full font-bold shadow-[0_0_20px_rgba(60,131,246,0.4)] hover:scale-105 transition-all"
        >
          Start Your Discovery Phase
        </Link>
      </div>
    </div>
  );
}
