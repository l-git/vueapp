

var Vue =require('vue')

//import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

//var App=require('@/js/App')

const routes = require('@/router/router-index').routes

const router = new VueRouter({
    routes // short for `routes: routes`
  })

  require('@/css/index.css')


const app = new Vue({
  router
}).$mount('#app')
