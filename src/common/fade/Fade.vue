<template>
 <div>
   <transition>
     <slot></slot>
   </transition>
</div>
</template>
<script>
export default {
  name: 'CommonFade',
  data () {
    return {
    }
  }
}
</script>
<style scoped lang='stylus'>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
  .v-enter,.v-leave-to
    opacity 0
  .v-enter-active,.v-leave-active
    transition opacity .5s
</style>
