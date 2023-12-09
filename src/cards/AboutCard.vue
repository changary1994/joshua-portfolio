<template>
  <div class="about">
    <img src="src\assets\images\josh_portfolio.jpg" class="profile-picture" />
    <div class="card-title-wrapper">
      <h2 class="card-title">Freelance Writer / Journalist</h2>
      <!-- <h1 class="card-title title-2">Journalist</h1> -->
    </div>
    <div class="card-body">
      <p class="paragraph-1">
        I'm Joshua Chu (he/him)! I graduated from Penn State University in 2021 with a Bachelor of
        Arts in Journalism and a minor in Film Studies. I started freelance writing in 2022 and have
        bylines for publications like PC Invasion, Gamepur, Kotaku, IGN, among others.
      </p>
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
.about {
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
  padding: 30px;
}
.profile-picture {
  width: 340px;
  border-radius: 20px;
  box-shadow:
    -10px 0 15px -10px rgba(0, 0, 0, 0.5),
    10px 0 15px -10px rgba(0, 0, 0, 0.5),
    0 20px 20px -15px rgba(0, 0, 0, 0.5);
}

.card-title-wrapper {
  margin-top: 20px;
}
.card-title {
  font-weight: 600 !important;
  width: auto;
}

.card-body {
  margin-top: 15px;
}

.paragraph-2 {
  margin-top: 10px;
}

.button-wrapper {
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
}
.social-icon {
  color: black;
  cursor: pointer;
  text-decoration: none;
}
</style>
