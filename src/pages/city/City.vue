<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities"
               :letter="letter"
               :hotCities="hotCities"></city-list>
    <city-alphabet :cities="cities"
                   @chooseLetter="handleLetter"></city-alphabet>
  </div>
</template>
<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import http from 'util/http.js'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    handleLetter (letter) {
      this.letter = letter
    }
  },
  async mounted () {
    let loadingInstance = this.$loading({
      target: document.body,
      text: '拼命加载中'
    })
    let result = (await http.request({
      url: 'getCities'
    }))
    if (result.ret) {
      const cities = result.data
      this.cities = cities.cities
      this.hotCities = cities.hotCities
    }
    this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
      loadingInstance.close()
    })
  }
}
</script>
<style scoped lang='stylus'>
</style>
