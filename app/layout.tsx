import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const titre = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const corps = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex",
  display: "swap",
});

const titrePage = "Portail : ton client suit son dossier sans t'appeler";
const description =
  "Un lien unique par dossier. Ton client voit où ça en est, tu arrêtes de répondre au téléphone.";

export const metadata: Metadata = {
  title: titrePage,
  description,
  openGraph: {
    title: titrePage,
    description,
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${titre.variable} ${corps.variable}`}>
      <body>
        {children}
        <footer className="mx-auto max-w-xl px-5 pb-28 pt-6 text-sm">
          <nav className="flex flex-wrap gap-x-5 gap-y-2 border-t border-encre pt-4">
            <a href="/mentions-legales" className="underline">
              Mentions légales
            </a>
            <a href="/cgv" className="underline">
              CGV
            </a>
            <a href="/confidentialite" className="underline">
              Confidentialité
            </a>
          </nav>
        </footer>
      </body>
    </html>
  );
}
