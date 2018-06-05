<template>
  <div class="container">
    <home-header> </home-header>
    <home-swiper></home-swiper>
    <home-icons :icons="icons"></home-icons>
    <home-recommend :recommends="recommends"></home-recommend>
    <home-weekend :weekends="weekends"></home-weekend>
  </div>
</template>
<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue'
import HomeWeekend from './components/Weekend.vue'

import http from 'util/http.js'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend

  },
  data () {
    return {
      icons: [],
      recommends: [],
      weekends: []
    }
  },
  async mounted () {
    let iconList = await http.request({
      url: 'getIcons'
    })
    let recommends = await http.request({
      url: 'getRecommends'
    })
    let weekends = await http.request({
      url: 'getWeekends'
    })
    this.icons = iconList
    this.recommends = recommends
    this.weekends = weekends
  }
}
</script>
<style scoped lang='stylus'>
</style>
