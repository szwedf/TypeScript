<template>
    <header class="navbar">
      <div class="logo">My Portfolio</div>
  
      <nav :class="{ open: isOpen }">
        <router-link to="/" @click="close">Welcome</router-link>
        <router-link to="/home" @click="close">Home</router-link>
        <router-link to="/about" @click="close">About</router-link>
        <router-link to="/career" @click="close">Career</router-link>
        <router-link to="/skills" @click="close">Skills</router-link>
        <RouterLink to="/works">Works</RouterLink>
        <router-link to="/contact" @click="close">Contact</router-link>
      </nav>
  
      <div class="hamburger" @click="toggle">
        <span></span><span></span><span></span>
      </div>
    </header>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const isOpen = ref(false);
  const toggle = () => (isOpen.value = !isOpen.value);
  const close = () => (isOpen.value = false);
  </script>
  
  <style scoped>
  .navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 32px;
  background: rgba(255, 255, 255, 0.95);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

/* ロゴ */
.logo {
  font-weight: bold;
  font-size: 1.2rem;
}
  
  /* スマホ用だけに制限をかける */
@media (max-width: 767px) {
  nav {
    display: none;
  }

  nav.open {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    width: 100%;
    background: #fff;
    padding: 20px 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    gap: 10px;
  }
}
  
  /* navリンク共通 */
  nav a {
    text-decoration: none;
    color: #333;
    font-weight: 600;
    padding: 8px 12px;
  }
  
  /* ハンバーガー */
  .hamburger {
    display: flex;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
  }
  
  .hamburger span {
    width: 25px;
    height: 3px;
    background: #333;
    border-radius: 2px;
  }

  .navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 半透明にして雰囲気キープ */
  z-index: 10;
  color: #fff;
}
  
  /* スマホ用nav展開時 */
  nav.open {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    width: 100%;
    background: #fff;
    padding: 20px 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    gap: 10px;
  }
  
  /* PCレイアウト */
  @media (min-width: 768px) {
  nav {
    display: flex !important;
    flex-direction: row;
    gap: 20px;
    justify-content: flex-end; /* ← 右寄せ */
    flex: 1;                    /* ← ナビが右側スペースいっぱい使える */
  }

  .logo {
    margin-right: auto;        /* ← ロゴは左寄せに固定 */
  }

  nav a {
    white-space: nowrap;
  }
}
  </style>
  