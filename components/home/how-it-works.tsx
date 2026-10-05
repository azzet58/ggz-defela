import { Container } from "@/components/container";
import { Steps } from "@/components/steps";

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

export function HowItWorks() {
  return (
    <section>
      <Container className="flex flex-col gap-8 py-14 md:gap-10 md:py-[88px]">
        <h2 className="font-display text-[30px] font-medium leading-[1.15] md:text-[40px]">
          Zo werkt het
        </h2>
        <Steps steps={steps} />
      </Container>
    </section>
  );
}
