import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Streamlined links for the top nav
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/portfolio" },
    { name: "Services", path: "/services" },
    { name: "Process", path: "/process" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 relative z-20">
          <div className="size-10 bg-primary flex items-center justify-center rounded-xl shadow-[0_0_20px_rgba(60,131,246,0.4)]">
            <span className="material-symbols-outlined text-white">
              deployed_code
            </span>
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Bespoke<span className="text-primary">Digital</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-bold transition-colors ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/start"
            className="bg-primary text-white text-sm font-bold px-6 py-2.5 rounded-full shadow-[0_0_15px_rgba(60,131,246,0.3)] hover:scale-105 transition-all"
          >
            Start Your Project
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden relative z-20 text-slate-900 dark:text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-symbols-outlined text-3xl">
            {isMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed inset-0 bg-background-light dark:bg-background-dark z-10 lg:hidden flex flex-col items-center justify-center transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-8 text-2xl font-black mb-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-slate-900 dark:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <Link
          to="/start"
          onClick={() => setIsMenuOpen(false)}
          className="bg-primary text-white text-xl font-bold px-10 py-4 rounded-full shadow-[0_0_20px_rgba(60,131,246,0.4)]"
        >
          Start Your Project
        </Link>
      </div>
    </header>
  );
}
