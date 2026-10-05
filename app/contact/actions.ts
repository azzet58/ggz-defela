"use server";

import { Resend } from "resend";
import {
  contactSchema,
  type ContactField,
  type ContactState,
} from "@/lib/contact-schema";
import { z } from "zod";

const fields: ContactField[] = [
  "who",
  "name",
  "phone",
  "email",
  "language",
  "message",
  "consent",
];

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: echte bezoekers zien dit veld niet en laten het leeg. Bots vullen het in.
  // We doen alsof het gelukt is, zodat bots niets leren.
  if (String(formData.get("website") ?? "") !== "") {
    return { status: "success" };
  }

  const raw = Object.fromEntries(
    fields.map((f) => [f, String(formData.get(f) ?? "")]),
  );

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    const flat = z.flattenError(parsed.error).fieldErrors as Partial<
      Record<ContactField, string[]>
    >;
    const errors = Object.fromEntries(
      Object.entries(flat).map(([key, msgs]) => [key, msgs?.[0]]),
    ) as ContactState["errors"];
    return {
      status: "error",
      message: "Controleer de gemarkeerde velden en probeer het opnieuw.",
      errors,
      values: raw,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    console.error("Contactformulier: RESEND_API_KEY, CONTACT_TO_EMAIL of CONTACT_FROM_EMAIL ontbreekt.");
    return {
      status: "error",
      message:
        "Versturen is nu niet mogelijk. Probeer het later opnieuw of neem telefonisch contact met ons op.",
      values: raw,
    };
  }

  const d = parsed.data;
  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: d.email || undefined,
    subject: `Nieuwe aanmelding via de website: ${d.name}`,
    text: [
      `Wie meldt aan: ${d.who}`,
      `Naam: ${d.name}`,
      `Telefoon: ${d.phone || "-"}`,
      `E-mail: ${d.email || "-"}`,
      `Gewenste taal: ${d.language}`,
      "",
      "Toelichting:",
      d.message || "-",
    ].join("\n"),
  });

  if (error) {
    console.error("Contactformulier: Resend gaf een fout.", error.name);
    return {
      status: "error",
      message:
        "Versturen is niet gelukt. Probeer het later opnieuw of neem telefonisch contact met ons op.",
      values: raw,
    };
  }

  return { status: "success" };
}
