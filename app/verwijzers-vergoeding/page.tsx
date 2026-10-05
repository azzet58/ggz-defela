import type { Metadata } from "next";
import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import { Faq } from "@/components/faq";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Steps } from "@/components/steps";
import { ClosingCta } from "@/components/closing-cta";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Verwijzers & vergoeding",
  description: `Alles over verwijzen naar ${site.name} en over de vergoeding van uw basis-GGZ-behandeling.`,
};

const referrerSteps = [
  {
    title: "Verwijs of meld aan",
    text: "[Hoe verwijzers aanmelden: formulier, e-mail of zorgmail.]",
  },
  {
    title: "Wij nemen contact op",
    text: "[Wat verwijzer en cliënt daarna kunnen verwachten.]",
  },
  {
    title: "Terugkoppeling",
    text: "[Hoe en wanneer de verwijzer bericht krijgt.]",
  },
];

const costFaq = [
  {
    question: "Heb ik een verwijzing nodig?",
    answer:
      "Ja, voor behandeling in de basis-GGZ heeft u in de regel een verwijzing nodig. Die krijgt u meestal van uw huisarts. Ook een bedrijfsarts of medisch specialist kan verwijzen. [Aanvullen met specifieke werkwijze van Defela.]",
  },
  {
    question: "Wat betekent het eigen risico?",
    answer:
      "Het eigen risico is het bedrag dat u zelf betaalt voordat uw zorgverzekering de kosten vergoedt. [Aanvullen indien gewenst.]",
  },
  {
    question: "Met welke zorgverzekeraars heeft Defela een contract?",
    answer: "[Lijst met zorgverzekeraars, aanleveren door opdrachtgever.]",
  },
];

export default function ReferrersPage() {
  const { contact } = site;
  return (
    <>
      <PageHero
        title="Verwijzers & vergoeding"
        intro={`Alles over verwijzen naar ${site.name} en over de vergoeding van uw behandeling.`}
      >
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="#verwijzers" size="md">
            Voor verwijzers
          </ButtonLink>
          <ButtonLink href="#vergoeding" variant="outline" size="md">
            Vergoeding en kosten
          </ButtonLink>
        </div>
      </PageHero>

      <section id="verwijzers" className="scroll-mt-20">
        <Container className="flex flex-col gap-10 py-14 md:py-[88px]">
          <SectionHeading
            title="Voor verwijzers"
            intro={`Bent u huisarts of andere verwijzer? Zo verwijst u een cliënt naar ${site.name}.`}
          />
          <Steps steps={referrerSteps} />

          <div className="flex flex-col gap-4">
            <h3 className="font-display text-2xl font-medium md:text-[28px]">
              Wie kunt u verwijzen?
            </h3>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-t-4 border-line border-t-accent p-6">
                <h4 className="mb-2 text-lg font-bold">Geschikt voor {site.name}</h4>
                <p className="leading-relaxed text-muted">
                  Cliënten met lichte tot matige, niet-complexe psychische
                  klachten. [Leeftijdsgroep en eventuele andere criteria
                  aanvullen.]
                </p>
              </div>
              <div className="rounded-2xl border border-t-4 border-line border-t-ocean p-6">
                <h4 className="mb-2 text-lg font-bold">Niet geschikt</h4>
                <p className="leading-relaxed text-muted">
                  Cliënten met suïcidale gedachten of zelfbeschadiging, of met
                  ernstige of complexe problematiek. Verwijs hen naar
                  gespecialiseerde GGZ.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 rounded-2xl bg-mint p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div className="flex flex-col gap-1">
              <p className="text-lg font-bold">Vragen van verwijzers</p>
              <p className="text-base text-muted md:text-lg">
                {contact.referrerEmail} · {contact.phone}
              </p>
            </div>
            <ButtonLink href="/contact" size="md" className="shrink-0">
              Cliënt aanmelden
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section id="vergoeding" className="scroll-mt-20 border-t border-line">
        <Container className="flex flex-col gap-8 py-14 md:py-[88px]">
          <SectionHeading
            title="Vergoeding en kosten"
            intro="Basis-GGZ wordt vergoed vanuit uw basisverzekering. U heeft een verwijzing nodig, meestal van uw huisarts, en het eigen risico is van toepassing."
          />
          <Faq items={costFaq} />
        </Container>
      </section>

      <ClosingCta
        title="Vragen over vergoeding of verwijzing?"
        label="Neem contact op"
        href="/contact"
      />
    </>
  );
}
