<template>
  <div>
    <el-form :inline="true" style="padding:20px 0 0 10px">
      <el-form-item label="文章标题：" style="width:400px">
        <el-input v-model="article.title" style="width:318px"></el-input>
      </el-form-item>
      <el-form-item label="文章类型：">
        <el-select v-model="article.type" placeholder="请选择">
          <el-option
            v-for="item in types"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item style="float:right">
        <el-button @click="save()">保存</el-button>
      </el-form-item>
      <el-form-item style="float:right">
        <el-button>预览</el-button>
      </el-form-item>
    </el-form>
    <wangeditor :catchData="catchData"></wangeditor>
  </div>
</template>
<script>
import wangeditor from '@/components/wangeditor.vue'
import { articleApi } from '@/api/api.js'
export default {
  data () {
    return {
      article: {
        title: '',
        type: '',
        content: ''
      },
      types: [
        {
          value: '1',
          label: '技术'
        },
        {
          value: '2',
          label: '游戏'
        },
        {
          value: '3',
          label: '生活'
        }
      ]
    }
  },
  methods: {
    catchData (value) {
      this.article.content = value // 在这里接受子组件传过来的参数，赋值给data里的参数
    },
    save () {
      console.log(this.article)
      articleApi.create(this.article).then(re => {
        console.log(re)
      })
    },
    getTypes () {}
  },
  components: {
    wangeditor
  }
}
</script>

<style scoped>
</style>
