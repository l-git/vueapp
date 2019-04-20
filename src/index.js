

var Vue =require('vue')

//import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


//var App=require('@/js/App')

const routes = require('@/router/router-index').routes

const router = new VueRouter({
    routes // short for `routes: routes`
  })

  require('@/css/index.css')


const app = new Vue({
  router
}).$mount('#app')
