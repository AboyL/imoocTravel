<template>
  <div class="list">
    <div class="item"
         v-for="(item,index) of list"
         :key="index">
      <div class="title">
        <span class="icon"></span>
        {{item.title}}</div>
      <div class="item-children" v-if="item.children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailList',
  props: {
    list: {
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
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.list
  .item
    .icon
      display inline-block
      position relative
      width 0.36rem
      height 0.36rem
      top 0.1rem
      left 0.1rem
      background url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -0.45rem no-repeat // s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
      margin-right 0.1rem
      background-size 0.4rem 3rem
    .title
      line-height 0.8rem
      font-size 0.32rem
      padding 0 0.2rem
    .item-children
      padding 0 .3rem
</style>
