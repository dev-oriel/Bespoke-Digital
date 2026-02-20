import { Link } from "react-router-dom";

export default function Navbar() {
  const navLinks = [
    { name: "Work", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Process", path: "#" },
    { name: "About", path: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="size-10 bg-primary flex items-center justify-center rounded-xl shadow-[0_0_20px_rgba(60,131,246,0.4)]">
            <span className="material-symbols-outlined text-white">
              deployed_code
            </span>
          </div>
          <span className="text-xl font-extrabold tracking-tight">
            Bespoke<span className="text-primary">Digital</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm font-semibold px-6 py-2 rounded-full border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
            Log In
          </button>
          <button className="bg-primary text-white text-sm font-bold px-6 py-2.5 rounded-full shadow-[0_0_15px_rgba(60,131,246,0.3)] hover:scale-105 transition-all">
            Start Your Project
          </button>
        </div>
      </div>
    </header>
  );
}
