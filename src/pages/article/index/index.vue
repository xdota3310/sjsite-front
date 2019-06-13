<template>
  <div class='main'>
    <el-row class='indexview'>
      <el-col :span='19' :offset='5' class='content'>
        <!-- <el-col
          :span='6'
          v-for='(articles) in this.pageList.resList'
          :key='articles.resList'
          :offset='2'
          @click.native='detailClick(articles)'
        > -->
          <el-card class='box-card'>
            <div slot='header' class='clearfix'>
              <span></span>
            </div>
            <div v-for='type in this.Global.article_types' :key='type' class='text item'>
              <el-collapse v-model='typeValue' @change="handleChange" accordion>
                <el-collapse-item :title='type.label' :name='type.value' style="font-size: 20px">
                  <div v-for='(article) in articles.resList' :key='article'>
                    <span @click="detailClick(article)" style="font-size:12px;cursor:pointer">{{article.title}}</span>
                    <el-divider content-position="left"></el-divider>
                  </div>
                  <el-button type="text">更多....</el-button>
                </el-collapse-item>
              </el-collapse>
            </div>
          </el-card>
      </el-col>
    </el-row>

    <!-- <el-col :span='13' :offset='8'>
      <div class='pageBlock'>
        <el-pagination
          @current-change='handleCurrentChange'
          :current-page='this.pageQuery.pageNum'
          :page-sizes='[15]'
          :page-size='this.pageQuery.pageSize'
          layout='total, sizes, prev, pager, next, jumper'
          :total='this.pageList.sum'
        ></el-pagination>
      </div>
    </el-col> -->
  </div>
</template>

<script>
import { articleApi } from '@/api/api.js'
export default {
  data () {
    return {
      typeValue: '1',
      articles: {
      },
      pageQuery: {
        type: 0,
        pageNum: 1,
        pageSize: 5
      },
      param: {}
    }
  },
  mounted () {
    this.handleChange()
  },
  methods: {
    async handleChange () {
      await this.$set(this.pageQuery, 'type', this.typeValue)
      this.currentType = this.typeValue
      await this.initArticles()
    },
    handleCurrentChange (num) {
      this.$set(this.pageQuery, 'pageNum', num)
      this.initArticles()
    },
    initArticles () {
      articleApi.init(this.pageQuery).then(re => {
        console.log(re)
        this.articles = re.data
      })
    },
    detailClick (article) {
      console.log(article)
      this.$set(this.param, 'id', article.aid)
      this.$router.push({ name: 'detail', query: this.param })
    }
  }
}
</script>

<style scoped>
.article {
  padding-top: 25px;
}
.pageBlock {
  padding-top: 30px;
  padding-bottom: 20px;
}
.el-message {
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

<style>
.el-collapse-item__header{
  color:black !important;
  font-size: 20px;
}
</style>
