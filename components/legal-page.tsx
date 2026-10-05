import type { ReactNode } from "react";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";

/** Opmaak voor juridische tekstpagina's. */
export function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHero title={title} intro={intro} />
      <section>
        <Container className="py-12 md:py-[72px]">
          <div
            role="note"
            className="mb-10 max-w-[760px] rounded-2xl border-l-4 border-ocean bg-mint p-5 text-[15px] leading-relaxed"
          >
            <strong>Concepttekst.</strong> Deze tekst is een voorlopige versie en
            moet door Defela en indien nodig een jurist worden gecontroleerd en
            aangevuld voordat de website live gaat.
          </div>
          <div className="flex max-w-[760px] flex-col gap-8 text-base leading-[1.75] text-muted md:text-lg [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-medium [&_h2]:text-ink md:[&_h2]:text-[28px] [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mt-1.5 [&_a]:font-semibold [&_a]:text-brand [&_a]:underline">
            {children}
          </div>
        </Container>
      </section>
    </>
  );
}
