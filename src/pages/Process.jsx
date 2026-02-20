export default function Process() {
  const timelineSteps = [
    {
      icon: "forum",
      title: "Discovery",
      desc: "Strategy & vision",
      status: "complete",
    },
    {
      icon: "description",
      title: "Scope",
      desc: "Technical reqs",
      status: "complete",
    },
    {
      icon: "architecture",
      title: "Architect",
      desc: "System design",
      status: "current",
    },
    {
      icon: "code",
      title: "Build",
      desc: "Agile dev phase",
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
      desc: "25% commitment fee to secure your development slot.",
    },
    {
      icon: "rebase_edit",
      title: "Milestones",
      desc: "Split into logical phases. You pay for progress made.",
    },
    {
      icon: "flag",
      title: "Final Payment",
      desc: "Settled upon final QA approval before global launch.",
    },
    {
      icon: "cloud_done",
      title: "Hosting Control",
      desc: "Full transfer of IP and server control upon completion.",
    },
  ];

  return (
    <div className="relative z-10">
      <section className="relative pt-20 md:pt-24 pb-12 md:pb-16 px-6">
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

      <section className="py-12 md:py-16 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-12 md:mb-16 gap-4 text-center sm:text-left">
            <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
              Engineering Process
            </h2>
            <span className="px-5 py-2 bg-primary/10 text-primary rounded-full text-xs font-black uppercase tracking-widest border border-primary/20">
              Execution
            </span>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 z-0 hidden lg:block"></div>
            <div className="absolute top-1/2 left-0 w-[45%] h-0.5 bg-primary -translate-y-1/2 z-0 hidden lg:block shadow-[0_0_15px_rgba(60,131,246,0.5)]"></div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-4 relative z-10">
              {timelineSteps.map((step, i) => (
                <div
                  key={i}
                  className="group flex flex-col items-center text-center space-y-4"
                >
                  <div
                    className={`size-14 md:size-16 rounded-full flex items-center justify-center ring-4 md:ring-8 ring-background-light dark:ring-background-dark transition-transform group-hover:scale-110 shadow-xl
                    ${
                      step.status === "complete"
                        ? "bg-primary text-white shadow-primary/30"
                        : step.status === "current"
                          ? "bg-primary/20 border-2 border-primary text-primary"
                          : "bg-white dark:bg-slate-800/80 text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-slate-700"
                    }`}
                  >
                    <span className="material-symbols-outlined text-2xl md:text-3xl">
                      {step.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base md:text-lg">
                      {step.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium hidden sm:block">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card relative p-8 md:p-16 rounded-[2.5rem] overflow-hidden">
            <div className="absolute -top-10 -right-10 p-10 opacity-5 pointer-events-none hidden md:block">
              <span className="material-symbols-outlined text-[15rem] text-primary">
                payments
              </span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
              <div className="space-y-6 md:space-y-8 text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                  Fair & Transparent
                  <br />
                  <span className="text-primary underline decoration-primary/30 decoration-4 md:decoration-8 underline-offset-8">
                    Payment Terms
                  </span>
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed font-medium">
                  We believe in results-driven compensation. Our terms are
                  designed to ensure both parties are fully committed to the
                  success of the project.
                </p>
                <div className="p-6 bg-primary/10 border-l-4 border-primary rounded-r-xl">
                  <p className="italic text-slate-700 dark:text-slate-200 font-semibold text-sm md:text-base">
                    "We don’t switch off websites. People switch off payments."
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                {paymentTerms.map((term, i) => (
                  <div
                    key={i}
                    className="p-6 md:p-8 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-primary/50 transition-colors text-center sm:text-left"
                  >
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 md:mb-6 mx-auto sm:mx-0">
                      <span className="material-symbols-outlined text-2xl">
                        {term.icon}
                      </span>
                    </div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-2 md:mb-3">
                      {term.title}
                    </h4>
                    <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      {term.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
            Ready to build?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <button className="w-full sm:w-auto px-12 py-5 bg-primary hover:bg-blue-600 text-white rounded-full text-lg font-black transition-all shadow-[0_15px_30px_rgba(60,131,246,0.3)]">
              Start Your Build
            </button>
            <button className="w-full sm:w-auto px-12 py-5 bg-transparent border-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-full text-lg font-black transition-all">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
