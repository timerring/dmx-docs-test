<script setup lang="ts">
import { useData } from 'vitepress'

const { isDark } = useData()
</script>

<template>
  <div class="image-container">
    <img
      :src="isDark ? '/logo-dark.png' : '/dmxlogo-light.png'"
      alt="Graph visualization"
      class="hover-image"
    >
    <div class="hover-text">
      kling-text-to-image.md
    </div>
  </div>
</template>

<style scoped>
.image-container {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.hover-image {
  width: 100%;
  height: auto;
  display: block;
}

.hover-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.image-container:hover .hover-text {
  opacity: 1;
}
</style>
