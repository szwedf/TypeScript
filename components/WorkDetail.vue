<!-- src/components/WorkDetail.vue -->
<template>
  <section v-if="work" class="work-detail">
    <button class="back-btn" type="button" @click="goBack">
      ← Back to Works
    </button>

    <div class="head">
      <p class="period">{{ work.period }}</p>
      <h1 class="title">{{ work.title }}</h1>
      <p class="role">{{ work.role }}</p>
    </div>

    <div class="tags">
      <span
        v-for="tag in work.techStack"
        :key="tag"
        class="tag-chip"
      >
        {{ tag }}
      </span>
    </div>

    <div class="layout">
      <div class="main">
        <h2 class="sub-title">Overview</h2>
        <p class="text">
          {{ work.summary }}
        </p>

        <h2 class="sub-title">What I Focused On</h2>
        <ul class="feature-list">
          <li v-for="(f, idx) in work.features" :key="idx">
            {{ f }}
          </li>
        </ul>
      </div>

      <aside class="side">
        <div v-if="work.thumbnail" class="thumb">
          <img :src="work.thumbnail" :alt="work.title" loading="lazy" />
        </div>

        <div class="links">
          <a
            v-if="work.demoUrl"
            :href="work.demoUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="link primary"
          >
            Visit Demo
          </a>
          <a
            v-if="work.repoUrl"
            :href="work.repoUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="link"
          >
            View on GitHub
          </a>
        </div>
      </aside>
    </div>
  </section>

  <section v-else class="work-detail not-found">
    <p>指定された作品が見つかりませんでした。</p>
    <button class="back-btn" type="button" @click="goBack">
      ← Back to Works
    </button>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { works } from '../data/works';
import type { Work } from '../data/works';

const route = useRoute();
const router = useRouter();

const work = computed<Work | undefined>(() => {
  const id = Number(route.params.id);
  if (Number.isNaN(id)) return undefined;
  return works.find((w) => w.id === id);
});

const goBack = () => {
  router.push({ name: 'Works' });
};
</script>

<style scoped>
.work-detail {
  max-width: 1120px;
  margin: 0 auto;
  padding: 4rem 1.5rem 5rem;
}

.not-found {
  text-align: center;
}

.back-btn {
  border: none;
  background: transparent;
  color: #2563eb;
  font-size: 0.9rem;
  cursor: pointer;
  margin-bottom: 1.4rem;
  padding: 0;
}

.head {
  margin-bottom: 1.5rem;
}

.period {
  font-size: 0.85rem;
  color: #6b7280;
}

.title {
  font-size: 2rem;
  font-weight: 700;
  margin: 0.2rem 0 0.4rem;
}

.role {
  font-size: 0.95rem;
  color: #4b5563;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-bottom: 2rem;
}

.tag-chip {
  font-size: 0.78rem;
  padding: 0.14rem 0.55rem;
  border-radius: 999px;
  background: #eff6ff;
  color: #1d4ed8;
}

.layout {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(260px, 0.9fr);
  gap: 2rem;
}

.sub-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 0.6rem;
}

.text {
  font-size: 0.95rem;
  color: #4b5563;
  line-height: 1.9;
  margin-bottom: 1.6rem;
}

.feature-list {
  padding-left: 1.2rem;
  font-size: 0.94rem;
  color: #374151;
  line-height: 1.8;
}

.thumb {
  width: 100%;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.12);
  margin-bottom: 1.5rem;
}

.thumb img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.55rem 0.9rem;
  border-radius: 999px;
  border: 1px solid #d1d5db;
  font-size: 0.9rem;
  text-decoration: none;
  color: #111827;
  background: #f9fafb;
  transition: background 0.15s ease, border-color 0.15s ease, transform 0.15s ease;
}

.link:hover {
  background: #e5e7eb;
  border-color: #9ca3af;
  transform: translateY(-1px);
}

.link.primary {
  background: #111827;
  color: #f9fafb;
  border-color: #111827;
}

.link.primary:hover {
  background: #020617;
  border-color: #020617;
}

@media (max-width: 840px) {
  .layout {
    grid-template-columns: minmax(0, 1fr);
  }
}

@media (max-width: 640px) {
  .work-detail {
    padding-top: 3.4rem;
  }

  .title {
    font-size: 1.7rem;
  }
}
</style>