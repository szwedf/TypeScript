<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const isOpen = ref(false);
const route = useRoute();

const links = [
  { to: "/", label: "Welcome" },
  { to: "/home", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/career", label: "Career" },
  { to: "/skills", label: "Skills" },
  { to: "/works", label: "Works" },
  { to: "/contact", label: "Contact" },
];

const toggle = () => (isOpen.value = !isOpen.value);
const close = () => (isOpen.value = false);

// ルート遷移したら自動で閉じる（スマホで超大事）
watch(
  () => route.fullPath,
  () => close()
);
</script>

<template>
  <header class="site-header">
    <div class="container header-inner">
      <RouterLink class="brand" to="/home">My Portfolio</RouterLink>

      <!-- PCナビ -->
      <nav class="nav-desktop" aria-label="Primary">
        <RouterLink v-for="l in links" :key="l.to" class="nav-link" :to="l.to">
          {{ l.label }}
        </RouterLink>
      </nav>

      <!-- スマホ：ハンバーガー -->
      <button
        class="burger"
        type="button"
        :aria-expanded="isOpen"
        aria-controls="mobileMenu"
        @click="toggle"
      >
        <span class="sr-only">メニュー</span>
        <span class="line" aria-hidden="true"></span>
        <span class="line" aria-hidden="true"></span>
        <span class="line" aria-hidden="true"></span>
      </button>
    </div>

    <!-- スマホメニュー -->
    <Transition name="fade">
      <div v-if="isOpen" class="overlay" @click.self="close">
        <nav id="mobileMenu" class="nav-mobile" aria-label="Mobile">
          <RouterLink
            v-for="l in links"
            :key="l.to"
            class="mobile-link"
            :to="l.to"
          >
            {{ l.label }}
          </RouterLink>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(120, 120, 120, 0.72);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255,255,255,0.22);
}

.header-inner {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
}

.brand {
  color: #fff;
  text-decoration: none;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.nav-desktop {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}
.nav-link {
  color: rgba(255,255,255,0.9);
  text-decoration: none;
  font-weight: 700;
  font-size: var(--text-1);
}
.nav-link.router-link-active {
  text-decoration: underline;
  text-underline-offset: 6px;
}

/* burger */
.burger {
  display: none;
  width: 44px;
  height: 44px;
  border: 1px solid rgba(255,255,255,0.28);
  background: rgba(0,0,0,0.15);
  border-radius: 12px;
  cursor: pointer;
}
.line {
  display: block;
  width: 18px;
  height: 2px;
  background: #fff;
  margin: 4px auto;
  border-radius: 999px;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

/* mobile menu */
.overlay {
  position: fixed;
  inset: 64px 0 0 0;
  background: rgba(0,0,0,0.25);
  display: grid;
  place-items: start center;
  padding: var(--space-4);
}
.nav-mobile {
  width: min(520px, 100%);
  background: rgba(255,255,255,0.92);
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: var(--radius-3);
  box-shadow: var(--shadow-2);
  padding: var(--space-3);
  display: grid;
  gap: var(--space-2);
}
.mobile-link {
  text-decoration: none;
  color: #111;
  font-weight: 800;
  padding: 12px 14px;
  border-radius: 12px;
}
.mobile-link.router-link-active,
.mobile-link:hover {
  background: rgba(0,0,0,0.06);
}

.fade-enter-active,
.fade-leave-active { transition: opacity 0.15s ease; }
.fade-enter-from,
.fade-leave-to { opacity: 0; }

/* responsive */
@media (max-width: 860px) {
  .nav-desktop { display: none; }
  .burger { display: inline-block; }
}
</style>