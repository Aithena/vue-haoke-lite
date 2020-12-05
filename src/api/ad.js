import request from '@/utils/request'

export function getAd (data) {
  return request({
    url: '/ad/list',
    method: 'get',
    params: data
  })
}
