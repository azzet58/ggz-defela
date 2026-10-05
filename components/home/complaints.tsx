import Link from "next/link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

const complaints = [
  {
    title: "Somberheid en depressie",
    text: "Weinig energie, veel piekeren of nergens meer plezier in hebben.",
  },
  {
    title: "Angst en paniek",
    text: "Voortdurende spanning, angstklachten of paniekaanvallen.",
  },
  {
    title: "Trauma en schokkende ervaringen",
    text: "Beelden of herinneringen die u blijven achtervolgen.",
  },
  {
    title: "Stress en overbelasting",
    text: "Als werk, gezin of zorgen u boven het hoofd groeien.",
  },
  {
    title: "Verlies en rouw",
    text: "Het gemis van iemand of iets dat u dierbaar was.",
  },
  {
    title: "Spanningen thuis of in de relatie",
    text: "Als het thuis niet lekker loopt en dat uw welzijn raakt.",
  },
];

export function Complaints() {
  return (
    <section>
      <Container className="flex flex-col gap-8 py-14 md:gap-10 md:py-[88px]">
        <SectionHeading
          title="Waarmee wij u helpen"
          intro="Herkent u zich in een van deze klachten? Dan bent u bij ons aan het juiste adres."
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {complaints.map((item) => (
            <li key={item.title}>
              <Link
                href="/behandeling"
                className="flex h-full flex-col gap-2.5 rounded-2xl border border-t-4 border-line border-t-accent bg-white p-6 transition-shadow hover:shadow-md md:p-7"
              >
                <h3 className="font-display text-2xl font-medium">{item.title}</h3>
                <p className="text-base leading-relaxed text-muted">{item.text}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
