// app/posts/[id]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "../data";

type PageProps = { params: { id: string } };

export function generateStaticParams() {
  return posts.map((p) => ({ id: p.id }));
}

export default function PostDetailPage({ params }: PageProps) {
  const post = getPost(params.id);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <main className="mx-auto max-w-3xl px-4 py-14">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white"
        >
          ← 一覧に戻る
        </Link>

        <header className="mt-8">
          <div className="text-xs text-white/45">{post.date}</div>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight">
            {post.title}
          </h1>
        </header>

        <article className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 leading-8 text-white/70 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur">
          <p className="whitespace-pre-line">{post.content}</p>
        </article>
      </main>
    </div>
  );
}
