export default function ServiceCard({ icon, title, quote, features }) {
  return (
    <div className="glass-card rounded-xl p-8 flex flex-col gap-6 glow-hover transition-all">
      <div className="text-primary flex items-center gap-3">
        <span className="material-symbols-outlined text-4xl">{icon}</span>
        <h3 className="text-xl font-bold uppercase tracking-wider text-slate-100">
          {title}
        </h3>
      </div>
      <p className="text-slate-400 text-sm italic">"{quote}"</p>
      <ul className="space-y-4 grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="material-symbols-outlined text-primary text-xl">
              check_circle
            </span>
            <span className="text-slate-300">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
