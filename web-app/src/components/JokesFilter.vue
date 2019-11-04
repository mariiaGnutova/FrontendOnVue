<template>
  <div class="filter-container">
    <div class="filter-parent">
      <div
        class="filter"
        :class="['item-' + index]"
        v-for="(item, index) in items"
        :key="item.message"
        @click="() => handleClick(item.id)"
      >
        <div>{{ item.message }}</div>
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
      this.active = id
    }
  }
};


</script>
// v-attr manipulates an element’s attributes, 
//v-repeat clones an element based on an Array, v-on attaches event listeners