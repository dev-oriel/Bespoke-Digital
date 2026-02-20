import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const navLinks = [
    { name: "Work", path: "/portfolio" },
    { name: "Services", path: "/services" },
    { name: "Process", path: "/process" },
    { name: "About", path: "/about" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="size-10 bg-primary flex items-center justify-center rounded-xl shadow-[0_0_20px_rgba(60,131,246,0.4)]">
            <span className="material-symbols-outlined text-white">
              deployed_code
            </span>
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Bespoke<span className="text-primary">Digital</span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-bold transition-colors ${location.pathname === link.path ? "text-primary" : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link
            to="/start"
            className="bg-primary text-white text-sm font-bold px-6 py-2.5 rounded-full shadow-[0_0_15px_rgba(60,131,246,0.3)] hover:scale-105 transition-all"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </header>
  );
}
