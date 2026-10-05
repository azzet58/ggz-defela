import type { Metadata } from "next";
import { ButtonLink } from "@/components/button";
import { CardGrid } from "@/components/card-grid";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Werken bij ons",
  description: `Werken bij ${site.name}: bekijk onze vacatures of stuur een open sollicitatie.`,
};

const benefits = [
  {
    title: "[Voordeel 1]",
    text: "[Toelichting, bijvoorbeeld over cultuursensitief werken.]",
  },
  {
    title: "[Voordeel 2]",
    text: "[Toelichting, bijvoorbeeld over begeleiding en opleiding.]",
  },
  {
    title: "[Voordeel 3]",
    text: "[Toelichting, bijvoorbeeld over arbeidsvoorwaarden.]",
  },
];

// Vul de echte vacatures hier in; `href` verwijst naar de vacaturetekst.
const vacancies = [
  { title: "[Functietitel]", hours: "[Aantal uren]", href: "#" },
  { title: "[Functietitel]", hours: "[Aantal uren]", href: "#" },
];

export default function CareersPage() {
  const email = site.contact.careersEmail;
  return (
    <>
      <PageHero
        title={`Werken bij ${site.name}`}
        intro="[Korte wervende intro voor zorgprofessionals: wat het werken bij Defela bijzonder maakt.]"
      />

      <section>
        <Container className="flex flex-col gap-8 py-14 md:gap-10 md:py-20">
          <SectionHeading title={`Waarom werken bij ${site.name}`} />
          <CardGrid items={benefits} />
        </Container>
      </section>

      <section className="bg-mint">
        <Container className="flex flex-col gap-8 py-14 md:gap-10 md:py-20">
          <SectionHeading title="Openstaande vacatures" />
          <ul className="flex flex-col gap-3">
            {vacancies.map((v, i) => (
              <li
                key={i}
                className="flex flex-col gap-4 rounded-2xl bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:px-7 sm:py-6"
              >
                <div>
                  <p className="text-xl font-semibold">{v.title}</p>
                  <p className="mt-1.5 text-[15px] text-muted">
                    {v.hours} · {site.city}
                  </p>
                </div>
                <ButtonLink href={v.href} size="md">
                  Bekijk vacature
                </ButtonLink>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-5 rounded-[20px] bg-white p-6 sm:p-8 md:flex-row md:items-center md:justify-between md:gap-10">
            <div className="flex flex-col gap-2 md:max-w-[640px]">
              <h3 className="font-display text-[26px] font-medium">
                Open sollicitatie
              </h3>
              <p className="leading-relaxed text-muted">
                Geen passende vacature? Stuur ons uw cv en motivatie naar{" "}
                <a
                  href={`mailto:${email}`}
                  className="font-semibold text-brand underline underline-offset-2"
                >
                  {email}
                </a>
                .
              </p>
            </div>
            <ButtonLink
              href="/contact"
              variant="outline"
              size="md"
              className="shrink-0"
            >
              Neem contact op
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
