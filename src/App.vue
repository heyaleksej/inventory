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

<style lang="scss">

.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}


</style>
