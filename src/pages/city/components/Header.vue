<template>
  <div class="header">
    城市选择
    <div class="header-left">
      <div class="back iconfont icon-fanhui" @click="goHome"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CityHeader',
  data () {
    return {
    }
  },
  methods: {
    goHome () {
      this.$router.push({name: 'Home'})
    }
  }
}
</script>
<style scoped lang='stylus'>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.header
  overflow hidden
  height $headerHeight
  line-height $headerHeight
  text-align center
  color #ffffff
  background $bgColor
  .header-left
    headerLeft()
    .back
      headerLeftIcon()
</style>
