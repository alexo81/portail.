const verrouille = [
  {
    titre: "Une page de suivi par dossier",
    texte: "Ton client ouvre son lien et voit : Reçu, En cours, Prêt, Livré.",
  },
  {
    titre: "Photos et documents",
    texte: "Tu les déposes au fil du travail, il les voit tout de suite.",
  },
  {
    titre: "Notification à chaque étape",
    texte: "Il est prévenu automatiquement. Tu n'écris plus rien.",
  },
];

export default function AvantGout() {
  return (
    <main className="mx-auto max-w-xl px-5 pb-28 pt-8 sm:pt-16">
      <p className="mb-6 inline-block border border-encre px-2 py-1 text-xs font-semibold uppercase tracking-widest">
        Ton avant-goût gratuit
      </p>

      <h1 className="font-titre text-3xl font-bold leading-tight sm:text-4xl">
        Un message à envoyer à chaque client, dès aujourd&rsquo;hui.
      </h1>

      <p className="mt-4 text-lg leading-snug">
        Envoie-le quand tu reçois un dossier. Le client sait à quoi
        s&rsquo;attendre, donc il a moins de raisons d&rsquo;appeler.
      </p>

      <div className="mt-6 border border-encre bg-white p-5">
        <p className="text-xs font-semibold uppercase tracking-widest">
          Message à copier
        </p>
        <p className="mt-3 select-all leading-snug">
          Bonjour, j&rsquo;ai bien reçu votre dossier. Voici la suite&nbsp;:
          <br />
          <br />
          1. Je le prends en charge d&rsquo;ici [nombre de jours] jours.
          <br />
          2. Je vous écris dès qu&rsquo;il est prêt.
          <br />
          3. Vous pouvez le récupérer [lieu ou mode de remise].
          <br />
          <br />
          Pas besoin de m&rsquo;appeler : je vous préviens à chaque étape.
        </p>
        <p className="mt-4 text-sm">
          Remplace les parties entre crochets. Appuie longuement sur le texte
          pour le copier.
        </p>
      </div>

      <h2 className="mt-12 font-titre text-2xl font-bold">
        Pour que ça se fasse tout seul
      </h2>

      <ul className="mt-4 space-y-3">
        {verrouille.map((v) => (
          <li
            key={v.titre}
            className="border border-dashed border-encre p-4 opacity-70"
          >
            <p className="text-xs font-semibold uppercase tracking-widest">
              Verrouillé
            </p>
            <h3 className="mt-1 font-titre text-lg font-bold">{v.titre}</h3>
            <p className="mt-1 leading-snug">{v.texte}</p>
          </li>
        ))}
      </ul>

      <div className="fixed inset-x-0 bottom-0 border-t border-encre bg-papier p-3">
        <a
          href="/tarifs"
          className="mx-auto flex w-full max-w-xl items-center justify-center bg-signal px-6 py-4 text-lg font-semibold text-white"
        >
          Débloquer le suivi automatique
        </a>
      </div>
    </main>
  );
}
