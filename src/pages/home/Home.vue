<template>
  <div class="container">
    <home-header> </home-header>
    <home-swiper></home-swiper>
    <home-icons :icons="icons"></home-icons>
    <home-recommend :recommends="recommends"></home-recommend>
  </div>
</template>
<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue'
import http from 'util/http.js'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend
  },
  data () {
    return {
      icons: [],
      recommends: []
    }
  },
  async mounted () {
    let iconList = await http.request({
      url: 'getIcons'
    })
    let recommends = await http.request({
      url: 'getRecommends'
    })
    this.icons = iconList
    this.recommends = recommends
  }
}
</script>
<style scoped lang='stylus'>
</style>
