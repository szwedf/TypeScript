<template>
  <section class="works-page">
    <header class="works-hero">
      <h1 class="title">Works</h1>
      <p class="lead">
        作ったものは、作っただけじゃなく「説明できて初めて武器」。
        ここはその武器庫です。
      </p>
    </header>

    <div class="works-grid">
      <RouterLink
        v-for="work in works"
        :key="work.id"
        class="work-card"
        :to="{ name: 'WorkDetail', params: { id: work.id } }"
      >
        <div class="thumb">
          <img
            :src="withBase(work.images.cover)"
            :alt="work.title"
            loading="lazy"
          />
          <div class="thumb-overlay" />
        </div>

        <div class="card-body">
          <div class="card-head">
            <h2 class="work-title">{{ work.title }}</h2>
            <p class="work-subtitle">{{ work.subtitle }}</p>
          </div>

          <p class="work-desc">{{ work.description }}</p>

          <ul class="chips">
            <li v-for="s in work.stack" :key="s" class="chip">{{ s }}</li>
          </ul>

          <div class="cta">
            <span>詳細を見る</span>
            <span class="arrow">→</span>
          </div>
        </div>
      </RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { works } from "@/data/works";

/**
 * 画像パスの「本番環境のベースパス問題」を潰す関数。
 * - Vercel: BASE_URL は "/" なのでそのまま
 * - GitHub Pages: BASE_URL が "/repo-name/" になっても壊れない
 */
const withBase = (path: string) => {
  const base = import.meta.env.BASE_URL; // "/" or "/repo/"
  return `${base}${path}`.replace(/\/{2,}/g, "/");
};
</script>

<style scoped>
.works-page {
  min-height: calc(100vh - 160px);
  padding: 80px 24px;
  background: radial-gradient(circle at 20% 10%, #f4fbff 0%, #f2f7ff 45%, #f6fbff 100%);
}

.works-hero {
  max-width: 980px;
  margin: 0 auto 28px;
  text-align: center;
}
.title {
  font-size: 44px;
  letter-spacing: 0.02em;
  margin: 0 0 10px;
}
.lead {
  margin: 0 auto;
  max-width: 760px;
  line-height: 1.8;
  color: #334155;
}

.works-grid {
  max-width: 1100px;
  margin: 22px auto 0;
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(12, 1fr);
}

.work-card {
  grid-column: span 6;
  display: block;
  text-decoration: none;
  color: inherit;
  border-radius: 18px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(15, 23, 42, 0.10);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
  transform: translateY(0);
  transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
}
.work-card:hover {
  transform: translateY(-2px);
  border-color: rgba(15, 23, 42, 0.18);
  box-shadow: 0 26px 56px rgba(15, 23, 42, 0.12);
}

.thumb {
  position: relative;
  height: 220px;
  overflow: hidden;
}
.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transform: scale(1.02);
}
.thumb-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(2, 6, 23, 0.05), rgba(2, 6, 23, 0.20));
}

.card-body {
  padding: 16px 16px 14px;
}
.work-title {
  margin: 0;
  font-size: 18px;
}
.work-subtitle {
  margin: 6px 0 10px;
  color: #475569;
  font-size: 13px;
  line-height: 1.6;
}
.work-desc {
  margin: 0 0 10px;
  color: #334155;
  font-size: 14px;
  line-height: 1.7;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.chips {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.chip {
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.06);
  border: 1px solid rgba(15, 23, 42, 0.10);
}

.cta {
  margin-top: 12px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  color: #0f172a;
}
.arrow {
  display: inline-block;
  transform: translateX(0);
  transition: transform .18s ease;
}
.work-card:hover .arrow {
  transform: translateX(3px);
}

@media (max-width: 920px) {
  .work-card { grid-column: span 12; }
  .title { font-size: 36px; }
}
</style>