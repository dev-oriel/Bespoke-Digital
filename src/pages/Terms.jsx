export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-24 relative z-10">
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 md:mb-6 tracking-tight text-slate-900 dark:text-white">
          Terms of <span className="text-primary">Service</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base font-bold uppercase tracking-widest">
          The Rules of Engagement
        </p>
      </div>

      <div className="glass-card p-6 sm:p-10 md:p-16 rounded-[2rem]">
        <div className="space-y-8 md:space-y-12 text-slate-700 dark:text-slate-300 text-sm md:text-base leading-relaxed font-medium">
          <section>
            <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-4">
              1. The Bespoke Standard
            </h2>
            <p>
              By engaging BespokeDigital, you are agreeing to a custom
              engineering process. We do not use generic AI templates or bloated
              third-party themes. We build specific, performance-optimized
              digital assets. Client participation in the Discovery and Approval
              phases is mandatory to maintain project timelines.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-4">
              2. Payment Milestones & The "Kill Switch"
            </h2>
            <p className="mb-4">
              We operate on a strict, transparency-first billing model:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>The Deposit:</strong> A non-refundable 30% deposit is
                required to secure your development slot and initiate
                architecture planning.
              </li>
              <li>
                <strong>Satisfaction Milestones:</strong> Intermediate payments
                are due upon client review and approval of specific project
                phases.
              </li>
              <li>
                <strong>The "Kill Switch" Policy:</strong> Because we absorb
                initial development costs and control the staging environment
                during the build, timely payments are required.{" "}
                <strong>
                  If a milestone invoice goes unpaid without communication, the
                  staging/production servers will be switched off until the
                  balance is cleared.
                </strong>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-4">
              3. Intellectual Property Transfer
            </h2>
            <p>
              BespokeDigital retains full ownership of all codebases, designs,
              and domain registrations during the development cycle.{" "}
              <strong>
                100% of Intellectual Property rights, source code, and domain
                controls are transferred to the client only after the final
                milestone payment has been received in full.
              </strong>
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-4">
              4. Partner/Commission Model
            </h2>
            <p>
              If engaged under our Commission or Partner model, the upfront fee
              is reduced in exchange for an agreed-upon revenue share. This
              constitutes a legally binding joint venture for the specified
              12-24 month period. Altering the payment gateway or obstructing
              revenue tracking during this period is a breach of contract
              resulting in immediate termination of hosting services.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-4">
              5. Warranties & Maintenance
            </h2>
            <p>
              We guarantee our code to be free of major defects upon launch. All
              "Direct Build" projects include a 30-day bug-fix warranty
              post-launch. For ongoing security updates, server maintenance, and
              feature additions, a separate maintenance retainer must be
              established.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
