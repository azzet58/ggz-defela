# Defela

Website van Defela, psychologiepraktijk voor basis-GGZ in Den Haag.

## Stack

- [Next.js](https://nextjs.org) (App Router) en React
- [Tailwind CSS](https://tailwindcss.com) 4
- [Resend](https://resend.com) voor het aanmeldformulier
- TypeScript en ESLint

## Aan de slag

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Commando        | Wat het doet                  |
| --------------- | ----------------------------- |
| `npm run dev`   | Ontwikkelserver               |
| `npm run build` | Productiebuild                |
| `npm run start` | Productiebuild draaien        |
| `npm run lint`  | Code controleren met ESLint   |

## Structuur

- `app/` pagina's en layout
- `components/` herbruikbare onderdelen
- `lib/site.ts` alle klantgegevens, menu en vaste teksten op één plek

Waarden tussen `[haakjes]` in `lib/site.ts` zijn plaatshouders. Vervang ze zodra
Defela de echte gegevens aanlevert (telefoon, e-mail, adres, KvK, AGB, links).

## Omgevingsvariabelen

Kopieer `.env.example` naar `.env.local` en vul de waarden in (komt met het contactformulier).

## Commitberichten

Conventional Commits: `feat`, `fix`, `chore`, `docs`, `style`, `refactor`, `perf`.
