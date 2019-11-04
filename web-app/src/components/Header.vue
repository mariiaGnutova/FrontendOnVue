
<template>
  <header>
    <div id="navi">
      <Navi />
    </div>

    <div class="header-image">
      <img
        class="head-image"
        src="../assets/bitmap/bitmap.jpg"
        srcset="../assets/bitmap/bitmap@2x.jpg 2x, ../assets/bitmap/bitmap@3x.jpg 3x"
      />
      <div class="centerOnImage">
        <h1 class="first-line">{{ message}}</h1>
        <h3 class="second-line">{{ message2 }}</h3>
        <div class="search-wrapper web">
          <input class="search" type="text" placeholder="How can we make you laugh today?" />
          <img src="../assets/bitmap/search-copy.svg" id="input_img" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Navi from "./Navi.vue";

export default {
  name: "Header",
  data() {
    return {
      message: "The Joke Bible",
      message2: "Daily Laughs for you and yours"
    };
  },
  components: {
    Navi
  }
};
</script>

