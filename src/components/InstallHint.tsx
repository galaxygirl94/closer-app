"use client";

import { useSyncExternalStore } from "react";

const STANDALONE_QUERY = "(display-mode: standalone)";

function subscribe(onChange: () => void) {
  const query = window.matchMedia(STANDALONE_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function isInstalled() {
  return (
    window.matchMedia(STANDALONE_QUERY).matches ||
    (window.navigator as Navigator & { standalone?: boolean }).standalone ===
      true
  );
}

export function InstallHint() {
  // Treat as installed during SSR/hydration so the hint never flashes for
  // users who already added Closer to their home screen.
  const installed = useSyncExternalStore(subscribe, isInstalled, () => true);

  if (installed) return null;

  return (
    <div className="relative mt-8 w-full rounded-2xl border border-rose/30 bg-pink px-5 py-4 text-left">
      <h2 className="font-display text-base font-semibold text-plum">
        Keep Closer one tap away
      </h2>
      <p className="mt-1 text-sm leading-relaxed text-ink/75">
        Add it to your home screen — tap{" "}
        <span className="font-medium text-plum">Share</span>, then{" "}
        <span className="font-medium text-plum">Add to Home Screen</span>. It
        opens full-screen, like an app.
      </p>
    </div>
  );
}
