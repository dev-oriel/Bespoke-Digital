export default function Process() {
  const timelineSteps = [
    {
      icon: "forum",
      title: "Discovery Call",
      desc: "Initial strategy & vision",
      status: "complete",
    },
    {
      icon: "description",
      title: "Requirements",
      desc: "Defining technical scope",
      status: "complete",
    },
    {
      icon: "architecture",
      title: "Architecture",
      desc: "System design & stack",
      status: "current",
    },
    {
      icon: "code",
      title: "Build",
      desc: "Agile development phase",
      status: "pending",
    },
    {
      icon: "verified",
      title: "Approval",
      desc: "QA & Client review",
      status: "pending",
    },
    {
      icon: "rocket_launch",
      title: "Launch",
      desc: "Global deployment",
      status: "pending",
    },
  ];

  const paymentTerms = [
    {
      icon: "lock",
      title: "Deposit",
      desc: "25% commitment fee to secure your development slot and begin technical discovery.",
    },
    {
      icon: "rebase_edit",
      title: "Milestone Payments",
      desc: "Split into logical phases (e.g., MVP Core, UI/UX Complete). You pay for progress made.",
    },
    {
      icon: "flag",
      title: "Final Payment",
      desc: "Settled upon final QA approval and right before your global production launch.",
    },
    {
      icon: "cloud_done",
      title: "Hosting Control",
      desc: "Full transfer of intellectual property and server control upon project completion.",
    },
  ];

  const trustIndicators = [
    {
      icon: "shield",
      title: "Security Guarantee",
      desc: "Bank-grade encryption and secure infrastructure by default for every project.",
    },
    {
      icon: "speed",
      title: "Performance Commitment",
      desc: "Optimized for speed. We guarantee < 2s load times and 99.9% uptime targets.",
    },
    {
      icon: "handshake",
      title: "Long-term Partnership",
      desc: "Beyond launch. We provide ongoing support, maintenance, and scaling roadmaps.",
    },
  ];

  return (
    <div className="relative z-10">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-primary/10 blur-[120px] rounded-full -z-10"></div>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            No Guesswork.
            <br />
            <span className="text-primary">No Surprises.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium">
            Structured process. Transparent payment terms. We build
            high-performance software with zero ambiguity.
          </p>
        </div>
      </section>

      {/* Horizontal Process Timeline */}
      <section className="py-16 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-16 gap-4">
            <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
              Our Engineering Process
            </h2>
            <span className="px-5 py-2 bg-primary/10 text-primary rounded-full text-xs font-black uppercase tracking-widest border border-primary/20">
              Step-by-step Execution
            </span>
          </div>

          <div className="relative">
            {/* Progress Lines (Desktop) */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 z-0 hidden lg:block"></div>
            <div className="absolute top-1/2 left-0 w-[45%] h-0.5 bg-primary -translate-y-1/2 z-0 hidden lg:block shadow-[0_0_15px_rgba(60,131,246,0.5)]"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
              {timelineSteps.map((step, i) => (
                <div
                  key={i}
                  className="group flex flex-col items-center text-center space-y-4"
                >
                  <div
                    className={`size-16 rounded-full flex items-center justify-center ring-8 ring-background-light dark:ring-background-dark transition-transform group-hover:scale-110 shadow-xl
                    ${
                      step.status === "complete"
                        ? "bg-primary text-white shadow-primary/30"
                        : step.status === "current"
                          ? "bg-primary/20 border-2 border-primary text-primary"
                          : "bg-white dark:bg-slate-800/80 text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-slate-700"
                    }`}
                  >
                    <span className="material-symbols-outlined text-3xl">
                      {step.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Payment Terms Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card relative p-8 md:p-16 rounded-[2.5rem] overflow-hidden">
            <div className="absolute -top-10 -right-10 p-10 opacity-5 pointer-events-none">
              <span className="material-symbols-outlined text-[15rem] text-primary">
                payments
              </span>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                  Fair & Transparent
                  <br />
                  <span className="text-primary underline decoration-primary/30 decoration-8 underline-offset-8">
                    Payment Terms
                  </span>
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed font-medium">
                  We believe in results-driven compensation. Our terms are
                  designed to ensure both parties are fully committed to the
                  success of the project from day one.
                </p>
                <div className="p-6 bg-primary/10 border-l-4 border-primary rounded-r-xl">
                  <p className="italic text-slate-700 dark:text-slate-200 font-semibold">
                    "We don’t switch off websites. People switch off payments."
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {paymentTerms.map((term, i) => (
                  <div
                    key={i}
                    className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-primary/50 transition-colors group shadow-sm dark:shadow-none"
                  >
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-2xl">
                        {term.icon}
                      </span>
                    </div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-3">
                      {term.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      {term.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto border-t border-slate-200 dark:border-slate-800 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {trustIndicators.map((item, i) => (
              <div key={i} className="flex gap-5">
                <div className="shrink-0 size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                  <span className="material-symbols-outlined text-3xl">
                    {item.icon}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-xl mb-2">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local CTA Footer */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-primary/5 -z-10 skew-y-2"></div>
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
            Ready to build the future?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto px-12 py-5 bg-primary hover:bg-blue-600 text-white rounded-full text-lg font-black transition-all shadow-[0_15px_30px_rgba(60,131,246,0.3)] hover:-translate-y-1">
              Start Your Build
            </button>
            <button className="w-full sm:w-auto px-12 py-5 bg-transparent border-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-full text-lg font-black hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
              View Portfolio
            </button>
          </div>
          <div className="pt-8 flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-primary font-bold">
              check_circle
            </span>
            <p className="text-slate-600 dark:text-slate-300 font-medium">
              No monthly retainers required. Only pay for what you build.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
