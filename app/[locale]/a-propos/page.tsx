import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";

interface AProposPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: AProposPageProps): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    title: "A propos — L'histoire d'AutoDiag EU",
    description:
      "Decouvrez l'histoire d'AutoDiag EU, creee par Reda Kaouani a Boncourt en Suisse. Un outil de diagnostic automobile simple, fiable et toujours a jour.",
    locale,
    path: "a-propos",
  });
}

export default function AProposPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
          L&apos;histoire d&apos;
          <span className="text-gradient">AutoDiag EU</span>
        </h1>
        <p className="mt-4 text-lg text-secondary">
          Boncourt, Suisse — Depuis 2026
        </p>
      </div>

      <div className="space-y-8">
        {/* Bloc 1 — L'histoire de Reda */}
        <div className="relative overflow-hidden rounded-2xl border border-border bg-glass p-8 backdrop-blur-md sm:p-10">
          <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan/5 blur-3xl" />
          <div className="relative">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan to-green text-lg font-bold text-black">
                R
              </div>
              <div>
                <p className="font-semibold text-white">Reda Kaouani</p>
                <p className="text-sm text-secondary">Fondateur</p>
              </div>
            </div>
            <blockquote className="text-lg leading-relaxed text-white/90 italic">
              &laquo; Etant un passionne de voitures depuis tout petit,
              j&apos;ai toujours aime tout ce qui concerne les metiers de
              l&apos;automobile. J&apos;ai fait plein de metiers differents
              dans le monde de l&apos;automobile. Les outils ont evolue avec
              le temps, la mecanique ne se fait plus comme il y a 20 ans.
              Or les outils permettant un diagnostic clair ne sont pas
              toujours bon marche et pas toujours mis a jour. &raquo;
            </blockquote>
          </div>
        </div>

        {/* Bloc 2 — La vision */}
        <div className="relative overflow-hidden rounded-2xl border border-cyan/20 bg-cyan/5 p-8 sm:p-10">
          <div className="absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-green/5 blur-3xl" />
          <div className="relative">
            <h2 className="mb-6 text-xl font-semibold text-white">
              La vision
            </h2>
            <blockquote className="text-lg leading-relaxed text-white/90 italic">
              &laquo; J&apos;ai decide de creer un outil simple
              d&apos;utilisation, fiable et qui sera toujours a jour.
              AutoDiag EU est une communaute de passionnes et de moins
              passionnes, d&apos;experts en mecanique et de novices qui
              veulent juste savoir ou en est leur vehicule dans sa sante.
              Les professionnels aussi adherent au projet et c&apos;est avec
              un grand enthousiasme que AutoDiag viendra combler les besoins
              de ces derniers avec de nouvelles technologies de diagnostics
              &apos;acoustique&apos; et &apos;vision IA&apos;. La revolution
              est en marche, vous etes sur le bon chemin, adoptez-nous et
              donnez-nous votre avis ! &raquo;
            </blockquote>
          </div>
        </div>

        {/* Ce qui rend AutoDiag EU unique */}
        <div className="rounded-2xl border border-border bg-glass p-8 backdrop-blur-md sm:p-10">
          <h2 className="mb-6 text-xl font-semibold text-white">
            Ce qui rend AutoDiag EU unique
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-surface/50 p-5">
              <p className="mb-2 text-2xl">🔊</p>
              <h3 className="mb-1 font-semibold text-white">Scan Sonore IA</h3>
              <p className="text-sm text-secondary">
                Notre IA ecoute votre moteur et detecte 11 types de pannes par
                le son. Une premiere dans le diagnostic automobile grand public.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface/50 p-5">
              <p className="mb-2 text-2xl">🔌</p>
              <h3 className="mb-1 font-semibold text-white">OBD2 complet</h3>
              <p className="text-sm text-secondary">
                Lecture et effacement des codes defaut, donnees en temps reel,
                compatible avec 677 vehicules europeens.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface/50 p-5">
              <p className="mb-2 text-2xl">📋</p>
              <h3 className="mb-1 font-semibold text-white">Pre-CT 5 pays</h3>
              <p className="text-sm text-secondary">
                Preparez votre controle technique en France, Allemagne, Suisse,
                Espagne et Portugal. Tout est verifie avant le jour J.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface/50 p-5">
              <p className="mb-2 text-2xl">🤖</p>
              <h3 className="mb-1 font-semibold text-white">
                IA mecanicien
              </h3>
              <p className="text-sm text-secondary">
                Posez vos questions en francais, recevez des reponses
                personnalisees a votre vehicule. Comme un ami mecanicien dans
                votre poche.
              </p>
            </div>
          </div>
        </div>

        {/* Valeurs */}
        <div className="rounded-2xl border border-border bg-glass p-8 backdrop-blur-md sm:p-10">
          <h2 className="mb-6 text-xl font-semibold text-white">
            Nos valeurs
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan/10 text-sm font-bold text-cyan">
                1
              </div>
              <div>
                <h3 className="font-semibold text-white">Simplicite</h3>
                <p className="text-secondary">
                  Le diagnostic automobile ne devrait pas etre reserve aux
                  experts. On traduit le langage technique en francais simple.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan/10 text-sm font-bold text-cyan">
                2
              </div>
              <div>
                <h3 className="font-semibold text-white">Fiabilite</h3>
                <p className="text-secondary">
                  Chaque diagnostic est base sur des donnees reelles, pas sur
                  des suppositions. Notre IA audio atteint 91,3% de precision.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan/10 text-sm font-bold text-cyan">
                3
              </div>
              <div>
                <h3 className="font-semibold text-white">Transparence</h3>
                <p className="text-secondary">
                  Pas de frais caches, pas de vente aggressive. Gratuit au
                  lancement, Premium a 49 CHF/an pour ceux qui veulent aller
                  plus loin.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan/10 text-sm font-bold text-cyan">
                4
              </div>
              <div>
                <h3 className="font-semibold text-white">Innovation</h3>
                <p className="text-secondary">
                  Scan audio IA, vision IA, Drive Test sans dongle — on
                  repousse les limites du diagnostic accessible a tous.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl border border-cyan/20 bg-gradient-to-br from-cyan/10 to-green/10 p-8 text-center sm:p-10">
          <h2 className="mb-3 text-2xl font-bold text-white">
            Rejoignez l&apos;aventure
          </h2>
          <p className="mx-auto mb-6 max-w-xl text-secondary">
            AutoDiag EU est en phase beta. Inscrivez-vous pour etre parmi les
            premiers a tester l&apos;application et contribuer a construire
            l&apos;outil de diagnostic automobile de demain.
          </p>
          <Link
            href="/fr#beta"
            className="inline-block rounded-xl bg-gradient-to-r from-cyan to-green px-8 py-3 font-semibold text-black transition-transform hover:scale-105"
          >
            Devenir beta-testeur
          </Link>
        </div>
      </div>
    </div>
  );
}
