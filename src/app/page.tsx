// app/page.tsx
import Link from "next/link";
import { posts } from "./posts/data";

function excerpt(text: string, len = 90) {
  const t = text.replace(/\s+/g, " ").trim();
  return t.length > len ? t.slice(0, len) + "…" : t;
}

export default function HomePage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="relative min-h-screen bg-neutral-950 text-neutral-100">
      {/* --- background decor (monochrome) --- */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* glow */}
        <div className="absolute -top-44 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute top-24 left-1/2 h-[380px] w-[760px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />

        {/* grid (masked) */}
        <div className="absolute inset-0 opacity-[0.12] [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_72%)]">
          <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.10)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_10%,transparent,rgba(0,0,0,0.75))]" />
      </div>

      <main className="relative mx-auto max-w-3xl px-4 py-14">
        {/* top bar */}
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-white/70" />
            <span className="text-xs tracking-wide text-white/80">
              MINI BLOG / MONOCHROME
            </span>
          </div>

          <div className="text-xs text-white/50">
            {sorted.length} posts
          </div>
        </div>

        {/* hero */}
        <header className="mt-10">
          <h1 className="text-4xl font-extrabold tracking-tight">
            ミニブログ
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">
            Next.js（App Router）+ TypeScript + Tailwindで作ったミニブログ。
            “余白と質感”に振ると、モノクロは急に強くなる。
          </p>
        </header>

        {/* list */}
        <section className="mt-10 space-y-4">
          {sorted.map((p) => (
            <Link
              key={p.id}
              href={`/posts/${p.id}`}
              className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06]"
            >
              {/* subtle sheen */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
              >
                <div className="absolute -left-1/2 top-0 h-full w-[140%] rotate-6 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.06),transparent)]" />
              </div>

              <div className="relative">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-xs text-white/50">{p.date}</div>
                  <div className="text-xs text-white/40 transition group-hover:text-white/60">
                    Read →
                  </div>
                </div>

                <h2 className="mt-2 text-lg font-bold tracking-tight">
                  {p.title}
                </h2>

                <p className="mt-2 text-sm leading-7 text-white/60">
                  {excerpt(p.content, 110)}
                </p>

                <div className="mt-4 flex items-center gap-2 text-xs text-white/45">
                  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-2 py-1">
                    Next.js
                  </span>
                  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-2 py-1">
                    TypeScript
                  </span>
                  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-2 py-1">
                    Tailwind
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </section>

        <footer className="mt-12 border-t border-white/10 pt-8 text-xs text-white/40">
          © {new Date().getFullYear()} Mini Blog — monochrome UI
        </footer>
      </main>
    </div>
  );
}
