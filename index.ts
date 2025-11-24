import { createRouter, createWebHistory } from 'vue-router';
import WelcomePage from '../components/WelcomePage.vue';
import TopPage from '../components/TopPage.vue';
import About from '../components/About.vue';
import Career from '../components/Career.vue';
import Skills from '../components/Skills.vue';
import Contact from '../components/Contact.vue';

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: WelcomePage,
    meta: { transition: 'fade' },
  },
  {
    path: '/home',
    name: 'TopPage',
    component: TopPage,
    meta: { transition: 'zoom' },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { transition: 'slide-left' },
  },
  {
    path: '/career',
    name: 'Career',
    component: Career,
    meta: { transition: 'slide-up' },
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills,
    meta: { transition: 'flip' },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: { transition: 'fade' },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
