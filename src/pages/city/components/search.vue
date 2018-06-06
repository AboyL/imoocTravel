<template>
  <div>
    <div class="search">
      <input v-model="keyword"
             type="text"
             placeholder="请输入城市名称">
    </div>
    <div class="search-contetn"
         ref="search"
         v-show="keyword">
      <ul>
        <li class="search-item border-bottom"
            v-for="item of list"
            :key="item.id">{{item.name}}
        </li>
        <li class="search-item border-bottom"
            v-show="hasNoData">沒有找到数据
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      list: [],
      keyword: '',
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.includes(this.keyword) || value.name.includes(this.keyword)) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>
<style scoped lang='stylus'>
@import '~styles/varibles.styl'
.search
  height 0.72rem
  padding 0.1rem
  background $bgColor
  input
    box-sizing border-box
    border-radius 0.1rem
    padding 0.1rem
    $inputHeight = 0.62rem
    width 100%
    height $inputHeight
    line-height $inputHeight
    text-align center
    color #666
.search-contetn
  overflow hidden
  z-index 1
  position absolute
  top 1.78rem
  left 0
  right 0
  bottom 0
  background #eee
  .search-item
    line-height 0.62rem
    padding-left 0.2rem
    background #ffffff
    color #666666
</style>
