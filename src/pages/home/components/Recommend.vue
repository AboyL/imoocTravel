<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommends" :key="item.key">
        <img :src="item.src">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button>查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommends: {
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
.item
  overflow hidden
  display flex
  height 1.9rem
  img
    width 1.7rem
    height 1.7rem
    padding 0.1rem
  .item-info
    flex 1
    padding 0.1rem
    min-width 0
    .item-title
      line-height 0.54rem
      font-size 0.32rem
    .item-desc
      line-height 0.4rem
      color #ccc
      ellipsis()
    button
      $line = 0.3rem
      line-height $line
      background #ff9300
      margin-top .1rem
      padding 0.2rem
      border-radius 0.06rem
      color #fff
</style>
