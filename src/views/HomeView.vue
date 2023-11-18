<template>
  <div class="card-container-wrapper">
    <CardComponent><AboutCard></AboutCard></CardComponent>
    <CardComponent><GalleryCard></GalleryCard></CardComponent>
    <CardComponent><ContactCard></ContactCard></CardComponent>
  </div>
</template>

<script setup lang="ts">
import CardComponent from '@/components/CardComponent.vue'
import AboutCard from '@/cards/AboutCard.vue'
import GalleryCard from '@/cards/GalleryCard.vue'
import ContactCard from '@/cards/ContactCard.vue'
</script>

<style scoped>
.card-container-wrapper {
  height: 98vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}
</style>
