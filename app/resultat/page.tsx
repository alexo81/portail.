const APPELS = ["2", "4", "8", "12"];
const MINUTES = ["2", "5", "10", "15"];

const phrases: Record<string, string> = {
  message:
    "Tu prends le message et tu rappelles plus tard : chaque question te coûte deux fois du temps.",
  direct:
    "Tu réponds tout de suite et tu perds le fil de ce que tu faisais.",
  note:
    "Tu notes ce que tu dis, mais toi seul sais où c'est écrit.",
  flou:
    "Tu ne sais plus toujours ce qui a été dit au client, et lui non plus.",
};

function heures(n: number) {
  return (Math.round(n * 10) / 10).toString().replace(".", ",");
}

export default async function Resultat({
  searchParams,
}: {
  searchParams: Promise<{
    appels?: string;
    minutes?: string;
    reponse?: string;
  }>;
}) {
  const p = await searchParams;

  const appels = Number(APPELS.includes(p.appels ?? "") ? p.appels : "4");
  const minutes = Number(MINUTES.includes(p.minutes ?? "") ? p.minutes : "5");
  const phrase = phrases[p.reponse ?? ""] ?? phrases.flou;

  const parMois = (appels * minutes * 4.3) / 60;
  const parAn = parMois * 12;
  const moitie = parMois / 2;

  return (
    <main className="mx-auto max-w-xl px-5 pb-28 pt-8 sm:pt-16">
      <p className="mb-6 inline-block border border-encre px-2 py-1 text-xs font-semibold uppercase tracking-widest">
        Ton résultat
      </p>

      <p className="text-lg leading-snug">
        Tu reçois environ <strong>{appels} appels par semaine</strong> de
        clients qui veulent savoir où ça en est, à{" "}
        <strong>{minutes} minutes</strong> chacun.
      </p>

      <div className="mt-6 border border-encre p-5">
        <p className="text-xs font-semibold uppercase tracking-widest">
          Ce que ça te coûte
        </p>
        <p className="mt-2 font-titre text-5xl font-bold leading-none">
          {heures(parMois)}&nbsp;h
          <span className="text-2xl"> par mois</span>
        </p>
        <p className="mt-3 leading-snug">
          Soit {heures(parAn)}&nbsp;heures par an passées à répéter la même
          chose au téléphone.
        </p>
      </div>

      <p className="mt-6 text-lg leading-snug">{phrase}</p>

      <div className="mt-6 border-l-4 border-sapin pl-4">
        <p className="font-titre text-xl font-bold text-sapin">
          Avec Portail
        </p>
        <p className="mt-1 leading-snug">
          Ton client ouvre son lien et voit l&rsquo;étape de son dossier. Même
          si seulement la moitié de ces appels disparaît, tu récupères{" "}
          <strong>{heures(moitie)}&nbsp;h par mois</strong>.
        </p>
      </div>

      <div className="fixed inset-x-0 bottom-0 border-t border-encre bg-papier p-3">
        <a
          href="/avant-gout"
          className="mx-auto flex w-full max-w-xl items-center justify-center bg-signal px-6 py-4 text-lg font-semibold text-white"
        >
          Voir mon avant-goût gratuit
        </a>
      </div>
    </main>
  );
}
