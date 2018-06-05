<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom"
          v-for="item of weekends"
          :key="item.key">
        <div class="item-img-wrapper">
          <img :src="item.src">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekends: {
      type: Array,
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
@import '~styles/mixin.styl'
.title
  $line = 0.8rem
  margin-top 0.2rem
  line-height $line
  height $line
  background #eeeeee
  text-indent 0.2rem
.item-img-wrapper
  overflow hidden
  height 0
  padding-bottom 33.9%
  img
    width 100%
.item-info
  padding 0.1rem
  .item-title
    line-height 0.54rem
    font-size 0.32rem
  .item-desc
    line-height 0.4rem
    color #ccc
    ellipsis()
</style>
