<template>
  <div>
    <div class="banner"
         @click="handleShowGarllary">
      <img :src="img">
      <div class="info">
        <p class="title">{{title}}</p>
        <p class="number">
          <i class="iconfont icon-tupian"></i>
          {{number}}
        </p>
      </div>
    </div>
    <common-gallary :imgs="imgs"
                    v-show="showGallary"
                    @clickImg="handleShowGarllary">
    </common-gallary>
  </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'

export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  props: {
    detail: {
      type: Object,
      required: true
    }
  },
  computed: {
    imgs () {
      return this.detail.imgs
    },
    img () {
      return this.detail.imgs[0].src
    },
    title () {
      return this.detail.title
    },
    number () {
      return this.detail.imgs.length
    }
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleShowGarllary () {
      this.showGallary = !this.showGallary
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
    line-height 0.6rem
    color #ffffff
    background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    .title
      flex 1
      font-size 0.32rem
      padding-left 0.3rem
    .number
      margin-top 0.14rem
      padding 0 0.4rem
      height 0.4rem
      line-height 0.4rem
      border-radius 0.2rem
      background rgba(0, 0, 0, 0.8)
      font-size 0.24rem
</style>
