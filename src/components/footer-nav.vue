<template>
  <div class="wrapper block">
    <div :style="{width:'90%'}">
      <base-input></base-input>
    </div>
    <img src="./../assets/icons/close.svg"/>
  </div>
</template>

<script>
import BaseInput from "@/components/common/base-input";

export default {
  name: "footer-nav",
  components: {BaseInput}
}
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  width: 785px;
  height: 72px;
  padding: 18px;
  align-items: center;
}
</style>