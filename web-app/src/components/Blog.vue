<template>
  <div class="blog-container">
    <router-link to="/" tag="a" class="back">
      <div class="back">
        <img src="../assets/arrow-left.svg" alt />
      </div>
    </router-link>
    <div class="wrapper">
      <article class="article">
        <div class="blog">
          <div class="flag">
            <div class="dot">&#8226;</div>Social Jokes
          </div>
          <div class="header">
            <div class="header-name">{{joke.title}}</div>
            <div class="line"></div>
            <div class="number">NO #1</div>
          </div>
          <p>{{joke.description}}</p>
        </div>
      </article>
      <aside class="top10">
        <section>
          <h6>THE TOP 10 JOKES THIS WEEK</h6>
          <ul>
            <li>Smoking Joke</li>
            <li>My Boss Joke</li>
            <li>Dirty Millionaire Joke</li>
            <li>The annoying neighbour</li>
            <li>Knock Knock</li>
            <li>Why Tyson lisps</li>
            <li>The drunk Police officer</li>
            <li>My hip dad (Dad joke)</li>
            <li>What not to say in an elevator</li>
          </ul>
        </section>
      </aside>
    </div>
  </div>
</template>

<script>
import BLOGENTRIES from "@/statics/data/blogs.json";

export default {
  name: "Blog",

  data() {
    return {
      joke: BLOGENTRIES.jokes.find(i => i.id === this.$route.query.id)
    };
  },
  methods: {
    getE(next) {
      var nextvArr = next.split("-");
      var nextID = nextvArr[0] + "-" + (parseInt(nextvArr[1], 10) + 1);
      return nextID;
    },
    getPrev(prev) {
      var nextvArr2 = prev.split("-");
      var nextID2 = nextvArr2[0] + "-" + (parseInt(nextvArr2[1], 10) - 1);
      return nextID2;
    }
  }
};
</script>