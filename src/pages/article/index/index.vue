<template>
<div class="main">
  <el-row class='indexview'>
    <el-col :span="13" :offset="5" class="content">
      <el-col :span="6" v-for="(articles) in this.pageList.resList" :key="articles.resList" :offset="2" @click.native="detailClick(articles)">
        <div class="article" >
          <el-card  :body-style="{ padding: '20px' }">
            <div style="padding: 14px;">
              <span>{{articles.title}}</span>
              <div class="bottom clearfix">
                <time class="time" style="font-size:10px">{{ articles.createTime }}</time>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-col >
  </el-row>

  <el-col :span="13" :offset="8">
      <div class="pageBlock">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="this.pageQuery.pageNum"
          :page-sizes="[15]"
          :page-size="this.pageQuery.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total=this.pageList.sum>
        </el-pagination>
        </div>
    </el-col>
</div>
</template>

<script>
import { articleApi } from '@/api/api.js'
export default {
  data () {
    return {
      pageList: {
      },
      pageQuery: {
        pageSize: 15,
        pageNum: 1
      },
      param: {
      }
    }
  },
  mounted () {
    this.initArticles()
  },
  methods: {
    handleCurrentChange (num) {
      this.$set(this.pageQuery, 'pageNum', num)
      this.initArticles()
    },
    initArticles () {
      articleApi.init(this.pageQuery).then(re => {
        console.log(re)
        this.pageList = re.data
      })
    },
    detailClick (article) {
      console.log(article)
      this.$set(this.param, 'id', article.aid)
      this.$router.push({name: 'detail', query: this.param})
    }
  }
}
</script>

<style scoped>
.article{
  padding-top: 25px;
}
.pageBlock{
  padding-top: 30px;
  padding-bottom: 20px;
}
.el-card, .el-message {
    border-radius: 4px;
    overflow: hidden;
    max-height: 20%;
    min-height: 20%;
}
/* .indexview {
  background-color: #F7F7F7;

} */
.main {
  height: calc(100%-145px);
}

</style>
