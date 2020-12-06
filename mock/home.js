module.exports = [
  {
    url: '/home/data',
    type: 'get',
    response: _ => {
      return {
        code: 200,
        data: {
          advList: [
            {
              id: 1001,
              imgurl: require('@/assets/home/a1.png'),
              title: ''
            },
            {
              id: 1002,
              imgurl: require('@/assets/home/a2.png'),
              title: ''
            },
            {
              id: 1003,
              imgurl: require('@/assets/home/a3.png'),
              title: ''
            }
          ],
          magicList: [
            {
              icon: require('@/assets/home/b1.png'),
              title: '整租',
              url: ''
            },
            {
              icon: require('@/assets/home/b2.png'),
              title: '合租',
              url: ''
            },
            {
              icon: require('@/assets/home/b3.png'),
              title: '地图找房',
              url: ''
            },
            {
              icon: require('@/assets/home/b4.png'),
              title: '发布房源',
              url: ''
            }
          ],
          groupList: [
            {
              icon: require('@/assets/home/c1.png'),
              title: '家住回龙观',
              desc: '归属的感觉',
              url: ''
            },
            {
              icon: require('@/assets/home/c2.png'),
              title: '宜居四五环',
              desc: '大都市生活',
              url: ''
            },
            {
              icon: require('@/assets/home/c3.png'),
              title: '喧嚣三里屯',
              desc: '繁华的背后',
              url: ''
            },
            {
              icon: require('@/assets/home/c4.png'),
              title: '比邻十号线',
              desc: '地铁心连心',
              url: ''
            }
          ],
          newsList: [
            {
              id: 1,
              imgsrc: require('@/assets/house/a1.png'),
              title: '安贞西里 三室一厅 河间的古雅别院',
              tags: '置业选择',
              source: '新华网',
              date: '2020-06-04'
            },
            {
              id: 2,
              imgsrc: require('@/assets/house/a2.png'),
              title: '大理王宫 苍山洱海间的古雅别院',
              tags: '置业选择',
              source: '腾讯网',
              date: '2020-06-03'
            },
            {
              id: 3,
              imgsrc: require('@/assets/house/a3.png'),
              title: '安居小屋 花园洋房 清新别野',
              tags: '置业选择',
              source: '安居网',
              date: '2020-06-01'
            }
          ]
        }
      }
    }
  }
]
