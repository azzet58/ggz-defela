import Link from "next/link";
import { Logo } from "@/components/logo";
import { footerNav, site } from "@/lib/site";

const linkClass =
  "inline-flex min-h-8 items-center gap-2 text-[15px] text-deep-text hover:underline";

function Column({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="mb-1 font-display text-xl font-medium text-white">{title}</h2>
      {children}
    </div>
  );
}

export function Footer() {
  const { contact, registration, links } = site;
  return (
    <footer className="bg-deep text-deep-text">
      <div className="mx-auto w-full max-w-[1200px] px-5 pb-7 pt-12 sm:px-8 md:pt-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div className="flex flex-col gap-3.5">
            <Logo tone="dark" />
            <p className="text-[15px] leading-relaxed text-deep-muted">
              {site.tagline}
            </p>
            <address className="text-[15px] not-italic leading-[1.7]">
              {contact.phone}
              <br />
              {contact.email}
              <br />
              {contact.address}, {site.city}
            </address>
          </div>

          <Column title="Navigatie">
            {footerNav.map((item) => (
              <Link key={item.href} href={item.href} className={linkClass}>
                {item.label}
              </Link>
            ))}
          </Column>

          <Column title="Kwaliteit">
            <a href={links.qualityStatement} className={linkClass}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
                <path d="M14 3v5h5" />
                <path d="M9 13h6M9 17h6" />
              </svg>
              Kwaliteitsstatuut
            </a>
            <a
              href={links.complaintsPortal}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Klachtenzorgportaal
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 17L17 7" />
                <path d="M8 7h9v9" />
              </svg>
              <span className="sr-only">(opent in een nieuw tabblad)</span>
            </a>
          </Column>

          <Column title="Talen">
            <p className="text-[15px] leading-relaxed">
              Behandeling beschikbaar in: {site.languagesText}
            </p>
          </Column>
        </div>

        <div className="mt-10 flex flex-col gap-2.5 border-t border-white/20 pt-6 text-sm text-deep-muted md:flex-row md:justify-between md:gap-6">
          <p>© 2026 {site.name}. Alle rechten voorbehouden.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/privacyverklaring" className="hover:underline">
              Privacyverklaring
            </Link>
            <Link href="/cookiebeleid" className="hover:underline">
              Cookiebeleid
            </Link>
            <span>
              KvK: {registration.kvk} · AGB-code: {registration.agb}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
