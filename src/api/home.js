import request from '@/utils/request'

export function getHomeData (data) {
  return request({
    url: '/home/data',
    method: 'get',
    params: data
  })
}
