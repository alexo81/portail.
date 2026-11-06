export const metadata = { title: "Confidentialité | Portail" };

export default function Confidentialite() {
  return (
    <main className="mx-auto max-w-xl px-5 pb-16 pt-8 sm:pt-16">
      <h1 className="font-titre text-3xl font-bold">
        Politique de confidentialité
      </h1>

      <h2 className="mt-8 font-titre text-xl font-bold">Qui est responsable</h2>
      <p className="mt-2 leading-snug">
        Alex AZEVEDO, joignable à azevedoalex91@gmail.com.
      </p>

      <h2 className="mt-8 font-titre text-xl font-bold">
        Les données que nous traitons
      </h2>
      <p className="mt-2 leading-snug">
        Les réponses au questionnaire, ton adresse email lors de ton
        inscription, et les informations nécessaires au paiement. Le paiement
        est géré par notre prestataire Stripe : nous ne voyons ni ne conservons
        ton numéro de carte.
      </p>

      <h2 className="mt-8 font-titre text-xl font-bold">
        Pourquoi nous les utilisons
      </h2>
      <p className="mt-2 leading-snug">
        Pour te fournir le service, traiter ton paiement et te répondre. Nous
        ne vendons pas tes données.
      </p>

      <h2 className="mt-8 font-titre text-xl font-bold">Tes droits</h2>
      <p className="mt-2 leading-snug">
        Tu peux demander l&rsquo;accès, la correction ou la suppression de tes
        données en écrivant à l&rsquo;adresse ci-dessus. Tu peux aussi saisir
        la CNIL (cnil.fr).
      </p>

      <p className="mt-8">
        <a href="/" className="font-semibold underline">
          Retour à l&rsquo;accueil
        </a>
      </p>
    </main>
  );
}
