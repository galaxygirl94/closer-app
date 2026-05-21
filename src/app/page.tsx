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
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-rose/30 blur-3xl"
      />

      <span className="relative text-[0.7rem] font-medium uppercase tracking-[0.22em] text-flame">
        A redirect tool for couples
      </span>

      <div className="relative mt-6 h-24 w-24 rounded-[26px] bg-pink shadow-[0_18px_40px_-12px_rgba(192,138,138,0.55)]">
        <svg
          viewBox="0 0 512 512"
          className="h-full w-full"
          role="img"
          aria-label="Closer"
        >
          <defs>
            <linearGradient id="closer-flame" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0" stopColor="#1e3a8a" />
              <stop offset="0.55" stopColor="#3b5bdb" />
              <stop offset="1" stopColor="#74c0fc" />
            </linearGradient>
          </defs>
          <path
            d="M236 60 C296 108 340 224 336 330 C336 398 302 456 256 456 C210 456 176 398 176 330 C192 224 276 150 236 60 Z"
            fill="url(#closer-flame)"
          />
        </svg>
      </div>

      <h1 className="relative mt-7 font-display text-6xl font-semibold tracking-tight text-plum">
        Closer
      </h1>
      <p className="relative mt-3 font-display text-xl italic text-plum">
        Toward her, not away.
      </p>

      <p className="relative mt-6 text-balance text-[0.975rem] leading-relaxed text-ink/80">
        Closer is a small door. When the pull comes, you open this instead — and
        it turns you toward her. Not away from something. Toward someone.
      </p>

      <ul className="relative mt-9 w-full space-y-3">
        {principles.map((principle) => (
          <li
            key={principle.title}
            className="rounded-2xl border border-rose/25 bg-blush px-5 py-4 text-left"
          >
            <h2 className="font-display text-base font-semibold text-plum">
              {principle.title}
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-ink/70">
              {principle.body}
            </p>
          </li>
        ))}
      </ul>

      <InstallHint />

      <p className="relative mt-auto pt-10 font-display text-sm italic text-plum/70">
        Made for two.
      </p>
    </main>
  );
}
