<template>
  <el-footer>
  <el-card class="box-card">
    <el-row>
      <el-col :span='6' :offset="5">
        <img src="static/github.png" style="vertical-align: middle;">
        <span style="font-size:10px">&nbsp;&nbsp;Copyright©2018 - {{this.year}} sjblog All Rights Reserved</span>
      </el-col>
      <el-col :span='4' :offset="6">
        <span style="font-size:10px;line-height:3em">Email: xsj1012@foxmail.com</span>
      </el-col>
    </el-row>
  </el-card>
  </el-footer>
</template>
<script>
export default {
  name: 'footerview',
  data () {
    return {
      year: ''
    }
  },
  mounted () {
    this.getYear()
  },
  methods: {
    getYear () {
      var date = new Date()
      this.year = date.getFullYear()
    }
  }
}
</script>
<style scoped>
.el-card {
    border: 0px solid #ebeef5 !important;
    background-color: #fff;
    color: #303133;
    -webkit-transition: .3s;
    transition: .3s;
}
.box-card{
  position: absolute;
  width: 100%;
  height: 65px ;
  bottom: 0;
}
.el-card__body {
    padding: 20px 20px 0px 20px;
}
.el-footer {
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -ms-flex-negative: 0;
    flex-shrink: 0;
}
</style>
