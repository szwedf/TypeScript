// src/data/works.ts
export type Work = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  highlights: string[];
  role?: string;
  links?: {
    demo?: string;
    repo?: string;
  };
  images: {
    cover: string;      // public 配下の相対パス（先頭に / を付けない）
    gallery?: string[]; // 同上
  };
};

export const works: Work[] = [
  {
    id: "1",
    title: "Café Lumière",
    subtitle: "表参道イメージのカフェサイト（多言語・UI演出）",
    description:
      "Vue を使って、言語切替・予約導線・スクロール演出など“実務っぽい要素”を盛り込んだポートフォリオ用サイト。",
    stack: ["Vue 3", "TypeScript", "Vite", "HTML", "CSS"],
    highlights: [
      "日本語/英語の言語切替 UI",
      "スクロール時アニメーション",
      "レスポンシブ対応（ハンバーガーメニュー）",
      "コンポーネント分割（UIの再利用）",
    ],
    role: "企画 / デザイン / 実装（個人開発）",
    links: {
      demo: "https://example.com", // あれば差し替え
      repo: "https://github.com/xxx/yyy", // あれば差し替え
    },
    images: {
      cover: "images/works/cafe/cover.jpg",
      gallery: [
        "images/works/cafe/01.jpg",
        "images/works/cafe/02.jpg",
        "images/works/cafe/03.jpg",
      ],
    },
  },
  {
    id: "2",
    title: "My Portfolio",
    subtitle: "Lab 風ポートフォリオ（ルーティング・演出）",
    description:
      "Welcome → Home の導線と、セクション設計を意識して作ったポートフォリオ。ルーティングとUIの統一感を重視。",
    stack: ["Vue 3", "TypeScript", "Vue Router", "Vite"],
    highlights: ["ページ遷移アニメーション", "共通Navbar/Footer", "スキル可視化"],
    role: "設計 / 実装（個人開発）",
    images: {
      cover: "images/works/portfolio/cover.jpg",
    },
  },
  {
  id: "3",
  title: "Luxury Hotel Concept Site",
  subtitle: "高級ホテルのコーポレートサイト（ギャラリー・導線設計）",
  description:
    "ラグジュアリーホテルを想定したコンセプトサイト。ファーストビューの印象設計、客室ギャラリー、予約導線など“実案件っぽい情報設計”を意識して制作。",
  stack: ["Vue 3", "TypeScript", "Vite", "HTML", "CSS"],
  highlights: [
    "Hero（ファーストビュー）の視線誘導設計",
    "ギャラリー（客室/外観/ウェディング/フィットネス）構成",
    "共通レイアウト（Navbar/Footer）で統一感",
    "ルーティング（一覧→詳細）で作品説明の導線を確保",
  ],
  role: "企画 / デザイン / 実装（個人開発）",
  links: {
    demo: "https://example.com", // あれば差し替え
    repo: "https://github.com/xxx/yyy", // あれば差し替え
  },
  images: {
    cover: "images/works/hotel/cover.jpg",
    gallery: [
      "images/works/hotel/01.jpg",
      "images/works/hotel/02.jpg",
      "images/works/hotel/03.jpg",
      "images/works/hotel/04.jpg",
    ],
  },
},
];

export const getWorkById = (id: string) => works.find((w) => w.id === id);