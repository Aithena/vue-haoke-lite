<template>
  <div>
    <div class="topper">
      <div></div>
    </div>
    <div class="filter">
      <div></div>
    </div>
    <div class="lister">
      <dl class="list">
        <dd
          v-for="(item, index) in lister"
          :key="index"
          class="item">
          <router-link
            class="link"
            :to="'/house/detail?id=' + item.id">
            <div class="img">
              <img
                :src="item.imgurl"
                :alt="item.title" />
            </div>
            <div class="exp">
              <h3 class="title">{{item.title}}</h3>
              <dl class="def">
                <dd
                  v-for="(item2, index2) in item.def"
                  :key="index2">
                  <span>{{item2}}</span>
                </dd>
              </dl>
              <dl class="tag">
                <dd
                  v-for="(item2, index2) in item.tag"
                  :key="index2">
                  <span>{{item2}}</span>
                </dd>
              </dl>
              <dl class="fee">
                <dt>{{item.fee}}</dt>
                <dd>元/月</dd>
              </dl>
            </div>
          </router-link>
        </dd>
      </dl>
    </div>
    <div class="loader">
      <span>我是有底线的</span>
    </div>
  </div>
</template>

<script>
import { getHouseList } from '@/api/house'

export default {
  name: 'House',
  components: {},
  data () {
    return {
      lister: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      getHouseList({
        page: 1
      }).then(response => {
        const { list } = response.data
        this.lister = list
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .lister {
    position: relative;
    .link {
      position: relative;
      display: block;
      padding: 15px 10px;
      &::after {
        content: '';
        position: absolute;
        left: 10px;
        right: 10px;
        bottom: 0;
        border-top: 1px solid #eeeeee;
      }
    }
    .img {
      position: absolute;
      img {
        display: block;
        width: 120px;
        height: 90px;
      }
    }
    .exp {
      position: relative;
      margin: 0 0 0 130px;
    }
    .title {
      position: relative;
      line-height: 20px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #333333;
      font-size: 16px;
    }
    .def {
      position: relative;
      color: #999999;
      line-height: 25px;
      dd {
        display: inline-block;
        font-size: small;
        &:nth-child(n+2) {
          &::before {
            content: '/';
          }
        }
      }
    }
    .tag {
      position: relative;
      line-height: 1;
      margin: 0 0 5px;
      dd {
        display: inline-block;
        line-height: 20px;
        margin: 0 .5em 0 0;
        padding: 0 5px;
        border-radius: 3px;
        &:nth-child(1) {
          background: fade(#39becd, 20%);
          color: #39becd;
        }
        &:nth-child(2) {
          background: fade(#3fc28c, 20%);
          color: #3fc28c;
        }
      }
    }
    .fee {
      position: relative;
      line-height: 1;
      color: #ff0000;
      dt {
        display: inline-block;
        font-size: large;
        font-weight: bold;
      }
      dd {
        display: inline-block;
      }
    }
  }
</style>
