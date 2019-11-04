// {joke.id === selected.id ? 'active' : ''}


<template>
  <div class="sections">
    <Jokes-Filter />
    <div class="jokes-container">
      <div v-for="joke in jokes" :key="joke.id" class="group">
        <div class="section">
          <div class="joke">
            <h3>{{joke.title}}</h3>
            <p>{{joke.description}}</p>

            <router-link :to="{ path: 'joke', query: { id: joke.id }}">see stats</router-link>
          </div>
        </div>
      </div>
    </div>
    <button class="view-more">view more</button>
  </div>
</template>

<script>
import JokesFilter from "@/components/JokesFilter.vue";
import BLOGENTRIES from "@/statics/data/blogs.json";

export default {
  name: "home",
  components: {
    JokesFilter
  },
  data() {
    return {
      jokes: BLOGENTRIES.jokes
    };
  }
};
</script>