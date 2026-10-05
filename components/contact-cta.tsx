import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import { signupLink, site } from "@/lib/site";

/** Donkere afsluitende blok met contactgegevens en knoppen. */
export function ContactCta({
  title = "Neem contact met ons op",
  text = "Heeft u vragen of wilt u zich aanmelden? Bel of mail ons, of gebruik het aanmeldformulier.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-brand text-white">
      <Container className="flex flex-col gap-8 py-12 md:py-[72px] lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <div className="flex max-w-[640px] flex-col gap-3.5">
          <h2 className="font-display text-[30px] font-medium leading-[1.15] md:text-[40px]">
            {title}
          </h2>
          <p className="text-base leading-[1.6] text-deep-text md:text-lg">{text}</p>
          <p className="text-base font-semibold md:text-lg">
            {site.contact.phone} &nbsp;·&nbsp; {site.contact.email}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={signupLink.href} variant="light">
            {signupLink.label}
          </ButtonLink>
          <ButtonLink href="/contact" variant="ghost">
            Contact
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
