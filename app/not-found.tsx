export default function NotFound() {
  return (
    <main className="mx-auto max-w-xl px-5 pb-16 pt-16">
      <p className="mb-6 inline-block border border-encre px-2 py-1 text-xs font-semibold uppercase tracking-widest">
        Erreur 404
      </p>
      <h1 className="font-titre text-3xl font-bold leading-tight sm:text-4xl">
        Cette page n&rsquo;existe pas.
      </h1>
      <p className="mt-4 text-lg leading-snug">
        Le lien est peut-être erroné, ou la page a été déplacée.
      </p>
      <a
        href="/"
        className="mt-8 inline-flex items-center justify-center bg-signal px-6 py-4 text-lg font-semibold text-white"
      >
        Retour à l&rsquo;accueil
      </a>
    </main>
  );
}
