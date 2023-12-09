<template>
  <div class="about">
    <img src="src\assets\images\josh_portfolio.jpg" class="profile-picture" />
    <div class="card-title-wrapper">
      <h2 class="card-title">Freelance Writer / Journalist</h2>
      <!-- <h1 class="card-title title-2">Journalist</h1> -->
    </div>
    <div class="card-body">
      <p class="paragraph-1">
        I'm Joshua Chu! I graduated from Penn State University in 2021 with a Bachelor of Arts in
        Journalism and a minor in Film Studies. I started freelance writing in 2022 and have bylines
        for publications like PC Invasion, Gamepur, Kotaku, IGN, among others.
      </p>
      <p class="paragraph-2">
        I focus my writing to align with my expertise in the game industry and pop culture overall.
        Passionate about my work and putting words together.
      </p>
    </div>
  </div>
</template>

<style scoped>
.about {
  padding: 30px;
  height: 100%;
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
</style>
