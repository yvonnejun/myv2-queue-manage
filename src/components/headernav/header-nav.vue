<template>
  <div class="top-wrap">
    <el-menu 
      :default-active="activeIndex" 
      mode="horizontal" 
      background-color="#f2f2f2" 
      text-color="#666666" 
      active-text-color="#1E33A8" 
      class="el-menu-demo" 
      @select="handleSelect"
      router="true">
      <el-submenu index="1">
        <template slot="title">列表</template>
        <el-menu-item index="base-list">
          基础列表
        </el-menu-item>
        <el-menu-item index="pager-list">
          带分页列表
        </el-menu-item>
        <el-menu-item index="state-list">
          带状态列表
        </el-menu-item>
        <el-menu-item index="checkbox-list">
          多选列表
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default { 
  name: 'header-nav',
  data () {
     /*data和return之间的地方--就是这里可以写一些内部方法供return里面的属性赋值调用*/
    return {
      activeIndex: '1'
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
.top-wrap {
  width: 100%;
}

</style>
