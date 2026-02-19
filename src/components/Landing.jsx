import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";

export default function Landing() {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <Features />

      {/* Comparison Strip Component would go here */}

      <section className="py-24 px-6 text-center">
        <div className="glass-card max-w-4xl mx-auto p-12 rounded-lg border-primary/20">
          <h2 className="text-3xl font-bold mb-6">The "No-Risk" Clause</h2>
          <p className="text-slate-400 mb-8">
            We cover development costs with the initial deposit. The rest?
            Payable only when you are 100% satisfied.
            <span className="block mt-2 text-xs italic text-red-500/70">
              *Disclaimer: Since we host the assets, the "off" switch is very
              real if payments vanish. Humor us, we like being paid.
            </span>
          </p>
          <button className="bg-primary px-8 py-3 rounded-full font-bold hover:shadow-[0_0_20px_rgba(60,131,246,0.5)] transition-all">
            Secure Your Slot
          </button>
        </div>
      </section>
    </Layout>
  );
}
