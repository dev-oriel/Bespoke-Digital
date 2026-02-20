import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/portfolio" },
    { name: "Services", path: "/services" },
    { name: "Process", path: "/process" },
  ];

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
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
        <div className="hidden lg:flex">
          <Link
            to="/start"
            className="bg-primary text-white text-sm font-bold px-6 py-2.5 rounded-full shadow-[0_0_15px_rgba(60,131,246,0.3)] hover:scale-105 transition-all"
          >
            Start Your Project
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden text-slate-900 dark:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-symbols-outlined text-3xl">
            {isMenuOpen ? "close" : "menu"}
          </span>
        </button>

        {/* Mobile Card Menu */}
        <div
          className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Background overlay */}
          <div className="absolute inset-0"></div>

          {/* Sliding card */}
          <div
            ref={menuRef}
            className={`absolute top-20 right-4 w-[85%] max-w-sm bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 transition-transform duration-300 ${
              isMenuOpen ? "translate-x-0" : "translate-x-10"
            }`}
          >
            <nav className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-bold transition-colors ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-slate-800 dark:text-slate-200"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
              <Link
                to="/start"
                onClick={() => setIsMenuOpen(false)}
                className="block text-center bg-primary text-white font-bold py-3 rounded-full shadow-[0_0_15px_rgba(60,131,246,0.3)]"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
