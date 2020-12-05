module.exports = [
  {
    url: '/ad/list',
    type: 'get',
    response: _ => {
      return {
        code: 200,
        data: 'success'
      }
    }
  }
]
