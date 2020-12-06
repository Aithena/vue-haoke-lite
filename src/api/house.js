import request from '@/utils/request'

export function getHouseList (data) {
  return request({
    url: '/house/list',
    method: 'get',
    params: data
  })
}
