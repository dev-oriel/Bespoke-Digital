import Hero from "../components/Hero";
import TrustIndicators from "../components/TrustIndicators";
import Features from "../components/Features";
import ComparisonStrip from "../components/ComparisonStrip";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 selection:bg-primary/30">
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-40"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] hero-glow rounded-full pointer-events-none"></div>

      <main>
        <Hero />
        <TrustIndicators />
        <Features />
        <ComparisonStrip />

        {/* Final CTA Section */}
        <section className="py-24 md:py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary opacity-5 pointer-events-none"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-6 md:mb-8 text-slate-900 dark:text-white leading-tight">
              Let’s build something{" "}
              <span className="text-primary underline underline-offset-8 decoration-primary/30">
                worth owning.
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 md:mb-12 max-w-2xl mx-auto">
              We’re currently taking on new projects for the next quarter.
              Secure your spot in our production cycle today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto bg-primary text-white text-xl font-bold px-12 py-5 rounded-full shadow-[0_20px_40px_rgba(60,131,246,0.3)] hover:-translate-y-0.5 transition-all">
                Launch Project
              </button>
              <a
                className="text-lg font-bold flex items-center gap-2 text-slate-900 dark:text-white hover:text-primary transition-colors"
                href="mailto:hello@bespokedigital.com"
              >
                hello@bespokedigital.com
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
