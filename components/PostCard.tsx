// components/PostCard.tsx
import Link from "next/link";

export type Post = {
  id: string;
  title: string;
  date: string;
  content: string;
  tags?: string[];
};

function excerpt(text: string, len = 110) {
  const t = text.replace(/\s+/g, " ").trim();
  return t.length > len ? t.slice(0, len) + "…" : t;
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/posts/${post.id}`}
      className="group relative block overflow-hidden p-5 glass transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06] motion-reduce:transition-none"
    >
      {/* sheen */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -left-1/2 top-0 h-full w-[140%] rotate-6 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.06),transparent)]" />
      </div>

      <div className="relative">
        <div className="flex items-center justify-between gap-3">
          <div className="meta">{post.date}</div>
          <div className="text-xs text-white/40 transition group-hover:text-white/60">
            Read →
          </div>
        </div>

        <h2 className="mt-2 h2">{post.title}</h2>

        <p className="mt-2 text-sm leading-7 text-white/60">
          {excerpt(post.content)}
        </p>

        {post.tags?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </Link>
  );
}
