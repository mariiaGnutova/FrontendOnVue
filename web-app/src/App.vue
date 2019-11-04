  
<template>
  <div id="app">
    <Header />
    <div>
      <router-view/>
    </div>
    <Footer />
  </div>
</template>

<script>
  import Footer from './components/Footer.vue';
  import Header from './components/Header.vue';

export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>>
