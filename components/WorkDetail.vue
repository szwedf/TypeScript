<template>
  <section class="work-detail">
    <div class="container" v-if="work">
      <header class="head">
        <h1>{{ work.title }}</h1>
        <p v-if="work.subtitle" class="subtitle">{{ work.subtitle }}</p>
        <p class="desc">{{ work.description }}</p>
      </header>

      <div class="cover">
        <img :src="withBase(work.images.cover)" :alt="work.title" loading="lazy" />
      </div>

      <div class="grid">
        <div class="panel">
          <h2>Tech</h2>
          <ul>
            <li v-for="t in work.tech" :key="t">{{ t }}</li>
          </ul>
        </div>

        <div class="panel">
          <h2>Highlights</h2>
          <ul>
            <li v-for="h in work.highlights" :key="h">{{ h }}</li>
          </ul>
        </div>
      </div>

      <div v-if="work.images.gallery?.length" class="gallery">
        <h2>Gallery</h2>
        <div class="gallery-grid">
          <img
            v-for="(g, i) in work.images.gallery"
            :key="i"
            :src="withBase(g)"
            :alt="`${work.title} image ${i + 1}`"
            loading="lazy"
          />
        </div>
      </div>

      <div v-if="work.links" class="links">
        <a v-if="work.links.demo" :href="work.links.demo" target="_blank" rel="noreferrer">Demo</a>
        <a v-if="work.links.github" :href="work.links.github" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </div>

    <div class="container" v-else>
      <h1>Not Found</h1>
      <p>指定された作品が見つかりませんでした。</p>
      <RouterLink class="back" to="/works">← Worksへ戻る</RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { getWorkById } from "../data/works";

const props = defineProps<{ id: string }>();

const base = import.meta.env.BASE_URL ?? "/";
const withBase = (p: string) => `${base}${p}`.replace(/\/{2,}/g, "/");

const work = computed(() => getWorkById(props.id));
</script>

<style scoped>
.work-detail {
  padding: 92px 0 56px;
  background: linear-gradient(135deg, #e9f7ff, #f7fbff);
}
.container {
  width: min(980px, calc(100% - 32px));
  margin: 0 auto;
}

.head h1 {
  font-size: clamp(26px, 4vw, 40px);
  margin: 0 0 8px;
}
.subtitle {
  margin: 0 0 10px;
  opacity: 0.75;
}
.desc {
  margin: 0 0 18px;
  opacity: 0.9;
}

.cover {
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  margin: 0 0 18px;
}
.cover img {
  width: 100%;
  display: block;
  object-fit: cover;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin-top: 10px;
}
.panel {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 18px;
  padding: 14px;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.1);
}
.panel h2 {
  margin: 0 0 10px;
  font-size: 16px;
}
.panel ul {
  margin: 0;
  padding-left: 18px;
}

.gallery {
  margin-top: 18px;
}
.gallery h2 {
  margin: 0 0 10px;
  font-size: 16px;
}
.gallery-grid {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
}
.gallery-grid img {
  width: 100%;
  border-radius: 14px;
  display: block;
  object-fit: cover;
  aspect-ratio: 4 / 3;
}

.links {
  margin-top: 18px;
  display: flex;
  gap: 10px;
}
.links a,
.back {
  display: inline-block;
  padding: 10px 14px;
  border-radius: 999px;
  background: #111;
  color: #fff;
  text-decoration: none;
  font-size: 14px;
}

@media (max-width: 720px) {
  .grid {
    grid-template-columns: 1fr;
  }
  .work-detail {
    padding-top: 78px;
  }
}
</style>