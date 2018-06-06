<template>
  <div>
    <ul class="list">
      <li class="item"
          v-for="(item,key) in cities"
          :key="key">{{key}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: {
      type: Object,
      required: true
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
.list
  display flex
  flex-direction column
  justify-content center
  position absolute
  top 1.76rem
  right 0
  bottom 0
  width 0.4rem
  .item
    text-align center
    color $bgColor
    line-height 0.4rem
</style>
