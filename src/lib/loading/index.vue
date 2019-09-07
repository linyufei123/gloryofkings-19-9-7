<template>
  <div class="loader">
      <div class="loading">
        <h2 class="title">
            C
            <span class="color1">o</span>ff
            <span class="color2">e</span>
            <span class="color3">e</span>
            </h2>
            <div class="cup">
            <div class="handle"></div>
            </div>
      </div>
    
  </div>
</template>

<script>
export default {

};
</script>

<style>
.loader {
   background-color: #f1f1f1;
    bottom: 0;
    left: 0;
    overflow: hidden;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 99999;
}
.loading{
    position: relative;
    left:-15%;
    top:40%;
}
.title {
  font-family: cursive;
  font-size: 50px;
  color: white;
  position: absolute;
  top: 55%;
  left: 55%;
}

.color1 {
  color: #5ad1cd;
}

.color2 {
  color: #84cdfa;
}

.color3 {
  color: #f07e6e;
}

.cup {
  height: 140px;
  width: 180px;
  border: 6px solid #f1f1f1;
  position: absolute;
  top: 40%;
  left: 40%;
  border-radius: 0px 0px 70px 70px;
  background: url("https://img.freepik.com/free-photo/full-frame-shot-brown-leather-background_23-2147951253.jpg?size=626&ext=jpg");
  box-shadow: 0px 0px 0px 6px white;
  background-repeat: repeat-x;
  background-position: 0px 140px;
  animation: fill 2.5s infinite;
}

@keyframes fill {
  0% {
    background-position: 0px 140px;
  }
  20% {
    background-position: -450px 100px;
  }
  40% {
    background-position: -900px 50px;
  }
  80% {
    background-position: -1350px -40px;
  }
}

.handle {
  height: 70px;
  width: 40px;
  background-color: transparent;
  border: 6px solid white;
  position: relative;
  left: 186px;
  top: 2px;
  border-radius: 0px 25px 80px 0px;
}

</style>