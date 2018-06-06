<template>

  <div class="list"
       ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item,key) in cities" :key="key">
        <div class="title border-topbottom">{{key}}</div>
        <ul class="item-list">
          <li class="border-bottom" v-for="innerItem of item" :key="innerItem.id">{{innerItem.name}}</li>
        </ul>
      </div>
    </div>
  </div>

</template>
<script>
import BetterScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hotCities: {
      type: Array,
      required: true
    },
    cities: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
    }
  },
  mounted () {
    this.scroll = new BetterScroll(this.$refs.wrapper)
  }
}
</script>
<style scoped lang='stylus'>
.border-topbottom
  &:before
    border-color #cccccc
  &:after
    border-color #cccccc
.border-bottom
  &:before
    border-color #cccccc
.list
  overflow hidden
  position absolute
  top 1.78rem
  left 0
  right 0
  bottom 0
  .title
    line-height 0.44rem
    background #eeeeee
    padding-left 0.2rem
    color #666666
    font-size 0.26rem
  .button-list
    overflow hidden
    padding 0.1rem 0.6rem 0.1rem 0.1rem
    .button-wrapper
      float left
      width 33.3%
      .button
        margin 0.1rem
        padding 0.1rem 0
        text-align center
        border 1px solid #ccc
        border-radius 0.06rem
  .item-list
    li
      line-height 0.77rem
      padding-left 0.22rem
</style>
