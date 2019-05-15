<template>
  <el-card class="box-card" >
    <el-row class="row">
      <el-col :span='6' :offset="5">
        <img src="@/assets/github.png" style="vertical-align: middle;" @click="indexPage()">
      </el-col>
      <el-col :span='1' :offset="6" class="content">
        <el-button type="text" @click="listClick()">归档</el-button>
      </el-col>
      <el-col :span='1' class="content">
        <el-button type="text" @click="linkClick()">友链</el-button>
      </el-col>
      <el-col :span='1' class="content">
        <el-button type="text" @click="aboutClick()">关于</el-button>
      </el-col>
      <el-col :span="3" :offset="1" class="content">
        <img src="@/assets/github.png" style="vertical-align: middle;" @click="loginPage()">
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  name: 'headerview',
  data () {
    return {

    }
  },
  methods: {
    listClick () {
      const h = this.$createElement
      this.$notify({
        title: 'test',
        message: h('i', {style: 'color: teal'}, '归档')
      })
    },
    indexPage () {
      // this.$router.push({name: 'index'})
    },
    loginPage () {
      // this.$router.push({name: 'login'})
    },
    linkClick () {

    },
    aboutClick () {

    }
  }
}
</script>

<style scoped>
  .row {
    height: 50px;
  }
  .box-card {
    width: 100%;
    height: 80px ;
  }
  .content {
    line-height:3em;
  }
  .el-button--text {
    color:black;
    font-size: 1em;
    background: 0 0;
    padding-left: 0;
    padding-right: 0;
  }
  .el-card {
    border: 0px solid #ebeef5 !important;
    background-color: #fff;
    color: #303133;
    -webkit-transition: .3s;
    transition: .3s;
}
.el-card__body {
    padding: 20px 20px 0px 20px;
}

</style>
