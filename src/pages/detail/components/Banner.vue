<template>
  <div class="banner">
    <img src="//img1.qunarzz.com/sight/p0/1710/f5/f575b0f463058f96a3.img.jpg_600x330_b4ab7f0d.jpg"
         alt="">
    <div class="info">
      <p class="title">大連</p>
      <p class="number">
        <i class="iconfont icon-tupian"></i>
           39
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailBanner',
  data () {
    return {
    }
  }
}
</script>
<style scoped lang='stylus'>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 55%
  img
    width 100%
  .info
    display flex
    position absolute
    bottom 0
    left 0
    right 0
    line-height .6rem
    color #ffffff
    background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8))
    .title
      flex 1
      font-size .32rem
      padding-left .3rem
    .number
      margin-top .14rem
      padding 0 .4rem
      height .4rem
      line-height .4rem
      border-radius .2rem
      background rgba(0,0,0,.8)
      font-size .24rem
</style>
