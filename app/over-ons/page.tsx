import type { Metadata } from "next";
import { CardGrid } from "@/components/card-grid";
import { ClosingCta } from "@/components/closing-cta";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Over ons",
  description: `${site.name} is een psychologiepraktijk in ${site.city} voor basis-GGZ, met aandacht voor uw achtergrond en in uw eigen taal.`,
};

const approach = [
  {
    title: "Aandacht voor uw achtergrond",
    text: "[Korte uitleg over cultuursensitief werken.]",
  },
  {
    title: "Behandeling in uw eigen taal",
    text: `${site.languagesText}. [Toelichting.]`,
  },
  {
    title: "Samen beslissen",
    text: "[Korte uitleg over samen een behandelplan opstellen.]",
  },
];

const team = [1, 2, 3, 4];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={`Over ${site.name}`}
        intro={`${site.name} is een psychologiepraktijk in ${site.city} en biedt basis-GGZ, met aandacht voor wie u bent en waar u vandaan komt.`}
      />

      <section>
        <Container className="grid items-center gap-8 py-14 md:py-[88px] lg:grid-cols-2 lg:gap-14">
          <PhotoPlaceholder
            label="[Foto: team of locatie]"
            className="min-h-[240px] lg:min-h-[360px]"
          />
          <div className="flex flex-col gap-5">
            <h2 className="font-display text-[30px] font-medium leading-[1.15] md:text-[40px]">
              Wie wij zijn
            </h2>
            <p className="text-base leading-[1.7] text-muted md:text-lg">
              [Het verhaal van {site.name}: waarom de organisatie is opgericht,
              voor wie en sinds wanneer. Aanleveren door opdrachtgever.]
            </p>
            <p className="text-base leading-[1.7] text-muted md:text-lg">
              [Tweede alinea: wat cliënten van jullie mogen verwachten.]
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-mint">
        <Container className="flex flex-col gap-8 py-14 md:gap-10 md:py-[88px]">
          <SectionHeading title="Hoe wij werken" />
          <CardGrid items={approach} />
        </Container>
      </section>

      <section>
        <Container className="flex flex-col gap-8 py-14 md:gap-10 md:py-[88px]">
          <SectionHeading title="Ons team" />
          <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {team.map((n) => (
              <li key={n} className="flex flex-col gap-3">
                <div className="flex aspect-square items-center justify-center rounded-2xl bg-mint text-[15px] text-subtle">
                  [Foto]
                </div>
                <div>
                  <p className="font-semibold">[Naam]</p>
                  <p className="text-[15px] text-muted">[Functie]</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ClosingCta title="Wilt u zich aanmelden of eerst met ons praten?" />
    </>
  );
}
