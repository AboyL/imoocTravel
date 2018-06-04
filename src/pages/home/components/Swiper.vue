<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="img of imgList"
                    :key="img.id">
        <img :src="img.src"
             alt="img">
      </swiper-slide>
      <div class="swiper-pagination"
           slot="pagination">
      </div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      imgList: [
        {
          id: 1,
          src: require('img/beijing.jpg')
        }, {
          id: 2,
          src: require('img/shanghai.jpg')
        }, {
          id: 3,
          src: require('img/chongqing.jpg')
        }
      ]
    }
  }
}
</script>
<style scoped lang='stylus'>
.wrapper >>> .swiper-pagination
  height .6rem
.wrapper
  overflow hidden
  width 100%
  height 0
  padding-bottom 50%
  img
    width 100%
</style>
