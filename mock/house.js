module.exports = [
  {
    url: '/house/list',
    type: 'get',
    response: _ => {
      return {
        code: 200,
        data: {
          count: 100,
          list: [
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
          ]
        }
      }
    }
  }
]
