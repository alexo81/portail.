const choix = [
  { texte: "Moins de 2 minutes", valeur: "2" },
  { texte: "Environ 5 minutes", valeur: "5" },
  { texte: "Environ 10 minutes", valeur: "10" },
  { texte: "Plus de 15 minutes", valeur: "15" },
];

export default async function Question2({
  searchParams,
}: {
  searchParams: Promise<{ appels?: string }>;
}) {
  const { appels = "" } = await searchParams;

  return (
    <main className="mx-auto max-w-xl px-5 pb-28 pt-8 sm:pt-16">
      <div className="mb-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest">
          Question 2 sur 3
        </p>
        <div className="h-2 w-full border border-encre">
          <div className="h-full w-2/3 bg-encre" />
        </div>
      </div>

      <h1 className="font-titre text-3xl font-bold leading-tight sm:text-4xl">
        En moyenne, combien de temps dure un de ces appels, en comptant le
        temps pour te remettre au travail&nbsp;?
      </h1>

      <ul className="mt-8 space-y-3">
        {choix.map((c) => (
          <li key={c.valeur}>
            <a
              href={`/question-3?appels=${encodeURIComponent(appels)}&minutes=${c.valeur}`}
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
