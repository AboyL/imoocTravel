<template>
  <div class="icons">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(page,index) of pages"
                    :key="index"
                    v-if="icons.length>0">
        <div class="icon"
             v-for="icon of page"
             :key="icon.key">
          <div class="icon-img">
            <img :src="icon.src">
          </div>
          <p class="icon-desc">{{icon.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import http from 'util/http.js'
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOptions: {
        loop: true
      },
      icons: []
    }
  },
  computed: {
    pages () {
      const pages = []
      this.icons.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      console.log(pages)
      return pages
    }
  },
  async mounted () {
    let iconList = await http.request({
      url: 'getIcons'
    })
    this.icons = iconList
  }
}
</script>
<style scoped lang='stylus'>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.icons >>> .swiper-container
  overflow hidden
  height 0
  padding-bottom 50%
.icon
  position relative
  float left
  overflow hidden
  width 25%
  height 0
  padding-bottom 25%
  .icon-img
    position absolute
    top 0
    left 0
    right 0
    bottom 0.44rem
    box-sizing border-box
    padding 0.1rem
    img
      display block
      height 100%
      margin 0 auto
  .icon-desc
    position absolute
    left 0
    right 0
    bottom 0
    height 0.44rem
    line-height 0.44rem
    text-align center
    color $darkTextColor
    ellipsis()
</style>
