import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

import WelcomePage from '../components/WelcomePage.vue';
import TopPage from '../components/TopPage.vue';
import About from '../components/About.vue';
import Career from '../components/Career.vue';
import Skills from '../components/Skills.vue';
import Contact from '../components/Contact.vue';

// ★追加
import Works from '../components/Works.vue';
import WorkDetail from '../components/WorkDetail.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Welcome', component: WelcomePage, meta: { transition: 'fade' } },
  { path: '/home', name: 'TopPage', component: TopPage, meta: { transition: 'zoom' } },
  { path: '/about', name: 'About', component: About, meta: { transition: 'slide-left' } },
  { path: '/career', name: 'Career', component: Career, meta: { transition: 'slide-up' } },
  { path: '/skills', name: 'Skills', component: Skills, meta: { transition: 'flip' } },
  { path: '/contact', name: 'Contact', component: Contact, meta: { transition: 'fade' } },

  // ★Works 一覧
  { path: '/works', name: 'Works', component: Works, meta: { transition: 'slide-up' } },

  // ★Works 詳細：ここが無いと RouterLink が解決できず真っ白になる
  {
    path: '/works/:id',
    name: 'workDetail',          // ← RouterLink 側と名前一致させる（大文字小文字も含めて完全一致）
    component: WorkDetail,
    props: true,                 // ← :id を props で受け取れる
    meta: { transition: 'slide-left' },
  },

  // おまけ：存在しないURLは /home に逃がす（好みで）
  { path: '/:pathMatch(.*)*', redirect: '/home' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;