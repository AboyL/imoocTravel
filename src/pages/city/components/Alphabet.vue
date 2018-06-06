<template>
 <div>
   <ul class="list">
     <li class="item">A</li>
     <li class="item">B</li>
     <li class="item">C</li>
   </ul>
</div>
</template>
<script>
export default {
  name: 'CityAlphabet',
  data () {
    return {
    }
  }
}
</script>
<style scoped lang='stylus'>
@import '~styles/varibles.styl'
.list
  display flex
  flex-direction column
  justify-content center
  position absolute
  top 1.76rem
  right 0
  bottom 0
  width .4rem
  .item
    text-align center
    color $bgColor
    line-height .4rem
</style>
