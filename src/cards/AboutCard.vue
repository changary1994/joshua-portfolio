<template>
  <div class="about">
    <img src="src\assets\images\josh_portfolio.jpg" class="profile-picture" />
    <div class="card-title-wrapper">
      <h1 class="card-title">Matt's.</h1>
      <h1 class="card-title title-2">Best.</h1>
      <h1 class="card-title title-3">Friend.</h1>
    </div>
    <p class="card-body">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe unde debitis rem, ipsam vero
      tenetur tempora illo? Deserunt et, consequatur numquam animi aliquid sit nihil harum nulla hic
      repudiandae ab.
    </p>
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
  margin-top: 10px;
}
.card-title {
  font-weight: 500 !important;
  width: 100px;
}

.title-2 {
  position: relative;
  left: 33%;
}

.title-3 {
  position: relative;
  left: 70%;
}

.card-body {
  margin-top: 25px;
}
</style>
