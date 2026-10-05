import Link from "next/link";
import { site } from "@/lib/site";

type LogoProps = {
  /** "light" voor lichte achtergronden, "dark" voor de donkere footer. */
  tone?: "light" | "dark";
  className?: string;
};

export function Butterfly({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const top = tone === "light" ? "#1F9AA0" : "#8FD3CF";
  const bottom = tone === "light" ? "#1E6FA8" : "#6FB1E0";
  return (
    <svg viewBox="0 0 48 36" aria-hidden="true" className={className}>
      <path d="M24 18C20 6 6 2 3 8C1 14 12 20 24 18Z" fill={top} />
      <path d="M24 18C28 6 42 2 45 8C47 14 36 20 24 18Z" fill={top} />
      <path d="M24 19C14 20 6 26 10 31C15 35 22 28 24 19Z" fill={bottom} />
      <path d="M24 19C34 20 42 26 38 31C33 35 26 28 24 19Z" fill={bottom} />
    </svg>
  );
}

export function Logo({ tone = "light", className = "" }: LogoProps) {
  const dark = tone === "dark";
  return (
    <Link
      href="/"
      aria-label={`${site.name}, naar de homepage`}
      className={`inline-flex items-center gap-2.5 ${className}`}
    >
      <Butterfly tone={tone} className="h-[30px] w-10" />
      <span
        className={`font-display text-[28px] italic leading-none sm:text-[34px] ${
          dark ? "text-white" : "text-brand-logo"
        }`}
      >
        {site.name}
      </span>
    </Link>
  );
}
