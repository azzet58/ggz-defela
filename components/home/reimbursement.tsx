import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";

export function Reimbursement() {
  return (
    <section>
      <Container className="pb-14 md:pb-[88px]">
        <div className="flex flex-col gap-6 rounded-3xl bg-mint p-6 sm:p-8 md:flex-row md:items-center md:justify-between md:gap-12 md:p-12">
          <div className="flex max-w-[640px] flex-col gap-3">
            <h2 className="font-display text-[28px] font-medium leading-[1.15] md:text-4xl">
              Vergoeding
            </h2>
            <p className="text-base leading-[1.6] text-muted md:text-lg">
              Basis-GGZ wordt vergoed vanuit uw basisverzekering. U heeft een
              verwijzing nodig, meestal van uw huisarts, en het eigen risico is
              van toepassing.
            </p>
          </div>
          <ButtonLink
            href="/verwijzers-vergoeding"
            variant="outline"
            size="md"
            className="shrink-0"
          >
            Verwijzers &amp; vergoeding
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
