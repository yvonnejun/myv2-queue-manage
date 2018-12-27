<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
</template>

<script>
import Vue from 'vue'
export default { 
  name: 'table-grid', // 基础数据表格
  data () {
     /*data和return之间的地方--就是这里可以写一些内部方法供return里面的属性赋值调用*/
    return {
      tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  computed: {
   
  },
  methods: {
    doClick () {

    },
  },
  directives: {

  },
 
  created () {

  },
  mounted () {

  },
  filters: {
    
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS edit to this component only -->
<!-- 所以作为公共组件最好不要写scoped来限制修改样式，因为每个页面不一样，一个公共组件的引用不能满足所有页面定制化样式，还需要在当前页面，所以要放开样式的修改才行 -->
<style lang="less">
@rcolor: red;
</style>
