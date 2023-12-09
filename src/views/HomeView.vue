<template>
  <div class="card-container-wrapper">
    <AboutCard class="about-card"></AboutCard>
    <GalleryCard></GalleryCard>
  </div>
</template>

<script setup lang="ts">
import AboutCard from '@/cards/AboutCard.vue'
import GalleryCard from '@/cards/GalleryCard.vue'
</script>

<style scoped>
.card-container-wrapper {
  height: 98vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-left: 100px;
}
</style>
