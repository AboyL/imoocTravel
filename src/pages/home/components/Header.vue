<template>
  <div class="header">
    <div class="header-left">
      <div class="back iconfont icon-fanhui"></div>
    </div>
    <div class="header-input">
      <i class="search iconfont icon-sousuo"></i>
      点击搜索
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{currentCity}}
        <i class="iconfont icon-xiasanjiao"></i>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader',
  computed: {
    currentCity () {
      return this.$store.state.city
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped lang='stylus'>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.header
  line-height $headerHeight
  height $headerHeight
  display flex
  color #fff
  background-color $bgColor
  .header-left
    headerLeft()
    .back
      headerLeftIcon()
  .header-input
    $size = 0.64rem
    flex 1
    height $size
    line-height $size
    margin-top 0.12rem
    margin-left 0.2rem
    margin-right 0.2rem
    background-color #FFF
    border-radius 0.1rem
    padding-left 0.1rem
    color #CCC
    .search
      margin-left 0.1rem
  .header-right
    min-width 1.04rem
    padding 0 .2rem
    float right
    text-align center
    color #ffffff
</style>
