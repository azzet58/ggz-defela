import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { signupLink, site } from "@/lib/site";

export function Hero() {
  return (
    <section>
      <Container className="grid items-center gap-10 py-10 md:py-16 lg:grid-cols-2 lg:gap-12 lg:py-[72px]">
        <div className="flex flex-col gap-5 md:gap-6">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-brand-logo md:text-[15px]">
            Psychologiepraktijk voor basis-GGZ in {site.city}
          </p>
          <h1 className="font-display text-[40px] font-medium leading-[1.08] md:text-[58px]">
            Hulp die past bij wie u bent
          </h1>
          <p className="max-w-[540px] text-lg leading-relaxed text-muted md:text-xl">
            Bij {site.name} krijgt u behandeling met aandacht voor uw achtergrond,
            in uw eigen taal. U hoeft het niet alleen te doen.
          </p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={signupLink.href}>{signupLink.label}</ButtonLink>
            <ButtonLink href="/contact" variant="outline">
              Neem contact op
            </ButtonLink>
          </div>
          <p className="text-base text-muted">
            Behandeling in het {site.languagesText}
          </p>
        </div>
        <PhotoPlaceholder
          label="[Foto: sfeerbeeld of locatie]"
          showLogo
          className="min-h-[260px] md:min-h-[420px]"
        />
      </Container>
    </section>
  );
}
