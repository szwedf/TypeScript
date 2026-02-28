// src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import "./tokens.css";

createApp(App)
  .use(router)   // これを消してると router-view が動かない
  .mount('#app'); // index.html 側の id と一致していること


