import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import { signupLink } from "@/lib/site";

/** Korte afsluiter met één knop. */
export function ClosingCta({
  title,
  label = signupLink.label,
  href = signupLink.href,
}: {
  title: string;
  label?: string;
  href?: string;
}) {
  return (
    <section className="bg-brand text-white">
      <Container className="flex flex-col items-start gap-6 py-12 md:py-16 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="max-w-[640px] font-display text-[30px] font-medium leading-[1.15] md:text-[40px]">
          {title}
        </h2>
        <ButtonLink href={href} variant="light">
          {label}
        </ButtonLink>
      </Container>
    </section>
  );
}
