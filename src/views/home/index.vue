<template>
  <div class="">
    <el-carousel class="slider">
      <el-carousel-item
        v-for="(item, index) in advList"
        :key="index">
        <img :src="item.imgurl" alt="" />
      </el-carousel-item>
    </el-carousel>

    <div class="magic">
      <dl class="list">
        <dd
          class="item"
          v-for="(item, index) in magicList"
          :key="index">
          <router-link
            class="link"
            :to="item.url">
            <img :src="item.icon" alt="" />
            <h3>{{item.title}}</h3>
          </router-link>
        </dd>
      </dl>
    </div>

    <div class="group">
      <div class="head">
        <h2>租房小组</h2>
        <router-link
          class="mo"
          to="/">更多</router-link>
      </div>
      <dl class="list">
        <dd
          class="item"
          v-for="(item, index) in groupList"
          :key="index">
          <router-link
            class="link"
            :to="item.url">
            <img :src="item.icon" alt="" />
            <h3>{{item.title}}</h3>
            <p>{{item.desc}}</p>
          </router-link>
        </dd>
      </dl>
    </div>

    <div class="news">
      <div class="head">
        <h2>最新资讯</h2>
      </div>
      <dl class="list">
        <dd
          class="item"
          v-for="(item, index) in newsList"
          :key="index">
          <router-link
            class="link"
            :to="'/house/detail?id=' + item.id">
            <img :src="item.imgsrc" alt="" />
            <div class="exp">
              <h3>{{item.tags}}|{{item.title}}</h3>
              <dl>
                <dd>{{item.source}}</dd>
                <dd>{{item.date}}</dd>
              </dl>
            </div>
          </router-link>
        </dd>
      </dl>
    </div>

    <data-map></data-map>
  </div>
</template>

<script>
import { getHomeData } from '@/api/home'
import dataMap from './components/data-map/'

export default {
  name: 'Home',
  components: {
    dataMap
  },
  data () {
    return {
      advList: [],
      magicList: [],
      groupList: [],
      newsList: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      getHomeData({}).then(response => {
        const { advList, groupList, magicList, newsList } = response.data
        this.advList = advList
        this.groupList = groupList
        this.magicList = magicList
        this.newsList = newsList
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .slider {
    position: relative;
    /deep/ .el-carousel__container {
      height: 200px;
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .magic {
    position: relative;
    background: #ffffff;
    .list {
      position: relative;
      padding: 15px 0;
      overflow: hidden;
    }
    .item {
      float: left;
      width: 25%;
    }
    .link {
      display: block;
      text-align: center;
      &:active {
        opacity: .8;
      }
      img {
        width: 50px;
        height: 50px;
      }
      h3 {
        line-height: 20px;
        font-weight: normal;
      }
    }
  }

  .group {
    position: relative;
    background: #f6f5f6;
    .head {
      position: relative;
      padding: 0 10px;
      margin: 0 0 -10px;
      h2 {
        line-height: 50px;
        color: #333333;
      }
      .mo {
        position: absolute;
        right: 10px;
        top: 10px;
        color: #999999;
        line-height: 30px;
      }
    }
    .list {
      position: relative;
      padding: 5px;
      overflow: hidden;
    }
    .item {
      float: left;
      width: 50%;
    }
    .link {
      display: block;
      position: relative;
      background: #ffffff;
      height: 70px;
      margin: 5px;
      padding: 10px;
      &:active {
        opacity: .8;
      }
      img {
        position: absolute;
        right: 10px;
        top: 10px;
        width: 50px;
        height: 50px;
      }
      h3 {
        line-height: 25px;
        color: #333333;
      }
      p {
        line-height: 20px;
        color: #999999;
      }
    }
  }

  .news {
    position: relative;
    background: #ffffff;
    .head {
      position: relative;
      padding: 0 10px;
      margin: 0 0 -10px;
      h2 {
        line-height: 50px;
        color: #333333;
      }
    }
    .list {
      position: relative;
      overflow: hidden;
    }
    .item {
      position: relative;
    }
    .link {
      display: block;
      position: relative;
      background: #ffffff;
      padding: 10px;
      overflow: hidden;
      &:active {
        opacity: .8;
      }
      img {
        float: left;
        display: block;
        width: 80px;
        height: 60px;
      }
      .exp {
        margin: 0 0 0 90px;
      }
      h3 {
        height: 40px;
        line-height: 20px;
        color: #333333;
      }
      dd {
        line-height: 20px;
        color: #999999;
        display: inline-block;
        vertical-align: middle;
        margin: 0 1em 0 0;
      }
    }
  }
</style>
