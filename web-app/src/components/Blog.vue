<template>
  <div class="blog">
      <h1>{{joke.title}}</h1>
      <p>{{joke.description}}</p>
    <router-link to="/" tag="a" class="back">&laquo; Back</router-link>
  </div>
</template>

<script>
import BLOGENTRIES from '@/statics/data/blogs.json'

export default {
  name: "Blog",
  data() {
      return {
          joke: BLOGENTRIES.jokes.find(i => i.id === this.$route.query.id)
      }
  }
};
</script>