<template>
  <section class="works-page">
    <div class="container">
      <header class="page-head">
        <h1>Works</h1>
        <p>制作物一覧（個人制作 / 学習アウトプット）</p>
      </header>

      <div v-if="works.length" class="grid">
        <RouterLink
          v-for="w in works"
          :key="w.id"
          class="card"
          :to="{ name: 'WorkDetail', params: { id: w.id } }"
        >
          <div class="thumb">
            <img :src="withBase(w.images.cover)" :alt="w.title" loading="lazy" />
          </div>

          <div class="body">
            <h2 class="title">{{ w.title }}</h2>
            <p v-if="w.subtitle" class="subtitle">{{ w.subtitle }}</p>
            <p class="desc">{{ w.description }}</p>

            <div class="chips">
              <span v-for="t in w.tech.slice(0, 4)" :key="t" class="chip">{{ t }}</span>
            </div>

            <div class="cta">
              <span>View detail →</span>
            </div>
          </div>
        </RouterLink>
      </div>

      <div v-else class="empty">
        <p>まだ作品がありません（works.ts を確認してね）</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { works } from "../data/works";

const base = import.meta.env.BASE_URL ?? "/";
const withBase = (p: string) => `${base}${p}`.replace(/\/{2,}/g, "/");
</script>

<style scoped>
/* ページ共通：固定ヘッダーがある前提で上に余白 */
.works-page {
  padding: 92px 0 56px;
  background: linear-gradient(135deg, #e9f7ff, #f7fbff);
}

.container {
  width: min(1100px, calc(100% - 32px));
  margin: 0 auto;
}

.page-head {
  margin-bottom: 20px;
}
.page-head h1 {
  font-size: clamp(28px, 4vw, 40px);
  margin: 0 0 6px;
}
.page-head p {
  margin: 0;
  opacity: 0.75;
}

.grid {
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.card {
  display: grid;
  grid-template-rows: auto 1fr;
  text-decoration: none;
  color: inherit;
  border-radius: 18px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}
.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 36px rgba(0, 0, 0, 0.14);
}

.thumb {
  aspect-ratio: 16 / 9;
  background: #f2f2f2;
}
.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.body {
  padding: 14px 14px 16px;
}
.title {
  margin: 0;
  font-size: 18px;
}
.subtitle {
  margin: 6px 0 0;
  font-size: 13px;
  opacity: 0.7;
}
.desc {
  margin: 10px 0 12px;
  font-size: 14px;
  opacity: 0.85;

  /* 行数を抑えて見やすく */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.chip {
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(66, 185, 131, 0.12);
}

.cta {
  margin-top: 12px;
  font-size: 13px;
  opacity: 0.9;
}

/* iPhone XR 付近 */
@media (max-width: 480px) {
  .works-page {
    padding-top: 78px;
  }
  .container {
    width: calc(100% - 24px);
  }
}
</style>