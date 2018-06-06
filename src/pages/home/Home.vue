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
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend

  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  data () {
    return {
      icons: [],
      recommends: [],
      weekends: [],
      lastCity: ''
    }
  },
  methods: {
    async getInfo () {
      let loadingInstance = this.$loading({
        target: document.body,
        text: '拼命加载中'
      })
      this.lastCity = this.currentCity
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
      this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
        loadingInstance.close()
      })
    }
  },
  async mounted () {
    this.getInfo()
  },
  activated () {
    if (this.lastCity !== this.currentCity) {
      console.log('改变')
      this.getInfo()
    }
  }
}
</script>
<style scoped lang='stylus'>
</style>
