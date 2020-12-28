<template>
  <div class="data">
    <dl class="data-list">
      <dd
        v-for="[label, value] in demoMap"
        :key="label"
        class="data-item">
        <span>{{label}}</span>
        <span>：</span>
        <span>{{value.name}}</span>
        <span> - </span>
        <span>{{value.sex}}</span>
      </dd>
    </dl>

    <dl class="data-list">
      <dd
        v-for="[label, value] in infoMap"
        :key="value"
        class="data-item">
        <span>{{label}}</span>
        <span>：</span>
        <span>{{value}}</span>
      </dd>
    </dl>

    <table
      class="table"
      border="1">
      <tr>
        <th
          v-for="([label], key) in tableMaps.length > 0 ? tableMaps[0] : []"
          :key="key">
          {{label}}
        </th>
      </tr>
      <tr
        v-for="(map, index) in tableMaps"
        :key="index">
        <td
          v-for="[,value] in map"
          :key="value">{{value}}</td>
      </tr>
    </table>

    <div
      class="so-list"
      v-if="soMap.length > 0">
      <div
        class="so-item"
        v-for="[key, {id, label}] in soMap" :key="key">
        <span>{{id}}</span>
        <span>{{label}}</span>
      </div>
      <button @click="pushTable">添加标签9</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      infoMap: {},
      tableMaps: {},
      soMap: {},
      demoMap: {}
    }
  },
  created () {
    // this.dataMap()
    // this.moreType()
    // this.initSoMap()
    this.initDemoMap()
  },
  methods: {
    initDemoMap () {
      const map = new Map()
      map.set(20200001, {
        name: '李思思',
        sex: '女'
      })
      map.set(20200002, {
        name: '李鬼',
        sex: '男'
      })
      map.set(20200003, {
        name: '刘凤',
        sex: '女'
      })
      map.set(20200004, {
        name: '刘三',
        sex: '男'
      })
      console.log('map ==> ', map)
      this.demoMap = map
    },
    initSoMap () {
      const map = new Map()
      for (let index = 0; index < 10; index++) {
        map.set(index, {
          id: index,
          label: `标签${index}`
        })
      }
      this.soMap = map
    },
    pushTable () {
      this.soMap.set(9, {
        id: 9,
        label: '标签10'
      })
      this.soMap = new Map(this.soMap)
    },
    dataMap () {
      const info = {
        name: '王林',
        sex: '男',
        age: '18',
        phone: '13800001111',
        address: '中国',
        duty: '总经理'
      }
      const mapKeys = [
        '姓名',
        '性别',
        '年龄',
        '电话',
        '家庭地址',
        '身份'
      ]
      const result = new Map()
      let i = 0
      for (const key in info) {
        result.set(mapKeys[i], info[key])
        i++
      }
      console.log('result ==> ', result)
      this.infoMap = result
    },
    moreType () {
      const list = [
        {
          name: '张三',
          custom: [
            { label: '返校', value: '否' },
            { label: '发烧', value: '否' },
            { label: '游玩', value: '否' },
            { label: '援武', value: '是' }
          ]
        },
        {
          name: '李四',
          custom: [
            { label: '返校', value: '否' },
            { label: '发烧', value: '否' },
            { label: '游玩', value: '否' },
            { label: '援武', value: '是' }
          ]
        },
        {
          name: '王五',
          custom: [
            { label: '返校', value: '否' },
            { label: '发烧', value: '否' },
            { label: '游玩', value: '否' },
            { label: '援武', value: '是' }
          ]
        }
      ]
      const tableMap = []
      list.forEach(el => {
        const map = new Map()
        map.set('姓名', el.name)
        el.custom.forEach(child => {
          map.set(child.label, child.value)
        })
        tableMap.push(map)
      })
      console.log('result ==> ', tableMap)
      this.tableMaps = tableMap
    }
  }
}
</script>

<style lang="less" scoped>
  .data {
    position: relative;
    padding: .2rem;
    background: #f5f5f5;
  }

  .data-list {
    position: relative;
    .data-item {
      background: #ffffff;
      margin: 0 0 1px;
      line-height: .3rem;
      padding: .2rem;
    }
  }

  .data-list {
    position: relative;
    .data-item {
      background: #ffffff;
      margin: 0 0 1px;
      line-height: .3rem;
      padding: .2rem;
    }
  }

</style>
