export default function Question1() {
  return (
    <main className="mx-auto max-w-xl px-5 pb-28 pt-8 sm:pt-16">
      <div className="mb-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest">
          Question 1 sur 3
        </p>
        <div className="h-2 w-full border border-encre">
          <div className="h-full w-1/3 bg-encre" />
        </div>
      </div>

      <h1 className="font-titre text-3xl font-bold leading-tight sm:text-4xl">
        Combien de fois par semaine un client t&rsquo;appelle pour savoir où
        en est son dossier&nbsp;?
      </h1>

      <ul className="mt-8 space-y-3">
        {["1 à 2 fois", "3 à 5 fois", "6 à 10 fois", "Plus de 10 fois"].map(
          (choix) => (
            <li key={choix}>
              <a
                href="#"
                className="block border border-encre px-4 py-4 text-lg font-semibold"
              >
                {choix}
              </a>
            </li>
          )
        )}
      </ul>
    </main>
  );
}
