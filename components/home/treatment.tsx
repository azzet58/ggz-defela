import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import { CheckIcon } from "@/components/icons";
import Link from "next/link";

const points = [
  "Individuele gesprekken",
  "Groepsbehandeling",
  "Behandeling in uw eigen taal",
  "Samenwerking met uw huisarts",
];

export function Treatment() {
  return (
    <section className="bg-mint">
      <Container className="grid items-center gap-8 py-14 md:py-[88px] lg:grid-cols-2 lg:gap-14">
        <div className="flex flex-col gap-5">
          <h2 className="font-display text-[30px] font-medium leading-[1.15] md:text-[40px]">
            Onze behandeling
          </h2>
          <p className="text-base leading-[1.6] text-muted md:text-lg">
            Samen met u stellen wij een behandelplan op dat past bij uw klachten,
            uw situatie en uw achtergrond. U kunt in uw eigen taal praten over wat
            u bezighoudt.
          </p>
          <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
            <ButtonLink href="/behandeling" size="md">
              Bekijk de behandeling
            </ButtonLink>
            <Link
              href="/behandeling#info"
              className="inline-flex min-h-12 items-center justify-center font-semibold text-brand underline underline-offset-4"
            >
              Wat is basis-GGZ?
            </Link>
          </div>
        </div>
        <ul className="flex flex-col gap-3.5">
          {points.map((point) => (
            <li
              key={point}
              className="flex items-center gap-4 rounded-[14px] bg-white px-5 py-4 text-base font-medium md:px-[22px] md:py-[18px] md:text-lg"
            >
              <CheckIcon className="h-6 w-6 shrink-0 text-brand" />
              {point}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
