<template>
  <div class="header">
    <div class="header-left">
      <div class="back iconfont icon-fanhui"></div>
    </div>
    <div class="header-input">
      <i class="search iconfont icon-sousuo"></i>
      點擊搜索
    </div>
    <div class="header-right">
      城市
      <i class="iconfont icon-xiasanjiao"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
    }
  }
}
</script>
<style scoped lang='stylus'>
@import '~styles/varibles.styl'
.header
  $headerLine = 0.86rem
  line-height $headerLine
  height $headerLine
  display flex
  color #fff
  background-color $bgColor
  .header-left
    width 0.64rem
    float left
    .back
      font-size .6rem
      text-align center
      &:before
        vertical-align: text-top;
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
    padding-left .1rem
    color #CCC
    .search
      margin-left .1rem
  .header-right
    width 1.24rem
    float right
    text-align center
</style>
