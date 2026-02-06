<template>
    <div class="contact">
      <h1>お問い合わせ</h1>
      <form @submit.prevent="submitForm" class="contact-form">
        <div class="form-group">
          <label for="name">お名前</label>
          <input type="text" id="name" v-model="name" required />
        </div>
        <div class="form-group">
          <label for="email">メールアドレス</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="message">メッセージ</label>
          <textarea id="message" v-model="message" required></textarea>
        </div>
        <button type="submit">送信</button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  export default defineComponent({
    name: 'Contact',
    setup() {
      const name = ref('');
      const email = ref('');
      const message = ref('');
      const submitForm = async () => {
        try {
          const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: name.value, email: email.value, message: message.value }),
          });
          if (response.ok) {
            alert('送信が完了しました');
            name.value = '';
            email.value = '';
            message.value = '';
          } else {
            alert('送信エラー');
          }
        } catch (error) {
          console.error('Error submitting form', error);
          alert('エラーが発生しました');
        }
      };
      return { name, email, message, submitForm };
    }
  });
  </script>
  
  <style scoped>
  .contact {
    padding: 40px 20px;
    text-align: center;
  }
  
  .contact-form {
    max-width: 600px;
    margin: 0 auto;
    text-align: left;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
  }
  
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  /* レスポンシブ対応 */
  @media (max-width: 768px) {
    .contact-form {
      padding: 0 10px;
    }
  }
  </style>
  