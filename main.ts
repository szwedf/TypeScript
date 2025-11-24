// src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // ルーター使ってるなら

// グローバルCSSを使ってるなら（なければこの1行は削ってOK）
// import './assets/main.css';

const app = createApp(App);

app.use(router);
app.mount('#app');
