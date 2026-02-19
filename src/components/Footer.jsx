export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="flex flex-col gap-6 max-w-xs">
          <div className="flex items-center gap-3">
            <div className="size-8 bg-primary flex items-center justify-center rounded-lg">
              <span className="material-symbols-outlined text-white text-sm">
                deployed_code
              </span>
            </div>
            <span className="text-lg font-extrabold tracking-tight">
              Bespoke<span className="text-primary">Digital</span>
            </span>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Crafting digital excellence through custom engineering and strategic
            design. No templates, just results.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase text-slate-400 tracking-widest">
              Capabilities
            </span>
            {["Web Apps", "E-Commerce", "Mobile Apps", "UI/UX Design"].map(
              (link) => (
                <a
                  key={link}
                  className="text-sm hover:text-primary transition-all"
                  href="#"
                >
                  {link}
                </a>
              ),
            )}
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase text-slate-400 tracking-widest">
              Studio
            </span>
            {["Our Process", "Case Studies", "Manifesto", "Careers"].map(
              (link) => (
                <a
                  key={link}
                  className="text-sm hover:text-primary transition-all"
                  href="#"
                >
                  {link}
                </a>
              ),
            )}
          </div>
          <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
            <span className="text-xs font-bold uppercase text-slate-400 tracking-widest">
              Connect
            </span>
            <div className="flex gap-4">
              <a
                className="size-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                href="#"
              >
                <span className="material-symbols-outlined text-xl">share</span>
              </a>
              <a
                className="size-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                href="#"
              >
                <span className="material-symbols-outlined text-xl">
                  public
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>© 2026 Bespoke Digital Assets. All rights reserved.</p>
        <div className="flex gap-8">
          <a className="hover:text-primary transition-all" href="#">
            Privacy Policy
          </a>
          <a className="hover:text-primary transition-all" href="#">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
