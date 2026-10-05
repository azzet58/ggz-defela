import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description: `Hoe ${site.name} omgaat met uw persoonsgegevens op deze website.`,
};

export default function PrivacyPage() {
  const { contact, registration } = site;
  return (
    <LegalPage
      title="Privacyverklaring"
      intro="Hoe wij omgaan met de gegevens die u via deze website met ons deelt."
    >
      <section className="flex flex-col gap-3">
        <h2>Wie is verantwoordelijk?</h2>
        <p>
          {site.name} ({contact.address}, {site.city}, KvK {registration.kvk}) is
          verantwoordelijk voor de verwerking van persoonsgegevens via deze
          website. U kunt ons bereiken via {contact.email} of {contact.phone}.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2>Welke gegevens verwerken wij?</h2>
        <p>Als u het aanmeldformulier invult, verwerken wij:</p>
        <ul>
          <li>wie de aanmelding doet (uzelf, een verwijzer of een naaste);</li>
          <li>uw naam;</li>
          <li>uw telefoonnummer en/of e-mailadres;</li>
          <li>de taal waarin u contact wilt;</li>
          <li>de toelichting die u zelf invult.</li>
        </ul>
        <p>
          Wij vragen u op het formulier geen uitgebreide medische gegevens te
          delen. Die bespreken we samen met u in een gesprek.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2>Waarom en op welke grondslag?</h2>
        <p>
          Wij gebruiken deze gegevens alleen om contact met u op te nemen over
          uw aanmelding of vraag. Dit doen wij op basis van uw toestemming, die u
          geeft door het formulier te versturen en akkoord te gaan met deze
          verklaring. [Grondslag laten controleren.]
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2>Met wie delen wij gegevens?</h2>
        <p>
          Het formulier wordt verstuurd met de e-maildienst Resend. Resend
          verwerkt de gegevens in onze opdracht en kan deze buiten de Europese
          Economische Ruimte (in de Verenigde Staten) verwerken, onder passende
          waarborgen. [Verwerkersovereenkomst en doorgifte laten controleren.]
          Verder delen wij uw gegevens niet met derden, tenzij de wet dat
          verplicht.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2>Hoe lang bewaren wij gegevens?</h2>
        <p>
          [Bewaartermijn aanvullen.] Gegevens uit het formulier bewaren wij niet
          langer dan nodig is om uw aanmelding of vraag af te handelen.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2>Uw rechten</h2>
        <p>
          U kunt ons vragen om inzage, correctie of verwijdering van uw gegevens,
          en u kunt uw toestemming altijd intrekken. Neem hiervoor contact met
          ons op via {contact.email}. Komt u er met ons niet uit, dan kunt u een
          klacht indienen bij de Autoriteit Persoonsgegevens.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2>Cookies</h2>
        <p>
          Lees hoe wij met cookies omgaan in ons{" "}
          <Link href="/cookiebeleid">cookiebeleid</Link>.
        </p>
      </section>
    </LegalPage>
  );
}
