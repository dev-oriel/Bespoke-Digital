import Hero from "../components/Hero";
import TrustIndicators from "../components/TrustIndicators";
import Features from "../components/Features";
import ComparisonStrip from "../components/ComparisonStrip";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 selection:bg-primary/30">
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-40"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[60%] sm:w-[45%] lg:w-[35%] h-[60%] sm:h-[45%] lg:h-[35%] hero-glow rounded-full pointer-events-none"></div>

      <main>
        <Hero />
        <TrustIndicators />
        <Features />
        <ComparisonStrip />

        {/* Final CTA */}
        <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary opacity-5 pointer-events-none"></div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 leading-tight">
              Let’s build something{" "}
              <span className="text-primary underline underline-offset-8 decoration-primary/30">
                worth owning.
              </span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto">
              We’re currently taking on new projects for the next quarter.
              Secure your spot in our production cycle today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <button className="w-full sm:w-auto bg-primary text-white text-lg sm:text-xl font-bold px-8 sm:px-12 py-4 sm:py-5 rounded-full shadow-[0_20px_40px_rgba(60,131,246,0.3)] hover:-translate-y-0.5 transition-all">
                Launch Project
              </button>

              <a
                className="text-base sm:text-lg font-bold flex items-center gap-2 text-slate-900 dark:text-white hover:text-primary transition-colors"
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
