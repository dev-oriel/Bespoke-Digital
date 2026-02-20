import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-40"></div>
      <Navbar />
      <div className="relative z-10">{children}</div>
      <Footer />
    </div>
  );
}
