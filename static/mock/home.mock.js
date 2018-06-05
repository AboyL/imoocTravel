import config from 'util/config.const.js'
const baseUrl = config.baseUrl
console.log(config.baseUrl)
var Mock = require('mockjs')
Mock.setup({
  timeout: '200-1000' // 表示响应时间介于 200 和 600 毫秒之间，默认值是'10-100'。
})
Mock.mock(`${baseUrl}/getIcons`, (url) => {
  return [
    {
      key: '1',
      src: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
      desc: '景点门票'
    }, {
      key: '2',
      src: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
      desc: '踏青赏花'
    }, {
      key: '3',
      src: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
      desc: '必游名单'
    }, {
      key: '4',
      src: 'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
      desc: '自然风光'
    }, {
      key: '5',
      src: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
      desc: '一日游'
    }, {
      key: '6',
      src: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
      desc: '动植物园'
    }, {
      key: '7',
      src: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
      desc: '主题乐园'
    }, {
      key: '8',
      src: 'http://img1.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png',
      desc: '湘西凤凰'
    }, {
      key: '9',
      src: 'http://img1.qunarzz.com/piao/fusion/1803/48/cb72b99b71974c02.png',
      desc: '生活休闲'
    }, {
      key: '10',
      src: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
      desc: '全部玩乐'
    }
  ]
})

Mock.mock(`${baseUrl}/getRecommends`, (url) => {
  return [
    {
      key: '1',
      src: 'http://img1.qunarzz.com/sight/p0/1710/f5/f575b0f463058f96a3.img.jpg_200x200_e772e5ef.jpg',
      title: '宁乡古城',
      desc: '美丽的古城'
    }, {
      key: '2',
      src: 'http://img1.qunarzz.com/sight/p0/201403/10/b7aa220089fa8054e6e012bafff63042.jpg_200x200_650160bf.jpg',
      title: '长沙生态动物园',
      desc: '美丽的动物园'
    }
  ]
})

Mock.mock(`${baseUrl}/getWeekends`, (url) => {
  return [
    {
      key: '1',
      src: 'http://img1.qunarzz.com/sight/source/1507/95/bf81a1519705f0.jpg_r_640x214_b29fb0c8.jpg',
      title: '长沙必游玩top10',
      desc: '和我在长沙的街头走一走'
    }, {
      key: '2',
      src: 'http://img1.qunarzz.com/sight/source/1505/89/b2beff9f28b0db.jpg_r_640x214_94143396.jpg',
      title: '玩味童年',
      desc: '幸福之家'
    }
  ]
})
