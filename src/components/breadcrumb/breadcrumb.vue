<template>
  <div class="breadcrumb-wrap">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default { 
  name: 'breadcrumb',
  data () {
     /*data和return之间的地方--就是这里可以写一些内部方法供return里面的属性赋值调用*/
    return {
      
    }
  },
  methods: {
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
    },
  },
  created () {

  },
  mounted () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@rcolor: red;
.breadcrumb-wrap {
  width: 100%;
  height: 24px;
  position: relative;
  top: 30px;
  left: 215px;
}

</style>
