import { z } from "zod";
import { site } from "@/lib/site";

export const whoOptions = [
  "Ik meld mijzelf aan",
  "Huisarts of andere verwijzer",
  "Naaste of familielid",
] as const;

export const contactSchema = z
  .object({
    who: z.enum(whoOptions, { error: "Kies wie er aanmeldt." }),
    name: z
      .string()
      .trim()
      .min(2, "Vul uw naam in.")
      .max(100, "Uw naam is te lang."),
    phone: z
      .string()
      .trim()
      .max(30, "Dit telefoonnummer is te lang.")
      .regex(/^[0-9+()\-\s]*$/, "Gebruik alleen cijfers en + ( ) -"),
    email: z.union([
      z.literal(""),
      z.email("Vul een geldig e-mailadres in.").max(200),
    ]),
    language: z.enum(site.languages, { error: "Kies een taal." }),
    message: z.string().trim().max(1000, "Maximaal 1000 tekens."),
    consent: z.literal("on", {
      error: "U moet akkoord gaan met de privacyverklaring.",
    }),
  })
  .refine((data) => data.phone !== "" || data.email !== "", {
    path: ["phone"],
    error: "Vul een telefoonnummer of e-mailadres in, zodat wij u kunnen bereiken.",
  });

export type ContactField = keyof z.input<typeof contactSchema>;

export type ContactState = {
  status: "idle" | "success" | "error";
  /** Algemene melding bovenaan het formulier. */
  message?: string;
  errors?: Partial<Record<ContactField, string>>;
  /** Eerder ingevulde waarden, zodat de gebruiker niets opnieuw hoeft te typen. */
  values?: Partial<Record<ContactField, string>>;
};
