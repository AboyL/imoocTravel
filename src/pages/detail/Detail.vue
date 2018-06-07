<template>
  <div>
    <detail-banner :detail="detail"
                   v-if="detail">
    </detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list" v-if="list"></detail-list>
    </div>
  </div>
</template>
<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import http from 'util/http.js'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      detail: null,
      list: null
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
    this.list = detail.list
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
