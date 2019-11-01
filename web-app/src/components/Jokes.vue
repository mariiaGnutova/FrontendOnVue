<template>
  <div class="filter-container">
    <div class="filter-parent">
      <div
        class="filter"
        :class="['item-' + index]"
        v-for="(item, index) in items"
        v-bind:key="item"
      >
        <div>{{ item.message }}</div>
      </div>
      
    </div>
  </div>
</template>

       
<script>
export default {
  name: "Jokes",
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
      ]
    };
  }
};


// export const SetStyleBasis = { 
//   name: 'setStyleBasis',
//   data(){
//     var widthofClient = document.body.clientWidth;
//     var filterElements = document.getElementsByClassName('filter');
//     var widestElement = 0;
    
//     for (let element of filterElements){
//       if( element.clientWidth > widestElement){
//         widestElement = element.clientWidth;
//       }
//     }
//     let flexBasis = Math.floor(widthofClient* 0.8/(widestElement + 50));

//     var newFlexBasis = 80/flexBasis;
//     for (let element of filterElements){
//        element.style.flexBasis = newFlexBasis + '%';

//     }

//   }
//  }

</script>
// v-attr manipulates an element’s attributes, 
//v-repeat clones an element based on an Array, v-on attaches event listeners