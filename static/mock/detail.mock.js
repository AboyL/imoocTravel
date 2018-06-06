import config from 'util/config.const.js'
const baseUrl = config.baseUrl
console.log(config.baseUrl)
var Mock = require('mockjs')
Mock.setup({
  timeout: '200-1000' // 表示响应时间介于 200 和 600 毫秒之间，默认值是'10-100'。
})
Mock.mock(`${baseUrl}/getDetail`, (url) => {
  return {
    title: '请来这里走一走啊',
    price: '38',
    imgs: [
      {
        id: '1',
        src: 'http://img1.qunarzz.com/sight/p0/1710/f5/f575b0f463058f96a3.img.jpg_350x240_7b56e823.jpg'
      }, {
        id: '2',
        src: 'http://img1.qunarzz.com/sight/p0/1803/30/30650dfd9a1959e6a3.water.jpg_350x240_2491ede5.jpg'
      }
    ]
  }
})
