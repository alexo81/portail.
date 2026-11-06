const choix = [
  { texte: "Je prends le message et je rappelle plus tard", valeur: "message" },
  { texte: "Je réponds tout de suite, je perds le fil", valeur: "direct" },
  { texte: "Je note sur un papier ou dans mon téléphone", valeur: "note" },
  { texte: "Je ne sais plus, ça dépend des jours", valeur: "flou" },
];

export default async function Question3({
  searchParams,
}: {
  searchParams: Promise<{ appels?: string; minutes?: string }>;
}) {
  const { appels = "", minutes = "" } = await searchParams;

  return (
    <main className="mx-auto max-w-xl px-5 pb-28 pt-8 sm:pt-16">
      <div className="mb-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest">
          Question 3 sur 3
        </p>
        <div className="h-2 w-full border border-encre">
          <div className="h-full w-full bg-encre" />
        </div>
      </div>

      <h1 className="font-titre text-3xl font-bold leading-tight sm:text-4xl">
        Quand un client t&rsquo;appelle, que fais-tu de ce que tu lui
        réponds&nbsp;?
      </h1>

      <ul className="mt-8 space-y-3">
        {choix.map((c) => (
          <li key={c.valeur}>
            <a
              href={`/resultat?appels=${encodeURIComponent(appels)}&minutes=${encodeURIComponent(minutes)}&reponse=${c.valeur}`}
              className="block border border-encre px-4 py-4 text-lg font-semibold"
            >
              {c.texte}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
