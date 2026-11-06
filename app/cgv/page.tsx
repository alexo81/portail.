export const metadata = { title: "CGV | Portail" };

export default function Cgv() {
  return (
    <main className="mx-auto max-w-xl px-5 pb-16 pt-8 sm:pt-16">
      <h1 className="font-titre text-3xl font-bold">
        Conditions générales de vente
      </h1>

      <h2 className="mt-8 font-titre text-xl font-bold">Vendeur</h2>
      <p className="mt-2 leading-snug">
        Alex AZEVEDO, entrepreneur individuel, SIRET 98083501100019, 18 rue du
        Mesnil, 91180 Saint-Germain-lès-Arpajon, azevedoalex91@gmail.com.
      </p>

      <h2 className="mt-8 font-titre text-xl font-bold">Le service</h2>
      <p className="mt-2 leading-snug">
        Portail est un service en ligne de suivi de dossiers clients, avec un
        nombre illimité de dossiers.
      </p>

      <h2 className="mt-8 font-titre text-xl font-bold">Prix</h2>
      <p className="mt-2 leading-snug">
        29 &euro; par mois. TVA non applicable, art. 293 B du CGI.
      </p>

      <h2 className="mt-8 font-titre text-xl font-bold">
        Paiement et durée
      </h2>
      <p className="mt-2 leading-snug">
        L&rsquo;abonnement est mensuel, payé par carte via Stripe, et
        reconduit chaque mois. Il est sans engagement : tu peux le résilier à
        tout moment, la résiliation prend effet à la fin de la période déjà
        payée.
      </p>

      <h2 className="mt-8 font-titre text-xl font-bold">
        Satisfait ou remboursé
      </h2>
      <p className="mt-2 leading-snug">
        Dans les 14 jours qui suivent ton premier paiement, tu peux demander un
        remboursement intégral, sans justification, en écrivant à
        azevedoalex91@gmail.com. Le remboursement est effectué sous 5 jours
        ouvrés.
      </p>

      <h2 className="mt-8 font-titre text-xl font-bold">Contact</h2>
      <p className="mt-2 leading-snug">azevedoalex91@gmail.com</p>

      <p className="mt-8">
        <a href="/" className="font-semibold underline">
          Retour à l&rsquo;accueil
        </a>
      </p>
    </main>
  );
}
