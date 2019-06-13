<template>
  <div class="container">
    <router-view class="app-container" />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
template{
  background-image:url('./assets/loginBackgroud.jpg');
  background-repeat:no-repeat;
  background-attachment:fixed
}
.container{
  position: relative;
  margin: 0 auto;
  height: auto !important;
  height: 100vh;
  min-height: 100vh;
}

body {
  display: block;
  margin: 0px;
}
.w-e-text-container {
    border: 1px solid #ccc;
    border-top: none;
    height: calc(100vh - 180px) !important;
    z-index: 1 !important;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
