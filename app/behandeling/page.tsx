import type { Metadata } from "next";
import Link from "next/link";
import { CardGrid } from "@/components/card-grid";
import { ClosingCta } from "@/components/closing-cta";
import { Container } from "@/components/container";
import { Faq } from "@/components/faq";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Steps } from "@/components/steps";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Behandeling",
  description: `Basis-GGZ bij ${site.name} in ${site.city}: voor wie het is, hoe de behandeling eruitziet en hoe u zich aanmeldt.`,
};

const complaints = [
  "Somberheid en depressie",
  "Angst en paniek",
  "Trauma en schokkende ervaringen",
  "Stress en overbelasting",
  "Verlies en rouw",
  "Spanningen thuis of in de relatie",
].map((title) => ({
  title,
  text: "[Korte uitleg over de klacht en de behandeling.]",
}));

const approach = [
  { title: "Individuele gesprekken", text: "[Toelichting.]" },
  { title: "Groepsbehandeling", text: "[Toelichting.]" },
  {
    title: "Behandeling in uw eigen taal",
    text: `${site.languagesText}. [Toelichting.]`,
  },
  { title: "Samenwerking met uw huisarts", text: "[Toelichting.]" },
];

const steps = [
  {
    title: "Aanmelden",
    text: "U meldt zich aan via het formulier of telefonisch. Uw huisarts kan u ook verwijzen.",
  },
  {
    title: "Kennismaking",
    text: "In een eerste gesprek bespreken we uw klachten en wat u nodig heeft.",
  },
  {
    title: "Start behandeling",
    text: "Samen stellen we een behandelplan op en u begint met de behandeling.",
  },
];

const faq = [
  {
    question: "Voor wie is basis-GGZ?",
    answer:
      "Voor mensen met lichte tot matige, niet-complexe psychische klachten die hun dagelijks leven, werk of relaties beïnvloeden. U hoeft niet te wachten tot het erg genoeg is om hulp te zoeken.",
  },
  {
    question: "Wat is het verschil met gespecialiseerde GGZ?",
    answer:
      "Gespecialiseerde GGZ is bedoeld voor ernstigere of complexere klachten en is vaak intensiever. Basis-GGZ is voor lichte tot matige klachten. Blijkt tijdens de behandeling dat andere of meer zorg nodig is, dan bespreekt uw behandelaar dat met u en uw huisarts.",
  },
  {
    question: "Is wat ik vertel vertrouwelijk?",
    answer:
      "Ja. Zorgverleners hebben beroepsgeheim. Wij delen informatie alleen met uw toestemming, behalve in de uitzonderlijke gevallen die de wet toestaat.",
  },
  {
    question: "Hoe lang duurt een behandeling?",
    answer:
      "Dat verschilt per persoon en per klacht. Basis-GGZ kent korte, middellange en intensieve trajecten. We bespreken samen welk traject bij u past. [Aanvullen met gemiddelde duur, indien gewenst.]",
  },
];

function InfoBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-display text-2xl font-medium md:text-[28px]">{title}</h3>
      {children}
    </div>
  );
}

const body = "text-base leading-[1.7] text-muted md:text-lg";

export default function TreatmentPage() {
  return (
    <>
      <PageHero
        title="Behandeling"
        intro="Samen met u stellen wij een behandelplan op dat past bij uw klachten, uw situatie en uw achtergrond."
      />

      <section id="info" className="scroll-mt-20 border-b border-line">
        <Container className="flex max-w-[960px] flex-col gap-10 py-14 md:gap-12 md:py-[72px]">
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-[30px] font-medium leading-[1.15] md:text-[40px]">
              Basis-GGZ bij {site.name}
            </h2>
            <p className={body}>
              {site.name} is een psychologiepraktijk in {site.city} en biedt
              basis-GGZ. Dat is behandeling bij lichte tot matige psychische
              klachten die niet complex zijn, zoals somberheid, angst of
              spanning. Gesprekken met een psycholoog helpen dan vaak om weer
              grip te krijgen. Hulp zoeken is geen zwakte.
            </p>
          </div>

          <InfoBlock title="Past basis-GGZ bij u?">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-t-4 border-line border-t-accent p-6">
                <h4 className="mb-2 text-lg font-bold">Basis-GGZ is geschikt bij</h4>
                <p className="leading-relaxed text-muted">
                  Lichte tot matige psychische klachten die niet complex zijn en
                  uw dagelijks leven, werk of relaties beïnvloeden.
                </p>
              </div>
              <div className="rounded-2xl border border-t-4 border-line border-t-ocean p-6">
                <h4 className="mb-2 text-lg font-bold">
                  Basis-GGZ is niet geschikt bij
                </h4>
                <p className="leading-relaxed text-muted">
                  Ernstige of complexe klachten, gedachten aan zelfdoding of
                  zelfbeschadiging. Dan heeft u andere hulp nodig. Neem contact
                  op met uw huisarts.
                </p>
              </div>
            </div>
            <p className={body}>
              Twijfelt u of basis-GGZ bij u past? Uw huisarts kan dat samen met u
              bepalen. [Leeftijdsgroep en eventuele andere criteria van{" "}
              {site.name} aanvullen.]
            </p>
          </InfoBlock>

          <InfoBlock title="Hoe ziet de behandeling eruit?">
            <p className={body}>
              De behandeling bestaat uit gesprekken met een psycholoog, soms
              aangevuld met online modules (e-health). Basis-GGZ kent trajecten
              van verschillende duur en intensiteit: kort, middel en intensief,
              en daarnaast een chronisch traject. [Aanvullen: welke trajecten en
              methoden {site.name} aanbiedt.]
            </p>
          </InfoBlock>

          <InfoBlock title="De weg naar zorg">
            <p className={body}>
              Voor basis-GGZ heeft u in de regel een verwijzing nodig. Die krijgt
              u meestal van uw huisarts, eventueel na een gesprek met de
              praktijkondersteuner GGZ. Ook een bedrijfsarts of medisch
              specialist kan verwijzen. Zonder verwijzing vergoedt uw
              zorgverzekeraar de behandeling in principe niet.
            </p>
            <div>
              <Link
                href="/verwijzers-vergoeding"
                className="inline-flex min-h-12 items-center font-semibold text-brand underline underline-offset-4"
              >
                Lees meer bij Verwijzers &amp; vergoeding
              </Link>
            </div>
          </InfoBlock>

          <div
            role="note"
            className="rounded-2xl border-l-4 border-brand bg-mint p-6 md:p-7"
          >
            <h3 className="mb-2 font-display text-2xl font-medium">
              {site.emergency.title}
            </h3>
            <p className="leading-[1.7] text-ink">
              Heeft u gedachten aan zelfdoding of beschadigt u uzelf? Wacht niet
              en zoek direct hulp. Bel 113 Zelfmoordpreventie (via 113 of{" "}
              {site.emergency.suicidePreventionPhone}, gratis en dag en nacht) of
              neem contact op met uw huisarts of huisartsenpost. Bij direct
              levensgevaar belt u 112.
            </p>
          </div>

          <InfoBlock title="Veelgestelde vragen">
            <Faq items={faq} />
          </InfoBlock>
        </Container>
      </section>

      <section>
        <Container className="flex flex-col gap-8 py-14 md:gap-10 md:py-[88px]">
          <SectionHeading title="Waarmee wij u helpen" />
          <CardGrid items={complaints} />
        </Container>
      </section>

      <section className="bg-mint">
        <Container className="flex flex-col gap-8 py-14 md:gap-10 md:py-[88px]">
          <SectionHeading title="Hoe wij behandelen" />
          <CardGrid items={approach} columns={2} />
        </Container>
      </section>

      <section>
        <Container className="flex flex-col gap-8 py-14 md:gap-10 md:py-[88px]">
          <SectionHeading title="Zo werkt het" />
          <Steps steps={steps} />
        </Container>
      </section>

      <ClosingCta title="Klaar om de eerste stap te zetten?" />
    </>
  );
}
