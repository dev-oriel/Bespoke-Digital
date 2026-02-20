export default function Hero() {
  return (
    <section className="relative pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-28 lg:pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="flex flex-col gap-6 sm:gap-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Accepting Q4 Projects
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
            We Build Digital <span className="text-primary">Assets.</span> Not
            Disposable Websites.
          </h1>

          <p className="text-base sm:text-lg text-slate-500 max-w-xl leading-relaxed">
            Custom software. Bespoke websites. Zero templates. Zero generic AI
            builds. We engineer performance-first experiences that belong on
            your balance sheet.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <button className="w-full sm:w-auto bg-primary text-white text-base sm:text-lg font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-[0_0_30px_rgba(60,131,246,0.4)] hover:-translate-y-0.5 transition-all">
              Start Your Project
            </button>

            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-full border-2 border-slate-200 dark:border-slate-800 hover:bg-slate-800 transition-all">
              View Our Work
            </button>
          </div>

          <p className="text-slate-500 text-sm italic">
            Yes, we actually answer emails.
          </p>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-primary/20 blur-[80px] sm:blur-[100px] rounded-full group-hover:bg-primary/30 transition-all duration-700"></div>

          <div className="relative glass-card rounded-xl p-3 sm:p-4 overflow-hidden shadow-2xl">
            <img
              className="rounded-lg w-full h-auto object-cover border border-white/10"
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
              alt="Dashboard Preview"
            />

            <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8">
              <div className="bg-background-dark/90 backdrop-blur px-3 sm:px-4 py-2 rounded-lg border border-white/10 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">
                  bolt
                </span>
                <span className="text-white text-xs font-bold">
                  99 Lighthouse Score
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
