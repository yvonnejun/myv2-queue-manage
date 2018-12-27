import Vue from 'vue'
import Router from 'vue-router'

import baseList from '../components/list/base-list'
import expandGrid from '../components/list/expand-grid'
import pagerList from '../components/list/pager-list'
import checkboxList from '../components/list/checkbox-list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'baseList',
      component: baseList
    },
    {
      path: '/base-list',
      name: 'baseList',
      component: baseList
    },
    {
      path: '/pager-list',
      name: 'pagerList',
      component: pagerList
    },
    {
      path: '/checkbox-list',
      name: 'checkboxList',
      component: checkboxList
    }
  ]
})
