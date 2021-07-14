<template>
  <img alt="Vue logo" src="./assets/logo.png" />  <br>

  <router-link to="/">Home</router-link>
  <br>
  <router-link to="/about"> about</router-link>
    <br>
  <!-- <router-link to="/profile">profile </router-link>  <br> -->
    <router-link to="/profile/raj"> Raj profile </router-link>  <br>

  <router-link to="/profile/sam"> sam profile </router-link>  <br>

  <router-link to="/helloworld">helloworld </router-link>
  <br>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
