export default function PricingCard({
  type,
  title,
  description,
  steps,
  isPartner,
  buttonText,
  icon,
}) {
  return (
    <div
      className={`glass-card rounded-2xl overflow-hidden flex flex-col relative ${isPartner ? "border-primary/40" : "border-primary/20"}`}
    >
      {isPartner && (
        <div className="absolute top-6 right-6 bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
          Partner Model
        </div>
      )}
      <div className="p-12">
        <h3 className="text-3xl font-black mb-4">{title}</h3>
        <p className="text-slate-400 mb-8">{description}</p>
        <div className="space-y-8">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-6">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center text-primary font-bold ${isPartner ? "bg-primary/40" : "bg-primary/20"}`}
              >
                {step.icon ? (
                  <span className="material-symbols-outlined">{step.icon}</span>
                ) : (
                  i + 1
                )}
              </div>
              <div>
                <h5 className="font-bold text-lg">{step.name}</h5>
                <p className="text-slate-400">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className={`mt-auto p-12 border-t ${isPartner ? "bg-primary/10 border-primary/20" : "bg-slate-900/50 border-slate-800"}`}
      >
        <button
          className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${isPartner ? "bg-white text-background-dark hover:bg-slate-100" : "bg-primary text-white hover:bg-primary/90"}`}
        >
          {buttonText} <span className="material-symbols-outlined">{icon}</span>
        </button>
      </div>
    </div>
  );
}
