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
      padding: .3rem .2rem;
      &::after {
        content: '';
        position: absolute;
        left: .2rem;
        right: .2rem;
        bottom: 0;
        border-top: 1px solid #eeeeee;
      }
    }
    .img {
      position: absolute;
      img {
        display: block;
        width: 2rem;
        height: 1.5rem;
      }
    }
    .exp {
      position: relative;
      margin: 0 0 0 2.2rem;
    }
    .title {
      position: relative;
      line-height: .3rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #333333;
      font-size: .26rem;
    }
    .def {
      position: relative;
      color: #999999;
      line-height: .4rem;
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
      margin: 0 0 .1rem;
      dd {
        display: inline-block;
        line-height: .4rem;
        margin: 0 .5em 0 0;
        padding: 0 .1rem;
        border-radius: .05rem;
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
