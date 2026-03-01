interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function ProcessStep({ steps }: { steps: Step[] }) {
  return (
    <div className="relative flex flex-col md:flex-row gap-8 md:gap-4">
      {/* Connector line */}
      <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-border-subtle" />

      {steps.map((step, i) => (
        <div key={i} className="flex-1 relative text-center">
          <div className="relative z-10 w-20 h-20 mx-auto mb-4 bg-subtle rounded-2xl flex items-center justify-center text-heading">
            {step.icon}
          </div>
          <span className="inline-block text-xs font-bold text-caption uppercase tracking-wider mb-2">
            STEP {step.number}
          </span>
          <h3 className="text-lg font-bold text-heading mb-1">{step.title}</h3>
          <p className="text-sm text-caption">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
