import { InstallHint } from "@/components/InstallHint";

const principles = [
  {
    title: "Toward, never away",
    body: "Every screen here points one direction — home, to her.",
  },
  {
    title: "Warmth over willpower",
    body: "Desire isn't the enemy. It's the fuel. Closer just aims it.",
  },
  {
    title: "The build is the point",
    body: "Anticipation, on purpose. Don't waste the tension — spend it on her.",
  },
];

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-dvh max-w-md flex-col items-center overflow-hidden px-6 pb-12 pt-16 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-ember/30 blur-3xl"
      />

      <span className="relative text-[0.7rem] font-medium uppercase tracking-[0.22em] text-terracotta-deep">
        A redirect tool for couples
      </span>

      <div className="relative mt-6 h-24 w-24 rounded-[26px] bg-terracotta shadow-[0_18px_40px_-12px_rgba(168,79,55,0.6)]">
        <svg
          viewBox="0 0 512 512"
          className="h-full w-full"
          role="img"
          aria-label="Closer"
        >
          <path
            d="M256 78 C248 156 318 196 340 280 C360 352 332 452 256 452 C180 452 152 352 172 280 C194 196 264 156 256 78 Z"
            fill="#f8f1e4"
          />
          <path
            d="M256 214 C252 256 292 274 300 326 C306 368 286 430 256 430 C226 430 206 368 212 326 C220 274 260 256 256 214 Z"
            fill="#5b2a45"
          />
        </svg>
      </div>

      <h1 className="relative mt-7 font-display text-6xl font-semibold tracking-tight text-plum">
        Closer
      </h1>
      <p className="relative mt-3 font-display text-xl italic text-terracotta-deep">
        Toward her, not away.
      </p>

      <p className="relative mt-6 text-balance text-[0.975rem] leading-relaxed text-ink/75">
        Closer is a small door. When the pull comes, you open this instead — and
        it turns you toward her. Not away from something. Toward someone.
      </p>

      <ul className="relative mt-9 w-full space-y-3">
        {principles.map((principle) => (
          <li
            key={principle.title}
            className="rounded-2xl border border-cream-deep bg-white/55 px-5 py-4 text-left"
          >
            <h2 className="font-display text-base font-semibold text-plum">
              {principle.title}
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-ink/65">
              {principle.body}
            </p>
          </li>
        ))}
      </ul>

      <InstallHint />

      <p className="relative mt-auto pt-10 font-display text-sm italic text-muted">
        Made for two.
      </p>
    </main>
  );
}
