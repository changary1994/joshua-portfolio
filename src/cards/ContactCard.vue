<template>
  <div class="contact-container-header">
    <div class="diagonal-box"></div>
  </div>
  <h1 class="card-title">Socials.</h1>
  <div class="card-body"></div>
</template>

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
  padding: 20px;
  margin-top: 10px;
}

.card-body {
  background-color: white;
  height: 200px;
  width: 350px;
  overflow: visible;
  margin: auto;
  margin-top: 40px;
  /* box-shadow:
    -5px 0 5px -5px rgba(0, 0, 0, 0.5),
    5px 0 5px -5px rgba(0, 0, 0, 0.5),
    0 5px 5px -5px rgba(0, 0, 0, 0.5); */
  box-shadow:
    -10px 0 15px -10px rgba(0, 0, 0, 0.3),
    10px 0 15px -10px rgba(0, 0, 0, 0.3),
    0 20px 20px -15px rgba(0, 0, 0, 0.3);
}
</style>
