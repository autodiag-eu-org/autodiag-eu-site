import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-bg flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <h1
          className="text-[8rem] sm:text-[10rem] font-extrabold leading-none mb-4"
          style={{
            background: "linear-gradient(135deg, #00e5ff, #00c853)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          404
        </h1>

        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Cette page a pris la fuite
        </h2>

        <p className="text-secondary text-lg mb-8">
          Pas de panique &mdash; votre voiture va bien, c&apos;est juste cette
          page qui a disparu.
        </p>

        <Link
          href="/fr"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-bg transition-all duration-300 hover:scale-105"
          style={{
            background: "linear-gradient(135deg, #00e5ff, #00c853)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          Retour a l&apos;accueil
        </Link>

        <p className="mt-12 text-secondary/60 text-sm">
          AutoDiag EU &mdash; Le diagnostic auto intelligent
        </p>
      </div>
    </main>
  );
}
