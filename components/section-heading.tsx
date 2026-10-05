export function SectionHeading({
  title,
  intro,
  className = "",
}: {
  title: string;
  intro?: string;
  className?: string;
}) {
  return (
    <div className={`flex max-w-[640px] flex-col gap-3 ${className}`}>
      <h2 className="font-display text-[30px] font-medium leading-[1.15] md:text-[40px]">
        {title}
      </h2>
      {intro && (
        <p className="text-base leading-relaxed text-muted md:text-lg">{intro}</p>
      )}
    </div>
  );
}
