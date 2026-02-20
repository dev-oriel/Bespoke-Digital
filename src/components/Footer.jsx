import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-20 px-6 relative z-10 bg-background-dark/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="flex flex-col gap-6 max-w-xs">
          <Link to="/" className="flex items-center gap-3">
            <div className="size-8 bg-primary flex items-center justify-center rounded-lg">
              <span className="material-symbols-outlined text-white text-sm">
                deployed_code
              </span>
            </div>
            <span className="text-lg font-extrabold tracking-tight text-white">
              Bespoke<span className="text-primary">Digital</span>
            </span>
          </Link>
          <p className="text-sm text-slate-400">
            Crafting digital excellence through custom engineering and strategic
            design. No templates, just results.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase text-slate-500 tracking-widest">
              Capabilities
            </span>
            <Link
              to="/services"
              className="text-sm text-slate-300 hover:text-primary transition-all"
            >
              Web Apps
            </Link>
            <Link
              to="/services"
              className="text-sm text-slate-300 hover:text-primary transition-all"
            >
              E-Commerce
            </Link>
            <Link
              to="/services"
              className="text-sm text-slate-300 hover:text-primary transition-all"
            >
              Software
            </Link>
            <Link
              to="/services"
              className="text-sm text-slate-300 hover:text-primary transition-all"
            >
              Hosting
            </Link>
          </div>

          {/* REPLACED STUDIO TAB */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase text-slate-500 tracking-widest">
              Company
            </span>
            <Link
              to="/about"
              className="text-sm text-slate-300 hover:text-primary transition-all"
            >
              About Us
            </Link>
            <Link
              to="/portfolio"
              className="text-sm text-slate-300 hover:text-primary transition-all"
            >
              Portfolio
            </Link>
            <Link
              to="/faq"
              className="text-sm text-slate-300 hover:text-primary transition-all"
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              className="text-sm text-slate-300 hover:text-primary transition-all"
            >
              Contact
            </Link>
          </div>

          <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
            <span className="text-xs font-bold uppercase text-slate-500 tracking-widest">
              Connect
            </span>
            <div className="flex gap-4">
              <a
                href="#"
                className="size-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-primary hover:text-white hover:border-primary transition-all"
              >
                <span className="material-symbols-outlined text-xl">share</span>
              </a>
              <a
                href="#"
                className="size-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-primary hover:text-white hover:border-primary transition-all"
              >
                <span className="material-symbols-outlined text-xl">
                  public
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>© 2026 Bespoke Digital Assets. All rights reserved.</p>
        <div className="flex gap-8">
          <Link to="/faq" className="hover:text-primary transition-all">
            Privacy Policy
          </Link>
          <Link to="/faq" className="hover:text-primary transition-all">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
