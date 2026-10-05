import Link from "next/link";
import type { ComponentProps } from "react";

const variants = {
  primary: "bg-brand text-white border-2 border-brand hover:bg-ink hover:border-ink",
  outline: "bg-white text-brand border-2 border-brand hover:bg-mint",
  light: "bg-white text-brand border-2 border-white hover:bg-mint hover:border-mint",
  ghost: "bg-transparent text-white border-2 border-white hover:bg-white/10",
} as const;

const sizes = {
  md: "px-6 py-3 text-base",
  lg: "px-8 py-3.5 text-[17px]",
} as const;

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

/** Knop die er als knop uitziet maar een link is (navigatie). */
export function ButtonLink({
  variant = "primary",
  size = "lg",
  className = "",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      {...props}
      className={`inline-flex min-h-12 items-center justify-center rounded-full text-center font-semibold transition-colors ${variants[variant]} ${sizes[size]} ${className}`}
    />
  );
}
