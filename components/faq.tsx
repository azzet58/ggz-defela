export type FaqItem = { question: string; answer: string };

/** Uitklapbare vragen met het ingebouwde details-element (werkt zonder JavaScript). */
export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => (
        <details
          key={item.question}
          className="group rounded-[14px] bg-mint px-5 py-4 md:px-6 md:py-5"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold md:text-lg [&::-webkit-details-marker]:hidden">
            {item.question}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="h-5 w-5 shrink-0 text-brand transition-transform group-open:rotate-180"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </summary>
          <p className="mt-3 leading-[1.6] text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
