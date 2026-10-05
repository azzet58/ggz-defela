"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { mainNav, signupLink } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Escape sluit het mobiele menu.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:py-3.5">
        <Logo />

        <nav aria-label="Hoofdmenu" className="hidden items-center gap-7 lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`border-b-2 py-2.5 text-base transition-colors hover:text-brand ${
                isActive(item.href)
                  ? "border-accent font-bold"
                  : "border-transparent font-medium"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={signupLink.href}
            className="inline-flex min-h-12 items-center rounded-full bg-brand px-6 text-base font-semibold text-white transition-colors hover:bg-ink"
          >
            {signupLink.label}
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-line text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobiel-menu"
          aria-label={open ? "Sluit menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="mobiel-menu"
          aria-label="Hoofdmenu"
          className="border-t border-line bg-white lg:hidden"
        >
          <ul className="mx-auto flex w-full max-w-[1200px] flex-col px-5 py-3 sm:px-8">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`flex min-h-12 items-center border-b border-line text-lg ${
                    isActive(item.href) ? "font-bold text-brand" : "font-medium"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="py-4">
              <Link
                href={signupLink.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center justify-center rounded-full bg-brand px-6 text-lg font-semibold text-white"
              >
                {signupLink.label}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
