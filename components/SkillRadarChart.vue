<template>
    <div class="radar-chart">
      <canvas ref="canvasRef"></canvas>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import {
    Chart,
    RadarController,
    RadialLinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  } from 'chart.js';
  
  Chart.register(
    RadarController,
    RadialLinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  const canvasRef = ref<HTMLCanvasElement | null>(null);
  
  onMounted(() => {
    if (!canvasRef.value) return;
  
    new Chart(canvasRef.value, {
      type: 'radar',
      data: {
        labels: ['HTML/CSS', 'JavaScript', 'Vue.js', 'jQuery', 'WordPress'],
        datasets: [
          {
            label: 'Front-end Skills',
            data: [4, 3, 3, 2, 2],
            backgroundColor: 'rgba(0, 123, 255, 0.2)',
            borderColor: 'rgba(0, 123, 255, 1)',
            pointBackgroundColor: 'rgba(0, 123, 255, 1)',
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            min: 0,
            max: 5,
            ticks: { stepSize: 1 },
          }
        }
      }
    });
  });
  </script>
  
  <style scoped>
.radar-chart {
  width: 100%;
  max-width: 600px;
  height: 400px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  position: relative;
}
canvas {
  width: 100% !important;
  height: 100% !important;
}

  </style>
  