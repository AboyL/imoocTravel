import config from 'util/config.const.js'
const baseUrl = config.baseUrl
console.log(config.baseUrl)
var Mock = require('mockjs')
Mock.setup({
  timeout: '200-1000' // 表示响应时间介于 200 和 600 毫秒之间，默认值是'10-100'。
})
Mock.mock(`${baseUrl}/getIcons`, (url) => {
  console.log(url)
  console.log('getIcons')
  return [
    {
      key: '1',
      src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3065823479,3524990849&fm=27&gp=0.jpg',
      desc: '热门景点'
    }, {
      key: '2',
      src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1458290652,3708676058&fm=27&gp=0.jpg',
      desc: 'zz'
    }, {
      key: '3',
      src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1458290652,3708676058&fm=27&gp=0.jpg',
      desc: 'zz'
    }, {
      key: '4',
      src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1458290652,3708676058&fm=27&gp=0.jpg',
      desc: 'zz'
    }, {
      key: '5',
      src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1458290652,3708676058&fm=27&gp=0.jpg',
      desc: 'zz'
    }, {
      key: '6',
      src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1458290652,3708676058&fm=27&gp=0.jpg',
      desc: 'zz'
    }, {
      key: '7',
      src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1458290652,3708676058&fm=27&gp=0.jpg',
      desc: 'zz'
    }, {
      key: '8',
      src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1458290652,3708676058&fm=27&gp=0.jpg',
      desc: 'zz'
    }, {
      key: '9',
      src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1458290652,3708676058&fm=27&gp=0.jpg',
      desc: 'zz'
    }, {
      key: '10',
      src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1458290652,3708676058&fm=27&gp=0.jpg',
      desc: 'zz'
    }
  ]
})
