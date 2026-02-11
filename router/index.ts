// src/router/index.ts
import { createRouter, createWebHistory } from "vue-router";

import WelcomePage from "@/components/WelcomePage.vue";
import TopPage from "@/components/TopPage.vue";
import About from "@/components/About.vue";
import Career from "@/components/Career.vue";
import Skills from "@/components/Skills.vue";
import Contact from "@/components/Contact.vue";

import Works from "@/components/Works.vue";
import WorkDetail from "@/components/WorkDetail.vue";

const routes = [
  { path: "/", name: "Welcome", component: WelcomePage, meta: { transition: "fade" } },
  { path: "/home", name: "TopPage", component: TopPage, meta: { transition: "zoom" } },
  { path: "/about", name: "About", component: About, meta: { transition: "slide-left" } },
  { path: "/career", name: "Career", component: Career, meta: { transition: "slide-up" } },
  { path: "/skills", name: "Skills", component: Skills, meta: { transition: "flip" } },

  // ✅ ここから追加
  { path: "/works", name: "Works", component: Works, meta: { transition: "slide-right" } },
  {
    path: "/works/:id",
    name: "WorkDetail",
    component: WorkDetail,
    props: true, // ✅ params.id を props として受け取る
    meta: { transition: "slide-left" },
  },
  // ✅ ここまで追加

  { path: "/contact", name: "Contact", component: Contact, meta: { transition: "fade" } },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});