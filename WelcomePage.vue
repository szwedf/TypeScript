<template>
  <div class="welcome animate__animated animate__fadeInDown">
    <h1>Welcome to My Portfolio</h1>
    <p class="animate__animated animate__fadeIn animate__delay-1s">
      Let's start the journey!
    </p>
    <router-link to="/home" class="btn animate__animated animate__fadeInUp animate__delay-2s">
      ▶ トップページへ
    </router-link>
  </div>
</template>

  
  <script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'WelcomePage',
    mounted() {
      // ここでアニメーション等の初期化が可能
    }
  });
  </script>
  
  <style scoped>
  .welcome {
    text-align: center;
    padding: 50px 20px;
    animation: fadeIn 2s ease;
  }
  

  .btn {
  display: inline-block;
  margin-top: 30px;
  padding: 12px 24px;
  background-color: #4caf50;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}
.btn:hover {
  background-color: #45a049;
}

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  /* レスポンシブ対応 */
  @media (max-width: 768px) {
    .welcome {
      padding: 30px 10px;
    }
    .welcome h1 {
      font-size: 24px;
    }
  }
  </style>
  