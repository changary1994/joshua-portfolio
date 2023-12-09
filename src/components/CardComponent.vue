<template>
  <main class="card-container" @click="flipCard" :class="{ flipped: cardState == true }">
    <slot></slot>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let cardState = ref(false)

function flipCard() {
  cardState.value = !cardState.value
}
</script>

<style scoped>
.card-container {
  background-color: rgb(255, 255, 255);
  width: 400px;
  height: 630px;
  border-radius: 20px;
  margin: auto;
  margin-left: 0;
  margin-right: 0;
  box-shadow: 12px 20px 8px -8px gray;
  transition: all 0.5s ease;
  perspective: 1000px;
}

/* .card-container:hover {
  transform: scale(1.05);
} */

.card-container.flipped {
  transform: rotateY(180deg); /* Rotate on hover */
  opacity: 0;
}
</style>
