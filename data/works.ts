// src/data/works.ts
export interface Work {
  id: number;
  title: string;
  period: string;
  role: string;
  summary: string;
  techStack: string[];
  features: string[];
  demoUrl?: string;
  repoUrl?: string;
  thumbnail?: string;
}

export const works: Work[] = [
  {
    id: 1,
    title: 'My Lab – Vue + TypeScript ポートフォリオ',
    period: '2024–2025',
    role: '個人開発 / 設計〜実装',
    summary:
      '現在ご覧いただいているポートフォリオサイト。Vue 3 + TypeScript を用いて、Welcome ページから About / Career / Skills / Works / Contact まで SPA 構成で実装。',
    techStack: ['Vue 3', 'TypeScript', 'Vite', 'Vue Router', 'CSS'],
    features: [
      'ルーターによるページ遷移とトランジションアニメーションを実装',
      'Skills ページでは実務スキル／自己学習スキルをデータ駆動で表示',
      'Works 詳細ページで「課題 → 取り組み → 学び」を整理'
    ],
    demoUrl: 'https://type-script-lyart.vercel.app',
    repoUrl: 'https://github.com/szwedf/TypeScript',
    thumbnail: '/images/portfolio-thumb.png' // あとで好きなサムネ画像を配置
  },
  {
    id: 2,
    title: 'Café Lumière – 表参道カフェサイト（学習用）',
    period: '2024',
    role: '個人開発 / デザイン寄せ〜実装',
    summary:
      '表参道の架空カフェをテーマにした LP。日本語／英語切替、メニューページ、予約導線を実装し、20〜30代向けのおしゃれな雰囲気を意識。',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Vue 3'],
    features: [
      'Hero セクションにスクロール連動アニメーションを実装',
      'メニュースライダーや、カテゴリー別フィルタリングを実装',
      'モバイル向けのハンバーガーメニューとレスポンシブ対応'
    ],
    thumbnail: '/images/cafe-thumb.png'
  },
  {
    id: 3,
    title: 'Hotel Luxe – 高級ホテルサイト（学習用）',
    period: '2024',
    role: '個人開発 / デザイン模写＋改変',
    summary:
      '高級ホテルをイメージしたギャラリーサイト。トップページとフォトギャラリーを分け、写真中心のレイアウトを意識して実装。',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Ritz-Carlton 風のサイト構成を参考にしたトップページレイアウト',
      'ギャラリーページでホバー時のアニメーションを実装',
      'PC／スマホでの見え方を意識したレスポンシブ設計'
    ],
    thumbnail: '/images/hotel-thumb.png'
  }
];