import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/RegisterView')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView')
  },
  {
    path: '/user',
    name: 'user',
    meta: { requiresAuth: true },
    component: () => import('@/views/UserView')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



router.beforeEach((to, from, next) => {

    const to_name = to.name
    const requiresAuth = to.meta.requiresAuth || false

    store.dispatch('check_auth')
        .then((response) => {
            // hasLogged
            if(store.getters.isLogged && ['login','register'].indexOf(to_name) > -1){
                return next({ name: 'home' })
            }
            return next()
        })
        .catch((error) => {

            // if need auth
            if(requiresAuth){
                return next({ name: 'login' })
            }  
            next()
        })
})


export default router