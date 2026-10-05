export type Step = { title: string; text: string };

/** Genummerde stappen, op mobiel onder elkaar en vanaf md naast elkaar. */
export function Steps({ steps }: { steps: Step[] }) {
  return (
    <ol className="grid gap-8 md:grid-cols-3">
      {steps.map((step, i) => (
        <li key={step.title} className="flex flex-col gap-3">
          <span
            aria-hidden="true"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-xl font-bold text-white"
          >
            {i + 1}
          </span>
          <h3 className="font-display text-2xl font-medium">{step.title}</h3>
          <p className="leading-[1.6] text-muted">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
