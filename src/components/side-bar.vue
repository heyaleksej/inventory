<template>
  <div class="wrapper block">
    <img class="wrapper__img" src="../assets/icons/avatar.jpg"/>
    <div> Username</div>
    <div> HealthBar</div>
  </div>
</template>

<script>
export default {
  name: "side-bar"
}
</script>

<style lang="scss">

.wrapper {
  width: 236px;
  height: 500px;
  padding: 18px 14px;

  &__img {
    width: 100%;
    margin-bottom: 20px;
  }
}

</style>