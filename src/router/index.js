import Vue from 'vue'
import Router from 'vue-router'
import mine from "router/mine"
import cart from "router/cart"
import classify from "router/classify"
import home from "router/home"
import detail from "router/detail"
import login from "router/mine/login"

Vue.use(Router)

export default new Router({
  routes:[
    {
      path:"/",
      redirect:"/home"
    },
    mine,
    cart,
    classify,
    home,
    detail,
    login
  ]
})
