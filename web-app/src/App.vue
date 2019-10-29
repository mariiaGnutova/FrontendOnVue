<template>
<div>
  <div id="header">
    <Header/>
  </div>

  <div id="footer">
    <Footer/>
  </div>

  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'header',
  components: {
    Header
  }

}

export const FooterComponent = { 
  name: 'footer',
  components: {
    Footer
  }
}

</script>

