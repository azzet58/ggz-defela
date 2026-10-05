import Link from "next/link";
import { Container } from "@/components/container";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { site } from "@/lib/site";

export function AboutTeaser() {
  return (
    <section>
      <Container className="grid items-center gap-8 pb-14 md:pb-[88px] lg:grid-cols-2 lg:gap-14">
        <PhotoPlaceholder
          label="[Foto: team of locatie]"
          className="min-h-[240px] lg:min-h-[340px]"
        />
        <div className="flex flex-col gap-5">
          <h2 className="font-display text-[30px] font-medium leading-[1.15] md:text-[40px]">
            Over {site.name}
          </h2>
          <p className="text-base leading-[1.6] text-muted md:text-lg">
            {site.name} is een psychologiepraktijk in {site.city} voor basis-GGZ.
            [Korte introductie: wie jullie zijn, waar jullie voor staan en wie u
            als cliënt tegenkomt.]
          </p>
          <div>
            <Link
              href="/over-ons"
              className="inline-flex min-h-12 items-center text-[17px] font-semibold text-brand underline underline-offset-4"
            >
              Meer over ons
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
