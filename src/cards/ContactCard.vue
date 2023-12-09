<template>
  <div class="contact-container-header">
    <div class="diagonal-box"></div>
  </div>
  <div class="card-title-wrapper">
    <h2 class="card-title">Socials</h2>
  </div>
  <div class="card-body">
    <div class="button-wrapper">
      <a class="social-icon" href="https://twitter.com/josh_chu74" target="_blank">
        <font-awesome-icon
          icon="fa-brands fa-twitter"
          size="3x"
          :bounce="hoverTwitter"
          @mouseover="handleHover('twitter')"
          @mouseleave="handleUnhover('twitter')"
        ></font-awesome-icon>
      </a>
      <a
        class="social-icon"
        href="https://www.linkedin.com/in/joshua-chu-845a79162/"
        target="_blank"
      >
        <font-awesome-icon
          icon="fa-brands fa-linkedin"
          size="3x"
          :bounce="hoverLinkedin"
          @mouseover="handleHover('linkedin')"
          @mouseleave="handleUnhover('linkedin')"
        ></font-awesome-icon>
      </a>
      <a class="social-icon" @click="copyTextToClipboard">
        <font-awesome-icon
          icon="fa-solid fa-envelope"
          size="3x"
          :bounce="hoverEmail"
          @mouseover="handleHover('email')"
          @mouseleave="handleUnhover('email')"
        ></font-awesome-icon
      ></a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { toast } from 'vue3-toastify'

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

const textToCopy = ref('joshua.chu74@gmail.com')

const copyTextToClipboard = () => {
  // Access the text value using .value for ref variables
  const text = textToCopy.value

  // Create a temporary input element
  const tempInput = document.createElement('textarea')
  tempInput.value = text

  // Append the input element to the body
  document.body.appendChild(tempInput)

  // Select the text inside the input element
  tempInput.select()

  // Execute copy command
  document.execCommand('copy')

  // Remove the temporary input element
  document.body.removeChild(tempInput)

  // Optionally, provide feedback to the user
  toast('Copied to clipboard: ' + text)
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
  color: black;
  cursor: pointer;
  text-decoration: none;
}
</style>
