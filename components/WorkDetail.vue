<template>
  <section class="detail-page">
    <div class="wrap" v-if="work">
      <div class="topbar">
        <RouterLink class="back" to="/works">← 一覧へ戻る</RouterLink>
      </div>

      <header class="hero">
        <div class="hero-text">
          <h1 class="title">{{ work.title }}</h1>
          <p class="subtitle">{{ work.subtitle }}</p>
          <p class="desc">{{ work.description }}</p>

          <div class="links" v-if="work.links?.demo || work.links?.repo">
            <a
              v-if="work.links?.demo"
              class="btn"
              :href="work.links.demo"
              target="_blank"
              rel="noreferrer"
            >Demo</a>
            <a
              v-if="work.links?.repo"
              class="btn ghost"
              :href="work.links.repo"
              target="_blank"
              rel="noreferrer"
            >GitHub</a>
          </div>
        </div>

        <div class="hero-media">
          <img :src="withBase(work.images.cover)" :alt="work.title" />
        </div>
      </header>

      <section class="block">
        <h2 class="h2">Highlights</h2>
        <ul class="list">
          <li v-for="h in work.highlights" :key="h">{{ h }}</li>
        </ul>
      </section>

      <section class="block">
        <h2 class="h2">Tech Stack</h2>
        <ul class="chips">
          <li v-for="s in work.stack" :key="s" class="chip">{{ s }}</li>
        </ul>
      </section>

      <section class="block" v-if="work.images.gallery?.length">
        <h2 class="h2">Gallery</h2>
        <div class="gallery">
          <img
            v-for="src in work.images.gallery"
            :key="src"
            :src="withBase(src)"
            :alt="work.title"
            loading="lazy"
          />
        </div>
      </section>
    </div>

    <div class="wrap" v-else>
      <p class="notfound">作品が見つかりませんでした。</p>
      <RouterLink class="back" to="/works">← 一覧へ戻る</RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { getWorkById } from "@/data/works";

const props = defineProps<{ id: string }>();

const work = computed(() => getWorkById(props.id));

const withBase = (path: string) => {
  const base = import.meta.env.BASE_URL;
  return `${base}${path}`.replace(/\/{2,}/g, "/");
};
</script>

<style scoped>
.detail-page {
  padding: 70px 24px;
  background: radial-gradient(circle at 20% 10%, #f4fbff 0%, #f2f7ff 45%, #f6fbff 100%);
  min-height: calc(100vh - 160px);
}
.wrap {
  max-width: 1100px;
  margin: 0 auto;
}
.topbar {
  margin-bottom: 14px;
}
.back {
  text-decoration: none;
  color: #0f172a;
  font-weight: 700;
}

.hero {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 18px;
  padding: 18px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(15, 23, 42, 0.10);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
}
.title {
  margin: 0;
  font-size: 34px;
}
.subtitle {
  margin: 8px 0 10px;
  color: #475569;
}
.desc {
  margin: 0;
  line-height: 1.85;
  color: #334155;
}

.links {
  margin-top: 14px;
  display: flex;
  gap: 10px;
}
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 14px;
  border-radius: 12px;
  border: 1px solid rgba(15, 23, 42, 0.15);
  background: #0f172a;
  color: white;
  text-decoration: none;
  font-weight: 700;
}
.btn.ghost {
  background: transparent;
  color: #0f172a;
}

.hero-media img {
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 14px;
  border: 1px solid rgba(15, 23, 42, 0.10);
  display: block;
}

.block {
  margin-top: 18px;
  padding: 18px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(15, 23, 42, 0.10);
}
.h2 {
  margin: 0 0 10px;
  font-size: 18px;
}
.list {
  margin: 0;
  padding-left: 18px;
  line-height: 1.9;
  color: #334155;
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

.gallery {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
}
.gallery img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 14px;
  border: 1px solid rgba(15, 23, 42, 0.10);
}

.notfound {
  margin: 0 0 12px;
  color: #334155;
}

@media (max-width: 920px) {
  .hero { grid-template-columns: 1fr; }
  .gallery { grid-template-columns: 1fr; }
  .hero-media img { height: 220px; }
}
</style>