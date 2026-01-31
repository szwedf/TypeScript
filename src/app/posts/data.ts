// app/posts/data.ts
export type Post = {
  id: string;
  title: string;
  date: string;
  content: string;
};

export const posts: Post[] = [
  {
    id: 'next-intro',
    title: 'Next.js を触り始めた話',
    date: '2025-11-30',
    content:
      '今日は Next.js の開発環境を立ち上げて、最初のページを作りました。React に近いけど、SSR やルーティングが最初から揃っていて便利そう。'
  },
  {
    id: 'vue-vs-next',
    title: 'Vue と Next（React）の使い分けメモ',
    date: '2025-12-01',
    content:
      'フロントの UI は Vue / Nuxt でも良いし、React / Next.js でも良い。案件によって使い分けられるように、両方触っておくと武器になる。'
  },
  {
    id: 'horse-racing',
    title: '競馬とエンジニアリングの共通点',
    date: '2025-12-02',
    content:
      'どっちも「データを見て、仮説を立てて、検証する」の繰り返し。分析もコードも、当たるか外れるかはあるけど、そのプロセスが楽しい。'
  }
];

export function getPost(id: string): Post | undefined {
  return posts.find((p) => p.id === id);
}
