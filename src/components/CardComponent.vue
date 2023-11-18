<template>
  <main class="card-container"><slot></slot></main>
</template>

<script setup lang="ts"></script>

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
}
</style>
