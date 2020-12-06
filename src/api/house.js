import request from '@/utils/request'

export function getHouseList (data) {
  return request({
    url: '/house/list',
    method: 'get',
    params: data
  })
}

export function getHouseDetail (data) {
  return request({
    url: '/house/detail',
    method: 'get',
    params: data
  })
}
