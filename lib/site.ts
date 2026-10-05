/**
 * Alle klantgegevens en vaste teksten op één plek.
 * Waarden tussen [haakjes] zijn plaatshouders: vervang ze zodra Defela de gegevens aanlevert.
 */

const languages = ["Nederlands", "Turks", "Engels", "Berbers"] as const;

export const site = {
  name: "Defela",
  city: "Den Haag",
  description:
    "Psychologiepraktijk voor basis-GGZ in Den Haag, met aandacht voor uw achtergrond en in uw eigen taal.",
  tagline: "Cultuursensitieve geestelijke gezondheidszorg in Den Haag",

  languages,
  // "Nederlands, Turks, Engels en Berbers"
  languagesText: new Intl.ListFormat("nl", {
    style: "long",
    type: "conjunction",
  }).format(languages),

  contact: {
    phone: "[TELEFOONNUMMER]",
    email: "[E-MAILADRES]",
    address: "[ADRES]",
    hours: "[OPENINGSTIJDEN]",
    referrerEmail: "[E-MAILADRES VERWIJZERS]",
    careersEmail: "[E-MAILADRES SOLLICITATIES]",
  },

  registration: {
    kvk: "[KVK-NUMMER]",
    agb: "[AGB-CODE]",
  },

  // Externe documenten en diensten; vul de echte adressen in zodra ze bekend zijn.
  links: {
    qualityStatement: "#",
    complaintsPortal: "#",
  },

  // Crisisinformatie: op alle pagina's dezelfde tekst, daarom op één plek.
  emergency: {
    title: "Acuut hulp nodig?",
    text: "Neem contact op met uw huisartsenpost. Bij direct levensgevaar belt u 112. Denkt u aan zelfdoding? Bel 113 Zelfmoordpreventie, gratis en dag en nacht.",
    suicidePreventionPhone: "0800-0113",
  },
} as const;

export type NavItem = { label: string; href: string };

/** Hoofdmenu in de header. */
export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Behandeling", href: "/behandeling" },
  { label: "Verwijzers & vergoeding", href: "/verwijzers-vergoeding" },
  { label: "Werken bij ons", href: "/werken-bij-ons" },
  { label: "Contact", href: "/contact" },
];

/** Knop rechts in de header en op de pagina's. */
export const signupLink: NavItem = { label: "Aanmelden", href: "/contact" };

/** Navigatiekolom in de footer: het hoofdmenu zonder Home. */
export const footerNav: NavItem[] = mainNav.filter((item) => item.href !== "/");
