<template>
  <div>
    <detail-banner :detail="detail"
                   v-if="detail">
    </detail-banner>
    <detail-header></detail-header>
  </div>
</template>
<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import http from 'util/http.js'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  },
  data () {
    return {
      detail: null
    }
  },
  async mounted () {
    let loadingInstance = this.$loading({
      target: document.body,
      text: '拼命加载中'
    })
    let detail = await http.request({
      url: 'getDetail'
    })
    this.detail = detail
    this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
      loadingInstance.close()
    })
  }
}
</script>
<style scoped lang='stylus'>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
</style>
