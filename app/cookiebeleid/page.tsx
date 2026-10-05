import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookiebeleid",
  description: `Welke cookies ${site.name} gebruikt op deze website.`,
};

export default function CookiePage() {
  return (
    <LegalPage
      title="Cookiebeleid"
      intro="Welke cookies wij gebruiken en waarom."
    >
      <section className="flex flex-col gap-3">
        <h2>Wat zijn cookies?</h2>
        <p>
          Cookies zijn kleine bestanden die een website op uw apparaat opslaat.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2>Welke cookies gebruiken wij?</h2>
        <p>
          Deze website gebruikt op dit moment geen cookies voor tracking,
          statistieken of advertenties. Wij plaatsen alleen cookies of
          vergelijkbare technieken als die strikt nodig zijn om de website te
          laten werken. Daarvoor is geen toestemming nodig.
        </p>
        <p>
          [Aanpassen en een toestemmingsbanner toevoegen zodra {site.name}{" "}
          analytics, een kaart of andere externe diensten toevoegt.]
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2>Vragen?</h2>
        <p>
          Neem contact met ons op via {site.contact.email}. Meer over hoe wij met
          uw gegevens omgaan leest u in onze{" "}
          <Link href="/privacyverklaring">privacyverklaring</Link>.
        </p>
      </section>
    </LegalPage>
  );
}
