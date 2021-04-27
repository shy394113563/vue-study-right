import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/layout/layout.vue'
import Login from '../views/login/login.vue'
import Users from '../views/user/user.vue'
import Roles from '../views/role/role.vue'
import GoodsCate from '../views/goods/goodsCate.vue'
import GoodsList from '../views/goods/goodsList.vue'
import Welcome from '../views/home/home.vue'

import store from '../store'

Vue.use(VueRouter)

const userRule = { path: '/users', component: Users }
const roleRule = { path: '/roles', component: Roles }
const goodsRule = { path: '/goods', component: GoodsList }
const categoryRule = { path: '/categories', component: GoodsCate }

const ruleMapping = {
  users: userRule,
  roles: roleRule,
  goods: goodsRule,
  categories: categoryRule,
}

const routes = [
  {
    path: '',
    redirect: 'login',
  },
  { path: '/login', component: Login },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [{ path: '/welcome', component: Welcome }],
  },
]

const router = new VueRouter({
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const tokenStr = sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export function initDynamicRoutes() {
  const currentRoutes = router.options.routes
  const rightList = store.state.rightsList
  rightList.forEach((item) => {
    item.children.forEach((item) => {
      currentRoutes[2].children.push(ruleMapping[item.path])
    })
  })
  router.addRoutes(currentRoutes)
  console.log(3333333, router)
}

export default router
