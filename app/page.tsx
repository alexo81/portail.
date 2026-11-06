const etapes = ["Reçu", "En cours", "Prêt", "Livré"];

const benefices = [
  {
    titre: "Un lien, zéro mot de passe",
    texte: "Chaque dossier a son lien. Ton client l'ouvre, il voit tout.",
  },
  {
    titre: "Photos et documents au fil de l'eau",
    texte: "Tu déposes une photo, il la voit. Plus rien n'est dit seulement à l'oral.",
  },
  {
    titre: "Il est prévenu tout seul",
    texte: "À chaque changement d'étape, il reçoit une notification. Tu n'écris rien.",
  },
];

export default function Accueil() {
  return (
    <main className="mx-auto max-w-xl px-5 pb-28 pt-10 sm:pb-16 sm:pt-16">
      <p className="mb-6 inline-block border border-encre px-2 py-1 text-xs font-semibold uppercase tracking-widest">
        Portail
      </p>

      <h1 className="font-titre text-4xl font-bold leading-[1.05] sm:text-5xl">
        Ton client sait où en est son dossier. Sans t&rsquo;appeler.
      </h1>

      <p className="mt-5 text-lg leading-snug">
        Chaque appel &laquo;&nbsp;où ça en est&nbsp;?&nbsp;&raquo; coupe ton
        travail, et ce que tu réponds n&rsquo;est écrit nulle part. Avec
        Portail, il regarde son lien.
      </p>

      <a
        href="#"
        className="mt-8 hidden items-center justify-center bg-signal px-6 py-4 text-lg font-semibold text-white sm:inline-flex"
      >
        Commencer, c&rsquo;est gratuit
      </a>

      <ol className="mt-12 grid grid-cols-4 border-y border-encre">
        {etapes.map((e, i) => (
          <li
            key={e}
            className={`py-3 text-center text-xs font-semibold uppercase tracking-wide sm:text-sm ${
              i < 3 ? "border-r border-encre" : ""
            } ${i >= 2 ? "text-sapin" : ""}`}
          >
            {e}
          </li>
        ))}
      </ol>

      <ul className="mt-10 space-y-6">
        {benefices.map((b) => (
          <li key={b.titre} className="border-l-4 border-encre pl-4">
            <h2 className="font-titre text-xl font-bold">{b.titre}</h2>
            <p className="mt-1 leading-snug">{b.texte}</p>
          </li>
        ))}
      </ul>

      <div className="fixed inset-x-0 bottom-0 border-t border-encre bg-papier p-3 sm:hidden">
        <a
          href="#"
          className="flex w-full items-center justify-center bg-signal px-6 py-4 text-lg font-semibold text-white"
        >
          Commencer, c&rsquo;est gratuit
        </a>
      </div>
    </main>
  );
}
