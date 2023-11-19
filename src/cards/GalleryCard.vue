<template>
  <div class="about diagonal-box">
    <div class="content">
      <h1 class="card-title">Work.</h1>
      <div class="card-body"><CarouselComponent></CarouselComponent></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CarouselComponent from '@/components/CarouselComponent.vue'
</script>

<style scoped>
.diagonal-box {
  background: rgb(245, 245, 245);
  margin-top: 130px;
  height: 400px;
  transform: skewY(-9deg);
}

.content {
  max-width: 50em;
  height: inherit;
  margin: 0 auto;
  transform: skewY(9deg);
}
.card-title {
  position: absolute;
  top: 60px;
  right: 30px;
}

.card-body {
  height: 600px;
  position: relative;
  top: 140px;
}
</style>
