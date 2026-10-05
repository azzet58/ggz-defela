import { Butterfly } from "@/components/logo";

/** Plaatshouder tot Defela echte foto's aanlevert. */
export function PhotoPlaceholder({
  label,
  showLogo = false,
  className = "",
}: {
  label: string;
  showLogo?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 rounded-[28px] bg-mint p-8 ${className}`}
    >
      {showLogo && <Butterfly className="h-[84px] w-28 md:h-[105px] md:w-[140px]" />}
      <p className="text-center text-[15px] text-subtle">{label}</p>
    </div>
  );
}
