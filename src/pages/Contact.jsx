import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight text-slate-900 dark:text-white leading-tight">
              Let's Start a <span className="text-primary">Conversation.</span>
            </h1>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg mb-10 max-w-xl leading-relaxed">
              Have a quick question or want to discuss a potential partnership?
              Drop us a line. If you are ready to build, use our detailed intake
              form instead.
            </p>

            <div className="flex flex-col gap-6 w-full max-w-xl">
              {/* Email Card */}
              <div className="glass-card p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-white/5 flex items-center gap-4 sm:gap-5 w-full">
                <div className="size-11 sm:size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">mail</span>
                </div>

                <div className="min-w-0 flex-1">
                  <span className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">
                    Email Us
                  </span>
                  <a
                    href="mailto:hello@bespokedigital.com"
                    className="block text-slate-900 dark:text-white font-bold text-base sm:text-lg hover:text-primary dark:hover:text-primary transition-colors break-all sm:break-normal"
                  >
                    hello@bespokedigital.com
                  </a>
                </div>
              </div>

              {/* Intake Card */}
              <div className="glass-card p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-white/5 flex items-center gap-4 sm:gap-5 w-full">
                <div className="size-11 sm:size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">
                    rocket_launch
                  </span>
                </div>

                <div className="min-w-0 flex-1">
                  <span className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">
                    Ready to build?
                  </span>
                  <Link
                    to="/start"
                    className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-base sm:text-lg hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    Go to Project Intake
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="glass-card p-6 sm:p-8 lg:p-10 rounded-3xl w-full">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-6 sm:mb-8">
              Send a Message
            </h3>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-slate-900 dark:text-white outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-slate-900 dark:text-white outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-slate-900 dark:text-white outline-none transition-all resize-none placeholder-slate-400 dark:placeholder-slate-500"
                  placeholder="How can we help?"
                ></textarea>
              </div>

              <button className="w-full bg-primary text-white py-3 sm:py-4 rounded-full font-bold shadow-[0_0_20px_rgba(60,131,246,0.3)] hover:scale-[1.02] transition-transform">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
