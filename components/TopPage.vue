<template>
  <div class="top-page-wrapper">
    <transition name="fade" appear>
      <section class="hero-section" v-show="visible">
        <div class="content">
          <img src="/gamepad-icon.png" alt="Gamepad" class="hero-icon" />
          <h1 class="headline" @click="spinCube">Welcome to My Lab</h1>
          <p class="subtext">Exploring creativity through code and design.</p>
          <router-link to="/about" class="cta-button">Discover More</router-link>
          <div class="scroll-down">↓</div>
        </div>
      </section>
    </transition>

    <section class="site-description">
      <div class="description-content">
        <h2>このサイトについて</h2>
        <p>
          このポートフォリオは、ChatGptを駆使して、Vue.jsを使用して制作したものです。
          <br />  
          まあ色々苦労してここをこうしてとデバックをして作成していますので広い心で見てください！
          <br />
          スキルや制作物などを紹介するためのサイトです。
          気軽に見ていってください！
          <br />
        </p>
      </div>
    </section>

    <section class="skills">
      <h2>My Skills</h2>
      <div class="radar-container">
        <SkillRadarChart />

  </div>
<div class="skill-bars">
  <div class="skill">
    <span>HTML / CSS</span>
    <div class="bar"><div class="fill" style="width: 65%"></div></div>
  </div>
  <div class="skill">
    <span>JavaScript / Vue.js</span>
    <div class="bar"><div class="fill" style="width: 50%"></div></div>
  </div>
  <div class="skill">
    <span>Vue.js</span>
    <div class="bar"><div class="fill" style="width: 20%"></div></div>
  </div>
  <div class="skill">
    <span>GitHub</span>
    <div class="bar"><div class="fill" style="width: 55%"></div></div>
  </div>

  <!-- ★ 追加分：PHP 50% -->
  <div class="skill">
    <span>PHP</span>
    <div class="bar"><div class="fill" style="width: 50%"></div></div>
  </div>

  <!-- ★ 追加分：TypeScript 35% -->
  <div class="skill">
    <span>TypeScript (TS)</span>
    <div class="bar"><div class="fill" style="width: 35%"></div></div>
  </div>
</div>
</section>

    <section class="about-me">
      <h2>About Me</h2>
      <p>
        私は、AIを駆使してただ指示だけをしているまだまだなエンジニアです。AIやコードを通してクリエイティブを表現する新しい方法を、日々探求しています。<br />
        <br />私の詳細の自己紹介は自己紹介ページをご覧ください！<a href="https://github.com/szwedf" target="_blank">GitHub</a>で他の制作物もぜひご覧ください。
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
// ★ 同じ components フォルダにあるので相対パスで OK
import SkillRadarChart from './SkillRadarChart.vue';

const visible = ref(false);

onMounted(() => {
  setTimeout(() => {
    visible.value = true;
  }, 300);
});

const spinCube = () => {
  console.log('※ Cube spin is disabled (Three.js removed)');
};
</script>
<style scoped>
.hero-section {
  height: 100vh;
  width: 100%;
  background: linear-gradient(to bottom right, #d6f1f5, #fefefe);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 1.5rem;
  transition: opacity 0.8s ease;
  position: relative;
  z-index: 10;
}

.content {
  max-width: 720px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-icon {
  width: 80px;
  margin-bottom: 1rem;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.headline {
  font-size: 2.75rem;
  font-weight: 800;
  color: #111;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.headline:hover {
  transform: scale(1.05);
}

.subtext {
  font-size: 1.25rem;
  color: #555;
  margin-bottom: 2rem;
}

.cta-button {
  background: #222;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.3s ease;
}

.cta-button:hover {
  background: #444;
}

.scroll-down {
  margin-top: 2rem;
  font-size: 1.5rem;
  color: #888;
  animation: bounce 1.8s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(8px);
  }
}

.site-description, .features, .skills, .about-me {
  padding: 60px 20px;
  text-align: center;
  background: #f9f9f9;
}

.description-content, .features, .skills, .about-me {
  max-width: 720px;
  margin: 0 auto;
}

.radar-container {
  max-width: 800px;
  margin: 40px auto;
  padding: 30px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.features-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 2rem;
}

.feature-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  max-width: 260px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  text-align: center;
}

.feature-card h3 {
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  color: #333;
}

.feature-card p {
  font-size: 1rem;
  color: #555;
}

.skill-bars {
  margin-top: 2rem;
}

.skill {
  margin-bottom: 1.5rem;
  text-align: left;
}

.skill span {
  display: block;
  font-weight: 600;
  margin-bottom: 0.3rem;
}

.bar {
  width: 100%;
  background: #e0e0e0;
  height: 10px;
  border-radius: 5px;
  overflow: hidden;
}

.fill {
  height: 100%;
  background: #00aaff;
  transition: width 0.5s ease;
}

.about-me a {
  color: #00aaff;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .headline {
    font-size: 2rem;
  }
  .subtext {
    font-size: 1rem;
  }
  .hero-icon {
    width: 60px;
  }
  .feature-card {
    width: 100%;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.6s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.radar-container {
  max-width: 800px;
  margin: 0 auto 40px;
  padding: 20px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>
<!-- src/components/TopPage.vue の hero 周りだけでもOK -->
<style scoped>
.hero {
  min-height: 100svh;
  display: grid;
  place-items: center;
  padding: 96px 16px 56px; /* 固定ナビ分を見越す */
  background: linear-gradient(135deg, #e9f7ff, #f7fbff);
  text-align: center;
}

.hero-title {
  font-size: clamp(28px, 6vw, 56px);
  margin: 0;
  letter-spacing: -0.02em;
}
.hero-subtitle {
  font-size: clamp(14px, 2.6vw, 18px);
  margin: 14px 0 0;
  opacity: 0.75;
}

.hero-button {
  margin-top: 22px;
  padding: 12px 18px;
  border-radius: 999px;
  width: min(260px, 90%);
}

/* iPhone XR 近辺 */
@media (max-width: 480px) {
  .hero {
    padding-top: 82px;
  }
}
</style>