<template>
  <div class="container">
    <home-header :title="headerTitle">
    </home-header>
  </div>
</template>
<script>
import HomeHeader from './components/Header.vue'
export default {
  name: 'Home',
  components: {
    HomeHeader
  },
  data () {
    return {
      headerTitle: ''
    }
  }
}
</script>
<style scoped lang='stylus'>
</style>
