import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
/// <reference types="node" />

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})