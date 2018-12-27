<template>
  <div id="app">
    <headerNav></headerNav>
    <leftNav></leftNav>
    <breadcrumb></breadcrumb>
    <div class="main-wrap">
      <router-view />
    </div>
  </div>
</template>

<script>
import headerNav from './components/headernav/header-nav.vue'
import leftNav from './components/leftnav/left-nav.vue'
import breadcrumb from './components/breadcrumb/breadcrumb.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    headerNav,
    leftNav,
    breadcrumb,
  },
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main-wrap {
  float:left; 
  width: calc(100% - 235px); 
  margin-left: 215px; 
  position: relative; 
  margin-top: 200px;
}
</style>
