<template>
  <el-row>
    <el-col :span="12"
            :offset="6">
      <h1>{{detail.title}}</h1>
      <span class="time">最后修改时间：{{detail.modifyTime}}</span>
      <div v-html='detail.content'></div>
      <p></p>
    </el-col>
  </el-row>
</template>

<script>
import { articleApi } from '@/api/api.js'
export default {
  data () {
    return {
      article: {},
      detail: {}
    }
  },
  mounted () {
    // this.article = this.$router.currentRoute.query
    // console.log(this.article)
    // articleApi.getArticle(this.article.id).then(re => {
    //   this.detail = re.data
    // })
    this.article = this.$route.params
    console.log(this.article)
    articleApi.getArticle(this.article.aid).then(re => {
      this.detail = re.data
    })
  }
}
</script>

<style scoped>
.time {
  font-size: 10px;
  color: #c2c2c2;
}
</style>
