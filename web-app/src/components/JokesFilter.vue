<template>
  <div class="filter-container">
    <div class="filter-parent">
      <div
        class="filter button-activ"
        :class="['item-' + index]"
        v-for="(item, index) in items"
        :key="item.message"
        @click="() => handleClick(item.id)"
      >
        <div>{{ item.message }}</div>
        <img class="forLastElement" src="../assets/pathCopy7.svg" alt="arrow" />
      </div>
    </div>
  </div>
</template>
       
<script>
export default {
  name: "JokesFilter",
  data() {
    return {
      items: [
        { message: "adult jokes " },
        { message: "dad jokes" },
        { message: "christmas jokes" },
        { message: "job jokes" },
        { message: "birthday jokes" },
        { message: "social jokes" },
        { message: "puns" },
        { message: "view all" }
      ],
      active: null
    };
  },
  methods: {
    handleClick(id) {
      this.active = id;
    }
  }
};
</script>