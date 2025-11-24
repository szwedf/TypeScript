<template>
    <div class="skills">
      <h1>スキル紹介</h1>
      <div class="skill-cards">
        <div class="skill-card" v-for="(skill, index) in skills" :key="index">
          <h2>{{ skill.name }}</h2>
          <p>{{ skill.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  export default defineComponent({
    name: 'Skills',
    setup() {
      const skills = ref([
        { name: 'HTML/CSS', description: 'フロントエンドの基本技術' },
        { name: 'JavaScript/TypeScript', description: 'インタラクティブな機能の実装' },
        { name: 'Vue.js/React', description: 'モダンなフロントエンドフレームワーク' },
        { name: 'PHP/Laravel', description: 'サーバーサイド開発' },
      ]);
      return { skills };
    }
  });
  </script>
  
  <style scoped>
  .skills {
    padding: 40px 20px;
    text-align: center;
  }
  
  .skill-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
  
  .skill-card {
    flex: 1 1 200px;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 20px;
  }
  
  /* レスポンシブ対応 */
  @media (max-width: 768px) {
    .skill-cards {
      flex-direction: column;
    }
  }
  </style>
  