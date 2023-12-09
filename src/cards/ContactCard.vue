<template>
  <div class="contact-container-header">
    <div class="diagonal-box"></div>
  </div>
  <div class="card-title-wrapper">
    <h2 class="card-title">Socials</h2>
  </div>
  <div class="card-body">
    <div class="button-wrapper">
      <font-awesome-icon
        class="social-icon"
        icon="fa-brands fa-twitter"
        size="3x"
        :bounce="hoverTwitter"
        @mouseover="handleHover('twitter')"
        @mouseleave="handleUnhover('twitter')"
      ></font-awesome-icon>
      <font-awesome-icon
        class="social-icon"
        icon="fa-brands fa-linkedin"
        size="3x"
        :bounce="hoverLinkedin"
        @mouseover="handleHover('linkedin')"
        @mouseleave="handleUnhover('linkedin')"
      ></font-awesome-icon>
      <font-awesome-icon
        class="social-icon"
        icon="fa-solid fa-envelope"
        size="3x"
        :bounce="hoverEmail"
        @mouseover="handleHover('email')"
        @mouseleave="handleUnhover('email')"
      ></font-awesome-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const hoverTwitter = ref(false)
const hoverLinkedin = ref(false)
const hoverEmail = ref(false)

const handleHover = (val: string) => {
  switch (val) {
    case 'twitter':
      hoverTwitter.value = true
      break
    case 'linkedin':
      hoverLinkedin.value = true
      break
    case 'email':
      hoverEmail.value = true
      break
    default:
      break
  }
}

const handleUnhover = (val: string) => {
  switch (val) {
    case 'twitter':
      hoverTwitter.value = false
      break
    case 'linkedin':
      hoverLinkedin.value = false
      break
    case 'email':
      hoverEmail.value = false
      break
    default:
      break
  }
}
</script>
<style scoped>
.contact-container-header {
  overflow: hidden;
  height: 180px;
  border-radius: 20px;
}
.diagonal-box {
  background: rgb(245, 245, 245);
  margin-top: -50px;
  margin-bottom: 20px;
  height: 180px;
  transform: skewY(-9deg);
}

.card-title {
  /* padding: 20px; */
  margin-left: 30px;
  margin-top: 10px;
}

.card-body {
  background-color: white;
  height: 200px;
  width: 350px;
  overflow: visible;
  margin: auto;
  margin-top: 40px;
  box-shadow:
    -10px 0 15px -10px rgba(0, 0, 0, 0.3),
    10px 0 15px -10px rgba(0, 0, 0, 0.3),
    0 20px 20px -15px rgba(0, 0, 0, 0.3);
}

.button-wrapper {
  display: flex;
  justify-content: space-evenly;
  position: relative;
  top: 35%;
}
.social-icon {
  cursor: pointer;
}
</style>
