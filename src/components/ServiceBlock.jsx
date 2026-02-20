export default function ServiceBlock({ icon, title, quote, features, isWide }) {
  return (
    <div
      className={`glass-card  glow-hover p-8 rounded-xl flex flex-col gap-6 ${isWide ? "md:col-span-2 lg:col-span-1" : ""}`}
    >
      <div className="flex   items-center gap-4">
        <div className="size-14 rounded-xl bg-primry/20 flex items-center justify-center border border-primary/30">
          <span className="material-symbols-outlined text-primary text-3xl">
            {icon}
          </span>
        </div>
        <h3 className="text-xl font-bold text-white uppercase tracking-tight">
          {title}
        </h3>
      </div>

      <p className="text-primary text-sm font-semibold italic pl-4 border-l-2 border-primary/50">
        "{quote}"
      </p>

      <ul className="space-y-3 grow">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="material-symbols-outlined text-primary text-lg">
              check_circle
            </span>
            <span className="text-gray-500 text-sm font-medium">{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
