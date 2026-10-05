import type { ReactNode } from "react";
import { Container } from "@/components/container";

/** Kop bovenaan een binnenpagina. */
export function PageHero({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-mint">
      <Container className="flex flex-col gap-4 py-12 md:py-16">
        <h1 className="font-display text-[38px] font-medium leading-[1.1] md:text-5xl">
          {title}
        </h1>
        <p className="max-w-[720px] text-lg leading-relaxed text-muted md:text-xl">
          {intro}
        </p>
        {children}
      </Container>
    </section>
  );
}
