export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 selection:bg-primary/30">
      {/* Background Accents */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-40"></div>
      <div className="absolute top-[-10%] left-[-10%] size-[40%] hero-glow rounded-full pointer-events-none"></div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
