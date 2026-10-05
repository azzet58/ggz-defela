import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact en aanmelden",
  description: `Neem contact op met ${site.name} of meld u aan voor basis-GGZ in ${site.city}.`,
};

export default function ContactPage() {
  const { contact, emergency } = site;
  return (
    <>
      <PageHero
        title="Contact en aanmelden"
        intro="Heeft u een vraag of wilt u zich aanmelden? Laat het ons weten, we nemen contact met u op."
      />

      <section>
        <Container className="grid gap-10 py-12 md:py-[72px] lg:grid-cols-[1fr_1.2fr] lg:gap-12">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h2 className="font-display text-[28px] font-medium md:text-[32px]">
                Contactgegevens
              </h2>
              <p className="text-base leading-[1.8] text-muted md:text-lg">
                Telefoon: {contact.phone}
                <br />
                E-mail: {contact.email}
                <br />
                Adres: {contact.address}, {site.city}
                <br />
                Bereikbaar: {contact.hours}
              </p>
            </div>

            <div className="flex min-h-[220px] items-center justify-center rounded-2xl bg-mint p-6 text-[15px] text-subtle">
              [Kaart van de locatie]
            </div>

            <div role="note" className="rounded-2xl border-l-4 border-brand bg-mint p-5 leading-relaxed">
              <strong className="font-bold">{emergency.title}</strong> Dit
              formulier is niet voor spoed. {emergency.text}
            </div>
          </div>

          <ContactForm />
        </Container>
      </section>
    </>
  );
}
