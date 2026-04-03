export default function TestimonialSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <h2 className="text-center text-3xl font-bold sm:text-4xl">
        Ce que disent{" "}
        <span className="bg-gradient-to-r from-[#00e5ff] to-[#00c853] bg-clip-text text-transparent">
          nos utilisateurs
        </span>
      </h2>
      <p className="mt-3 text-center text-sm text-[#8a90b0]">
        Avis disponibles prochainement — nous lancons en avril 2026
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex h-48 items-center justify-center rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(12,12,30,0.6)] backdrop-blur-md"
          >
            <div className="flex flex-col items-center gap-2 text-[#8a90b0]">
              <svg
                className="h-8 w-8 opacity-30"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-.988.472-.288.261-.648.396-.932.7-.29.316-.543.602-.789.959-.236.334-.495.716-.66 1.105-.166.39-.293.828-.396 1.286-.105.462-.133.936-.157 1.42-.023.487.027.97.054 1.46L3.5 12v8h5V10h-2zm10 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-.988.472-.288.261-.648.396-.932.7-.29.316-.543.602-.789.959-.236.334-.495.716-.66 1.105-.166.39-.293.828-.396 1.286-.105.462-.133.936-.157 1.42-.023.487.027.97.054 1.46L13.5 12v8h5V10h-2z" />
              </svg>
              <span className="text-sm italic">Bientot disponible</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
