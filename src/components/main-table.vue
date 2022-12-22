<template>
  <div class="table block">
    <div
        class="table__row"
        v-for="(row, y) in grid"
        :key="y"
        :class="{ table__row_border: y !== 4 }"
    >
      <single-slot
          v-for="(slot, x) in row"
          :key="x"
          :border="x !== 0"
          :pos="[x,y]"
      />
    </div>
  </div>
</template>

<script>
import SingleSlot from "@/components/single-slot";

export default {
  name: "main-table",
  components: {SingleSlot},
  computed: {
    grid() {
      return this.$store.getters['getAllCells']
    },
  },
}
</script>

<style lang="scss">
.table {
  position: relative;
  width: 525px;
  grid-area: inventory;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &__row {
    display: flex;

    &_border {
      border-bottom: 1px solid #4d4d4d;
    }
  }
}
</style>