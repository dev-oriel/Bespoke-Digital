import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h1 className="text-5xl lg:text-7xl font-black mb-6 tracking-tight text-white leading-[1.1]">
            Let's Start a <span className="text-primary">Conversation.</span>
          </h1>
          <p className="text-slate-300 text-lg mb-12 max-w-md">
            Have a quick question or want to discuss a potential partnership?
            Drop us a line. If you are ready to build, use our detailed intake
            form instead.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 glass-card p-6 rounded-2xl border-white/5 inline-flex w-full max-w-md">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <span className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">
                  Email Us
                </span>
                <a
                  href="mailto:hello@bespokedigital.com"
                  className="text-white font-bold text-lg hover:text-primary transition-colors"
                >
                  hello@bespokedigital.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6 glass-card p-6 rounded-2xl border-white/5 inline-flex w-full max-w-md">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">rocket_launch</span>
              </div>
              <div>
                <span className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">
                  Ready to build?
                </span>
                <Link
                  to="/start"
                  className="text-white font-bold text-lg hover:text-primary transition-colors flex items-center gap-2"
                >
                  Go to Project Intake{" "}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact Form */}
        <div className="glass-card p-10 rounded-[2rem]">
          <h3 className="text-2xl font-black text-white mb-8">
            Send a Message
          </h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Name
              </label>
              <input
                type="text"
                className="w-full bg-slate-900/50 border border-slate-700 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-5 py-4 text-white outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-slate-900/50 border border-slate-700 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-5 py-4 text-white outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Message
              </label>
              <textarea
                rows="4"
                className="w-full bg-slate-900/50 border border-slate-700 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-5 py-4 text-white outline-none transition-all resize-none"
                placeholder="How can we help?"
              ></textarea>
            </div>
            <button className="w-full bg-primary text-white py-4 rounded-full font-bold shadow-[0_0_20px_rgba(60,131,246,0.3)] hover:scale-[1.02] transition-transform">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
