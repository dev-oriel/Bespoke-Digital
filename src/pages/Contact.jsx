export default function FAQ() {
  const faqs = [
    {
      q: "What does 'Satisfaction Based Payments' actually mean?",
      a: "Our deposit covers initial architecture costs. The remaining milestones are paid when you review and approve the work. If you aren't happy with a phase, we fix it before you pay.",
    },
    {
      q: "What happens if a client simply stops paying?",
      a: "We maintain control of the hosting and domain during the build phase. If payments cease without communication, we flip the switch. We believe in fair trade: we deliver excellence, you pay the invoice.",
    },
    {
      q: "Do you use AI to build the sites?",
      a: "We use AI as a tool for efficiency (like code structuring or debugging), but we do NOT ship generic, unedited AI output. Every line of code and pixel of design is overseen, refined, and bespoke to your brand.",
    },
    {
      q: "How does the Commission/Partner model work?",
      a: "Instead of a massive upfront fee, we build your infrastructure at a significantly reduced rate. In exchange, we take a small, agreed-upon percentage of gross revenue generated through the platform for a 12-24 month period. We only win when you win.",
    },
    {
      q: "Who owns the code and the domain?",
      a: "You do. Once the final milestone payment is cleared, 100% of the intellectual property, codebase, and domain registrations are transferred to your absolute ownership.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 relative z-10">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black mb-6 tracking-tight text-slate-900 dark:text-white">
          Frequently Asked <span className="text-primary">Questions</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-lg">
          Clear answers. Zero corporate speak.
        </p>
      </div>

      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="glass-card p-8 rounded-2xl hover:border-primary/40 transition-colors"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-start gap-3">
              <span className="text-primary material-symbols-outlined shrink-0">
                help
              </span>
              {faq.q}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 pl-9 leading-relaxed">
              {faq.a}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
