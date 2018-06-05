<template>
  <div class="search">
    <input type="text"
           placeholder="请输入城市名称">
  </div>
</template>
<script>
export default {
  name: 'CitySearch',
  data () {
    return {
    }
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
    border-radius .1rem
    padding 0.1rem
    $inputHeight = 0.62rem
    width 100%
    height $inputHeight
    line-height $inputHeight
    text-align center
    color #666
</style>
