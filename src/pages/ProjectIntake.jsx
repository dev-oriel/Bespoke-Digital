import { useState } from "react";

export default function ProjectIntake() {
  const [projectType, setProjectType] = useState("Software");
  const [engagement, setEngagement] = useState("Direct");

  return (
    <div className="relative z-10 py-16 lg:py-24 px-6 max-w-5xl mx-auto">
      {/* Header */}
      <header className="mb-16 text-center">
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-slate-900 dark:text-white">
          Tell Us What You’re <span className="text-primary">Building.</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
          From visionary startups to enterprise solutions. Our detailed intake
          helps us craft your unique digital DNA. We reply within 24 hours.
        </p>
      </header>

      {/* Progress Bar */}
      <div className="mb-16 max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-4 text-xs font-black uppercase tracking-widest">
          <span className="text-primary">Phase 1: Project Discovery</span>
          <span className="text-slate-500">Step 1 of 5</span>
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden border border-slate-300 dark:border-slate-700">
          <div className="bg-primary h-full w-1/5 shadow-[0_0_15px_rgba(60,131,246,0.6)] transition-all duration-700 ease-out rounded-full"></div>
        </div>
      </div>

      <form
        className="space-y-12 max-w-4xl mx-auto"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Section 1: Business Details */}
        <section className="glass-card p-8 md:p-12 rounded-[2rem] space-y-8">
          <div className="flex items-center gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
            <div className="p-3 bg-primary/10 rounded-xl border border-primary/20">
              <span className="material-symbols-outlined text-primary text-2xl">
                corporate_fare
              </span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Business Details
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Business Name
              </label>
              <input
                className="w-full bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-5 py-4 text-slate-900 dark:text-white outline-none transition-all placeholder-slate-400 dark:placeholder-slate-600"
                placeholder="e.g. Acme Corp"
                type="text"
              />
            </div>
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Contact Person
              </label>
              <input
                className="w-full bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-5 py-4 text-slate-900 dark:text-white outline-none transition-all placeholder-slate-400 dark:placeholder-slate-600"
                placeholder="Your full name"
                type="text"
              />
            </div>
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Email Address
              </label>
              <input
                className="w-full bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-5 py-4 text-slate-900 dark:text-white outline-none transition-all placeholder-slate-400 dark:placeholder-slate-600"
                placeholder="name@company.com"
                type="email"
              />
            </div>
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Phone Number
              </label>
              <input
                className="w-full bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-5 py-4 text-slate-900 dark:text-white outline-none transition-all placeholder-slate-400 dark:placeholder-slate-600"
                placeholder="+1 (555) 000-0000"
                type="tel"
              />
            </div>
            <div className="md:col-span-2 space-y-3">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Location / Timezone
              </label>
              <input
                className="w-full bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-5 py-4 text-slate-900 dark:text-white outline-none transition-all placeholder-slate-400 dark:placeholder-slate-600"
                placeholder="City, Country or GMT-5"
                type="text"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Brand Identity */}
        <section className="glass-card p-8 md:p-12 rounded-[2rem] space-y-8">
          <div className="flex items-center gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
            <div className="p-3 bg-primary/10 rounded-xl border border-primary/20">
              <span className="material-symbols-outlined text-primary text-2xl">
                auto_awesome
              </span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Brand Identity
            </h2>
          </div>
          <div className="space-y-8">
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Mission Statement
              </label>
              <textarea
                className="w-full bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-5 py-4 text-slate-900 dark:text-white outline-none transition-all placeholder-slate-400 dark:placeholder-slate-600 resize-none"
                placeholder="What is the core purpose of your project?"
                rows="4"
              ></textarea>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  Slogan / Tagline
                </label>
                <input
                  className="w-full bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-5 py-4 text-slate-900 dark:text-white outline-none transition-all placeholder-slate-400 dark:placeholder-slate-600"
                  placeholder="Short and catchy"
                  type="text"
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  Logo & Assets
                </label>
                <div className="h-full min-h-[120px] bg-slate-50 dark:bg-slate-900/50 rounded-xl flex flex-col items-center justify-center gap-3 hover:border-primary transition-all cursor-pointer group border-dashed border-2 border-slate-300 dark:border-slate-700 py-6">
                  <div className="size-12 rounded-full bg-slate-200 dark:bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-all text-slate-500 dark:text-slate-400 group-hover:text-primary">
                    <span className="material-symbols-outlined text-2xl">
                      upload_file
                    </span>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-slate-700 dark:text-slate-300 font-bold">
                      Drop logo or{" "}
                      <span className="text-primary underline decoration-primary/30">
                        browse
                      </span>
                    </p>
                    <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-widest">
                      AI, SVG, PNG (Max 20MB)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Project Scope */}
        <section className="glass-card p-8 md:p-12 rounded-[2rem] space-y-8">
          <div className="flex items-center gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
            <div className="p-3 bg-primary/10 rounded-xl border border-primary/20">
              <span className="material-symbols-outlined text-primary text-2xl">
                architecture
              </span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Project Scope
            </h2>
          </div>
          <div className="space-y-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1 block">
                  Project Type
                </label>
                <p className="text-sm text-slate-600 dark:text-slate-500 font-medium">
                  Select the primary focus of development
                </p>
              </div>
              <div className="flex bg-slate-200 dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-300 dark:border-slate-800">
                {["Software", "Web App"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setProjectType(type)}
                    className={`px-8 py-3 rounded-xl font-bold text-sm transition-all ${
                      projectType === type
                        ? "bg-primary text-white shadow-lg shadow-primary/30"
                        : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                    }`}
                    type="button"
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  Key Features
                </label>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    "E-commerce Integration",
                    "User Auth & Roles",
                    "Real-time Analytics",
                  ].map((feature) => (
                    <label
                      key={feature}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 cursor-pointer hover:border-primary/50 transition-colors"
                    >
                      <input
                        className="size-5 rounded border-slate-300 dark:border-slate-600 bg-transparent text-primary focus:ring-primary focus:ring-offset-0"
                        type="checkbox"
                      />
                      <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
                        {feature}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  Main Competitors
                </label>
                <textarea
                  className="w-full h-full min-h-[160px] bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-5 py-4 text-slate-900 dark:text-white outline-none transition-all placeholder-slate-400 dark:placeholder-slate-600 resize-none"
                  placeholder="Who should we look out for? (List 2-3 brands)"
                ></textarea>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Domain Strategy */}
        <section className="glass-card p-8 md:p-12 rounded-[2rem] space-y-8">
          <div className="flex items-center gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
            <div className="p-3 bg-primary/10 rounded-xl border border-primary/20">
              <span className="material-symbols-outlined text-primary text-2xl">
                language
              </span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Domain Strategy
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                Primary Choice
              </label>
              <input
                className="w-full bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-5 py-4 text-slate-900 dark:text-white outline-none transition-all placeholder-slate-400 dark:placeholder-slate-600"
                placeholder="example.com"
                type="text"
              />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                Secondary
              </label>
              <input
                className="w-full bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-5 py-4 text-slate-900 dark:text-white outline-none transition-all placeholder-slate-400 dark:placeholder-slate-600"
                placeholder="tryexample.io"
                type="text"
              />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                Creative Alternate
              </label>
              <input
                className="w-full bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-5 py-4 text-slate-900 dark:text-white outline-none transition-all placeholder-slate-400 dark:placeholder-slate-600"
                placeholder="getexample.app"
                type="text"
              />
            </div>
          </div>
        </section>

        {/* Section 5: Budget & Engagement */}
        <section className="glass-card p-8 md:p-12 rounded-[2rem] space-y-8">
          <div className="flex items-center gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
            <div className="p-3 bg-primary/10 rounded-xl border border-primary/20">
              <span className="material-symbols-outlined text-primary text-2xl">
                payments
              </span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Budget & Engagement
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                id: "Direct",
                desc: "Milestone-based fixed fee or flexible hourly billing model.",
              },
              {
                id: "Commission",
                desc: "Strategic partnership including revenue share or equity.",
              },
              {
                id: "Not Sure",
                desc: "Let's consult and find the most efficient path for your ROI.",
              },
            ].map((option) => (
              <div
                key={option.id}
                onClick={() => setEngagement(option.id)}
                className={`p-8 rounded-2xl cursor-pointer transition-all border-2 relative overflow-hidden group
                  ${
                    engagement === option.id
                      ? "border-primary bg-primary/10"
                      : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-primary/50"
                  }`}
              >
                {engagement === option.id && (
                  <div className="absolute top-4 right-4 text-primary">
                    <span className="material-symbols-outlined font-bold">
                      verified
                    </span>
                  </div>
                )}
                <h3 className="font-bold text-slate-900 dark:text-white text-xl mb-3">
                  {option.id}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                  {option.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Final Submit Area */}
        <div className="pt-8 pb-12 flex flex-col items-center gap-6">
          <button
            className="w-full md:w-auto min-w-[400px] bg-primary text-white text-xl font-black py-6 px-12 rounded-full shadow-[0_0_30px_rgba(60,131,246,0.4)] hover:-translate-y-1 transition-all tracking-wide"
            type="submit"
          >
            Submit Discovery Board
          </button>
          <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium">
            <span className="material-symbols-outlined text-primary text-lg">
              history
            </span>
            Expert review guaranteed within{" "}
            <span className="text-slate-900 dark:text-white font-bold">
              24 hours
            </span>
            .
          </div>
        </div>
      </form>
    </div>
  );
}
