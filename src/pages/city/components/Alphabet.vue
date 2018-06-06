<template>
  <div>
    <ul class="list">
      <li class="item"
          v-for="item in letters"
          @click="handleClick"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
          :ref="item"
          :key="item">{{item}}</li>
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
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('chooseLetter', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('chooseLetter', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
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
