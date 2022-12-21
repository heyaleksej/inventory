<template>
  <div class="app">
    <div class="container">
      <side-bar></side-bar>
      <main-table></main-table>
    </div>
    <footer-nav></footer-nav>
  </div>
</template>

<script>

import footerNav from "@/components/footer-nav";
import mainTable from "@/components/main-table";
import sideBar from "@/components/side-bar";

export default {
  name: 'App',
  components: {
    footerNav,
    mainTable,
    sideBar
  }
}
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
