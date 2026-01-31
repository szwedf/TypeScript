// components/SiteHeader.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={[
          "glass rounded-none border-x-0 border-t-0",
          "bg-neutral-950/40 backdrop-blur",
          "transition",
          scrolled ? "border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.35)]" : "border-white/10",
        ].join(" ")}
      >
        <div className="app-container h-14 flex items-center justify-between">
          <Link href="/" className="font-bold tracking-tight text-white/90 hover:text-white">
            ミニブログ
          </Link>
          <div className="text-xs text-white/50">Monochrome UI</div>
        </div>
      </div>
    </header>
  );
}
