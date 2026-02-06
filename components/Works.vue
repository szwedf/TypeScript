<!-- src/components/Works.vue -->
<template>
  <section class="works">
    <h1 class="works-title">Works</h1>
    <p class="works-lead">
      個人開発で作成した Web サイトや学習用の制作物です。<br />
      カードをクリックすると、作品の概要や使用技術、こだわったポイントを確認できます。
    </p>

    <div class="works-grid">
      <RouterLink
        v-for="work in works"
        :key="work.id"
        :to="{ name: 'WorkDetail', params: { id: work.id } }"
        class="work-card"
      >
        <div v-if="work.thumbnail" class="work-thumb">
          <img :src="work.thumbnail" :alt="work.title" loading="lazy" />
        </div>

        <div class="work-body">
          <h2 class="work-name">{{ work.title }}</h2>
          <p class="work-period">{{ work.period }}</p>
          <p class="work-summary">
            {{ work.summary }}
          </p>

          <ul class="work-tags">
            <li
              v-for="tag in work.techStack"
              :key="tag"
              class="tag-chip"
            >
              {{ tag }}
            </li>
          </ul>

          <div class="work-links">
            <span class="work-detail-link">View Detail →</span>
          </div>
        </div>
      </RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

type Work = {
  id: number;
  title: string;
  period: string;
  summary: string;
  techStack: string[];
  thumbnail?: string;
};

// ひとまずこのコンポーネント内にベタ書き（まずは確実に動かす）
const works: Work[] = [
  {
    id: 1,
    title: 'My Lab – Vue + TS ポートフォリオ',
    period: '2024–2025',
    summary:
      '現在ご覧いただいているポートフォリオ。Vue 3 + TypeScript を用いて、Welcome / About / Career / Skills / Works / Contact を SPA 構成で実装。',
    techStack: ['Vue 3', 'TypeScript', 'Vite', 'Vue Router'],
    thumbnail: '/images/portfolio-thumb.png', // 画像がなければここは一旦消してOK
  },
  {
    id: 2,
    title: 'Café Lumière – カフェサイト（学習用）',
    period: '2024',
    summary:
      '表参道のカフェをイメージした LP。メニュー表示やレスポンシブ対応を通して、レイアウトとUIコンポーネントの練習として制作。',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Vue 3'],
    thumbnail: '/images/cafe-thumb.png',
  },
  {
    id: 3,
    title: 'Hotel Luxe – 高級ホテルサイト（学習用）',
    period: '2024',
    summary:
      '高級ホテルをテーマにしたギャラリーサイト。トップとギャラリーを分け、写真中心のレイアウトとホバーアニメーションを実装。',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    thumbnail: '/images/hotel-thumb.png',
  },
];
</script>

<style scoped>
.works {
  max-width: 1120px;
  margin: 0 auto;
  padding: 4rem 1.5rem 5rem;
}

.works-title {
  font-size: 2.4rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
}

.works-lead {
  max-width: 760px;
  margin: 0 auto 3rem;
  text-align: center;
  line-height: 1.8;
  color: #4b5563;
  font-size: 0.98rem;
}

.works-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.6rem;
}

.work-card {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.96);
  border-radius: 18px;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
  border: 1px solid rgba(209, 213, 219, 0.9);
  overflow: hidden;
  color: inherit;
  transition: transform 0.16s ease, box-shadow 0.16s ease, border-color 0.16s ease;
}

.work-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 24px 55px rgba(15, 23, 42, 0.16);
  border-color: #93c5fd;
}

.work-thumb {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.work-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.work-card:hover .work-thumb img {
  transform: scale(1.03);
}

.work-body {
  padding: 1.1rem 1.3rem 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.work-name {
  font-size: 1.08rem;
  font-weight: 600;
}

.work-period {
  font-size: 0.8rem;
  color: #6b7280;
}

.work-summary {
  font-size: 0.9rem;
  color: #4b5563;
  line-height: 1.7;
  margin-top: 0.2rem;
}

.work-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: 0.4rem;
}

.tag-chip {
  font-size: 0.78rem;
  padding: 0.16rem 0.55rem;
  border-radius: 999px;
  background: #eff6ff;
  color: #1d4ed8;
}

.work-links {
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: #2563eb;
}

.work-detail-link {
  font-weight: 500;
}

@media (max-width: 640px) {
  .works {
    padding-top: 3.4rem;
  }

  .works-title {
    font-size: 2rem;
  }
}
</style>