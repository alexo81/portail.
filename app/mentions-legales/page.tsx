export const metadata = { title: "Mentions légales | Portail" };

export default function MentionsLegales() {
  return (
    <main className="mx-auto max-w-xl px-5 pb-16 pt-8 sm:pt-16">
      <h1 className="font-titre text-3xl font-bold">Mentions légales</h1>

      <h2 className="mt-8 font-titre text-xl font-bold">Éditeur du site</h2>
      <p className="mt-2 leading-snug">
        Alex AZEVEDO, entrepreneur individuel (micro-entreprise).
        <br />
        SIRET : 98083501100019
        <br />
        Adresse : 18 rue du Mesnil, 91180 Saint-Germain-lès-Arpajon
        <br />
        Email : azevedoalex91@gmail.com
      </p>

      <h2 className="mt-8 font-titre text-xl font-bold">
        Directeur de la publication
      </h2>
      <p className="mt-2 leading-snug">Alex AZEVEDO</p>

      <h2 className="mt-8 font-titre text-xl font-bold">Hébergeur</h2>
      <p className="mt-2 leading-snug">
        Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
      </p>

      <p className="mt-8">
        <a href="/" className="font-semibold underline">
          Retour à l&rsquo;accueil
        </a>
      </p>
    </main>
  );
}
