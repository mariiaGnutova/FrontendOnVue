// {joke.id === selected.id ? 'active' : ''}


<template>
  <div class="sections">
    <Jokes-Filter />
    <hr />
    <div class="flag">Social Jokes</div>
    <div class="jokes-container">
      <div v-for="joke in jokes" :key="joke.id" class="group">
        <div class="section">
          <div class="joke">
            <h3>
              <img src="../assets/green-light-copy-4.svg" alt="green-light-copy" />
              {{joke.title}}
            </h3>
            <p>{{joke.description}}</p>

            <router-link
              :to="{ path: 'joke', query: { id: joke.id }}"
              @click.native="() => scrollToTop()"
            >
              see stats
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="14"
                viewBox="0 0 21 14"
              >
                <path
                  fill="#D0BA93"
                  fill-rule="nonzero"
                  d="M13.392.268a.952.952 0 0 0-.007 1.342l4.435 4.44H.94a.945.945 0 0 0-.94.948c0 .525.423.948.94.948h16.872l-4.434 4.44a.96.96 0 0 0 .007 1.341.945.945 0 0 0 1.335-.007l6.01-6.051c.08-.088.146-.183.197-.3a.95.95 0 0 0-.197-1.028L14.72.29a.93.93 0 0 0-1.328-.022z"
                />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <button class="view-more button-activ">
      view more
      <img src="../assets/pathCopy7.svg" alt="arrow" />
    </button>
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
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
};
</script>