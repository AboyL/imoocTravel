<template>
  <div>
    <router-link tag="div"
                 to="/"
                 class="header-abs"
                 v-show="showAbs">
      <div class="back iconfont icon-fanhui"></div>
    </router-link>
    <router-link to="/"
                 v-show="!showAbs"
                 tag="div"
                 :style="opacityStyle"
                 class="header-fixed">
      <div class="header-left">
        <div class="back iconfont icon-fanhui"></div>
      </div>
      景点详情
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {}
    }
  },
  methods: {
    handleScroll () {
      const top = (document.documentElement.scrollTop)
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {opacity}
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style scoped lang='stylus'>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.header-abs
  position absolute
  left 0.2rem
  top 0.2rem
  width 0.8rem
  height 0.8rem
  line-height 0.8rem
  text-align center
  border-radius 50%
  background rgba(0, 0, 0, 0.8)
  .back
    color #ffffff
    font-size 1rem
    position absolute
    absoulteCenter()
    top 0.5rem
.header-fixed
  position fixed
  z-index 999
  top 0
  left 0
  right 0
  line-height $headerHeight
  height $headerHeight
  color #fff
  background-color $bgColor
  text-align center
  .header-left
    headerLeft()
    color #ffffff
    .back
      headerLeftIcon()
</style>
