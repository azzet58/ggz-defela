import { Container } from "@/components/container";
import { site } from "@/lib/site";

/** Smalle crisisbalk onder de hero. */
export function EmergencyNotice() {
  return (
    <section
      aria-label={site.emergency.title}
      className="border-y border-line bg-mint"
    >
      <Container className="flex flex-col gap-1 py-4 text-base sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-4 md:py-[18px]">
        <strong className="font-bold">{site.emergency.title}</strong>
        <span className="sm:flex-1">{site.emergency.text}</span>
      </Container>
    </section>
  );
}
