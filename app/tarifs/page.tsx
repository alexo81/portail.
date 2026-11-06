const PRIX_MOIS = 29;
const PRIX_JOUR = (PRIX_MOIS / 30).toFixed(2).replace(".", ",");

const faq = [
  {
    q: "Est-ce que ça marche pour mon métier ?",
    r: "Si tes clients attendent plusieurs jours entre le moment où ils te remettent un dossier et celui où ils le récupèrent, oui. Les 4 étapes (reçu, en cours, prêt, livré) s'adaptent à ton activité.",
  },
  {
    q: "Combien de temps ça me prend ?",
    r: "Quelques secondes par dossier : tu changes l'étape, ton client est prévenu. Tu n'as rien d'autre à écrire.",
  },
  {
    q: "Et si je veux arrêter ?",
    r: "Tu résilies quand tu veux, sans engagement. Et pendant les 14 premiers jours, tu peux demander à être remboursé.",
  },
  {
    q: "À quoi sert exactement ce que je paie ?",
    r: "À un nombre illimité de dossiers, chacun avec son lien de suivi, ses photos et documents, et les notifications envoyées à ton client à chaque étape.",
  },
];

export default function Tarifs() {
  return (
    <main className="mx-auto max-w-xl px-5 pb-32 pt-8 sm:pt-16">
      <p className="mb-6 inline-block border border-encre px-2 py-1 text-xs font-semibold uppercase tracking-widest">
        Ton plan est prêt
      </p>

      <h1 className="font-titre text-3xl font-bold leading-tight sm:text-4xl">
        Voilà ton message de suivi, prêt. Garde-le, et fais-le tourner tout
        seul.
      </h1>

      <p className="mt-4 text-lg leading-snug">
        Tu as vu ce que les appels te coûtent en heures chaque mois. Portail
        te les rend, pour{" "}
        <strong>
          {PRIX_JOUR}&nbsp;&euro; par jour
        </strong>
        .
      </p>

      <div className="mt-8 border-2 border-encre p-5">
        <p className="text-xs font-semibold uppercase tracking-widest">
          Portail, dossiers illimités
        </p>
        <p className="mt-2 font-titre text-5xl font-bold leading-none">
          {PRIX_MOIS}&nbsp;&euro;
          <span className="text-2xl"> par mois</span>
        </p>
        <p className="mt-2 leading-snug">
          Soit {PRIX_JOUR}&nbsp;&euro; par jour. Un nombre illimité de
          dossiers.
        </p>

        <div className="mt-5 border-l-4 border-sapin pl-4">
          <p className="font-titre text-lg font-bold text-sapin">
            Satisfait ou remboursé, 14 jours
          </p>
          <p className="mt-1 leading-snug">
            Écris-nous par email dans les 14 jours qui suivent ton paiement :
            tu es remboursé intégralement, sans justification, sous 5 jours
            ouvrés.
          </p>
        </div>

        <button
          type="button"
          disabled
          className="mt-5 flex w-full items-center justify-center bg-signal px-6 py-4 text-lg font-semibold text-white opacity-60"
        >
          Paiement bientôt disponible
        </button>
        <p className="mt-3 text-center text-sm">
          Sans engagement, résiliable à tout moment.
        </p>
      </div>

      <h2 className="mt-12 font-titre text-2xl font-bold">
        Questions fréquentes
      </h2>
      <dl className="mt-4 space-y-5">
        {faq.map((f) => (
          <div key={f.q} className="border-t border-encre pt-4">
            <dt className="font-titre text-lg font-bold">{f.q}</dt>
            <dd className="mt-1 leading-snug">{f.r}</dd>
          </div>
        ))}
      </dl>
    </main>
  );
}
