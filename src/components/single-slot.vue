<template>
  <div
      class="slot"
      :class="{ 'slot_border': border }"
      @dragover.prevent
      @drop.prevent="drop"
  >
    <single-item v-if="item.length" :item="item[0]"/>
  </div>
</template>

<script>
import SingleItem from "@/components/Item/single-item";

export default {
  props: ['pos', 'border'],
  components: {SingleItem},
  computed: {
    item() {
      return this.$store.getters.getItemPosition({x: this.pos[0], y: this.pos[1]})
    },
  },
  methods: {
    drop(e) {
      if (this.item.length) return alert('Cлот уже занят. Пожалуйста, выберете другой')

      const itemId = e.dataTransfer.getData('item_id')

      this.$store.commit('setItemBySlot', {
        itemId,
        pos: this.pos
      })
    },
  },
}
</script>

<style lang="scss">
.slot {
  width: 105px;
  height: 100px;

  &_border {
    border-left: 1px solid #4d4d4d;
  }

  &_active {
    cursor: url('../assets/icons/cursor-hand-grab.svg'), auto;
  }
}
</style>
