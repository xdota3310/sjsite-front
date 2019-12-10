<template lang="html">
      <div class="home_wrapper"  v-loading="loading2"  element-loading-text="加载中">
        <el-row>
            <el-col :span="6" >
                &nbsp;
            </el-col>
            <el-col :span="12"  class="content">
              <article v-for='article in articles' :key='article'>
                <header>
                  <div>
                    <router-link :to="{ name: 'detail', query: article.aid }" class="home_title">
                      {{article.title}}
                    </router-link>
                  </div>
                  <div>
                  <p class="home_creatAt" >{{article.createTime}}</p>
                  </div>
                </header>
                  <section v-html="article.excerpt" class="home_main"></section>
                <footer>
                  <!-- <router-link class="home_readMore" :to="{path:`/article/${item._id}`}">阅读全文>></router-link> -->
                </footer>
              </article>
            </el-col>
            <el-col :span="6" >
            </el-col>
        </el-row>

      <footer class='loadMore' v-if='loadMoreShow'><el-button type="primary" :loading="loadMoreFlag" @click='loadMore'>{{loadMoreText}}</el-button>
      </footer>
    </div>
</template>

<script>
import { articleApi } from '@/api/api.js'
export default {
  name: 'home',
  data () {
    return {
      loading2: false,
      loadMoreFlag: false,
      loadMoreText: '加载更多',
      loadMoreShow: false,
      typeValue: '1',
      articles: {},
      pageQuery: {
        type: 0,
        pageNum: 1,
        pageSize: 5
      }
    }
  },
  mounted () {
    this.homeInit()
  },
  methods: {
    homeInit () {
      this.initArticles()
    },
    initArticles () {
      articleApi.init(this.pageQuery).then(re => {
        this.articles = re.data
      })
    },
    loadMore () {
      this.loadMoreText = '加载中'
      this.loadMoreFlag = true
      this.page++
      this.loadData(this.page, this.limit)
    },
    loadData (page, limit) {
      //   api
      //     .getArticleLists({ page, limit })
      //     .then(({ data: { code, articleLists, hasNext, hasPrev } }) => {
      //       if (code === 200) {
      //         setTimeout(() => {
      //           this.items = this.items.concat(articleLists)
      //           this.loading2 = false
      //           if (hasNext) {
      //             this.loadMoreShow = true
      //             this.loadMoreFlag = false
      //             this.loadMoreText = '加载更多'
      //           } else {
      //             this.loadMoreShow = false
      //           }
      //         }, 200)
      //       }
      //     })
      // }
    }
  }
}
</script>

<style lang="css" scoped>
h2,
h4 {
  margin: 0;
}
.home_wrapper {
  margin: auto;
  list-style: none;
}
.home_wrapper article {
  padding-bottom: 1rem;
  border-bottom: 1px solid #d2d2d2;
  margin-bottom: 2rem;
}
.home_title {
  display: block;
  font-size: 2.6rem;
  font-weight: 400;
  color: #404040;
  padding: 0.8rem 0;
}
.home_creatAt {
  font-family: "Comic Sans MS", curslve, sans-serif;
  font-size: 1.6rem;
  color: #7f8c8d;
  margin: 0;
}
.home_main {
  font-size: 1.6rem;
  color: #34495e;
  line-height: 1.6em;
  /*padding:0.6rem 0;*/
}
footer {
  text-align: right;
}
.home_readMore {
  font-size: 2rem;
  color: #919191;
  font-weight: 600;
}
.loadMore {
  margin: 4rem 0 0 0;
  display: flex;
  display: webkit-flex;
}
.loadMore button {
  cursor: pointer;
  outline: none;
  padding: 1rem;
  margin: auto;
  border-radius: 0.5rem;
  color: rgba(0, 0, 0, 1);
  border: 1px solid #bfcbd9;
  background-color: #f7f7f7;
}
.home_title:hover {
  opacity: 0.5;
}
.home_readMore:hover {
  opacity: 0.6;
}
@media screen and (max-width: 786px) {
  .home_title {
    font-size: 1.8rem;
    line-height: 1.5em;
  }
  .home_creatAt {
    font-size: 1.4rem;
  }
  .loadMore {
    margin: 3rem 0 0.8rem 0;
  }
}
@media screen and (max-width: 480px) {
  .home_main {
    font-size: 1.4rem;
  }
  .home_readMore {
    font-size: 1.8rem;
  }
}
</style>
