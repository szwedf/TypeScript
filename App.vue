<template>
  <div class="app-wrapper">
    <Navbar />

    <div class="main-content">
      <router-view v-slot="{ Component }">
        <transition :name="transitionName" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const transitionName = computed(() => String(route.meta.transition || 'fade'));
</script>

<style>
/* 全体レイアウト調整 */
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* 中央のコンテンツを押し広げる */
.main-content {
  flex: 1;
}

/* 基本スタイル */
body {
  margin: 0;
  font-family: 'Noto Sans JP', sans-serif;
  background: linear-gradient(135deg, #f8f9fa, #e3f2fd);
  color: #222;
}

/* フェードアニメーション */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
