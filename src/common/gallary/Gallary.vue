<template>
  <div class="container">
    <div class="wrapper"  @click="clickImg">
      <swiper :options="swiperOption">
        <swiper-slide v-for="img of imgs"
                      :key="img.id">
          <img :src="img.src"
               alt="img">
        </swiper-slide>
        <div class="swiper-pagination"
             slot="pagination">
        </div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    clickImg () {
      console.log('clickImg')
      this.$emit('clickImg')
    }
  }
}
</script>
<style scoped lang='stylus'>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.container >>> .swiper-container
  overflow inherit
  z-index 2
.container >>> .swiper-pagination
  height 0.6rem
  color #ffffff
  bottom -1rem
.container
  display flex
  justify-content center
  flex-direction column
  position absolute
  left 0
  top 0
  bottom 0
  right 0
  background #000000
  z-index 1
  .wrapper
    height 0
    width 100%
    padding-bottom 68%
    background #ffffff
    img
      width 100%
</style>
