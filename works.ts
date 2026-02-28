// src/data/works.ts
export type Work = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  period?: string;
  role?: string;
  tech: string[];
  highlights: string[];
  links?: {
    demo?: string;
    github?: string;
  };
  images: {
    cover: string;      // public 配下の相対パス（先頭に / を付けない）
    gallery?: string[]; // 同上
  };
};

export const works: Work[] = [
  {
    id: "cafe",
    title: "Omotesando Cafe Site",
    subtitle: "Vue.js / 多言語切り替え / UI演出",
    description:
      "20〜30代向けの“表参道っぽい”雰囲気を意識したカフェサイト。言語切り替え、スクロール演出、メニュー表示などを実装。",
    period: "個人制作",
    role: "設計 / 実装",
    tech: ["Vue 3", "Vue Router", "Vite", "HTML", "CSS", "JavaScript"],
    highlights: [
      "日本語/英語の切り替え（UI文言とメニュー表示）",
      "スクロールでのフェード/スライド演出",
      "モバイルのナビ（ハンバーガー）対応",
      "セクションごとの余白設計とトーン統一",
    ],
    links: {
      github: "https://github.com/szwedf",
    },
    images: {
      cover: "images/works/cafe/cover.jpg",
      gallery: [
        "images/works/cafe/1.jpg",
        "images/works/cafe/2.jpg",
        "images/works/cafe/3.jpg",
      ],
    },
  },
  {
    id: "hotel",
    title: "Luxury Hotel Landing",
    subtitle: "高級ホテル風 LP / ギャラリー / 予約導線",
    description:
      "高級ホテルの世界観（余白・写真・タイポ）を意識したランディングページ。ギャラリーと予約導線、セクション分割で“それっぽさ”を構築。",
    period: "個人制作",
    role: "設計 / 実装",
    tech: ["Vue 3", "Vue Router", "Vite", "HTML", "CSS", "JavaScript"],
    highlights: [
      "ヒーロー（ファーストビュー）で世界観を作る",
      "ギャラリーの一覧→詳細導線",
      "レスポンシブ前提のグリッド設計",
      "画像は lazy load で軽量化",
    ],
    links: {
      github: "https://github.com/szwedf",
    },
    images: {
      cover: "images/works/hotel/cover.jpg",
      gallery: [
        "images/works/hotel/1.jpg",
        "images/works/hotel/2.jpg",
        "images/works/hotel/3.jpg",
      ],
    },
  },
];

export const getWorkById = (id: string) => works.find((w) => w.id === id);