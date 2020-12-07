<template>
  <div>
    <div class="detial">
      <h1>{{detail.title}}</h1>
      <div class="article">{{detail.content}}</div>
    </div>
  </div>
</template>

<script>
import { getHouseDetail } from '@/api/house'

export default {
  name: 'HouseDetail',
  components: {},
  data () {
    return {
      id: 0,
      detail: {}
    }
  },
  created () {
    if (this.$route.query.id) {
      this.id = this.$route.query.id
      this.getData()
    }
  },
  methods: {
    getData () {
      getHouseDetail({
        id: this.id
      }).then(response => {
        const { data } = response
        delete data.id
        this.detail = data
        console.log(data)
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .detial {
    padding: 10px;
    h1 {
      line-height: 1.5;
      margin: 0 0 1em;
      font-size: larger;
    }
    .article {
      line-height: 1.5;
    }
  }
</style>
