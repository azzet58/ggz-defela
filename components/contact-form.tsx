"use client";

import Link from "next/link";
import { useActionState } from "react";
import { submitContact } from "@/app/contact/actions";
import {
  whoOptions,
  type ContactField,
  type ContactState,
} from "@/lib/contact-schema";
import { site } from "@/lib/site";

const initialState: ContactState = { status: "idle" };

const inputClass =
  "w-full rounded-xl border border-field bg-white px-4 py-3.5 text-base text-ink aria-[invalid=true]:border-red-700";

function Field({
  id,
  label,
  error,
  hint,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-base font-semibold">
        {label}
      </label>
      {hint && (
        <p id={`${id}-hint`} className="-mt-1 text-[15px] text-muted">
          {hint}
        </p>
      )}
      {children}
      {error && (
        <p id={`${id}-error`} className="text-[15px] font-medium text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initialState);

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col gap-3 rounded-2xl bg-mint p-6 md:p-8"
      >
        <h2 className="font-display text-[28px] font-medium">Bedankt voor uw bericht</h2>
        <p className="leading-relaxed text-muted">
          Wij hebben uw aanmelding ontvangen en nemen zo snel mogelijk contact
          met u op. Heeft u hulp nodig die niet kan wachten? Neem dan contact op
          met uw huisartsenpost.
        </p>
      </div>
    );
  }

  const v = state.values ?? {};
  const e = state.errors ?? {};
  const describe = (f: ContactField, hint = false) =>
    [e[f] ? `${f}-error` : "", hint ? `${f}-hint` : ""].filter(Boolean).join(" ") ||
    undefined;

  return (
    <form
      action={action}
      noValidate
      className="flex flex-col gap-5 rounded-2xl border border-line p-5 sm:p-8"
    >
      <h2 className="font-display text-[28px] font-medium md:text-[32px]">
        Aanmeldformulier
      </h2>

      {state.status === "error" && state.message && (
        <p
          role="alert"
          className="rounded-xl border border-red-700 bg-red-50 px-4 py-3 text-[15px] font-medium text-red-800"
        >
          {state.message}
        </p>
      )}

      <Field id="who" label="Wie meldt aan?" error={e.who}>
        <select
          id="who"
          name="who"
          defaultValue={v.who ?? whoOptions[0]}
          aria-invalid={!!e.who}
          aria-describedby={describe("who")}
          className={inputClass}
        >
          {whoOptions.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </Field>

      <Field id="name" label="Naam" error={e.name}>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          defaultValue={v.name}
          aria-invalid={!!e.name}
          aria-describedby={describe("name")}
          className={inputClass}
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="phone" label="Telefoonnummer" error={e.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            defaultValue={v.phone}
            aria-invalid={!!e.phone}
            aria-describedby={describe("phone")}
            className={inputClass}
          />
        </Field>
        <Field id="email" label="E-mailadres" error={e.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            defaultValue={v.email}
            aria-invalid={!!e.email}
            aria-describedby={describe("email")}
            className={inputClass}
          />
        </Field>
      </div>
      <p className="-mt-2 text-[15px] text-muted">
        Vul minimaal een telefoonnummer of e-mailadres in.
      </p>

      <Field id="language" label="In welke taal wilt u contact?" error={e.language}>
        <select
          id="language"
          name="language"
          defaultValue={v.language ?? site.languages[0]}
          aria-invalid={!!e.language}
          aria-describedby={describe("language")}
          className={inputClass}
        >
          {site.languages.map((l) => (
            <option key={l}>{l}</option>
          ))}
        </select>
      </Field>

      <Field
        id="message"
        label="Uw vraag of korte toelichting"
        hint="Deel hier geen uitgebreide medische gegevens. Dat bespreken we samen in een gesprek."
        error={e.message}
      >
        <textarea
          id="message"
          name="message"
          rows={4}
          maxLength={1000}
          defaultValue={v.message}
          aria-invalid={!!e.message}
          aria-describedby={describe("message", true)}
          className={inputClass}
        />
      </Field>

      {/* Honeypot: verborgen voor mensen, bots vullen het in. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label>
          Laat dit veld leeg
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-start gap-3">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            defaultChecked={v.consent === "on"}
            aria-invalid={!!e.consent}
            aria-describedby={describe("consent")}
            className="mt-1 h-5 w-5 shrink-0 accent-brand"
          />
          <label htmlFor="consent" className="text-base">
            Ik ga akkoord met de{" "}
            <Link
              href="/privacyverklaring"
              target="_blank"
              className="font-semibold text-brand underline underline-offset-2"
            >
              privacyverklaring
            </Link>
            .
          </label>
        </div>
        {e.consent && (
          <p id="consent-error" className="text-[15px] font-medium text-red-700">
            {e.consent}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-8 py-3.5 text-[17px] font-semibold text-white transition-colors hover:bg-ink disabled:opacity-60 sm:self-start"
      >
        {pending ? "Bezig met versturen…" : "Aanmelden"}
      </button>
    </form>
  );
}
