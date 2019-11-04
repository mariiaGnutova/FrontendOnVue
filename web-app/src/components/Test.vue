<template>
<div class="section">
  <Jokes />
  <div v-for="(section, index) in Object.keys(entries)" :key="index" class="group">
        <h2 class="title">{{section}}</h2>
        <div class="section" v-for="entry in entries[section]" :key="entry.id">
          <div class="entry">
            <h3 @click="$router.push({name: entry.id})">
              {{entry.title}}
            </h3>
            <p>{{entry.description}}</p>
          </div>
        </div>
      </div>
  </div>
</template>

  <script>
import Jokes from '@/components/Jokes.vue'
export default {
  name: "Test",
  components: {
      Jokes
  }
};
</script>