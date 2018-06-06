<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hotCities="hotCities"></city-list>
    <city-alphabet :cities="cities"></city-alphabet>
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
      hotCities: []
    }
  },
  async mounted () {
    let result = (await http.request({
      url: 'getCities'
    }))
    if (result.ret) {
      const cities = result.data
      this.cities = cities.cities
      this.hotCities = cities.hotCities
    }
  }
}
</script>
<style scoped lang='stylus'>
</style>
