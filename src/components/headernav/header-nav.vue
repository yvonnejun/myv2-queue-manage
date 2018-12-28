<template>
  <div class="top-wrap">
    <div class="logo"></div>
  </div>
</template>

<script>
export default { 
  name: 'header-nav',
  data () {
     /*data和return之间的地方--就是这里可以写一些内部方法供return里面的属性赋值调用*/
    return {
      
    }
  },
  methods: {
    
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
  height: 66px;
  line-height: 66px;
  background: #042861 url(../../assets/img/headernav/bg.png) no-repeat;
  background-size: 100% 100%;
  color: #fff;
  .logo {
    float: left;
    width: 503px;
    height: 66px;
    margin-left: 15px;
    font-size: 24px;
  }
  .logo:before {
    content: '';
    display: inline-block;
    width: 503px;
    height: 55px;
    background: url(../../assets/img/headernav/logo_back.png) no-repeat;
    vertical-align: middle;
    position: relative;
    top: -2px;
  }
}

</style>
