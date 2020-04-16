import Vue from 'vue'
import Router from 'vue-router'
import purchaseList from '../view/purchaseList'


Vue.use(Router)
export default new Router({
  routes: [
    {
      path:'/',
      name:purchaseList,
      component:purchaseList,
    }
  ]
})
