export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-24 relative z-10">
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 md:mb-6 tracking-tight text-slate-900 dark:text-white">
          Privacy <span className="text-primary">Policy</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base font-bold uppercase tracking-widest">
          Last Updated: October 2026
        </p>
      </div>

      <div className="glass-card p-6 sm:p-10 md:p-16 rounded-[2rem]">
        <div className="space-y-8 md:space-y-12 text-slate-700 dark:text-slate-300 text-sm md:text-base leading-relaxed font-medium">
          <section>
            <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-4">
              1. Information We Collect
            </h2>
            <p className="mb-4">
              When you engage with BespokeDigital, we collect information
              necessary to deliver our services. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Contact Information:</strong> Name, email address, phone
                number, and company details provided via our Project Intake form
                or direct email.
              </li>
              <li>
                <strong>Project Assets:</strong> Logos, brand guidelines, and
                proprietary documents uploaded for project development.
              </li>
              <li>
                <strong>Usage Data:</strong> Anonymous analytics on how you
                interact with our website to help us improve our user
                experience.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-4">
              2. How We Use Your Data
            </h2>
            <p className="mb-4">
              We do not sell, rent, or trade your personal information. We use
              your data strictly to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Facilitate the design, development, and deployment of your
                digital assets.
              </li>
              <li>Process milestone payments and invoices securely.</li>
              <li>
                Communicate project updates, architecture plans, and technical
                requirements.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-4">
              3. Data Security & Hosting
            </h2>
            <p>
              We utilize enterprise-grade encryption and secure infrastructure
              for all client data. During the development phase, project data is
              hosted on our secure private servers. Once a project is completed
              and handed over, you assume responsibility for the ongoing privacy
              and security of your own user data on your designated domains.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-4">
              4. Third-Party Services
            </h2>
            <p>
              We occasionally use third-party APIs and integrations (e.g.,
              Stripe for payments, AWS/Vercel for hosting) to fulfill our
              services. These providers have their own strict privacy policies,
              and we only share the absolute minimum data required to execute
              their specific functions.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-4">
              5. Your Rights
            </h2>
            <p>
              You have the right to request access to the personal data we hold
              about you, ask for corrections, or request deletion of your data
              (provided it does not conflict with active billing or legal
              obligations). To exercise these rights, please contact us at{" "}
              <a
                href="mailto:hello@bespokedigital.com"
                className="text-primary hover:underline"
              >
                hello@bespokedigital.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
